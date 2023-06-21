 let cart = [{item : 'cheese', quantity:2}];

 console.log(cart);

 function addToCart(item, quantity)
 {
    let res = {item, quantity}
   cart.push(res);
   return cart; 
 }

 function removeFromCart(item, amt)
 {

    //searching for item 
    let obj = cart.find(o => o.item === item);
    
    // item not in cart
    if(obj === undefined)
    {
        return null; 
    }

    //if amt is more than current quantity
    //remove item 
    if(amt >= obj.quantity)
    {
        
    }

    //if there and not getting completley removed
    obj.quantity -= amt;
    return cart; 


 }

function calculateTotal()
{
    let sum = 0; 
    cart.forEach(o => {sum += o.quantity})
    return sum; 
}

 addToCart('meat', 4);
 removeFromCart('meat',3);
 console.log(cart);

 console.log(calculateTotal());



