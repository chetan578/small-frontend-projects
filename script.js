function isEven(num)
{ 
	if(num%2===0)
	{
return true; 
}
else {
return false ;
}
}


/*var hello=isEven(2);
var bye=isEven(5);
console.log(hello);
console.log(bye);
*/


function factorial(num) {
	if(num===1)
	{
		return 1;
	}
	return num*factorial(num-1);
}
/*var hello = factorial(5);
console.log(hello);
*/


function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    return myString;
}
/*var yes=kebabToSnake("hello-world");
console.log(yes);*/