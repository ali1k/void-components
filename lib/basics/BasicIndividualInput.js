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

var BasicIndividualInput = (function (_React$Component) {
    function BasicIndividualInput(props) {
        _classCallCheck(this, BasicIndividualInput);

        _get(Object.getPrototypeOf(BasicIndividualInput.prototype), 'constructor', this).call(this, props);
        var v = this.props.spec.value;
        if (this.props.spec.isDefault) {
            v = this.createDefaultValue(this.props.spec.valueType, this.props.spec.dataType);
        }
        //to initialize value in Property state
        this.props.onDataEdit(v);
        this.state = { value: v };
    }

    _inherits(BasicIndividualInput, _React$Component);

    _createClass(BasicIndividualInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.noFocus) {
                _react2['default'].findDOMNode(this.refs.basicIndividualInput).focus();
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
                if (valueType === 'uri') {
                    return 'http://example.com/' + this.getRandomNumber();
                } else {
                    return 'exampleValue' + this.getRandomNumber();
                }
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.props.onDataEdit(event.target.value.trim());
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var placeholder = '';
            //placeholder can come from config or direct property
            if (this.props.config && this.props.config.placeholder) {
                placeholder = this.props.config.placeholder[0];
            } else {
                if (this.props.placeholder) {
                    placeholder = this.props.placeholder;
                }
            }
            return _react2['default'].createElement(
                'div',
                { className: 'ui' },
                _react2['default'].createElement('input', { ref: 'basicIndividualInput', type: 'text', value: this.state.value, placeholder: placeholder, onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this) })
            );
        }
    }]);

    return BasicIndividualInput;
})(_react2['default'].Component);

exports['default'] = BasicIndividualInput;
module.exports = exports['default'];

