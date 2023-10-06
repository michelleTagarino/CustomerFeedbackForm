'use client';

import React from 'react';
import Comment from '../../../app/shared/interfaces/comment';

const getTime = (date?: Date) => {
  return date != null ? new Date(date).getTime() : 0;
}

const sortByDate = (a: Comment, b: Comment) => {
  return getTime(b.datePosted) - getTime(a.datePosted);
};

/**
 * Lists the comments of all submitted reviews
 */
export default function Comments(props: { comments: Comment[], loading: boolean }) {
  const { comments, loading } = props;
  const sortedComments = comments.sort(sortByDate);

  return (
    <>
      {!loading && <h2>Latest comments</h2>}

      {!loading && sortedComments.map((comment: Comment) => (
        <div key={comment.id} className="card my-5">
          <h3>{comment.email}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}

      {!loading && sortedComments.length === 0 && (
        <p className="text-center">No customer feedback</p>
      )}
    </>
  );
}