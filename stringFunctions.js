
function reverseString(str)
{
    let reversed = [];

    for( let i = str.length-1; i >=0; i--)
    {
        reversed.push(str[i]);
    }

    return reversed.join("");

}

function isPalindrome(str)
{
    
 for(let i =0 ; i <str.length; i++)
 {
    if(!(str[i] === str[str.length-(1+i)]))
    {return false;}
 }

 return true; 

}

module.exports ={reverseString, isPalindrome};