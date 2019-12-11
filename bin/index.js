#!/usr/bin/env node

const program = require('commander');
const pjson = require('pjson');
const { verify } = require('../lib');

program
    .version(pjson.version)
    .action(() => {
        verify();
    });

program.parse(process.argv);
