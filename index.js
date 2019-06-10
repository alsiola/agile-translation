const fs = require("fs");
const path = require("path");

const strings = {
    "app/message-one": "hello",
    "app/message-two": "goodbye",
    "app/message-three": "my name is alex"
};

fs.writeFileSync(
    path.join(process.cwd(), "messages", "master.json"),
    JSON.stringify(strings, null, 2)
);

console.log("Written new strings");
