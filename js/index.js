/*
Algortimo:

Steps: 
- crear un array vacio donde se alamcenaran los products
-crear una lsita de productos para mostrar al ususario
-Crear un metodo con el cual pueda filtarse los productos por busqueda
-crear una funcionalidad para que cada producto se agregue al carrito
-almacenar un copia en una base de datos local 
*/

const buttonClick = document.querySelector("#addCart");
const containerProducts = document.querySelector("div#products");
const cart = [JSON.parse(localStorage.getItem("myCart"))];

const Iva = 1.25;

const products = [
  {
    nameP: "Iphone13-Mini",
    id: 2,
    price: 85000,
    category: "MobilePhone",
    image: `📱`,
  },

  {
    nameP: "Printer",
    id: 3,
    price: 12000,
    category: "Accessory",
    image: `🖨`,
  },

  {
    nameP: "Mouse-Cw905 RGB",
    id: 4,
    price: 12000,
    category: "computer",
    image: `🖱`,
  },
  {
    nameP: "game controller 3.5mm",
    id: 5,
    price: 22000,
    category: "computer",
    image: `🎮`,
  },
  {
    nameP: "ReDragon- k552 Negro",
    id: 6,
    price: 50000,
    category: "computer",
    image: `⌨`,
  },
  {
    nameP: "Samsung galaxy A54",
    id: 7,
    price: 120000,
    category: "mobilePhone",
    image: "📲",
  },
  {
    nameP: "WebCam HD pro c920",
    id: 8,
    price: 80000,
    category: "computer",
    image: "📷",
  },
  {
    nameP: "Notebook-max",
    id: 9,
    price: 200000,
    category: "computer",
    image: "💻",
  },
];

function createCard(product) {
  return `  <div class="products">
             <div src="#" alt="img">${product.image}
             <p class="titleProduct">${product.nameP}</p>
             <p><span id="price"></span>$ ${product.price}</p>
             <button id="${product.id}" class="addCart">add to cart</button>
</div>`;
}

function readCards() {
  if (products.length > 0) {
    containerProducts.innerHTML = "";
    products.forEach(
      (product) => (containerProducts.innerHTML += createCard(product))
    );

    if (containerProducts) {
      containerProducts.innerHTML = "";
      products.forEach(
        (product) => (containerProducts.innerHTML += createCard(product))
      );
    } else {
      console.error("Error: Container not found");
    }
  }
}

readCards();

function showLetter() {
  let value1 = localStorage.getItem("myCart");
  console.table(value1.toString());
}

showLetter();


 let tConvert = JSON.parse(localStorage.getItem("myCart"));


function calculateTotalPrice() {
  if (tConvert.length === undefined) {
    console.log("the cart is empty.");
    return;
  } else {
    const totalPrice = tConvert.reduce((total, product) => {
      const priceWithIva = product.price * Iva;
      return total + priceWithIva;
    }, 0);

    console.table("Precio total del carrito: $" + totalPrice);
  }
}

//adding products in cart

function activateClickInButtons() {
  const addProduct = document.querySelectorAll("button.addCart");
  addProduct.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.id);
      const productSelected = products.find((p) => p.id === id);
      cart.push(productSelected);
      localStorage.setItem("myCart", JSON.stringify(cart));
    });
  });
}
activateClickInButtons();


//cart

// function displayCartProducts() {
//   const list = document.getElementById("listProducts");

//   if (!list) {
//     console.error("Error: Element with ID 'listProducts' not found");
//     return;
//   }

//   list.innerHTML = "";
//   cart.forEach((product) => {
//     const priceWithIva = product.price * Iva;
//     const productContainer = document.createElement("div");
//     productContainer.classList.add("cart-product");
//     productContainer.innerHTML = `
//       <p class="product-name">${product.nameP}</p>
//       <p class="product-price">Price: $${priceWithIva .toFixed(2)}</p>
//     `;

//     list.appendChild(productContainer);
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   displayCartProducts();
// });