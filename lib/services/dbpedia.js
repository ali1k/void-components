'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utilsDBpediaUtil = require('./utils/DBpediaUtil');

var _utilsDBpediaUtil2 = _interopRequireDefault(_utilsDBpediaUtil);

var _sparqlDBpediaQuery = require('./sparql/DBpediaQuery');

var _sparqlDBpediaQuery2 = _interopRequireDefault(_sparqlDBpediaQuery);

var DBpediaEndpoint = 'http://dbpedia.org/sparql';
var DBpediaLiveEndpoint = 'http://live.dbpedia.org/sparql';
var outputFormat = 'application/sparql-results+json';
var query = undefined,
    lookupClass = '';
var utilObject = new _utilsDBpediaUtil2['default']();
var queryObject = new _sparqlDBpediaQuery2['default']();

exports['default'] = {
    // Name is the resource. Required.
    name: 'dbpedia',
    // At least one of the CRUD methods is Required
    read: function read(req, resource, params, config, callback) {
        if (resource === 'dbpedia.lookup') {
            var lookupAddr = [{ host: 'lookup.dbpedia.org' }];
            if (dbpediaLookupService) {
                lookupAddr = dbpediaLookupService;
            }
            query = params.query;
            lookupClass = params.lookupClass ? params.lookupClass : '';
            //send request
            (0, _requestPromise2['default'])({ method: 'get', headers: { 'Accept': 'application/json' }, accept: 'application/json', uri: 'http://' + lookupAddr[0].host + '/api/search.asmx/PrefixSearch?QueryClass=' + lookupClass + '&MaxHits=5&QueryString=' + query }).then(function (res) {
                callback(null, {
                    suggestions: utilObject.parseDBpediaLookup(res)
                });
            })['catch'](function (err) {
                console.log('\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                callback(null, { suggestions: [] });
            });
            /////////////////////////////////////////////
        } else if (resource === 'dbpedia.coordinates') {
            (function () {
                var rpPath = undefined,
                    uris = params.uris;
                query = queryObject.getPrefixes() + queryObject.getCoordinates(uris);
                // console.log(query);
                rpPath = DBpediaEndpoint + '?query=' + encodeURIComponent(query) + '&format=' + encodeURIComponent(outputFormat);
                _requestPromise2['default'].get({ uri: rpPath }).then(function (res) {
                    callback(null, { coordinates: utilObject.parseDBpediaCoordinates(res) });
                })['catch'](function () {
                    //last chance: try DBpedia live endpoint!
                    rpPath = DBpediaLiveEndpoint + '?query=' + encodeURIComponent(query) + '&format=' + encodeURIComponent(outputFormat);
                    _requestPromise2['default'].get({ uri: rpPath }).then(function (res) {
                        callback(null, { coordinates: utilObject.parseDBpediaCoordinates(res) });
                    })['catch'](function (err) {
                        console.log(err);
                        callback(null, { coordinates: [] });
                    });
                });
                /////////////////////////////////////////////
            })();
        }
    }
    // other methods
    // create: function(req, resource, params, body, config, callback) {},
    // update: function(req, resource, params, body, config, callback) {},
    // delete: function(req, resource, params, config, callback) {}
};
module.exports = exports['default'];

