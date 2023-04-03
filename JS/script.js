async function getProducts() {
  let response = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const products = await response.json();

  console.log({ products });
  return products;
}

getProducts();

async function renderProducts() {
  const products = document.querySelector(".products");
  let result = await getProducts();
  products.innerHTML = result
    .map(
      ({ id, title, price, image, description, category, rating }) => `
        <li class="product">
          <h1>${title}</h1>
          <img src ='${image}'/>
          <span>${price}</span>
          <span>${description}</span>
          <span>${category}</span>
          <span>${rating}</span>
        </li>
      `
    )

    .join("");
}
renderProducts();
