"use client";

import { publishCounter } from "./actions";

export default function TestPage() {
  return (
    <>
      <p>Counter value: 0</p>
      <button
        onClick={() => {
          publishCounter();
        }}
      >
        Test
      </button>
    </>
  );
}
