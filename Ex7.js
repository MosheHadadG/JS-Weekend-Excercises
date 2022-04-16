// Filter 
const filter = function(array, callback) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		let value = array[i];
		let index = i;
		if (callback(value, index)) {
			newArray.push(value);
		} 
    else {
			continue;
		}
	}
}

// forEach
const forEach = function(array, callback) {
	for (let i = 0; i < array.length; i++) {
		let value = array[i];
		let index = i;
		callback(value, index);
	}
}

// Map
const map = function(array, callback){
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		let value = array[i];
		let index = i;
		newArray.push(callback(value, index));
 }
}
