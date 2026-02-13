const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector(".navigation");

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
});

const year = document.querySelector("#currentyear")

const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;
