fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => {
    const products = data;

    products.forEach(product => {
      if (product.price >= 100) {
        product.discount = "30%";
      }
    });

    console.log(products);
  })
  .catch(error => {
    console.log('Đã xảy ra lỗi:', error);
  });
