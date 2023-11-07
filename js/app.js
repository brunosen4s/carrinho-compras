let totalPrice;
limpar();
function adicionar(){
    let product = document.getElementById('produto').value;
    let nameProduct = product.split('-')[0];
    let valueProduct = product.split('R$')[1];
    let quantity = document.getElementById('quantidade').value;
    let price = quantity*valueProduct;
    totalPrice += price;
   
    let trolley = document.getElementById('lista-produtos');
    trolley.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantity}x </span>${nameProduct}<span class="texto-azul">R$${price}</span>
  </section>`;
  let total = document.getElementById('valor-total');
  total.textContent = `R$${totalPrice}`
  document.getElementById('quantidade').value = ' ';
}

function limpar(){
    totalPrice = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    
}