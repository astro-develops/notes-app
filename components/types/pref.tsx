import Quill from "quill";

var Font = Quill.import("formats/font");
Font.whitelist = ["Ubuntu", "Raleway", "Roboto"];

export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: Font.whitelist }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
};

export const formats = [
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

export default { modules, formats };