#!/usr/bin/env node

const cuid = require('cuid')

process.stdout.write(cuid())
