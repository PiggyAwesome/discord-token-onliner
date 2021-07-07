var fs = require('fs')
const Discord = require("discord.js");
var chalk = require('chalk');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');

process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

const bot = new Discord.Client({
    disableEveryone: true

});
class Bot {
    constructor(token) {
        this.token = token;
    }
    online() {
        this.bot = new Discord.Client();
        this.bot.on('ready', () => {
            console.log(chalk.blue(`[INFO]`) + `| Logged into [%s] | ID [%s] at "%s"`, this.bot.user.tag, this.bot.user.id, new Date().toLocaleTimeString());

            this.bot.on("message", async message => {

            })
        });

        this.bot.login(this.token).catch(err => {});;
    }
}

process.title = ` Piggy's Onliner Epic [Multiple Accounts] Total Accounts: ${tokens.length}`;
console.log(chalk.green(`Piggy's Onliner `) + (chalk.magenta(`Epic `)) + (chalk.cyanBright(`[Multiple Accounts] `)) + (chalk.red(`Total Accounts: ${tokens.length}`)));
console.log("██████╗ ██╗ ██████╗  ██████╗██╗   ██╗███████╗     ██████╗ ███╗   ██╗██╗     ██╗███╗   ██╗███████╗██████╗ ");
console.log("██╔══██╗██║██╔════╝ ██╔════╝╚██╗ ██╔╝██╔════╝    ██╔═══██╗████╗  ██║██║     ██║████╗  ██║██╔════╝██╔══██╗");
console.log("██████╔╝██║██║  ███╗██║  ███╗╚████╔╝ ███████╗    ██║   ██║██╔██╗ ██║██║     ██║██╔██╗ ██║█████╗  ██████╔╝");
console.log("██╔═══╝ ██║██║   ██║██║   ██║ ╚██╔╝  ╚════██║    ██║   ██║██║╚██╗██║██║     ██║██║╚██╗██║██╔══╝  ██╔══██╗");
console.log("██║     ██║╚██████╔╝╚██████╔╝  ██║   ███████║    ╚██████╔╝██║ ╚████║███████╗██║██║ ╚████║███████╗██║  ██║");
console.log("╚═╝     ╚═╝ ╚═════╝  ╚═════╝   ╚═╝   ╚══════╝     ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝");
console.log(chalk.underline(chalk.green(`						Created By PiggyAwesome`)));
console.log(chalk.inverse(`[INFO] - [Token Onliner]`));

console.log(``);
console.log(``);


var i = 0;
var int = setInterval(() => {
    if (i >= tokens.length) return clearInterval(int);
    new Bot(tokens[i++]).online();
}, 0);