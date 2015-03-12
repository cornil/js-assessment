if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    containsNumber: function (str) {
      return /[0-9]/.test(str);
    },

    containsRepeatingLetter: function (str) {
      return /([a-z])(\1+)/i.test(str)
    },

    endsWithVowel: function (str) {
      return /[aeiouy]$/i.test(str)
    },

    captureThreeNumbers: function (str) {
      if (/\d{3}/.test(str)) {
        return /\d{3}/.exec(str)[0];
      } else {
        return false;
      };
    },

    matchesPattern: function (str) {
      return /^\d{3}\-\d{3}\-\d{4}$/.test(str)
    },
    isUSD: function (str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
  };
});
