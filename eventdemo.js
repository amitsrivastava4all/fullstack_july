const events = require('events');
const eventEmitter = new events.EventEmitter();
// on is used for event register
eventEmitter.on('ring', ()=>{
    console.log('Ring Event Happens');
});
eventEmitter.on('ring', attach);
function attach(){
    console.log('Ring Event Happens2');
}
eventEmitter.on('ring', ()=>{
    console.log('Ring Event Happens3');
});

eventEmitter.once('ringonce',(val)=>{
    console.log('Ring Once...', val);
})
eventEmitter.removeAllListeners('ring');
eventEmitter.setMaxListeners(20);
console.log('MAX ', eventEmitter.getMaxListeners());
eventEmitter.emit('ring',"Amit"); // Fire the Event
eventEmitter.emit('ring');
eventEmitter.off('ring', attach);
eventEmitter.emit('ring');
eventEmitter.emit('ring');


eventEmitter.emit('ringonce');
eventEmitter.emit('ringonce');