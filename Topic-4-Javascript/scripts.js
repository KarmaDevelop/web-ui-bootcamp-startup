let listener = {};

class EventEmitter {
  constructor() {}

  on(eventName, callback) {
    if (listener[eventName] === undefined) listener[eventName] = [];
    listener[eventName].push(callback);
  }
  
  emit(eventName) {
    if (listener[eventName] !== undefined)
      listener[eventName].forEach(callback => callback());
    else throw new RangeError(`${eventName} no listeners to call.`);
  }
  
  off(eventName, callback) {
    let listeners = listener[eventName];
    if (listeners !== undefined) {
      const indexOfCallbackToRemove = listeners.indexOf(callback);
      if (indexOfCallbackToRemove !== -1) {
        listeners[indexOfCallbackToRemove] = listeners[listeners.length - 1];
        listeners.pop();
      } else
        throw new RangeError(
          `${callback.name} isn't listening to ${eventName}.`
        );
    } else throw new RangeError(`${eventName} no listeners to remove.`);
  }
}
	
 class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
  }
  play() {
    this.emit('playing');
  }
  pause() {
    this.emit('paused');
  }
  resume() {
    this.emit('resume');
  }
  addCast(cast) {
    this.cast = this.cast.concat(cast);
    }
}

  class Logger {
    constructor() {}

    log(info) {
      console.log(info);
    }
  }
const Watchmen = new Movie('Watchmen', 2009, 215);
const Blade = new Movie('Blade Runner 2049', 2017, 164);
const Orange = new Movie('Clockwork orange', 1971, 137);

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const otherCast = [
new Actor('Paul Winfield', 50),
new Actor('Michael Biehn', 50),
new Actor('Linda Hamilton', 50)
];

const social = {
  share(friendName) {
    console.log(`${friendName} shares ${this.title}`);
  },
  like(friendName) {
    console.log(`${friendName} likes ${this.title}`);
  }
};

terminator.addCast(arnold);
terminator.addCast(otherCast);

const logger = new Logger();

 function logPlay() {
  logger.log("output: The 'play' event has been emitted");
}

const eventEmitter = new EventEmitter();
eventEmitter.on('play', logPlay);

 terminator.play();

 eventEmitter.off('play', logPlay);


terminator = Object.assign(terminator, social);
terminator.share('Quemal guiso');