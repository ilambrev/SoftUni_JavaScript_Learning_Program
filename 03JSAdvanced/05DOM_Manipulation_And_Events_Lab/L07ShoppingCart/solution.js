function solve() {
   const products = Array.from(document.querySelectorAll('.product'));
   const textAreaElement = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');
   const orderedProducts = {};

   checkoutButton.addEventListener('click', checkout);
   products.map(p => p.querySelector('.add-product').addEventListener('click', buyProduct));


   function buyProduct(e) {
      const parentElement = e.currentTarget.parentElement.parentElement;
      const productName = parentElement.querySelector('.product-title').textContent;
      const productPrice = parentElement.querySelector('.product-line-price').textContent;
      textAreaElement.value += `Added ${productName} for ${productPrice} to the cart.\n`;

      if (!orderedProducts.hasOwnProperty(productName)) {
         orderedProducts[productName] = Number(productPrice);
      } else {
         orderedProducts[productName] += Number(productPrice);
      }
   }

   function checkout(e) {
      const productsList = Object.keys(orderedProducts).join(', ');
      const totalPrice = Object.values(orderedProducts).reduce((acc, curr) => acc += curr, 0);

      textAreaElement.value += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;

      products.map(p => p.querySelector('.add-product').disabled = true);
      e.currentTarget.disabled = true;
   }
}