"use client";

import { Inter } from "next/font/google";
import Head from "next/head";

import dynamic from "next/dynamic";

const ReactQuillEditor = dynamic(
  () => import("@/components/react-quill-editor"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main className="flex justify-end m-24 h-50">
    <div className="bg-[#FFF] text-[#000] rounded-lg w-4/5">
      <ReactQuillEditor />
      </div>
      </main>
    </>
  );
}
