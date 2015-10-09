//Ellen Thomson week 7 exercise 7.2


//In an external JavaScript file, use an onClick handler to apply the CSS class to the DIV.

//Then, try experimenting with CSS3 transitions on the property that is changed by adding the class.




function preparePage() {
	document.getElementById("mainContent").onclick = function() {
		
		if ( document.getElementById("mainContent").className == "weekseven") {
		
		} else {
			document.getElementById("mainContent").className = "weekseven";
			}
		};
}

window.onload = function() {
	preparePage();
	}		
