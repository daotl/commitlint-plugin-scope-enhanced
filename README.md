# commitlint-plugin-scope-enhanced

## Installation

```sh
npm install -D commitlint-config-scope-enhanced
```

## Usage

```js
module.exports = {
  ...,
  plugins: ["scope-enhanced"],
  rules: {
    'scope-enum-enhanced': [2, 'always', ['@scope/package1'， '@scope/package2']],
  }
}
```

## Reference

https://stackoverflow.com/a/69362848/4923728

## License

[MIT](LICENSE)
