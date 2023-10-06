'use client';

import React from 'react';
import { useComments } from './useComments';
import Comments from './comments/Comments';

export default function Feedback() {
  const { data, loading } = useComments('http://localhost:4000/comments');

  return (
    <Comments
      comments={data}
      loading={loading}
    />
  );
}
