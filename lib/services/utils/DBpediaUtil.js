'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DBpediaUtil = (function () {
  function DBpediaUtil() {
    _classCallCheck(this, DBpediaUtil);
  }

  _createClass(DBpediaUtil, [{
    key: 'parseDBpediaLookup',
    value: function parseDBpediaLookup(body) {
      var output = [];
      var desc = '',
          parsed = JSON.parse(body);
      if (!parsed) {
        return output;
      }
      parsed.results.forEach(function (el) {
        if (el.description && el.description.length > 150) {
          desc = el.description.substr(0, 150) + '...';
        } else {
          desc = '';
        }
        output.push({ title: el.label, description: desc, uri: el.uri });
      });
      return output;
    }
  }, {
    key: 'parseDBpediaCoordinates',
    value: function parseDBpediaCoordinates(body) {
      var output = [];
      var desc = '',
          parsed = JSON.parse(body);
      if (!parsed) {
        return output;
      }
      parsed.results.bindings.forEach(function (el, key) {
        output.push({ position: { lat: parseFloat(el.lat.value), lng: parseFloat(el.long.value) }, key: el.s.value });
      });
      return output;
    }
  }]);

  return DBpediaUtil;
})();

exports['default'] = DBpediaUtil;
module.exports = exports['default'];

