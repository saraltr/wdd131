const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector("#products");

if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.name;

        select.appendChild(option);
    });
}


const form = document.querySelector(".productForm");
if (form) {
    form.addEventListener("submit", () => {
        let numReviews = Number(localStorage.getItem("numReviews")) || 0;
        numReviews++;
        localStorage.setItem("numReviews", numReviews);
    });
}

const reviewNum = document.querySelector("#reviewNum");
if (reviewNum) {
    const numReviews = Number(localStorage.getItem("numReviews")) || 0;
    reviewNum.textContent = numReviews;
    console.log(Number(localStorage.getItem("numReviews")));
}