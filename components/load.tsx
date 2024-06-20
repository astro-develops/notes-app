import Quill from "quill";
const Delta = Quill.import("delta");



export default function Load() {
  let content = new Delta();


  let value: any;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("doc") || "";
  }

  return content;
}
