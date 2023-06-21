
function mostWater(arr)
{
 let x,y = null;

if(arr.length < 2)
{
    return undefined;
}
x = arr[0];
 y = arr[1];

 for(let i = 2 ; i< arr.length; i++)
 {
   if(arr[i] > x)
   {
    x = arr[i];
   }
   else
   {
    if(arr[i] >= y)
    y = arr[i];
   }
    
 }
return x*y;
}

module.exports = mostWater;