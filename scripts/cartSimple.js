"use strict"; //Zorgt ervoor dat het script strict checkt (https://www.w3schools.com/js/js_strict.asp)

/*
#################################################################
# Simplified cart management script                             #
# Valt buiten individuele assessment in overleg met Kenneth :)  #
#################################################################
*/


/* 
Sla alle producten op in een array van objecten. Elk item in deze array heeft de volgende values:
name, description, prices en image.
*/

const products = [
  {
    name: "Kaas1",
    description: "Dit is kaas1",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas2",
    description: "Dit is de kaas2",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    title: "",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
  {
    name: "Kaas1",
    description: "Lorim upsim",
    variants: [
      {name: "1 kilo", price: 30},
      {name: "3 kilo", price: 80},
      {name: "Halve wiel - avg. 6 kilo", price: 150},
      {name: "Heel wiel - avg. 12 kilo", price: 275},
    ],
    
    image: "https://media.nu.nl/m/un2xpm3ag029_wd1280.jpg/steeds-minder-gaten-in-kaas-schone-melk.jpg"
  },
];

var cart = [];

//Onload event for initCart
window.addEventListener("load", readCart);

function readCart(){
  var data = localStorage.getItem("cart"); //Get data/json array string from localStorage
  if(data){//Check of er iets terug komt (localStorage entry bestaat)
    cart = JSON.parse(data); //Verander de JSON string in een javascript array en sla het op in de globale cart array
  }
}

function saveCart(){
  var jsonString = JSON.stringify(cart); //Verander javascript array in JSON array string
  localStorage.setItem("cart", jsonString); //Plaats het in de cookie
}

function addToCart(productId, variantId){
  //Check of product and pricing bestaat in producten
  if(products[productId]){
    if(products[productId].variants[variantId]){
      var result = getVariantFromCart(productId, variantId); //Check of het product al in de cart zit

      if(result){
        result.amount++; //Als het bestaat doe de amount + 1
      }else{
        //Verkrijg product van product array en maak een copy
        var product = products[productId];
        var productCopy = {...product}; //door {...value} te doen maak je een kopie dit om te voorkomen dat wij products variable aanpassen
        
        productCopy.productId = productId; //Sla ook het productId op
        productCopy.variantId = variantId; //Sla ook het variantId op
        productCopy.amount = 1; //Sla op dat er 1 wordt besteld
        
        cart.push(productCopy);//Voeg het product toe aan de array
      }

      saveCart();//Sla het direct op in de cookie
    }else{
      alert("Variant doesn't exists!"); //Geef error
    }
  }else{
    alert("Product doesn't exists!"); //Geef error
  }
}

function clearCart(){
  cart = [];
  saveCart();
}

function removeFromCart(productId, variantId){
  //Check of product and pricing bestaat in producten
  if(products[productId]){
    if(products[productId].variants[variantId]){
      delete products[productId].variants[variantId];
      saveCart();
    }else{
      alert("Variant doesn't exists!"); //Geef error
    }
  }else{
    alert("Product doesn't exists!"); //Geef error
  }
}

function getVariantFromCart(productId, variantId){
  for(let cartItem of cart){//Loop door alle cart items
    if(cartItem.productId === productId && cartItem.variantId === variantId){//Check of het id gelijk is aan het id wat wij zoeken
      return cartItem; //Zo ja return
    }
  }

  return false; //Als de loop is doorlopen (niks gevonden) return false;
}