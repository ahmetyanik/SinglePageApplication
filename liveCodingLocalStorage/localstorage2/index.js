const cart = document.querySelector('#cart')
const restoredItems = localStorage.getItem('cart')
const cartItems = restoredItems ? JSON.parse(restoredItems) : []

if(cartItems.length) {
  cartItems.forEach(item => {
    createItem(item)
  })
}

function addToCart(e) {
  const product = e.target.parentNode.querySelector('a').innerHTML
  createItem(product)
  cartItems.push(product)
  // convert items array to string
  const itemsStr = JSON.stringify(cartItems)
  localStorage.setItem('cart', itemsStr)
}

function createItem(product) {
  const li = document.createElement('li')
  li.innerHTML = product
  cart.appendChild(li)
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', addToCart)
})