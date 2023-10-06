'use client';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  rating: z.string().min(1, 'Rating is required'),
  comment: z.string().min(1, 'Feedback is required'),
});
type FormSchemaType = z.infer<typeof formSchema>;

export default function FeedbackForm() {
  const { push } = useRouter();
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmitForm: SubmitHandler<FormSchemaType> = async (data)  => {
    const result = formSchema.safeParse(data);
    if (result.success) {
      const res = await fetch("http://localhost:4000/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        push('/feedback');
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="container">
          <div className="container--left">

            {/* Name input */}
            <label>
              <input
                data-cy="name-field"
                type="text"
                placeholder="Name"
                {...register("name")}
                className={errors?.name && "error"}
              />
              {<span className={errors?.name && "error"}>* Required</span>}
            </label>

            {/* Email input */}
            <label>
              <input
                data-cy="email-field"
                {...register("email")}
                placeholder="Email address"
                className={errors?.email && "error"}
              />
              {<span className={errors?.email && "error"}>* Required</span>}
            </label>

            {/* Ratings field */}
            <select
              className={errors?.rating && "error"}
              {...register("rating")}
            >
              <option value="">Rate your experience</option>
              <option value="1">Terrible</option>
              <option value="2">Poor</option>
              <option value="3">Average</option>
              <option value="4">Very Good</option>
              <option value="5">Excellent</option>
            </select>
            <label>
              {<span className={errors?.rating && "error"}>* Required</span>}
            </label>
          </div>

          {/* Feedback field */}
          <label className="container--right">
            <textarea
              data-cy="comment-field"
              {...register("comment")}
              placeholder="Tell us more..."
              className={errors?.comment && "error"}
            />
            {<span className={errors?.comment && "error"}>* Required</span>}
            </label>
        </div>

        <button
          type="submit"
          className="btn-primary"
          data-cy="submit-button"
          disabled={isSubmitting}
        >
          <span>Submit</span>
        </button>
      </form>
    </FormProvider>
  );
}
