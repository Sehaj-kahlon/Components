import React from "react";
import Link from "next/Link";
export const Header = (props) => {
  return (
    <div className="h-16 px-5 flex bg-black items-center justify-between text-white">
      <h2>{props.FirstName + " " + props.LastName}</h2>
      <div className="flex gap-8">
        <Link href="/About">About</Link>
        <Link href="/Blog">Blog</Link>
        <h4>Career</h4>
        <h4>Account</h4>
      </div>
    </div>
  );
};
