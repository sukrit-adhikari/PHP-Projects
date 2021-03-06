	//<![CDATA[
	/*
	
	Copyright (c) 2006. All Rights reserved.
	
	If you use this script, please email me and let me know, thanks!
	
	Andrew Hedges
	andrew (at) hedges (dot) name
	
	If you want to hire me to write JavaScript for you, see my resume.
	
	http://andrew.hedges.name/resume/
	
	*/
	
	// calculate the Levenshtein distance between a and b, fob = form object, passed to the function

	levenshteinenator = function(a,b) {
		var cost;
		
		// get values
//		var a = fob['string_a'].value;
		var m = a.length;
		
//		var b = fob['string_b'].value;
		var n = b.length;
		
		// make sure a.length >= b.length to use O(min(n,m)) space, whatever that is
		if (m < n) {
			var c=a;a=b;b=c;
			var o=m;m=n;n=o;
		}
		
		var r = new Array();
		r[0] = new Array();
		for (var c = 0; c < n+1; c++) {
			r[0][c] = c;
		}
		
		for (var i = 1; i < m+1; i++) {
			r[i] = new Array();
			r[i][0] = i;
			for (var j = 1; j < n+1; j++) {
				cost = (a.charAt(i-1) == b.charAt(j-1))? 0: 1;
				r[i][j] = minimator(r[i-1][j]+1,r[i][j-1]+1,r[i-1][j-1]+cost);
			}
		}
		
		return r[m][n]; // returns distance value
//		return r; // return array itself so we can separate display code from algorithm
	}
	
	// return the smallest of the three values passed in
	minimator = function(x,y,z) {
		if (x < y && x < z) return x;
		if (y < x && y < z) return y;
		return z;
	}
	
	getLevenshteinenated = function(fob) {
		// start timer
		var start = (new Date).getTime();
		
		// get distance
		var distArray = levenshteinenator(fob);
		var dist = distArray[distArray.length-1][distArray[distArray.length-1].length-1];
		
		// stop timer
		var stop = (new Date).getTime();
		
		// display distance
		fob['result'].value = dist;
		
		// display elapsed time
		fob['elapsed'].value = stop - start;
		
		// display table
		var html = '<table>';
		for (var r = 0; r < distArray.length; r++) {
			html += '<tr>';
			
			for (var c = 0; c < distArray[distArray.length-1].length; c++) {
				html += '<td>'+distArray[r][c]+'<\/td>';
			}
			
			html += '<\/tr>';
		}
		html += '<\/table>';
		document.getElementById('resultHTML').innerHTML = html;
	}
	
	

