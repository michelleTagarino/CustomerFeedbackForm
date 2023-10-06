'use client';

import React from 'react';
import { useComments } from './useComments';
import APP_CONSTANTS from '../shared/constants/app-constants';
import Comments from './comments/Comments';
import LineChart from './chart/Chart';
import Loading from '../loading';

export default function Feedback() {
  const { data, loading } = useComments(APP_CONSTANTS.BASE_API_URL_MOCK);

  return (
    <main>
      <h1>Feedback</h1>

      {loading && <Loading />}

      <LineChart comments={data} />

      <Comments comments={data} loading={loading} />
    </main>
  );
}
