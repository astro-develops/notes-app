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
    "<h1>",
    "<h2>",
  ];
  let words_end: string[] = [
    "</strong>",
    "</em>",
    "</u>",
    "</s>",
    "</blockquote>",
    "</h1>",
    "</h2>",
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

  const mark = (mod: string, num: number) => {
    //console.log(mod + " | " num);
    switch (num) {
      case 0:
        content.insert(mod, { bold: true });
        break;
      case 1:
        content.insert(mod, { italic: true });
        break;
      case 2:
        content.insert(mod, { underline: true });
        break;
      case 3:
        content.insert(mod, { strike: true });
        break;
      case 4:
        content.insert(mod, { blockquote: true });
        break;
      case 5:
        content.insert(mod, { header: 1 });
        break;
      case 6:
        content.insert(mod, { header: 2 });
        break;
    }
  };

  for (let i = 0; i < value.length; i++) {
    if (value[i] == "<") {
      for (let j = 0; j < words.length; j++) {
        if (value.substring(i, i + words[j].length) == words[j]) {
          let mod = value.substring(
            i + words[j].length,
            value.indexOf(words_end[j])
          );
          //console.log(j);
          mark(mod, j);

          //i = value.indexOf(words_end[j]) + words_end[j].length;
          //console.log(i);
          i += mod.length + words[j].length * 2;
          //console.log(i);
        }
      }
    } else {
      content.insert(value.substring(i, i + 1));
    }
    //console.log(i);
  }

  // content.insert(value);

  return content;
}