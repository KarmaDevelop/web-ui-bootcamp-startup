"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var listener = {};

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (listener[eventName] === undefined) listener[eventName] = [];
      listener[eventName].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      if (listener[eventName] !== undefined) listener[eventName].forEach(function (callback) {
        return callback();
      });else throw new RangeError("".concat(eventName, " no listeners to call."));
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var listeners = listener[eventName];

      if (listeners !== undefined) {
        var indexOfCallbackToRemove = listeners.indexOf(callback);

        if (indexOfCallbackToRemove !== -1) {
          listeners[indexOfCallbackToRemove] = listeners[listeners.length - 1];
          listeners.pop();
        } else throw new RangeError("".concat(callback.name, " isn't listening to ").concat(eventName, "."));
      } else throw new RangeError("".concat(eventName, " no listeners to remove."));
    }
  }]);

  return EventEmitter;
}();