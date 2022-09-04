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

  const parent = document.querySelector("#letter_a ol");
  parent.appendChild(clone);
}
