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

var _actionsLookupDBpedia = require('./actions/lookupDBpedia');

var _actionsLookupDBpedia2 = _interopRequireDefault(_actionsLookupDBpedia);

var _storesDBpediaStore = require('./stores/DBpediaStore');

var _storesDBpediaStore2 = _interopRequireDefault(_storesDBpediaStore);

var DBpediaInput = (function (_React$Component) {
    function DBpediaInput(props) {
        _classCallCheck(this, DBpediaInput);

        _get(Object.getPrototypeOf(DBpediaInput.prototype), 'constructor', this).call(this, props);
        var v = this.props.spec.value;
        if (this.props.spec.isDefault) {
            v = this.createDefaultValue(this.props.spec.valueType, this.props.spec.dataType);
        }
        //to initialize value in Property state
        this.props.onDataEdit(v);
        this.state = { value: v };
    }

    _inherits(DBpediaInput, _React$Component);

    _createClass(DBpediaInput, [{
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
                return '';
            }
        }
    }, {
        key: 'addSuggestion',
        value: function addSuggestion(uri) {
            var self = this;
            this.setState({ value: uri });
            this.emptySuggesstions();
            this.props.onDataEdit(uri);
            //simulate pressing enter
            setTimeout(function () {
                self.props.onEnterPress();
            }, 150);
        }
    }, {
        key: 'emptySuggesstions',
        value: function emptySuggesstions() {
            var currentComp = this.refs.dbpediaLookup.getDOMNode();
            /*global $*/
            $(currentComp).find('.transition').removeClass('visible');
            this.props.DBpediaStore.suggestions = [];
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var term = event.target.value;
            var currentComp = this.refs.dbpediaLookup.getDOMNode();
            this.setState({ value: term });
            this.props.onDataEdit(term);
            //handle autocomplete here
            if (term.length > 2) {
                /*global $*/
                $(currentComp).find('.transition').addClass('visible');
                this.context.executeAction(_actionsLookupDBpedia2['default'], {
                    query: term,
                    lookupClass: this.props.config ? this.props.config.lookupClass ? this.props.config.lookupClass : '' : ''
                });
            } else {
                this.emptySuggesstions();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var placeHolder = ' Search and choose from DBpedia';
            if (this.props.asWikipedia) {
                placeHolder = ' Search and choose from Wikipedia';
            }
            var suggestions = this.props.DBpediaStore.suggestions.map(function (node, index) {
                return _react2['default'].createElement(
                    'a',
                    { className: 'result', key: 'suggestion_' + index, onClick: self.addSuggestion.bind(self, node.uri) },
                    _react2['default'].createElement(
                        'div',
                        { className: 'content' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'title' },
                            node.title
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'description' },
                            node.description
                        )
                    )
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: 'ui fluid search left icon input', ref: 'dbpediaLookup' },
                _react2['default'].createElement('input', { ref: 'basicIndividualInput', type: 'text', placeholder: placeHolder, value: this.state.value, onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this) }),
                _react2['default'].createElement('i', { className: 'search icon' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'transition results' },
                    ' ',
                    suggestions,
                    ' '
                )
            );
        }
    }]);

    return DBpediaInput;
})(_react2['default'].Component);

DBpediaInput.contextTypes = {
    executeAction: _react2['default'].PropTypes.func.isRequired
};
DBpediaInput = (0, _fluxibleAddonsReact.connectToStores)(DBpediaInput, [_storesDBpediaStore2['default']], function (context, props) {
    return {
        DBpediaStore: context.getStore(_storesDBpediaStore2['default']).getState()
    };
});
exports['default'] = DBpediaInput;
module.exports = exports['default'];

