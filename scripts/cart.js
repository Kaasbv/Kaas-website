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


//Read cart first
readCart();

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
  //Check of product and variant bestaat in cart
  for(let cartIndex = 0; cartIndex < cart.length; cartIndex++){//Loop door cart
    let cartItem = cart[cartIndex]; //verkrgijg cart item
    if(cartItem.productId === productId && cartItem.variantId === variantId){ //Check of het is wat wij zoeken
      cart.splice(cartIndex, 1); //Verwijder het item uit de array
      saveCart(); //Sla de cart op
      return; //Exit de functie
    }
  }

  alert("Can't find cart item to delete!"); //Als er geen exit is geweest geef error
}

function getVariantFromCart(productId, variantId){
  for(let cartItem of cart){//Loop door alle cart items
    if(cartItem.productId === productId && cartItem.variantId === variantId){//Check of het id gelijk is aan het id wat wij zoeken
      return cartItem; //Zo ja return
    }
  }

  return false; //Als de loop is doorlopen (niks gevonden) return false;
}

function setEvents(){
  var amountInputs = document.querySelectorAll(".cart-amount input");
  
  for(var inputElement of amountInputs){
    inputElement.addEventListener("change", updateAmount);
  }

  var trashes = document.querySelectorAll(".cart-trash");

  for(var trashELement of trashes){
    trashELement.addEventListener("click", removeCartEvent);
  }
}

function removeCartEvent(event){
  let inputElement = event.target;
  let cartElement = inputElement.parentElement.parentElement;
  let cartId = cartElement.dataset.id;

  removeFromCart(cart[cartId].productId, cart[cartId].variantId);

  renderCart();
}

function updateAmount(event){
  let inputElement = event.target;
  let cartElement = inputElement.parentElement.parentElement;
  let cartId = cartElement.dataset.id;

  let newValue = inputElement.value;
  
  if(newValue === "0"){
    removeFromCart(cart[cartId].productId, cart[cartId].variantId);
  }else{
    cart[cartId].amount = inputElement.value;
  }
  //Update
  saveCart();
  //renderCart again
  renderCart();
}

function renderCart(){
  var html = "";
  var count = 0;
  for(let cartItem of cart){
    var price = cartItem.variants[cartItem.variantId].price * cartItem.amount;

    html += `
      <div data-id="${count++}">
        <img src="${cartItem.image}">
        <div class="cart-productinfo">
          <h2>${cartItem.name} - ${cartItem.variants[cartItem.variantId].name}</h2>
          <p>${cartItem.description}</p>
        </div>
        <div class="cart-amount">
          <span>Amount: </span>
          <input min="0" type="number" value="${cartItem.amount}">
        </div>
        <div class="cart-price">
          <span>${price}$</span>
          <img class="cart-trash" src="images/trash.png">
        </div>
      </div>
    `;
  }
  document.querySelector("#cart-items").innerHTML = html;

  //Calculate total
  var total = 0;
  var totalElement = document.querySelector("#cart-total");
  for(let cartItem of cart){
    total += cartItem.variants[cartItem.variantId].price * cartItem.amount;
  }

  totalElement.innerHTML = total + "$";

  setEvents();
}