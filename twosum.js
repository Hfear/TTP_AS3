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

  
        if(nums.includes(compliment))
        {
            if(!(i === compliment))
             {return [nums.indexOf(i),nums.indexOf(compliment)];}
             
        }
  
    }
  
    return (null);
  
}

module.exports = twosum; 