import React from "react";

function Counter() {
  return (
    <main className="bg-zinc-950 min-h-screen flex justify-center items-center text-white">
      <div className="border border-white/20 w-150 h-100 rounded-xl flex flex-col justify-evenly items-center">
        <h1 className="text-9xl">0</h1>
        <article className="flex justify-between items-center">
          <button className="p-2 cursor-pointer bg-amber-400 rounded mx-5">
            Decrement
          </button>
          <button className="p-2 cursor-pointer bg-red-400 rounded mx-5">
            Reset
          </button>
          <button className="p-2 cursor-pointer bg-green-400 rounded mx-5">
            Increment
          </button>
        </article>
        <form className="flex justify-between items-center">
          <input
            type="text"
            className="text-2xl bg-zinc-800 rounded mx-2 h-full"
          />
          <button
            type="button"
            className="bg-blue-600 cursor-pointer p-2 rounded mx-2"
          >
            Increment by Amount
          </button>
        </form>
      </div>
    </main>
  );
}

export default Counter;
