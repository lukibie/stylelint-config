module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
    "selector-type-no-unknown": [true, { ignoreTypes: ["/^lb-/"] }],
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["/^lb-/", "/^define-mixin/", "/^mixin/"] },
    ],
  },
};
