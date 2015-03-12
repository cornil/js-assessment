if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item);
    },

    sum: function (arr) {
      var res = 0;
      arr.forEach(function (item) {
        res += item
      });
      return res;
    },

    remove: function (arr, item) {
      res = arr;
      while (res.indexOf(item) != -1) {
        res.splice(res.indexOf(item), 1)
      }
      return res;
    },

    removeWithoutCopy: function (arr, item) {
      res = arr;
      while (res.indexOf(item) != -1) {
        res.splice(res.indexOf(item), 1)
      }
      return arr;
    },

    append: function (arr, item) {
      arr.push(item);
      return arr
    },

    truncate: function (arr) {
      arr.splice(arr.length - 1, 1);
      return arr
    },

    prepend: function (arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function (arr) {
      arr.splice(0, 1);
      return arr;
    },

    concat: function (arr1, arr2) {
      res = [];
      res = res.concat(arr1, arr2);
      return res;
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function (arr, item) {
      res = 0;
      arr.forEach(function (ele) {
        if (item == ele) {
          res++;
        }
      });

      return res;
    },

    duplicates: function (arr) {

    },

    square: function (arr) {
      res = [];
      arr.forEach(function (ele) {
        res.push(ele * ele);
      });

      return res;
    },

    findAllOccurrences: function (arr, target) {

    }
  };
});
