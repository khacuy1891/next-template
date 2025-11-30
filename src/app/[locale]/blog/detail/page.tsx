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

      <button title="Increment" onClick={() => dispatch(increment())} />
      <button title="Decrement" onClick={() => dispatch(decrement())} />
      <button title="Add 5" onClick={() => dispatch(addByAmount(5))} />
    </div>
  );
}
