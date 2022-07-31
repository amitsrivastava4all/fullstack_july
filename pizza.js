const events = require('events');
const eventEmitter = new events.EventEmitter();
const orderPizza = ()=>{
    console.log('Pizza has been Order');
    eventEmitter.emit('payment',1000);
}
eventEmitter.on('order', orderPizza);
eventEmitter.on('payment', (amount)=>{
    console.log('Payment Rec ', amount);
    eventEmitter.emit('deliever', 'ShyamKumar');
});
eventEmitter.on('deliever', (delBoyName)=>{
    console.log('Del By ', delBoyName);
});
eventEmitter.emit('order');


