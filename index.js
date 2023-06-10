/**
 * Simulates a coin toss and returns the result.
 * @returns {boolean} - The result of the coin toss. `true` for "heads" and `false` for "tails".
 */
function coinToss() {
  return Math.random() < 0.5;
}

module.exports = coinToss