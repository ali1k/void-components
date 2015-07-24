"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactGoogleMaps = require("react-google-maps");

var update = _reactAddons2["default"].addons.update;

var GoogleMapView = (function (_React$Component) {
  function GoogleMapView() {
    _classCallCheck(this, GoogleMapView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(GoogleMapView.prototype), "constructor", this).apply(this, args);
    this.state = {
      markers: this.props.markers
    };
  }

  _inherits(GoogleMapView, _React$Component);

  _createClass(GoogleMapView, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var state = this.state;
      var googleMapsApi = props.googleMapsApi;

      return _reactAddons2["default"].createElement(
        _reactGoogleMaps.GoogleMaps,
        { containerProps: {
            style: {
              minHeight: "200px",
              minWidth: "200px"
            }
          },
          ref: "map",
          googleMapsApi: "undefined" !== typeof google ? google.maps : null,
          zoom: this.props.zoomLevel,
          center: this.props.center },
        state.markers.map(toMarker, this)
      );

      function toMarker(marker, index) {
        return _reactAddons2["default"].createElement(_reactGoogleMaps.Marker, {
          position: marker.position,
          key: marker.key });
      }
    }
  }]);

  return GoogleMapView;
})(_reactAddons2["default"].Component);

exports["default"] = GoogleMapView;
module.exports = exports["default"];

