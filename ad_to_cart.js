if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify([]))
    }
    setTimeout(() => {

        ready()
        console.log("Helo");
    }, 2000);
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
const removeAll = () =>{
    localStorage.removeItem("products");

    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()

}

function removeCartItem(event) {
    var buttonClicked = event.target
    // let c_value = this.parents('.cart-row').find('.cart-item-id').innerText
    // console.log(c_value)
    buttonClicked.parentElement.parentElement.remove();
    // if (JSON.parse(localStorage.getItem("products"))[i].id ==) {
    // }
    updateCartTotal()

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


var counterData = 1
function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    // var id = shopItem.getElementsByClassName('id')[0].innerText;
    // console.log(id);
    if (localStorage.getItem("products")) {
        // JSON.parse(localStorage.getItem("products")).forEach(element => {
            // if (element.id == id) {
            //     counterData++;
            //     console.log("ELEMENT KI ID", element.id)
            //     console.log("PRODUCT ID", id)
            // } else if (element.id != id) {
                // console.log("match nahi hoi elemnt ki id", element.id)
                // console.log("match nahi hoi id", id);
            // }
            
        // });
        var allProducts = JSON.parse(localStorage.getItem("products"))
        allProducts.push({ src: imageSrc, title: title, price: price })
        localStorage.setItem("products", JSON.stringify(allProducts))

    }
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

var cart_itm = ``;

if (localStorage.getItem("products")) {
    for (var i = 0; i < JSON.parse(localStorage.getItem("products")).length; i++) {
        var pd = JSON.parse(localStorage.getItem("products"))[i];
        cart_itm += `
        <div class="cart-row">
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="${pd.src}" width="100" height="100">
        <span class="cart-item-title">${pd.title}</span>  
        </div>
        <span class="cart-price cart-column">${pd.price}</span>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button"><i class="fa-solid fa-xmark"></i></button>
        </div>
        </div>`
    }
    document.getElementsByClassName('cart-items')[0].innerHTML = cart_itm;
}


function addItemToCart(title, price, imageSrc ) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            console.log('This item is already added to the cart');
            return
        }
    }

    var cartRowContents = `
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button"><i class="fa-solid fa-xmark"></i></button>
            </div>`


    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}








 
// const cartContainer = document.querySelector('.cart-container');
// const productList = document.querySelector('.product-list');
// const cartList = document.querySelector('.cart-list');
// const cartTotalValue = document.getElementById('cart-total-value');
// const cartCountInfo = document.getElementById('cart-count-info');
// let cartItemID = 1;

// eventListeners();
 
// function eventListeners(){
//     window.addEventListener('DOMContentLoaded', () => {
//         loadJSON();
//         loadCart();
//     }); 
//     document.querySelector('.navbar-toggler').addEventListener('click', () => {
//         document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
//     });
 
//     document.getElementById('cart-btn').addEventListener('click', () => {
//         cartContainer.classList.toggle('show-cart-container');
//     });
 
//     productList.addEventListener('click', purchaseProduct);
 
//     cartList.addEventListener('click', deleteProduct);
// } 
// function updateCartInfo(){
//     let cartInfo = findCartInfo();
//     cartCountInfo.textContent = cartInfo.productCount;
//     cartTotalValue.textContent = cartInfo.total;
// }
 
// function loadJSON(){
//     fetch('./furniture.json')
//     .then(response => response.json())
//     .then(data =>{
//         console.log("Log data");
//         let html = '';
//         data.forEach(product => {
//             html += `
//                 <div class = "product-item">
//                     <div class = "product-img">
//                         <img src = "${product.imgSrc}" alt = "product image">
//                         <button type = "button" class = "add-to-cart-btn">
//                             <i class = "fas fa-shopping-cart"></i>Add To Cart
//                         </button>
//                     </div>

//                     <div class = "product-content">
//                         <h3 class = "product-name">${product.name}</h3>
//                         <span class = "product-category">${product.category}</span>
//                         <p class = "product-price">$${product.price}</p>
//                     </div>
//                 </div>
//             `;
//         });
//         productList.innerHTML = html;
//     })
//     .catch(error => {
//         alert(`User live server or local server`);
//          })
// }

 
// function purchaseProduct(e){
//     if(e.target.classList.contains('add-to-cart-btn')){
//         let product = e.target.parentElement.parentElement;
//         getProductInfo(product);
//     }
// }
 
// function getProductInfo(product){
//     let productInfo = {
//         id: cartItemID,
//         imgSrc: product.querySelector('.product-img img').src,
//         name: product.querySelector('.product-name').textContent,
//         category: product.querySelector('.product-category').textContent,
//         price: product.querySelector('.product-price').textContent
//     }
//     cartItemID++;
//     addToCartList(productInfo);
//     saveProductInStorage(productInfo);
// }
 
// function addToCartList(product){
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');
//     cartItem.setAttribute('data-id', `${product.id}`);
//     cartItem.innerHTML = `
//         <img src = "${product.imgSrc}" alt = "product image">
//         <div class = "cart-item-info">
//             <h3 class = "cart-item-name">${product.name}</h3>
//             <span class = "cart-item-category">${product.category}</span>
//             <span class = "cart-item-price">${product.price}</span>
//         </div>

//         <button type = "button" class = "cart-item-del-btn">
//             <i class = "fas fa-times"></i>
//         </button>
//     `;
//     cartList.appendChild(cartItem);
// }
 
// function saveProductInStorage(item){
//     let products = getProductFromStorage();
//     products.push(item);
//     localStorage.setItem('products', JSON.stringify(products));
//     updateCartInfo();
// }
 
// function getProductFromStorage(){
//     return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
 
// }
 
// function loadCart(){
//     let products = getProductFromStorage();
//     if(products.length < 1){
//         cartItemID = 1;  
//     } else {
//         cartItemID = products[products.length - 1].id;
//         cartItemID++; 
//     }
//     products.forEach(product => addToCartList(product));
 
//     updateCartInfo();
// }
 
// function findCartInfo(){
//     let products = getProductFromStorage();
//     let total = products.reduce((acc, product) => {
//         let price = parseFloat(product.price.substr(1)); 
//         return acc += price;
//     }, 0);  

//     return{
//         total: total.toFixed(2),
//         productCount: products.length
//     }
// }
 
// function deleteProduct(e){
//     let cartItem;
//     if(e.target.tagName === "BUTTON"){
//         cartItem = e.target.parentElement;
//         cartItem.remove(); 
//     } else if(e.target.tagName === "I"){
//         cartItem = e.target.parentElement.parentElement;
//         cartItem.remove(); 
//     }

//     let products = getProductFromStorage();
//     let updatedProducts = products.filter(product => {
//         return product.id !== parseInt(cartItem.dataset.id);
//     });
//     localStorage.setItem('products', JSON.stringify(updatedProducts));  
//     updateCartInfo();
// }
