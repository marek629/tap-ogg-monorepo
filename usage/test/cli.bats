#!/usr/bin/env bats

@test "ogg --version" {
  run yarn tap-ogg --version
  echo "${lines[2]} === $(./getVersion.js tap-ogg)"
  [ "${lines[2]}" = "$(./getVersion.js tap-ogg)" ]
}

@test "nyan --version" {
  skip "tap-nyan is not built on yargs"
}

@test "merge --version" {
  run yarn tmerge --version
  echo "${lines[2]} === $(./getVersion.js tap-merge)"
  [ "${lines[2]}" = "$(./getVersion.js tap-merge)" ]
}
