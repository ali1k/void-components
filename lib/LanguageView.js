'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataLanguages = require('../data/languages');

var LanguageView = (function (_React$Component) {
    function LanguageView() {
        _classCallCheck(this, LanguageView);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(LanguageView, _React$Component);

    _createClass(LanguageView, [{
        key: 'getCodefromURI',
        value: function getCodefromURI(uri) {
            if (uri) {
                var tmp = uri.split('/');
                return tmp[tmp.length - 1];
            }
            return uri;
        }
    }, {
        key: 'getLanguage',
        value: function getLanguage(code) {
            var o = undefined;
            _dataLanguages.list.forEach(function (l) {
                if (l.code === code) {
                    o = l.name + '-' + l.nativeName;
                    return o;
                }
            });
            return o;
        }
    }, {
        key: 'prepareLanguage',
        value: function prepareLanguage(uri) {
            return this.getLanguage(this.getCodefromURI(uri));
        }
    }, {
        key: 'render',
        value: function render() {
            var outputDIV = undefined,
                lang = undefined;
            if (this.props.spec.valueType === 'uri') {
                lang = this.prepareLanguage(this.props.spec.value);
                outputDIV = _react2['default'].createElement(
                    'a',
                    { href: this.props.spec.value, target: '_blank' },
                    ' ',
                    lang,
                    ' '
                );
            } else {
                outputDIV = _react2['default'].createElement(
                    'span',
                    null,
                    ' ',
                    this.props.spec.value,
                    ' '
                );
            }
            return _react2['default'].createElement(
                'div',
                { className: 'ui', ref: 'languageView' },
                outputDIV
            );
        }
    }]);

    return LanguageView;
})(_react2['default'].Component);

exports['default'] = LanguageView;
module.exports = exports['default'];