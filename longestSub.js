
function longestSub(str)
{
    let seen = [];
   
    for(let i = 0; i <str.length; i++)
    {
        if (!seen.includes(str[i]))
        {seen.push(str[i]);}
        else
        {return i }
    }

}
module.exports = longestSub; 
