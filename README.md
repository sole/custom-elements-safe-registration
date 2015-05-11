# safe-register-element

> A safe(r) way of registering custom elements 

Currently, if you register a custom element twice you will get a `NotSupportedError: Operation is not supported` or something of the sort because the registry doesn't want you to register the element twice, for obvious reasons.

But sometimes you might be using an element that requires other custom elements to be registered beforehand. Currently there's no way to know if an element has been registered already, it's as if the registry is "one way only". So your best bet is to wrap the registration in a try..catch. But you don't want to be copying and pasting that code all the time, do you?

This little module will help you avoid repetition. Use it instead of directly calling `document.registerElement`:

```javascript
var safeRegisterElement = require('safe-register-element');

// safeRegisterElement(type, prototype);
// e.g.:
safeRegisterElement('custom-name', customElementPrototype);
```

If an exception is thrown, it will be caught instead of breaking your code, and an error message will be output to the console. Watch out for these!
