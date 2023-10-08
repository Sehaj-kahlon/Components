"use client";
import "./globals.css";
import React, { useState } from "react";
import { Header } from "@/Components/Header";

export default function RootLayout({ children }) {
  const [User, setUser] = useState("Sehaj");
  const [Surname, setSurname] = useState("Kahlon");
  return (
    <html lang="en">
      <body>
        <Header FirstName={User} LastName={Surname} />
        {children}
      </body>
    </html>
  );
}
