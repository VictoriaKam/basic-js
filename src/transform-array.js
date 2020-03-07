module.exports = function transform(arr) {
	let newArr = [];
	if (!Array.isArray(arr)) {
		throw new Error();
	}
	else {
	if (arr.length == 0) {
		return arr;
	}
        for (let i=0; i < arr.length; i++) {
	    if (arr[i] === '--discard-next') {
		    i++;
	    } else if (arr[i] === '--discard-prev') {
			    newArr.pop();
	    } else if (arr[i] === '--double-next') {
		    if (arr[i+1] != undefined) {
			    newArr.push(arr[i+1]);
		    }
	    } else if (arr[i] === '--double-prev') {
		    if (arr[i-1] != undefined) {
			  newArr.push(arr[i-1]);
		    }
	    }
		else {
	            newArr.push(arr[i]);
	    }
        }
    } 
    return newArr;
}
