const str = "     SGK      ";
const trimstr = str.trim();
//output
console.log(trimstr);

const newStr = "  ok ok ok ok ";
console.log(newStr.replace(/\s/g, ""));

/*for replace all white space from anywhere

\s matches all white space
g flag is for global check*/
