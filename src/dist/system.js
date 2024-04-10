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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAlert = exports.handleConfirm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var components_1 = require("./components");
var confirmContainerId = "rha-confirm-container";
var alertContainerId = "rha-alert-container";
/**
 * Remove focus from the active element
 */
var removeFocus = function () {
    var activeElement = document.activeElement;
    activeElement && activeElement.blur();
};
var addFadeOutEvent = function (callback) {
    var modalBox = document.querySelector(".rha-modal-box");
    modalBox.style.animation = "fadeOut 0.1s ease";
    modalBox.addEventListener("animationend", callback);
};
function handleConfirm(text, options) {
    return new Promise(function (resolve) {
        var container = document.createElement("div");
        container.id = confirmContainerId;
        document.body.appendChild(container);
        var root = (0, client_1.createRoot)(container);
        function cleanup() {
            root.unmount();
            container.remove();
            document.removeEventListener("keyup", handleKeyUp);
        }
        function onConfirm() {
            resolve(true);
            addFadeOutEvent(cleanup);
        }
        function onCancel() {
            resolve(false);
            addFadeOutEvent(cleanup);
        }
        function handleKeyUp(e) {
            if (e.key === "Enter")
                onConfirm();
            if (e.key === "Escape")
                onCancel();
        }
        removeFocus();
        document.addEventListener("keyup", handleKeyUp);
        root.render((0, jsx_runtime_1.jsx)(components_1.ConfirmModal, __assign({ text: text, onConfirm: onConfirm, onCancel: onCancel }, options)));
    });
}
exports.handleConfirm = handleConfirm;
var handleAlert = function (text, options) {
    var container = document.createElement("div");
    container.id = alertContainerId;
    document.body.appendChild(container);
    var root = (0, client_1.createRoot)(container);
    function cleanup() {
        root.unmount();
        container.remove();
        document.removeEventListener("keyup", handleKeyUp);
    }
    function onClose() {
        addFadeOutEvent(cleanup);
    }
    var handleKeyUp = function (e) {
        if (e.key === "Enter" || e.key === "Escape") {
            onClose();
        }
    };
    removeFocus();
    document.addEventListener("keyup", handleKeyUp);
    root.render((0, jsx_runtime_1.jsx)(components_1.AlertModal, __assign({ text: text, onClose: function () {
            onClose();
        } }, options)));
};
exports.handleAlert = handleAlert;
