'use client';

import React from 'react';
import { useComments } from './useComments';
import Comments from './comments/Comments';
import LineChart from './chart/Chart';

export default function Feedback() {
  const { data, loading } = useComments('http://localhost:4000/comments');

  return (
    <>
      <LineChart comments={data} />

      <Comments
        comments={data}
        loading={loading}
      />
    </>
  );
}
