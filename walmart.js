const prompt = require('prompt-sync')();
const chalk = require('chalk');
const open = require('open');

function auth() {

    process.title = 'frankieWalmart v0.0.1 | Checkouts - 0 | Carts - 0 | Tasks - 0'

    let key = prompt(chalk.yellow.bold('Please enter your key - '));

    if (key == `wallybeta`) {

        console.clear()

        console.log(chalk.blueBright('lol packs is fat - im not coding shit for him\n\ni will give him this tho\n\n'))

        setTimeout(() => {
            open('https://hanime.tv/videos/hentai/netosis-1', { app: 'chrome' })
        }, 2750);

    } else {

        console.log(chalk.red.bold("Failed to authenticate user. Please try again with valid key."))
        auth();
    }
}

auth()