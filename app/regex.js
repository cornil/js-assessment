if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
      return /([a-z])(\1+)/i.test(str)
    },

    endsWithVowel : function(str) {
      return /[aeiouy]$/i.test(str)
    },

    captureThreeNumbers : function(str) {
      var test = /\d{3}/.exec(str)
      if (test == null){
        return false;
      }
      else{
        return test;
      }
    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});

console.log(captureThreeNumbers('abc123'));
