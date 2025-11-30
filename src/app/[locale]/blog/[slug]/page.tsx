'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addByAmount, decrement, increment } from '@/store/slices/counterSlice';
import { RootState } from '@/store/store';

export default function BlogDetail() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center flex-col justify-center min-h-screen w-full">
      <p>Blog Detail Page</p>

      <p>Count: {count}</p>

      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors"
          onClick={() => dispatch(addByAmount(5))}
        >
          Add 5
        </button>
      </div>
    </div>
  );
}
