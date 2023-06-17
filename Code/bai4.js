async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Đã xảy ra lỗi:", error);
  }
}

fetchData();
