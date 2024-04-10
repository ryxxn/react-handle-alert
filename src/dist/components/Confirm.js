"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./style.css");
function ConfirmModal(_a) {
    var text = _a.text, onConfirm = _a.onConfirm, onCancel = _a.onCancel, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.backgroundStyle, backgroundStyle = _c === void 0 ? {} : _c, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.confirmButton, confirmButton = _e === void 0 ? {
        text: "Ok",
        style: {},
    } : _e, _f = _a.cancelButton, cancelButton = _f === void 0 ? {
        text: "Cancel",
        style: {},
    } : _f;
    var bgRef = react_1.default.useRef(null);
    var handleClickBackground = function (e) {
        if (e.target === bgRef.current) {
            onCancel();
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "rha-confirm-modal ".concat(className), ref: bgRef, onClick: handleClickBackground, style: backgroundStyle }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "rha-modal-box", style: style }, { children: [(0, jsx_runtime_1.jsx)("p", { children: text }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "rha-button-group" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: "outlined", onClick: onCancel, style: cancelButton.style }, { children: cancelButton.text })), (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: onConfirm, style: confirmButton.style }, { children: confirmButton.text }))] }))] })) })));
}
exports.ConfirmModal = ConfirmModal;
