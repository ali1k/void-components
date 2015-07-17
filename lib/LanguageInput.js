'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataLanguages = require('../data/languages');

var LanguageInput = (function (_React$Component) {
    function LanguageInput(props) {
        _classCallCheck(this, LanguageInput);

        _get(Object.getPrototypeOf(LanguageInput.prototype), 'constructor', this).call(this, props);
        var v = this.props.spec.value;
        if (this.props.spec.isDefault) {
            v = this.createDefaultValue(this.props.spec.valueType, this.props.spec.dataType);
        }
        //to initialize value in Property state
        this.props.onDataEdit(v);
        this.state = { value: v };
    }

    _inherits(LanguageInput, _React$Component);

    _createClass(LanguageInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.noFocus) {
                _react2['default'].findDOMNode(this.refs.languageInputSelect).focus();
            }
        }
    }, {
        key: 'createDefaultValue',
        value: function createDefaultValue(valueType, dataType) {
            if (this.props.config && this.props.config.defaultValue) {
                return this.props.config.defaultValue[0];
            } else {
                return 'http://id.loc.gov/vocabulary/iso639-1/en';
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.props.onDataEdit(event.target.value);
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'buildOptions',
        value: function buildOptions(data) {
            var optionsList = data.map(function (lang, index) {
                return _react2['default'].createElement(
                    'option',
                    { key: index, value: 'http://id.loc.gov/vocabulary/iso639-1/' + lang.code },
                    ' ',
                    lang.name,
                    '-',
                    lang.nativeName
                );
            });
            return optionsList;
        }
    }, {
        key: 'render',
        value: function render() {
            var optionList = this.buildOptions(_dataLanguages.list);
            return _react2['default'].createElement(
                'div',
                { className: 'content ui form', ref: 'languageInput' },
                _react2['default'].createElement(
                    'div',
                    { className: 'field' },
                    _react2['default'].createElement(
                        'select',
                        { className: 'ui search dropdown', ref: 'languageInputSelect', value: this.state.value, onChange: this.handleChange.bind(this) },
                        optionList
                    )
                )
            );
        }
    }]);

    return LanguageInput;
})(_react2['default'].Component);

exports['default'] = LanguageInput;
module.exports = exports['default'];