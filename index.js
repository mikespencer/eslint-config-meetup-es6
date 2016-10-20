module.exports = {
  "extends": "meetup",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "env": {
    "es6": true
  },
  "rules": {
    "no-var": 2,
    "prefer-const": 2,
    "prefer-template": 2
  }
};
