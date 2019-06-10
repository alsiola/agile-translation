const fs = require("fs");
const path = require("path");

const strings = {
    "app/message-one": "hello",
    "app/message-two": "goodbye"
};

fs.writeFileSync(
    path.join(process.cwd(), "messages", "master.json"),
    JSON.stringify(strings, null, 2)
);

console.log("Written new strings");
