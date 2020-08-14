import React, { useEffect } from 'react';
import Questions from '../components/Questions/Questions';
import { useState } from 'react';

export default function Quiz() {
  const [question, setQuestion] = useState({});
  useEffect(() => {}, []);
  return (
    <>
      <Questions question={} />
    </>
  );
}
