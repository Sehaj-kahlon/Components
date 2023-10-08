"use client";
import React, { useState } from "react";
//use state hook
const page = () => {
  const [marks, setmarks] = useState(42);
  const [toggle, settoggle] = useState(true);
  return (
    <html lang="en">
      <body>
        <h1 className="text-4xl">marks are {marks}</h1>
        <button
          className="text-xl"
          onClick={() => {
            setmarks(48);
          }}
        >
          update
        </button>
      </body>
    </html>
  );
};

export default page;
