"use client"

import Draggable from "react-draggable";
import React from "react";

export default function Home() {
  return (
    <>
      <Draggable>
        <div className="bg-[#FFF] w-24 h-12">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Draggable>
    </>
  );
}
