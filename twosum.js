// Description: Given an array of integers nums and a target integer target, return indices
//  of the two numbers such that they add up to the target.

function twosum(nums,target)
{
    let compliment; 

    if(nums.length <= 1)
  {
    throw new Error('array length too small');
  }
    for (let i of nums)
    {
  
        compliment = target - i; 
        //let sum = parseInt(i) + parseInt(compliment);
  
        //console.log(i + " + " + compliment + " = " +  sum);
  
        if(nums.includes(compliment))
        {
             return (true);
             
        }
  
    }
  
    return (false);
  
}

module.exports = twosum; 