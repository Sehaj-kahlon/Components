import React from "react";

export const Header = (props) => {
  return (
    <div className="h-16 px-5 flex bg-black items-center justify-between text-white">
      <h2>{props.FirstName + " "+ props.LastName}</h2>
      <div className="flex gap-8">
        <h4>About</h4>
        <h4>Blog</h4>
        <h4>Career</h4>
        <h4>Account</h4>
      </div>
    </div>
  );
};
