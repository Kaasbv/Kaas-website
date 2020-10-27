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
    name: "Golden dutch",
    description: "Golden Dutch: an everyday cheese that tastes how cheese should taste.",
    desciptionPoints: ["5 months old", "Firm", "Buttery", "Smooth"],
    variants: [
      {name: "1 kg", price: 30, kilo: 1},
      {name: "3 kg", price: 80, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 150, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 275, kilo: 12},
    ],
    image: "images/products/goldendutch.png"
  },
  {
    name: "Old Beiler",
    description: "Old Beiler: a cheese for special evenings.",
    desciptionPoints: ["16 months old", "Hard", "Strong-bodied", "Complex"],
    variants: [
      {name: "1 kg", price: 60, kilo: 1},
      {name: "3 kg", price: 150, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 275, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 475, kilo: 12},
    ],
    
    image: "images/products/oldbeiler.png"
  },
  {
    name: "The Brown Beiler",
    description: "The Brown Beiler: A nutty cheese.",
    desciptionPoints: ["4 months old", "Soft", "Creamy"],
    variants: [
      {name: "1 kg", price: 35, kilo: 1},
      {name: "3 kg", price: 85, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 175, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 300, kilo: 12},
    ],
    
    image: "images/products/thebrownbeiler.png"
  },
  {
    name: "The Green Beiler",
    description: "The Green Beiler: An old Cheese with rich tones of basil",
    desciptionPoints: ["12 months old", "Hard", "Salty with fresh tones", "Balanced"],
    variants: [
      {name: "1 kg", price: 50, kilo: 1},
      {name: "3 kg", price: 125, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 215, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 400, kilo: 12},
    ],
    
    image: "images/products/thegreenbeiler.png"
  },
  {
    name: "The Red Beiler",
    description: "The Red Beiler: a semi-muture cheese",
    desciptionPoints: ["10 weeks old", "Smooth"],
    variants: [
      {name: "1 kg", price: 40, kilo: 1},
      {name: "3 kg", price: 100, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 175, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 325, kilo: 12},
    ],
    
    image: "images/products/theredbeiler.png"
  },
  {
    name: "The Oaker Beiler",
    description: "The Oaker Beiler: a Cheese smoked with oak-wood",
    desciptionPoints: [],
    variants: [
      {name: "1 kg", price: 35, kilo: 1},
      {name: "3 kg", price: 85, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 175, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 300, kilo: 12},
    ],
    
    image: "images/products/theoakerbeiler.png"
  },
  {
    name: "The Beiler Duchess",
    description: "The Beiler Duchess: a honey cheese with special selected herbs",
    desciptionPoints: ["6 months old", "Smooth", "Sweet", "Complex", "Herbs: truffle, garlic, oregano"],
    variants: [
      {name: "1 kg", price: 45, kilo: 1},
      {name: "3 kg", price: 115, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 210, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 375, kilo: 12},
    ],
    
    image: "images/products/thebeilerduchess.png"
  },
  {
    name: "Young Beiler",
    description: "Young Beiler: Young cheese",
    desciptionPoints: ["4 weeks old", "Soft", "Light", "Grassy"],
    variants: [
      {name: "1 kg", price: 25, kilo: 1},
      {name: "3 kg", price: 60, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 110, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 200, kilo: 12},
    ],
    
    image: "images/products/youngbeiler.png"
  },
  {
    name: "Young Beiler (lean)",
    description: "Young Beiler (lean): Young cheese",
    desciptionPoints: ["4 weeks old", "Soft", "Light", "Grassy", "Just 5% fat"],
    variants: [
      {name: "1 kg", price: 25, kilo: 1},
      {name: "3 kg", price: 60, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 110, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 200, kilo: 12},
    ],
    
    image: "images/products/youngbeilerlean.png"
  },
  {
    name: "Young Beiler (less salt)",
    description: "Young Beiler (less salt): Young cheese",
    desciptionPoints: ["4 weeks old", "Soft", "Light", "Grassy", "70% less salt"],
    variants: [
      {name: "1 kg", price: 25, kilo: 1},
      {name: "3 kg", price: 60, kilo: 3},
      {name: "½ wheel - ± 6 kg", price: 110, kilo: 6},
      {name: "whole wheel - ± 12 kg", price: 200, kilo: 12},
    ],
    
    image: "images/products/youngbeilerlsalt.png"
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

function renderCatalog(){
  var html = "";
  var count = 0;

  for(var product of products){//Loop door alle producten heen
    html += `
    <div data-id="${count++}" class="card">
      <img src="${product.image}">
      <h1>${product.name}</h1>
      <p class="title">
        ${product.description}
        ${renderCatalogPoints(product.desciptionPoints)}
      </p>
        <label for="weight">Choose the amount:</label>
        <select name="weight" id="weight">
          ${renderCatalogOptions(product.variants)}
        </select>
        <button class="catalog-button">Add to cart</button>
    </div>` //Voeg een volledige cart html toe aan de html variable
  }

  document.querySelector("#catalog-cards").innerHTML = html; //Zet de html in de parent
  setCatalogEvents(); //run de catalog events functie zodat de addToCart button werkt
}

function setCatalogEvents(){
  var buttons = document.querySelectorAll(".catalog-button"); //verkrijg alle catalog buttons

  for(var button of buttons){//Loopt door alle button elementen
    button.addEventListener("click", catalogCartEvent); //Zet een click event
  }
}

function catalogCartEvent(event){
  let cardElement = event.target.parentElement; //verkrijg de html parent namelijk de card div
  let select = cardElement.querySelector("select"); //Verkrijg het select html element
  let productId = cardElement.dataset.id; //Verkrijg het id van de data attribute
  //add to cart
  addToCart(productId, select.value); //voeg het product toe met variant aan de cart op basis van de value van de select
}

function renderCatalogOptions(variants){//render de variant array van de products
  var html = "";
  var count = 0;
  const kiloToPounds = 2.2046226218;
  for(var variant of variants){
    let pounds = (variant.kilo * kiloToPounds).toFixed(1);
    html += `<option value="${count++}">$ ${variant.price} - ${variant.name} (± ${pounds}lb) </option>`;
  }
  return html;
}

function renderCatalogPoints(pointsArray){//render de catalog points op basis van de descriptionPoints
  var html = "<br>"; 
  for(var point of pointsArray){
    html += `・ ${point} <br>`;
  }
  return html;
}