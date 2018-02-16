"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactDomAnimated = _interopRequireDefault(require("react-dom-animated"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["", ""], ["", ""]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\t\tscale(", ")\n\t\t\t\t\t"], ["\n\t\tscale(", ")\n\t\t\t\t\t"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeInSwitch =
/*#__PURE__*/
function (_Switch) {
  _inherits(FadeInSwitch, _Switch);

  function FadeInSwitch(props) {
    var _this;

    _classCallCheck(this, FadeInSwitch);

    _this = _possibleConstructorReturn(this, (FadeInSwitch.__proto__ || Object.getPrototypeOf(FadeInSwitch)).call(this, props));
    Object.defineProperty(_this, "onAnimate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var _value = _ref.value;
        var newState = _value > 0.99 ? {
          display: 'inline'
        } : {
          display: 'block'
        };

        _this.setState(newState);
      }
    });
    var animate = new _reactDomAnimated.default.Value(0);
    animate.addListener(_this.onAnimate);
    _this.state = {
      display: 'block',
      animate: animate
    };
    return _this;
  }

  _createClass(FadeInSwitch, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      setTimeout(function () {
        return _reactDomAnimated.default.spring(_this2.state.animate, {
          toValue: 1
        }).start();
      }, 450);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      var _this3 = this;

      setTimeout(function () {
        return _reactDomAnimated.default.spring(_this3.state.animate, {
          toValue: 1
        }).start();
      }, 450);

      _reactDomAnimated.default.spring(this.state.animate, {
        toValue: 0.5
      }).start();
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        display: this.state.display,
        opacity: _reactDomAnimated.default.template(_templateObject, this.state.animate),
        transform: _reactDomAnimated.default.template(_templateObject2, this.state.animate.interpolate({
          inputRange: [0, 1],
          outputRange: ['1.08', '1']
        }))
      };
      return _react.default.createElement(_reactDomAnimated.default.div, {
        style: style
      }, _get(FadeInSwitch.prototype.__proto__ || Object.getPrototypeOf(FadeInSwitch.prototype), "render", this).call(this));
    }
  }]);

  return FadeInSwitch;
}(_reactRouterDom.Switch);

exports.default = FadeInSwitch;