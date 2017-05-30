# Installation
```
npm i --save event-util
```

# Example
```js
import event from 'event-util';
// add event listener
const ev = event.on(document, 'click', () => {

});

// remove
ev.off();
```
