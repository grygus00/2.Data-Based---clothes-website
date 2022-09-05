const urlParams = new URLSearchParams(window.location.search);
const productBrand = urlParams.get("brandname");

let product_num = 100;
const url = `https://kea-alt-del.dk/t7/api/products?brandname=${productBrand}&limit=${product_num}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(function (data) {
    dataReceived(data);
  });

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProdTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".smallProduct h3").textContent =
    product.productdisplayname;
  clone.querySelector(
    "a .subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  clone.querySelector(".discounted .jp").textContent = `NEW PRICE: ${Math.floor(
    product.price - product.price * (product.discount / 100)
  )}  DKK`;

  clone.querySelector(
    ".smallProduct img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  clone.querySelector(
    ".discounted p:last-child"
  ).textContent = `-${product.discount}%`;
  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    clone.querySelector("article").classList.add("onSale");
    clone.querySelector(
      ".price"
    ).textContent = `Prev. price ${product.price} DKK`;
  } else {
    clone.querySelector(".price").textContent = `${product.price} DKK`;
  }

  clone.querySelector(".smallProduct a").href = `product.html?id=${product.id}`;

  const parent = document.querySelector("main");
  parent.appendChild(clone);

  // const urlParams = new URLSearchParams(window.location.search);
  // const gender = urlParams.get("linkId");
}
