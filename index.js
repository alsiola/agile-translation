const fs = require("fs");
const path = require("path");

const strings = {
    "app/message-one": "hello",
    "app/message-two": "goodbye",
    "app/message-three": "my name is alex",
    "app/message-four": "emma smells"
};

fs.writeFileSync(
    path.join(process.cwd(), "messages", "master.json"),
    JSON.stringify(strings, null, 2)
);

console.log("Written new strings");
