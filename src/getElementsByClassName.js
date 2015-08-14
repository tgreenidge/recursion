// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// 
//nodes = Array.prototype.slice.apply(document.body.childNodes); // nodes is a collectio


nodes = Array.prototype.slice.apply(document.body.childNodes);
var getElementsByClassName = function(className
){
  // use document.body, element.childNodes, element.classList
  // use childnodes to get info
  //"The Element.classList read-only property returns a live DOMTokenList of the class attributes of the element."
  //"Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className."
  // your code here
  
 //  	nodes = nodes || document.body;
	// nodesWithClassName =  (nodes[i].classList).contains(className) ;
	// elementsWithClassName = elementsWithClassName || [];

	// classNames = document.body.classList;
    
 //    for (var i = 0; i < nodes.length; i++){
    	
 //    	//elementsWithClassName = nodesWithClassName.tagname;
 //    }

  //   if(classNames.contains(className)){
  //  elementsWithClassName.push(nodes);
  // }
  	

	
	// classNames = document.body.classList;
	// console.log("CN", classNames);
 //  	console.log("NL", nodes);
  
  // Is className in names on document?


  //get elements in nodes

  //return getElementsByClassName(nodes.remove);
  return nodesWithClassName;
};



