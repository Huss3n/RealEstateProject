import React from "react";

export default function Addlisting() {
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Add a listing</h1>
      {/* use drop downs */}
      <form>
        <p className="text-lg mt-6 font-semibold">Sell or Rent</p>
        <div className="">
          <button type="button" id="type" value="sell" onclick={onChange} className={`px-7 py-3 fonrt-sm `}>
            Sell
          </button>
        </div>
      </form>
    </main>
  );
}
