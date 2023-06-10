# CoinToss

[![npm version](https://img.shields.io/npm/v/@dilums/coin-toss.svg)](https://www.npmjs.com/package/@dilums/coin-toss)
[![license](https://img.shields.io/npm/l/@dilums/coin-toss.svg)](https://github.com/@dilums/coin-toss/blob/main/LICENSE)


CoinToss is a lightweight JavaScript library that allows you to simulate a coin toss. With just a single function, you can quickly generate a random outcome of either "heads" or "tails."

## Installation

You can install CoinToss via npm:

```bash
npm install @dilums/cointoss
```

## Usage

To use CoinToss in your JavaScript project, import the module and call the `coinToss` function:

```javascript
const coinToss = require("@dilums/coin-toss");

const result = coinToss();
console.log(result ? 'Heads' : 'Tails');
```

The `coinToss` function returns a boolean value. When `true`, it represents "heads," and when `false`, it represents "tails."

## Examples

Here's a simple example of using CoinToss in a Node.js script:

```javascript
const coinToss = require("@dilums/coin-toss");

for (let i = 0; i < 5; i++) {
  const result = coinToss();
  console.log(`Toss ${i + 1}: ${result ? 'Heads' : 'Tails'}`);
}
```

Output:
```
Toss 1: Heads
Toss 2: Tails
Toss 3: Tails
Toss 4: Heads
Toss 5: Heads
```

## License

This project is licensed under the [MIT License](LICENSE).
