'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement as decrementRedux,
  increment as incrementRedux,
} from '@/store/slices/counterSlice';

function useBlog() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementRedux());
  };

  const decrement = () => {
    setCount(count - 1);
    dispatch(decrementRedux());
  };

  return { count, increment, decrement };
}

export default useBlog;
