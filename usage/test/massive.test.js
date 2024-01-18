import { scheduler } from 'timers/promises'

import test from 'ava'


const pass = async t => {
  await scheduler.wait(200)
  t.pass()
}
for (let i=0; i<80; i++) {
  test.serial(`massive testing ${i}`, pass)
}
