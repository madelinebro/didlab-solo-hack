const { Wallet } = require("ethers");
const fs = require("fs");
(async ()=>{
const msg = fs.readFileSync("siwe.txt","utf8");
const sig = await new Wallet(process.env.PRIVKEY).signMessage(msg);
console.log(sig);
})();
SIG=$(node sign.js)
