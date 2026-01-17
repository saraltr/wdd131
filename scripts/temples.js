const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector(".navigation");

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
});
