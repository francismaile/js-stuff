function Stack() {
		this._datastore = [];
}

Stack.prototype.push = function(data) {
	this._datastore.push(data);
};

Stack.prototype.pop = function() {
	return this._datastore.pop();
};

Stack.prototype.peek = function() {
	return this._datastore[this._datastore.length-1];
};

Stack.prototype.clear = function() {
	return (this._datastore.length = 0);
};

Stack.prototype.length = function() {
	return this._datastore.length;
};

function isPal(str) {
	s = new Stack();
	for (var i = 0; i < str.length; i++) {
		s.push(str.charAt(i));
	}
	let revStr = "";
	while (s.length() > 0) {
		revStr += s.pop();
	}
	return str === revStr;
}

console.log("racecar", isPal("racecar"));
console.log("dad", isPal("dad"));
console.log("1001", isPal("1001"));
