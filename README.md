# no-official-npm-registry

[![npm version](https://badge.fury.io/js/no-official-npm-registry.svg)](https://badge.fury.io/js/no-official-npm-registry)
[![Build Status](https://travis-ci.com/rafalmaciejewski/no-official-npm-registry.svg?branch=master)](https://travis-ci.com/rafalmaciejewski/no-official-npm-registry)
[![Dependencies](https://img.shields.io/david/rafalmaciejewski/no-official-npm-registry.svg)](https://david-dm.org/rafalmaciejewski/no-official-npm-registry)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

If you're using private registries (like [verdaccio](https://verdaccio.org/)) in your work environment you probably don't want to fetch
dependencies from the official one. This tools verifies that no dependency in your project is fetched from`registry.npmjs.org`.

---

## Usage

Use this command from a root directory of a project to be verified:

```shell
$ npx no-official-npm-registry
```

You will receive non-zero exit code if any dependency in your lockfile (or npm-shrinkwrap.json) is resolved from official npm registry.

Also you can install this tool globally with `npm install --global no-official-npm-registry`

If installed globally, `no-official-npm-registry` will be available as a CLI command.

You can check against different registry by defining `NPM_UNWANTED_REGISTRY` environment variable.
