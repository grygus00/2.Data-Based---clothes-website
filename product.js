const urlParams = new URLSearchParams(window.location.search);
const productNum = urlParams.get("id");

console.log(productNum);

const url = `https://kea-alt-del.dk/t7/api/products/${productNum}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .categoryname").textContent =
    product.articletype;
  document.querySelector(".breadcrumbs .brandname").textContent =
    product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(".purchaseBox .categoryname").textContent =
    product.articletype;
  document.querySelector(".purchaseBox .brandname").textContent =
    product.brandname;
  document.querySelector(".purchaseBox .productname").textContent =
    product.productdisplayname;
  document.querySelector(".left_grid .description").textContent =
    product.description;
  document.querySelector(".left_grid .basecolour").textContent =
    product.basecolour;
  document.querySelector(".left_grid .id").textContent = product.id;
  document.querySelector(".right_grid .brandname").textContent =
    product.brandname;
  document.querySelector(".right_grid .brandbio").textContent =
    product.brandbio;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}
