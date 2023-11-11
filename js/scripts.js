var tempMoney = 25000;
var Money = JSON.parse(localStorage.getItem('Money')) || []; //also temporary

// name of characters
const reimu = "Reimu Hakurei";
const marisa = "Marisa Kirisame";
const sakuya = "Sakuya Izayoi";
const remilia = "Remilia Scarlet";
const patchouli = "Patchouli Knowledge";
const cirno = "Cirno";

//desc of characters
const reimuDesc = "Reimu Hakurei (博麗　霊夢 Hakurei Reimu) is the main protagonist of the Touhou Project series along with the deuteragonist, Marisa Kirisame. As the shrine maiden of the Hakurei Shrine, she manages the Hakurei Border of Gensokyo and exterminates troublesome youkai."
const marisaDesc = "Marisa Kirisame (霧雨　魔理沙 Kirisame Marisa) is an ordinary human magician who specializes in light and heat magic and currently resides in the Forest of Magic. She has a compulsive mania for collecting things, and is considered to be the deuteragonist of the Touhou Project series along with the main protagonist, Reimu Hakurei."
const sakuyaDescription = "Sakuya Izayoi (十六夜　咲夜 Izayoi Sakuya) is the Chief Maid who serves Remilia Scarlet, the head of the Scarlet Devil Mansion. She is the only human living in the Scarlet Devil Mansion.";
const remiliaDescription = "Remilia Scarlet (レミリア・スカーレット Remiria Sukāretto) is the main antagonist of Embodiment of Scarlet Devil. She's a vampire and the owner and head of the Scarlet Devil Mansion, the mistress of Sakuya Izayoi, Hong Meiling and the fairy maids. She's also the older sister (and guardian) of Flandre Scarlet.";
const patchouliDescription = "Patchouli Knowledge (パチュリー・ノーレッジ Pachurii Noorejji) is a witch and resident of the Scarlet Devil Mansion in the library. She's friends with the mistress of the house, Remilia Scarlet, and acts as resident librarian. She's known as a highly capable, experienced, and studious magician, usually found researching the countless tomes within the house library. But her great abilities are offset by her poor health, caused by long-time reclusivity and asthma.";
const cirnoDescription = "Cirno (チルノ Chiruno) is an ice fairy who first appeared on the second stage of Embodiment of Scarlet Devil. In comparison to other fairies, she is relatively strong; however, compared to the vast majority of Gensokyo's residents, her strength is subpar. She displays traits on par with that of a child, and stars as the main protagonist of Great Fairy Wars, and one of several protagonists in Touhou Hisoutensoku and Hidden Star in Four Seasons.";

let products = [
    {
        id: 1,
        name: "Fumo Reimu Version 1",
        stock: 30,
        price: 1150,
        categoryId: 1,
        character: reimu,
        description: reimuDesc,
        img: "https://fumo.website/img/001.jpg",
    },
    {
        id: 2,
        name: "Fumo Marisa Version 1",
        stock: 20,
        price: 1150,
        categoryId: 1,
        character: marisa,
        description: marisaDesc,
        img: "https://fumo.website/img/002.jpg",
    },
    {
        id: 3,
        name: "Fumo Sakuya Version 1",
        stock: 20,
        price: 1100,
        categoryId: 1,
        character: sakuya,
        description: sakuyaDescription,
        img: "https://fumo.website/img/004.jpg",
    },
    {
        id: 4,
        name: "Fumo Remilia Version 1",
        stock: 20,
        price: 1100,
        categoryId: 1,
        character: remilia,
        description: remiliaDescription,
        img: "https://fumo.website/img/005.jpg",
    },
    {
        id: 5,
        name: "Fumo Patchouli Version 1",
        stock: 20,
        price: 1100,
        categoryId: 1,
        character: patchouli,
        description: patchouliDescription,
        img: "https://fumo.website/img/006.jpg",
    },
    {
        id: 6,
        name: "Fumo Cirno Version 1",
        stock: 0,
        price: 1100,
        categoryId: 1,
        character: cirno,
        description: cirnoDescription,
        img: "https://fumo.website/img/014.jpg",
    },
    {
        id: 101,
        name: "Deka Fumo Reimu Kourindou Version",
        stock: 20,
        price: 1150,
        categoryId: 2,
        character: reimu,
        description: reimuDesc,
        img: "https://fumo.website/img/739.jpg",
    },
    {
        id: 102,
        name: "Deka Fumo Marisa Version 1",
        stock: 15,
        price: 1150,
        categoryId: 2,
        character: marisa,
        description: marisaDesc,
        img: "https://fumo.website/img/023.jpg",
    },
]
const categories = [
    {
        id : 1 ,
        name : "Regular Fumo"
    },
    {
        id : 2 ,
        name : "Deka Fumo"
    }
];
let carts = JSON.parse(localStorage.getItem("cart-local")) || [];
const topElements = document.getElementById("top");
if (topElements) {
    topElements.innerHTML =`<div class="portal">
    <button type="button" class="btn btn-dark" onclick="goPage('index.html')">Home</button>
    <button type="button" class="btn btn-dark" onclick="goPage('products.html')">Products</button>
    <button type="button" class="btn btn-dark" onclick="goPage('faq.html')">Trivia</button>
    <button type="button" class="btn btn-dark" onclick="goPage('contact.html')">Contact</button>
</div>
  <div class="portal">
      <p>Your money : ฿${new Intl.NumberFormat('th-TH').format(Money)}</p>
      <div class="nav-shopping-cart">
      <a href="cart.html">
        <i class="bi bi-cart-fill "></i>
      </a>
      <div class="cart-count" id="cart-count">
        ${carts.length}
      </div></div>
    </div>
<hr>`;
  if (carts.length === 0) {
    document.getElementById("cart-count").style.display = "none";
  }
}
const bottomElements = document.getElementById("bottom");
if (bottomElements) {
    bottomElements.innerHTML =`
    <footer>
    <div class="bottom">
        <div class="bottom-left">
            <span class="copyright">© I built that. :)</span>
        </div>
    </div>
    </footer>
`;}
function goPage(filepath) {
    window.location = filepath;
  }
