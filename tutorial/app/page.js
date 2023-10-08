"use client";
"use client";
import React, { useState } from "react";
import { Header } from "@/Components/Header";
//use state hook
const page = () => {
  // const [marks, setmarks] = useState(42);
  const [User, setUser] = useState("Sehaj");
  const [Surname, setSurname] = useState("Kahlon");
  return (
    <html lang="en">
      <body>
        {/* <h1 className="text-4xl">marks are {marks}</h1>
        <button
          className="text-xl"
          onClick={() => {
            setmarks(48);
          }}
        >
          update
        </button> */}
        <Header FirstName={User} LastName={Surname} />
      </body>
    </html>
  );
};

export default page;
