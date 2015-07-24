'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _fluxibleAddons = require('fluxible/addons');

var DBpediaGMapStore = (function (_BaseStore) {
    function DBpediaGMapStore(dispatcher) {
        _classCallCheck(this, DBpediaGMapStore);

        _get(Object.getPrototypeOf(DBpediaGMapStore.prototype), 'constructor', this).call(this, dispatcher);
        this.coordinates = [];
    }

    _inherits(DBpediaGMapStore, _BaseStore);

    _createClass(DBpediaGMapStore, [{
        key: 'handleCoordinates',
        value: function handleCoordinates(payload) {
            this.coordinates = payload.coordinates;
            this.emitChange();
        }
    }, {
        key: 'cleanMap',
        value: function cleanMap() {
            this.coordinates = [];
        }
    }, {
        key: 'getState',
        value: function getState() {
            return {
                coordinates: this.coordinates
            };
        }
    }, {
        key: 'dehydrate',
        value: function dehydrate() {
            return this.getState();
        }
    }, {
        key: 'rehydrate',
        value: function rehydrate(state) {
            this.coordinates = state.coordinates;
        }
    }]);

    return DBpediaGMapStore;
})(_fluxibleAddons.BaseStore);

DBpediaGMapStore.storeName = 'DBpediaGMapStore'; // PR open in dispatchr to remove this need
DBpediaGMapStore.handlers = {
    'FIND_COORDINATES_SUCCESS': 'handleCoordinates',
    'CLEAN_GMAP_SUCCESS': 'cleanMap'
};

exports['default'] = DBpediaGMapStore;
module.exports = exports['default'];

