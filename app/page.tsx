"use client";

import { Inter } from "next/font/google";
import Head from "next/head";

import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@/components/editor"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main className="flex justify-end h-screen w-4/5 end-0">
      
    <div className="text-[#000] rounded-lg w-full">
      <Editor />
      </div>
      </main>
    </>
  );
}
