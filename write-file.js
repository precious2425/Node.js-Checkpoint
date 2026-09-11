// Task 3 (part 1): Require the file system module and create
// welcome.txt containing one line: "Hello Node"
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("welcome.txt has been created.");
});
