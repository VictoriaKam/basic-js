module.exports = function repeater(str, options) {
    let arr = [];
    let secondArr = [];
    let thirdArr = [];
    let k = '';
    if (typeof(options.addition) !== 'undefined') {
	    if (typeof(options.addition) !== 'string') {
		    String(options.addition);
	    }
	    if (options.addition === null) {
		    options.addition = 'null';
	    }
	    if (typeof(options.additionRepeatTimes) === 'undefined') {
		    options.additionRepeatTimes = 1;
	    }
	    for (let n = 0; n < options.additionRepeatTimes; n++) {
		    thirdArr.push(options.addition);
	    }
	    if (typeof(options.additionSeparator) !== 'undefined') {
		    k = thirdArr.join(`${options.additionSeparator}`);
	    } else {
		    k = thirdArr.join('|');
	    }
    }
	if (typeof(str) !== 'string') {
		String(str);
	}
	if (str === null) {
		str = 'null';
	}
	if (k.length !== 0) {
		secondArr.push(str, k);
	} else {
		secondArr.push(str);
	}
	let f = secondArr.join('');
	if (typeof(options.repeatTimes) === 'undefined') {
		options.repeatTimes = 1;
	}
	for (let i = 0; i < options.repeatTimes; i++) {
		arr.push(f);
	}
	if (typeof(options.separator) !== 'undefined') {
		return arr.join(`${options.separator}`);
	} else {
		return arr.join('+');
	}
};
  
