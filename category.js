fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(loopMe);

function loopMe(data) {
  // console.log(data);
  data.forEach(showCategoryName);
}

function showCategoryName(oneBrand) {
  console.log(oneBrand);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = oneBrand.brandname;
  clone.querySelector(
    "a"
  ).href = `productlist.html?brandname=${oneBrand.brandname}`;

  const parent1 = document.querySelector("#letter_a ol");
  parent1.appendChild(clone);
}
