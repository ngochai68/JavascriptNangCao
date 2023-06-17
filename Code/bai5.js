async function countProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();
    const products = data;
    let electronicsCount = 0;
    let jewelryCount = 0;

    products.forEach(product => {
      if (product.category === "electronics") {
        electronicsCount++;
      } else if (product.category === "jewelery") {
        jewelryCount++;
      }
    });

    console.log(`Số lượng sản phẩm trong danh mục "electronics": ${electronicsCount}`);
    console.log(`Số lượng sản phẩm trong danh mục "jewelery": ${jewelryCount}`);
  } catch (error) {
    console.log('Đã xảy ra lỗi:', error);
  }
}

countProducts();
