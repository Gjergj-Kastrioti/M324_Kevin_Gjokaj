// index.test.js
import assert from 'assert';
import { sum } from './index.js';

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    assert.equal(sum(1, 2), 3);
  });

  // Additional test for decimals
  it("should add 1.5 + 2.5 to equal 4", () => {
    assert.equal(sum(1.5, 2.5), 4);
  });
});