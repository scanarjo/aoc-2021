import t from 'tap';

import { countDepthIncreases } from './countDepthIncreases';

t.test('it should return 0 for an empty list', async t => {
  t.equal(countDepthIncreases([]), 0);
})

t.test('it should return 0 for list containing 1 item', async t => {
  t.equal(countDepthIncreases([100]), 0);
})

t.test('it should return 0 for a list containing 2 items in decreasing order', async t => {
  t.equal(countDepthIncreases([100, 50]), 0);
})

t.test('it should return 1 for a list containing 2 items in increasing order', async t => {
  t.equal(countDepthIncreases([50, 100]), 1);
})

t.test('it should return 2 for the list [1, 2, 3]', async t => {
  t.equal(countDepthIncreases([1, 2, 3]), 2);
})

const sampleList = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
];

t.test(`it should return 7 for the list ${sampleList}`, async t => {
  t.equal(countDepthIncreases(sampleList), 7);
})
