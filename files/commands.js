const { Poll, List, Buttons } = require("whatsapp-web.js");

module.exports = async (msg) => {
  try {
    const from = msg.from;
    console.log("MESSAGE RECEIVED", msg);

    if (msg.body === "!ping") {
      msg.reply("pong teste");
    }
  } catch (error) {
    console.log(error);
  }
};

const fs = require("fs");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
});
