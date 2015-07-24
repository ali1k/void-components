'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fluxibleAddonsReact = require('fluxible-addons-react');

var _basicsGoogleMapView = require('./basics/GoogleMapView');

var _basicsGoogleMapView2 = _interopRequireDefault(_basicsGoogleMapView);

var _ldRComponents = require('ld-r-components');

var _ldRComponents2 = _interopRequireDefault(_ldRComponents);

var _storesDBpediaGMapStore = require('./stores/DBpediaGMapStore');

var _storesDBpediaGMapStore2 = _interopRequireDefault(_storesDBpediaGMapStore);

var _actionsGetCoordinates = require('./actions/getCoordinates');

var _actionsGetCoordinates2 = _interopRequireDefault(_actionsGetCoordinates);

var DBpediaGoogleMapView = (function (_React$Component) {
    function DBpediaGoogleMapView(props) {
        _classCallCheck(this, DBpediaGoogleMapView);

        _get(Object.getPrototypeOf(DBpediaGoogleMapView.prototype), 'constructor', this).call(this, props);
    }

    _inherits(DBpediaGoogleMapView, _React$Component);

    _createClass(DBpediaGoogleMapView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //initialize map
            this.context.executeAction(_actionsGetCoordinates2['default'], { uris: this.prepareURIs(this.props.spec.instances) });
        }
    }, {
        key: 'prepareURIs',
        value: function prepareURIs(instances) {
            var uris = [];
            instances.forEach(function (node) {
                if (node.value.search('dbpedia.org') !== -1) {
                    uris.push(node.value);
                }
            });
            return uris;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var newProps = this.props;
            var uris = this.prepareURIs(newProps.spec.instances);
            if (prevProps.spec.instances.length !== newProps.spec.instances.length) {
                this.context.executeAction(_actionsGetCoordinates2['default'], { uris: uris });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { ref: 'DBpediaGoogleMapView' },
                this.props.DBpediaGMapStore.coordinates.length ? _react2['default'].createElement(_basicsGoogleMapView2['default'], { key: this.props.DBpediaGMapStore.coordinates.length, markers: this.props.DBpediaGMapStore.coordinates, zoomLevel: 3, center: { lat: 48.2000, lng: 16.3500 } }) : '',
                _react2['default'].createElement(_ldRComponents2['default'], { spec: this.props.spec, config: this.props.config })
            );
        }
    }]);

    return DBpediaGoogleMapView;
})(_react2['default'].Component);

DBpediaGoogleMapView.contextTypes = {
    executeAction: _react2['default'].PropTypes.func.isRequired
};
DBpediaGoogleMapView = (0, _fluxibleAddonsReact.connectToStores)(DBpediaGoogleMapView, [_storesDBpediaGMapStore2['default']], function (context, props) {
    return {
        DBpediaGMapStore: context.getStore(_storesDBpediaGMapStore2['default']).getState()
    };
});
exports['default'] = DBpediaGoogleMapView;
module.exports = exports['default'];

