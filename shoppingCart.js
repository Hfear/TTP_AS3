
class shoppingCart{

    constructor()
    {
        let cart = []; 
    }

 addToCart(item, quantity)
{
  this.cart.push([{item : quantity}]);

}

 removeFromCart(item, quantity)
{

// if the item is not in the cart
if (!(this.cart.some(item)))
{return; }

}

 calculateTotal()
{

}

}