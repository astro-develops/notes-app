import "react-quill/dist/quill.snow.css";

import {
  BindingHandlerContext,
  BindingHandlerRange,
} from "@/components/types/react-quill";

import { useEffect, useRef } from "react";
import QuillComponent, { ReactQuillProps } from "react-quill";

const ReactQuill = (
  typeof window === "object" ? require("react-quill") : () => false
) as React.FC<ReactQuillProps & { ref: React.Ref<QuillComponent> }>;

export const ReactQuillEditor = () => {
  const quillRef = useRef<QuillComponent | null>(null);

  const modules = {
    toolbar: [
      [{ header: [1,2,3, false] }, { font: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },

  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  useEffect(() => {
    if (quillRef.current) {
      const keyboard = quillRef.current.getEditor().getModule("keyboard");
      keyboard.addBinding({
        key: "h",
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.header === 3 ? false : 3);
        },
      });
    }
  }, [quillRef]);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      className=" h-96 rounded-lg"
      formats={formats}
      modules={modules}
      placeholder='Compose an epic...'
      onChange={(newValue: string) => {
        console.log(newValue);
      }}
    />
  );
};

export default ReactQuillEditor;
