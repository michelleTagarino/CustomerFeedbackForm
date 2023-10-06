'use client';

import React from 'react';
import Comment from '../../shared/interfaces/comment';
import Loading from '../../../app/loading';

export default function Comments(props: { comments: Comment[], loading: boolean }) {
  const { comments, loading } = props;

  return (
    <>
      {loading && <Loading />}

      {!loading && <h2>Latest comments</h2>}

      {!loading && comments.map((comment: Comment) => (
        <div key={comment.id} className="card my-5">
          <h3>{comment.email}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}

      {!loading && comments.length === 0 && (
        <p className="text-center">No customer feedback</p>
      )}
    </>
  );
}