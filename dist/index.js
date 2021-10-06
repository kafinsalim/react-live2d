"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lappdelegate = require("./lappdelegate");

var LAppDefine = _interopRequireWildcard(require("./lappdefine"));

var _react = _interopRequireWildcard(require("react"));

require("./asset/index.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ReactLive2d(props) {
  (0, _react.useEffect)(function () {
    console.log("props", props);
    props.ModelList ? LAppDefine.lappdefineSet.setModelDir(props.ModelList) : LAppDefine.lappdefineSet.setModelDir([]);
    props.TouchBody ? LAppDefine.lappdefineSet.setHitBody(props.TouchBody) : LAppDefine.lappdefineSet.setHitBody([]);
    props.TouchHead ? LAppDefine.lappdefineSet.setHitHead(props.TouchHead) : LAppDefine.lappdefineSet.setHitHead([]);
    props.TouchDefault ? LAppDefine.lappdefineSet.setHitDefault(props.TouchDefault) : LAppDefine.lappdefineSet.setHitDefault([]);
    props.PathFull ? LAppDefine.lappdefineSet.setPathFull(props.PathFull) : LAppDefine.lappdefineSet.setPathFull("");

    if (!navigator.userAgent.match(/mobile/i) || props.MobileShow == true) {
      if (_lappdelegate.LAppDelegate.getInstance().initialize() == false) {
        return;
      }

      _lappdelegate.LAppDelegate.getInstance().run(); // window.onbeforeunload = () => LAppDelegate.releaseInstance();

    }
  }, []);
  (0, _react.useEffect)(function () {
    if (props.release == true) {
      _lappdelegate.LAppDelegate.releaseInstance();
    }
  }, [props.release]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: props.className,
    id: "live2d-container"
  }, /*#__PURE__*/_react["default"].createElement("canvas", {
    id: "live2d",
    width: props.width ? props.width : "300",
    height: props.height ? props.height : "500",
    className: "live2d"
  }));
}

var _default = ReactLive2d;
exports["default"] = _default;