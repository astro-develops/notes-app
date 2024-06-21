import "react-quill/dist/quill.snow.css";

// import {
//   BindingHandlerContext,
//   BindingHandlerRange,
// } from "@/components/types/react-quill";
// import Quill from "quill";
import Load from "./load";
import { modules, formats } from "./types/pref";

import { useEffect, useRef, useState } from "react";
import QuillComponent, { ReactQuillProps } from "react-quill";
// const Delta = Quill.import("delta");

// function getIndicesOf(searchStr: string, str: string) {
//   var searchStrLen = searchStr.length;
//   if (searchStrLen == 0) {
//     return [];
//   }
//   var startIndex = 0,
//     index,
//     indices = [];
//   while ((index = str.indexOf(searchStr, startIndex)) > -1) {
//     indices.push(index);
//     startIndex = index + searchStrLen;
//   }
//   return indices;
// }

const ReactQuill = (
  typeof window === "object" ? require("react-quill") : () => false
) as React.FC<ReactQuillProps & { ref: React.Ref<QuillComponent> }>;

export default function Editor() {
  // const [range, setRange] = useState();
  // const [lastChange, setLastChange] = useState();
  // const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef<QuillComponent | null>(null);

  const [doc, getdoc] = useState("");

  //   let arr = [];

  let value: any;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("doc") || "";
  }

  //   for (let i = 0; i < words.length; i++) {
  //     arr.push(getIndicesOf(words[i], value));
  //   }

  //   console.log(arr);

  const saveToLocalStorage = (newValue: any) => {
    console.log(newValue);
    getdoc(newValue);
    localStorage.setItem("doc", newValue);
  };

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      className="h-full w-full rounded-lg"
      formats={formats}
      modules={modules}
      defaultValue={Load()}
      placeholder="Compose an epic..."
      onChange={(newValue: string) => {
        saveToLocalStorage(newValue);
      }}
    />
  );
}

/**
 *   useEffect(() => {
    if (quillRef.current) {
      const keyboard = quillRef.current.getEditor().getModule("keyboard");
      keyboard.addBinding({
        key: ["h", "H"],
        shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.header === 3 ? false : 1);
        },
      });
      keyboard.addBinding({
        key: ["b", "B"],
        shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format(
            "header",
            context.format.bold === false ? true : false
          );
        },
      });
      keyboard.addBinding({
        key: ["i", "I"],
        shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format(
            "header",
            context.format.italic === false ? true : false
          );
        },
      });
      keyboard.addBinding({
        key: ["u", "U"],
        shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format(
            "header",
            context.format.underline === false ? true : false
          );
        },
      });
    }
  }, [quillRef]);

 * 
 */
