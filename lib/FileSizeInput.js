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

var FileSizeInput = (function (_React$Component) {
    function FileSizeInput(props) {
        _classCallCheck(this, FileSizeInput);

        _get(Object.getPrototypeOf(FileSizeInput.prototype), 'constructor', this).call(this, props);
        var v = this.props.spec.value;
        if (this.props.spec.isDefault) {
            v = this.createDefaultValue(this.props.spec.valueType, this.props.spec.dataType);
        }
        //to initialize value in Property state
        this.props.onDataEdit(v);
        this.state = { value: this.convertBToMB(v), unit: 'MB' };
    }

    _inherits(FileSizeInput, _React$Component);

    _createClass(FileSizeInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.noFocus) {
                _react2['default'].findDOMNode(this.refs.fileSizelInput).focus();
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(evt) {
            if (this.props.allowActionByKey) {
                switch (evt.keyCode) {
                    //case 9: // Tab
                    case 13:
                        // Enter
                        this.props.onEnterPress();
                        break;
                }
            }
        }
    }, {
        key: 'getRandomNumber',
        value: function getRandomNumber() {
            return Math.round(+new Date() / 1000);
        }
    }, {
        key: 'createDefaultValue',
        value: function createDefaultValue(valueType, dataType) {
            if (this.props.config && this.props.config.defaultValue) {
                return this.props.config.defaultValue[0];
            } else {
                return '';
            }
        }
    }, {
        key: 'sizeToB',
        value: function sizeToB(source, size) {
            var v = undefined;
            switch (source) {
                case 'B':
                    v = size;
                    break;
                case 'KB':
                    v = size * 1024;
                    break;
                case 'MB':
                    v = size * 1024 * 1024;
                    break;
                case 'GB':
                    v = size * 1024 * 1024 * 1024;
                    break;
                case 'TB':
                    v = size * 1024 * 1024 * 1024 * 1024;
                    break;
            }
            return v;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var v = this.sizeToB(this.state.unit, event.target.value);
            this.props.onDataEdit(v);
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleUnitChange',
        value: function handleUnitChange(event) {
            this.setState({ unit: event.target.value });
            var v = this.sizeToB(event.target.value, this.state.value);
            this.props.onDataEdit(v);
        }
    }, {
        key: 'convertBToMB',
        value: function convertBToMB(size) {
            var m = size / 1024 / 1024;
            return m;
        }
    }, {
        key: 'render',
        value: function render() {
            var fileSizeUnits = {
                'B': 'Bytes',
                'KB': 'Kilobyte = 1024 bytes',
                'MB': 'Megabyte = 1024 KB',
                'GB': 'Gigabyte = 1024 MB',
                'TB': 'Terabyte = 1024 GB'
            };
            var options = [];
            for (var prop in fileSizeUnits) {
                options.push({ short: prop, full: fileSizeUnits[prop] });
            }
            var optionsList = options.map(function (m, index) {
                return _react2['default'].createElement(
                    'option',
                    { key: index, value: m.short },
                    m.short,
                    ' : ',
                    m.full
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: 'ui' },
                _react2['default'].createElement('input', { ref: 'fileSizeInput', type: 'text', value: this.state.value, placeholder: 'File Size', onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this) }),
                _react2['default'].createElement(
                    'select',
                    { className: 'content ui form', ref: 'fileSizeUnit', value: this.state.unit, onChange: this.handleUnitChange.bind(this) },
                    optionsList
                )
            );
        }
    }]);

    return FileSizeInput;
})(_react2['default'].Component);

exports['default'] = FileSizeInput;
module.exports = exports['default'];

