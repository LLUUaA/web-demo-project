/** @format */

var paragraphToUpperCase = function (str, splitStr, joinStr) {
  if (!str) {
    return "";
  }

  return str
    .split(splitStr || " ")
    .map((v) => v.replace(v[0], v[0].toUpperCase()))
    .join(joinStr || " ");
};
// test
paragraphToUpperCase("i am iron man");
