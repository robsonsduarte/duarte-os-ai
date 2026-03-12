#!/usr/bin/env node

/**
 * AIOX Core CLI Binary Entry Point
 *
 * Delegates to cli/index.js for all command handling.
 */

const { run } = require('../cli/index.js');
run();
