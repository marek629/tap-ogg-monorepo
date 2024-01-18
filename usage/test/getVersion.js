#!/usr/bin/env node

import { readFile } from 'fs/promises'
import { resolve } from 'path'
import { argv } from 'process'

import { dirname } from 'dirname-filename-esm'

try {
  const path = resolve(dirname(import.meta.url), '../..', argv[2], 'package.json')
  const { version = '' } = JSON.parse(await readFile(path, 'utf8'))
  console.log(version)
} catch (error) {
  console.error(`Error reading or parsing package.json: ${error}`)
  console.log('')
}
