'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DBpediaQuery = (function () {
    function DBpediaQuery() {
        _classCallCheck(this, DBpediaQuery);

        /*jshint multistr: true */
        this.prefixes = '        PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>         PREFIX foaf: <http://xmlns.com/foaf/0.1/>         PREFIX skos: <http://www.w3.org/2004/02/skos/core#>          ';
        this.query = '';
    }

    _createClass(DBpediaQuery, [{
        key: 'getPrefixes',
        value: function getPrefixes() {
            return this.prefixes;
        }
    }, {
        key: 'getCoordinates',
        value: function getCoordinates(uris) {
            var output = [];
            uris.forEach(function (uri) {
                output.push('<' + uri + '>');
            });
            /*jshint multistr: true */
            this.query = '        SELECT DISTINCT ?s SAMPLE(?lat) AS ?lat SAMPLE(?long) AS ?long WHERE {         ?s geo:lat ?lat .         ?s geo:long ?long .         FILTER (?s IN (' + output.join(',') + ') )         }';
            return this.query;
        }
    }]);

    return DBpediaQuery;
})();

exports['default'] = DBpediaQuery;
module.exports = exports['default'];

