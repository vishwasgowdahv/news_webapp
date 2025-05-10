import React from "react";
import loadingimg from "../assets/loadingimg.gif";

export default function Loading() {
  return (
    <div className="w-[90vw] flex justify-center items-center">
      <img src={loadingimg} alt="" />
    </div>
  );
}
