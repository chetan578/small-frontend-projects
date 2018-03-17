

function printreverse(arr)
{
  for (var i=arr.length;i>=0;i--)
  {
    console.log(arr[i]);

  }

}
function isuniform(arr)
{ 
  var first=0;
  for (var i=1;i<arr.length;i++)
  {
  	if (arr[first]===arr[i])
  	{
       return true ;
  	}
  	else
  		{
  			return false ;
  		}
  }
   

}

function sum(arr)
{
var result =0;
for (var i=0;i<arr.length;i++)
{
 result += arr[i];
}
 return result;
}

function max (arr)
 { 
 	var maxi =arr[0];
  for(var i =0 ; i<arr.length; i++)
  { 
  	
    if (arr[i]>maxi)
    {
    	maxi=arr[i];
    } 
}
    return maxi ; 
}

 