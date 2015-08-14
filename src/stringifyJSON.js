// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  //primitive types
  /* 
  string
number
boolean
null
undefined
symbol (new in ECMAScript 2015)
*/
	if(obj === null){
		return 'null';
	}


   if (['number','boolean'].indexOf(typeof obj) !== -1){
      return String(obj);
    } 

    if(typeof obj === 'string'){
    	first = '"';
   		last = '"';
   		return  first + obj + last;
    }

    else if (['function', 'undefined', 'symbol'].indexOf(typeof obj) !== -1) {
      
   } else if( Array.isArray(obj)){
   		firstStrArray = "[" ;
   		lastStrArray = "]";
   		if (obj.length === 0){
   			return '[]';
   		}else {
   			for(var i = 0; i < obj.length; i++){
   				if(typeof obj[i] === 'number'){
   				}else{
   				obj[i] = stringifyJSON(obj[i]);
   			}
   			
   		}
   			return firstStrArray + obj + lastStrArray;	
   		}
        
   } else {
    
        
   		
     	if (Object.keys(obj).length === 0){
     		return '{}';
     	} else {
     		objArray = []; // store keys and values in array
   			var y = 0;  //ObjArrays incrementor
     		//objArray.length = Object.keys(obj).length;
     		firstStrObj = "{";
     		lastStrObj = "}";

     		for (key in obj){
          
          if(typeof obj[key] === 'undefined' || typeof obj[key] === 'function' || typeof obj[key] === 'symbol'){
            return '{}';
            
          } else if( Object.keys(obj).length === 1 ){
             if(typeof obj[key] === 'string' ){
                objArray[y]= stringifyJSON(key) + ":" + stringifyJSON(obj[key] ); 
              } else {
                objArray[y]= stringifyJSON(key) + ":" + obj[key] ;
                // not sure how to access objects like ('{"a":{"b":"c"}}')
              }
        

          } else {
          objArray[y]= stringifyJSON(key) + ":" + stringifyJSON(obj[key]) ;       
          
          } //else
           y ++;  
        } //for
          return firstStrObj + objArray + lastStrObj;
} //else obj is an object 
}
   
};

