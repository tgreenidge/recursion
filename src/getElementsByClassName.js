// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// 

var getElementsByClassName = function(className){
  // use document.body, element.childNodes, element.classList
  // use childnodes to get info
  //"The Element.classList read-only property returns a live DOMTokenList of the class attributes of the element."
  //"Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className."
  // your code here



	 var elementsWithClassName = [];

	  getMoreWithClassName(document.childNodes);

	  
	  function getMoreWithClassName(childrenNodes) {
	    for (var i = 0; i < childrenNodes.length; i++) {
	      if (hasClassName(childrenNodes[i])) {
	        elementsWithClassName.push(childrenNodes[i]); 
	      }
	      if (childrenNodes[i].childNodes) {
	        getMoreWithClassName(childrenNodes[i].childNodes); 
	      }
	    }
	  }

	  function hasClassName(node) {
	    var nodeClasses = node.classList;
	    
	    var foundClassName = false;
	    if (nodeClasses) {
	      for (var i = 0; i < nodeClasses.length; i++) {
	        if (className == nodeClasses[i]) {
	          foundClassName = true;
	        }
	      }
	    }
	    return foundClassName;
	  }
	  return elementsWithClassName;

		
};



