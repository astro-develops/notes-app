import Quill from "quill";
const Delta = Quill.import("delta");

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

export default function Load() {
  let content = new Delta();
  let words: string[] = [
    "<strong>",
    "<em>",
    "<u>",
    "<s>",
    "<blockquote>",
  ];
  let words_end: string[] = [
    "</strong>",
    "</em>",
    "</u>",
    "</s>",
    "</blockquote>",
  ];

//   let arr = [];

  let value: any;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("doc") || "";
  }

//   for (let i = 0; i < words.length; i++) {
//     arr.push(getIndicesOf(words[i], value));
//   }

//   console.log(arr);

  value = value.replaceAll("<p>", "");
  value = value.replaceAll("</p>", "\n");
  value = value.replaceAll("<br>", "\n");

  for (let i = 0; i < value.length; i++) {
    if (value[i] == "<") {
        for (let j = 0; j < words.length; j++) {
          if (value.substring(i,i+words[j].length) == words[j]) {
              let mod = value.substring(i+words[j].length, value.indexOf(words_end[j]));
              content.insert(mod, { bold: true });
              //i = value.indexOf(words_end[j]) + words_end[j].length;
              //console.log(i);
              i += mod.length + (words[j].length * 2);
              //console.log(i);
          }
        }
      } else {
          content.insert(value.substring(i, i + 1));        
      }
      console.log(i);
  }

    // content.insert(value);

  return content;
}
