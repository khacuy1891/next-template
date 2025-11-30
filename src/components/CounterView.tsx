'use client';

import useBlog from '@/hooks/useBlog';
import { useSelector } from 'react-redux';

export default function CounterView() {
  const { count, increment, decrement } = useBlog();
  const countStore = useSelector((state: any) => state.counter.value);

  return (
    <div className="flex gap-4">
      <button className="cursor-pointer" onClick={decrement}>
        Decrement
      </button>
      <p>{count}</p>
      <p>{countStore}</p>
      <button className="cursor-pointer" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
