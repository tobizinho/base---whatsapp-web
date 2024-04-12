const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");

const wwebVersion = "2.2322.15";

client = new Client({
  authStrategy: new LocalAuth("creds"),
  webVersionCache: {
    type: "remote",
    remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("ready", async () => {
  await console.log("Client is ready!");
  return client.sendMessage("559491652693@c.us", "> Conectado >.<");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message", async (msg) => {
  if (!msg.from.includes("@g.us") || !msg.from.includes("@c.us")) return;
  require("./files/commands")(msg);
});

client.initialize();
