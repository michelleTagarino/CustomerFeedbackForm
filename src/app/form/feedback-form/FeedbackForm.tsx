'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function FeedbackForm() {
  const { push } = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', rating: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const onFieldChange = (e: { target: { name: any; value: any; }; }) => {
    const nextFormState = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(nextFormState);
  };

  const onSubmitForm = async (event: any)  => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch('http://localhost:4000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      push('/feedback');
      setIsLoading(false);
    } catch (e)  {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="container">
        <div className="container--left">
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={onFieldChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={onFieldChange}
            />
          </label>
          <select>
            <option value="">Rate your experience</option>
            <option value="1">Terrible</option>
            <option value="2">Poor</option>
            <option value="3">Average</option>
            <option value="4">Very Good</option>
            <option value="5">Excellent</option>
          </select>
        </div>
        <label className="container--right">
          <textarea
            name="comment"
            placeholder="Share your feedback"
            value={formData.comment}
            onChange={onFieldChange}
          />
        </label>
      </div>

      <button className="btn-primary" disabled={isLoading}>
        <span>Submit feedback</span>
      </button>
    </form>
  );
}
