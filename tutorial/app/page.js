"use client";
import React, { useState } from "react";
//use state hook
const page = () => {
  let [marks, setmarks] = useState(42);
  return (
    <>
      <h1>marks are {marks}</h1>
      <button
        onClick={() => {
          setmarks(46);
        }}
      >
        update
      </button>
    </>
  );
};

export default page;
