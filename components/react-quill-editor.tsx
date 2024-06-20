import "react-quill/dist/quill.snow.css";

import {
  BindingHandlerContext,
  BindingHandlerRange,
} from "@/components/types/react-quill";
import Quill from 'quill';

import { useEffect, useRef, useState } from "react";
import QuillComponent, { ReactQuillProps } from "react-quill";

const ReactQuill = (
  typeof window === "object" ? require("react-quill") : () => false
) as React.FC<ReactQuillProps & { ref: React.Ref<QuillComponent> }>;

var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];

export const ReactQuillEditor = () => {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);  
    const quillRef = useRef<QuillComponent | null>(null);


  const [doc, getdoc] = useState("");

  useEffect(() => {
    let value;
    value = localStorage.getItem("doc") || "";
    getdoc(value);
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("doc", doc);
  };

  const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': Font.whitelist }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
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
        key: ['h', 'H'], shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.header === 3 ? false : 1);
        },
      });
      keyboard.addBinding({
        key: ['b', 'B'], shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.bold === false ? true : false);
        },
      });
      keyboard.addBinding({
        key: ['i', 'I'], shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.italic === false ? true : false);
        },
      });
      keyboard.addBinding({
        key: ['u', 'U'], shiftKey: true,
        shortKey: true,
        handler: function (
          range: BindingHandlerRange,
          context: BindingHandlerContext
        ) {
          this.quill.format("header", context.format.underline === false ? true : false);
        },
      });

    }
  }, [quillRef]);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      className="h-96 rounded-lg"
      formats={formats}
      modules={modules}
      placeholder="Compose an epic..."
      onChange={(newValue: string) => {
        console.log(newValue);
        getdoc(newValue);
        localStorage.setItem("doc", newValue);
      }}
    />
  );
};

export default ReactQuillEditor;
