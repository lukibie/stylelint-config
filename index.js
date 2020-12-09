module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
      ("at-rule-no-unknown": null),
    ],
    "unicode-bom": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-named-arguments": "never",
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-rule-conditional-no-parentheses": true,
    "scss/dimension-no-non-numeric-values": true,
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/map-keys-quotes": "always",
    // 'scss/at-function-pattern': '^gui-',
    // 'scss/at-mixin-pattern': '^gui-',
  },
};
