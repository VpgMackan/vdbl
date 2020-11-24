![npm (scoped)](https://img.shields.io/npm/v/vdbl)

![GitHub issues](https://img.shields.io/github/issues/vpgstudio/vdbl)

![GitHub issues](https://img.shields.io/github/issues-raw/vpgstudio/vdbl)

![GitHub pull requests](https://img.shields.io/github/issues-pr/vpgstudio/vdbl)

![GitHub last commit](https://img.shields.io/github/last-commit/vpgstudio/vdbl)

![GitHub contributors](https://img.shields.io/github/contributors/vpgstudio/vdbl)

# Vdbl

Vdbl is a NPM package. The **_NPM_** package can be used for any discord bot but it should follow the Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0).
Vdbl is a discord bot with 4 lines of code for a ping command.

# How to use

Create a file with any name, for example `index.js`, add the following lines:

```javascript
const db = require("Vdbl");

db.add("Ping", "pong", true); // the last true means you can type in however with caps and it whil work.
db.run(token, prefix);
```

Then run `node filename.js` in a terminal.
