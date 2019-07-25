"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var Movie =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(name, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.title = name;
    _this.year = year;
    _this.duration = duration;
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit('playing');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit('paused');
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit('resume');
    }
  }, {
    key: "addCast",
    value: function addCast(cast) {
      this.cast = this.cast.concat(cast);
    }
  }]);

  return Movie;
}(EventEmitter);

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info);
    }
  }]);

  return Logger;
}();