const getProducts = (products) => {
    const productListEl =  document.getElementById("products");
    if (productListEl){
        productListEl.innerHTML = null;
    }
    for (const product of products) {
      const divEl = document.createElement("div");
      divEl.className = "product";
      divEl.innerHTML = `
        <div>
          <img src=${product.img} class="card-img-top" alt="..." onclick="goPage('./item.html?id=${product.id}')">
          <div class="card-body">
          <p class="card-title">${product.name}</p>
          <p class="card-text">Character : ${product.character}</p>
          <p class="card-text">Type : ${categories.find(c => c.id === product.categoryId).name}</p>
          <p class="card-text">Price : ฿${new Intl.NumberFormat('th-TH').format(product.price)}</p>
          <p class="card-text">Stock : ${product.stock > 0 ? product.stock : "Out of Stock"}</p>
          <p class="entrance"><button type="button" class="btn" onclick="goPage('./item.html?id=${product.id}')">Detail</button></p>
          </a>
          </div>
        </div>
      `;
  
      if(productListEl)
        productListEl.appendChild(divEl);
    }
  }
  
const searchProduct = () => {
    const text = document.getElementById("search-product").value;
    const newProduct = products.filter(p => p.name.toLowerCase().includes(text.toLowerCase()));
    getProducts(newProduct);
}
  getProducts(products);
function ProductPage() {
    const paramId = new URLSearchParams(window.location.search);
    const picture = JSON.parse(paramId.get("id"));
    const product = products.find((x) => x.id === picture);
    const text = document.getElementById("myownlifeissue");
    let pagetext = "";
    if (product.stock <= 0) {
        pagetext += `<div class="stockout"><p>Note: This item is out of stock. You can't buy this item.</p></div>
        `};
    if (text){
        pagetext += `
        <div class="item">
        <img src="${product.img}" alt="">
        <p>Name : ${product.name}</p>
        <p>Character : ${product.character}</p>
        <p>Type : ${categories.find(c => c.id === product.categoryId).name}</p>
        <p>Stock : ${product.stock > 0 ? product.stock : "Out of Stock"}</p>
        <p>Price : ฿${new Intl.NumberFormat('th-TH').format(product.price)}</p>
        <p>Character Detail : </p>
        <p>${product.description == null ? "None :(" : product.description}</p>
        <div class="buy">
            <p>Count</p>
            <input type="number" value="2" min="1" max="99" class="form-control" id="cart-input">
        </div>
        <p class="entrance buy"><button type="button" class="btn" onclick="addProductToCart(${product.id})">Add to Cart</button></p>
        </div>
    }
    `;
    document.title = product.name;
}
text.innerHTML = pagetext;
}

