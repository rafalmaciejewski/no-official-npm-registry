const { readFileSync, existsSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');
const emoji = require('node-emoji');

const NPM_UNWANTED_REGISTRY = process.env.NPM_UNWANTED_REGISTRY || 'registry.npmjs.org';

function hasUnwantedRegistryEntries(filepath) {
    const content = readFileSync(filepath, 'utf8');
    return content.includes(NPM_UNWANTED_REGISTRY);
}

function verify() {
    const lockfilePath = join(process.cwd(), 'package-lock.json');
    const shrinkwrapPath = join(process.cwd(), 'npm-shrinkwrap.json');
    const lockfileExists = existsSync(lockfilePath);
    const shrinkwrapExists = existsSync(shrinkwrapPath);

    if (!lockfileExists && !shrinkwrapExists) {
        console.error(`${emoji.get('warning')} no lockfile or shrinkwrap found. Are you sure you're in a right directory?`);
        process.exit(3);
    }

    if (lockfileExists && hasUnwantedRegistryEntries(lockfilePath)) {
        console.error(
            `${emoji.get('police_car')} package-lock.json contains entries fetched from ${chalk.bold(NPM_UNWANTED_REGISTRY)}!`,
        );
        process.exit(1);
    }

    if (shrinkwrapExists && hasUnwantedRegistryEntries(lockfilePath)) {
        console.error(
            `${emoji.get('police_car')} npm-shrinkwrap.json contains entries fetched from ${chalk.bold(NPM_UNWANTED_REGISTRY)}!`,
        );
        process.exit(2);
    }

    console.log(`${emoji.get('ok_hand')} OK!`);
    process.exit(0);
}

module.exports = {
    verify,
};
