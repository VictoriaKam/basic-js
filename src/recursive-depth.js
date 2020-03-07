module.exports = class DepthCalculator {
    calculateDepth(arr, startDepth = 1) {
        let mediumDepth = startDepth;
	let finalDepth = 1;
	for (let i=0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
		  mediumDepth = this.calculateDepth(arr[i], startDepth + 1);
		  if (mediumDepth > finalDepth) {
			  finalDepth = mediumDepth;
		  }
	  }
	}
	    if (mediumDepth > finalDepth) {
		    finalDepth = mediumDepth;
	    }
	    return finalDepth;
    }
};