const addProductToCart = (productId) =>{
    const product = products.find(p => p.id === productId);
    const cart = {
      id : Math.floor(Math.random() *100000),
      productId : product.id,
      quantity : document.getElementById("cart-input").value
    };
    if (cart.quantity > product.stock || cart.quantity < 1 || carts.find(p => p.productId === product.id)) {
        if (product.stock === 0) {
            Swal.fire({
                icon: "error",
                title: "Out of Stock",
                text: "This item is out of stock. Please try again later.",
              });
            //alert("This item is out of stock. Please try again later.");
        } else if (carts.find(p => p.productId === product.id)) {
          Swal.fire({
            icon: "error",
            title: "You Already Added This Item",
            text: "If you want to buy more, you can increase the quantity in cart page.",
            showCancelButton: true,
            confirmButtonColor: "green",
            confirmButtonText: "Go to Cart",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel"
          }).then((result) => {
            if (result.isConfirmed) {
              goPage('cart.html');
            }
          });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Quantity Exceeded",
                text: "Please reduce your demanding quantity.",
              });
            //alert("The quantity you entered exceeds the stock. Please reduce your demanding quantity.");
        }
    }
    else {
        carts.push(cart)
        Swal.fire({
          title: "Item Added",
          text: "This item has been added to the cart",
          imageUrl: "/obsoletecut.png",
          imageWidth: 200,
          imageHeight: 200,
          showCancelButton: true,
          confirmButtonColor: "green",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Go to Cart",
          cancelButtonText: "Continue Investigating"
        }).then((result) => {
          if (result.isConfirmed) {
            goPage('cart.html');
          }
          else{
            goPage('products.html');
          }
        });
    }
  
    localStorage.setItem("cart-local" , JSON.stringify(carts));
};
const getCart = (carts) => {
    const cartlistEl = document.getElementById("cart-list");
    let totalPrice = 0;
    if(cartlistEl){
      cartlistEl.innerHTML = null;
    }
    for (const cart of carts) {
      const product = products.find(p => p.id === cart.productId);
      const trEl = document.createElement("tr");
      trEl.innerHTML = ` 
      <th scope="row">
      <img src=${product.img} class="img-cart" alt="">
      <p style="color: black;">${product.name}</p>
      </th>
  <td>฿${new Intl.NumberFormat('th-TH').format(product.price)}</td>
  <td >
      <input 
      min="1"
      max="${product.stock}"
      style="width: 4rem;"
      value=${cart.quantity}
      onchange="onChangeCart(${cart.id})"
      class="form-control"
      type="number"
      id ="cart-input-quantity${cart.id}"
      >
      <p style="width: 4rem; color: black">Max : ${product.stock}</p>
  </td>
  <td>฿${new Intl.NumberFormat('th-TH').format(cart.quantity * product.price)}</td>
  <td>
    <button type="button" class="btn btn-danger" style="" onclick = "removeCart(${cart.id})">
      Remove 
    </button>
  </td>
    `;
    totalPrice += cart.quantity * product.price;
      if(cartlistEl)cartlistEl.appendChild(trEl);
    }
    const buyElements = document.getElementById("buyConfirm");
    buyElements.innerHTML = `<div class="buy2">
    <p>Your money = ฿${new Intl.NumberFormat('th-TH').format(Money)}</p></div>
    <p>Total Price = ฿${new Intl.NumberFormat('th-TH').format(totalPrice)}</p></div>
    <div class="buy-confirm">
      <p class="entrance"><button type="button" class="btn" onclick="BuyConfirmation(${totalPrice})">Confirm Buy</button></p>
    </div>`
  };

getCart(carts);

const removeCart = (cartId) => {
    const newCart = carts.filter(c => c.id !== cartId);
    localStorage.setItem("cart-local", JSON.stringify(newCart));
  
    let cartlocal = JSON.parse(localStorage.getItem("cart-local")) || [];
    carts = cartlocal;
    getCart(cartlocal);
  
  };
      
  const onChangeCart = (cartId) => {
    const value = document.getElementById("cart-input-quantity" + cartId).value;
    const cart = carts.find(c => c.id === cartId);
  
    cart.quantity = value;
  
    if(cart.quantity <= 0) removeCart (cartId);
    else{
        localStorage.removeItem("cart-local" , JSON.stringify(cart));
        getCart(carts);
      };
  
    }

function BuyConfirmation(totalPrice) {
  if (carts.length < 1) {
    Swal.fire({
      icon: "error",
      title: "No Items",
      text: "No items selected.",
    });
  }
  else {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This item is out of stock. Please try again later.",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      html: `
      <div>
        <ul class="list-group">
        <li class="list-group-item"><B>Your Money</B> : ${Money}</li>
        <li class="list-group-item"><B>Total Price</B> : ${totalPrice}</li>
        <li class="list-group-item"><B>Your Money Left</B> : ${Money - totalPrice}</li>
      </ul>
    </div>
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        if (totalPrice > Money) {
          Swal.fire({
            icon: "error",
            title: "Insufficient funds.",
          })
        }
        else {
          setTimeout(onBuyConfirmed(totalPrice), 1500);
        }
      }
    });
  }
}
function onBuyConfirmed(totalPrice) {
  Money -= totalPrice;
  localStorage.setItem('Money',Money);
  localStorage.removeItem('cart-local');
  Swal.fire({
    icon: "success",
    title: "Thank you for your money.",
    text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    
  }).then(() => {
    let cartlocal = JSON.parse(localStorage.getItem("cart-local")) || [];
    carts = cartlocal;
    getCart(cartlocal);
  });
}
//debug only
function addMoney(num){
  let money = JSON.parse(localStorage.getItem('Money')) || [];
  money += num;
  localStorage.setItem('Money', money);
}
function removeMoney(num){
  let money = JSON.parse(localStorage.getItem('Money')) || [];
  money += num;
  localStorage.setItem('Money', money);
}
function setMoney(num){
  localStorage.setItem('Money', num);
}