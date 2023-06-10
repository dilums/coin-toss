# CoinToss

[![npm version](https://img.shields.io/npm/v/cointoss.svg)](https://www.npmjs.com/package/cointoss)
[![license](https://img.shields.io/npm/l/cointoss.svg)](https://github.com/your-username/repo-name/blob/main/LICENSE)

CoinToss is a lightweight JavaScript library that allows you to simulate a coin toss. With just a single function, you can quickly generate a random outcome of either "heads" or "tails."

## Installation

You can install CoinToss via npm:

```bash
npm install @dilums/cointoss
```

## Usage

To use CoinToss in your JavaScript project, import the module and call the `coinToss` function:

```javascript
const { coinToss } = require('cointoss');

const result = coinToss();
console.log(result ? 'Heads' : 'Tails');
```

The `coinToss` function returns a boolean value. When `true`, it represents "heads," and when `false`, it represents "tails."

## Examples

Here's a simple example of using CoinToss in a Node.js script:

```javascript
const { coinToss } = require('cointoss');

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
