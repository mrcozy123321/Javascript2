const EventEmitter = require('events')

class Emitter extends EventEmitter {
  greet(name) {
    this.emit('greet', name)
  }
}


const myEmitter = new Emitter()


// myEmitter.on('hej', () => console.log('Eventet kördes'))

// myEmitter.emit('hej')

myEmitter.on('greet', data => {
  console.log('Hej ' + data);
})

myEmitter.greet('Daniel')