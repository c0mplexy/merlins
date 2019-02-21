////API POTS
var products = {
  "potions": {
    "1": {
      "id": 1,
      "name": "Aging Potion",
      "image": "files/images/potions/aging-potion.png",
      "price": 29.99,
      "effect": "Causes the drinker to advance in age",
      "ingredients": [
        "Red Wine",
        "Prune Juice",
        "Hairy Fungus",
        "Tortoise Shell",
        "Caterpillar",
        "Bat Tongue"
      ]
    },
    "2": {
      "id": 2,
      "name": "Bulgeye Potion",
      "image": "files/images/potions/bulgeye-potion.png",
      "price": 19.99,
      "effect": "It affects one's eyes, causing them to swell",
      "ingredients": [
        "Beetle eyes",
        "Eel eyes"
      ]
    },
    "3": {
      "id": 3,
      "name": "Dragon Tonic",
      "image": "files/images/potions/dragon-tonic.png",
      "price": 64.99,
      "effect": "A tonic used to cure sick dragons",
      "ingredients": [
        "Eagle Owl feathers",
        "Peacock feathers",
        "Giant Purple Toad warts"
      ]
    },
    "4": {
      "id": 4,
      "name": "Love Potion",
      "image": "files/images/potions/love-potion.png",
      "price": 29.99,
      "effect": "The one who drinks it falls deeply in love with the first person they see",
      "ingredients": [
        "Petals from a red rose",
        "Essence of violet",
        "Canary flight and down feathers",
        "Newt eyes"
      ]
    },
    "5": {
      "id": 5,
      "name": "Polyjuice Potion",
      "image": "files/images/potions/polyjuice-potion.png",
      "price": 99.99,
      "effect": "Allows the drinker to assume the form of someone else",
      "ingredients": [
        "Lacewing flies",
        "Leeches",
        "Powdered bicorn horn",
        "Knotgrass",
        "Fluxweed",
        "Shredded Boomslang skin"
      ]
    },
    "6": {
      "id": 6,
      "name": "Sleeping Draught",
      "image": "files/images/potions/sleeping-draught.png",
      "price": 14.99,
      "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
      "ingredients": [
        "Sprigs of Lavender",
        "Measures of Standard Ingredient",
        "Blobs of Flobberworm Mucus",
        "Valerian sprigs"
      ]
    }
  }
};



////ABRIR E FECHAR LBOX
var lightbox = document.getElementById("overlay");
var img = document.getElementById("lbImage");
var ingredient = document.getElementById("potIngred");
var price = document.getElementById("potPrice");


function chamar_lightbox(component) {
     ingredient.innerHTML = "";
     var id = component.getAttribute("potID");
     lightbox.setAttribute('lbStatus','visible');
     img.setAttribute("src",products.potions[id]["image"]);
     document.getElementById("potName").innerHTML = products.potions[id]["name"];
     document.getElementById("potDesc").innerHTML = products.potions[id]["effect"];
     document.getElementById("potPrice").innerHTML = products.potions[id]["price"];
     
      for (index = 0; index < products.potions[id].ingredients.length; ++index) {
          ingredient.innerHTML += "<li>" + products.potions[id].ingredients[index] + "</li>";
      }
     document.getElementById("lightboxDisplay").classList.toggle("animated");
};

function fechar_lightbox() {
     lightbox.setAttribute('lbStatus','hidden');
     document.getElementById("lightboxDisplay").classList.toggle("animated");
};








