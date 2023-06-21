 let cart = [{item : 'cheese', quantity:2}];

 console.log(cart);

 function addToCart(item, quantity)
 {
    let res = {item, quantity}
   cart.push(res);
   return cart; 
 }

 function remove(item, amt)
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
    obj.quantity -= amt;
    return cart; 


 }

 //cart.push({meat:4});

 addToCart('meat', 4);
 remove('ranch',3);
 console.log(cart);



