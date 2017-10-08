'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fruitItem = require('../fruit-item');

var _fruitItem2 = _interopRequireDefault(_fruitItem);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/joelengt/Desktop/proyect/repo/landing/components/sample-product/index.js';


var SampleProduct = function (_React$Component) {
  (0, _inherits3.default)(SampleProduct, _React$Component);

  function SampleProduct() {
    (0, _classCallCheck3.default)(this, SampleProduct);

    return (0, _possibleConstructorReturn3.default)(this, (SampleProduct.__proto__ || (0, _getPrototypeOf2.default)(SampleProduct)).apply(this, arguments));
  }

  (0, _createClass3.default)(SampleProduct, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'SampleProduct', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('div', { className: 'SampleProduct__title', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', { className: 'SampleProduct__title--h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'TRY OUR'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('p', { className: 'SampleProduct__part1', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'PRODUCT'), _react2.default.createElement('p', { className: 'SampleProduct__part2', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'NOW'))), _react2.default.createElement('div', { className: 'SampleProduct__title--dash', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('div', { className: 'SampleProduct__title--button', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'iPhone 8 introduces an all\u2011new glass design. The world\u2019s most popular camera, now even better. The smartest, most powerful chip ever in a smartphone.')), _react2.default.createElement('div', { className: 'action', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'TRY'))), _react2.default.createElement('div', { className: 'SampleProduct__image', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('img', { src: './static/images/design_sizes_large.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })));
    }
  }]);

  return SampleProduct;
}(_react2.default.Component);

exports.default = SampleProduct;