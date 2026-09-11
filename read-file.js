// Task 3 (part 2): Read and console.log the contents of the file
// created in write-file.js.
//
// Note: the original instructions say to read "hello.txt", but part 1
// creates "welcome.txt" — this reads welcome.txt so the two halves of
// the exercise actually connect. If you genuinely need a separate
// hello.txt, just change the filename below.
const fs = require("fs");

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
