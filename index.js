module.exports = function safeRegistration(name, prototype) {
	try {
		document.registerElement(name, {
			prototype: prototype
		});
	} catch(e) {
		console.log('Exception when registering ' + name + '; perhaps it has been registered already?');
	}
};
