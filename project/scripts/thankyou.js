const creationsContainer = document.querySelector(".creationsInfo");

const p = document.createElement("p");

const bouquetsCreated = localStorage.getItem("bouquetsNum");

if (bouquetsCreated != null && bouquetsCreated!= 0){
    p.textContent = `Number of bouquets created: ${bouquetsCreated}`
    creationsContainer.appendChild(p);

    const lastDate = localStorage.getItem("lastBouquetDate");

    const dateP = document.createElement("p");
    dateP.textContent = `Your most recent bouquet was created on ${lastDate}`;

    const message = document.createElement("p");
    message.textContent = "Ready to design another arrangement? Let your creativity bloom!";

    creationsContainer.appendChild(dateP);
    creationsContainer.appendChild(message);

    const btn = document.createElement("a");
    btn.href = "builder.html";
    btn.classList.add("btn");
    btn.textContent = "Create Your First Bouquet";
    creationsContainer.appendChild(btn);

} else {
    p.innerHTML = "No bouquet created yet. <br> Your bouquet journey starts here. Create your first one!"
    creationsContainer.appendChild(p);

    const btn = document.createElement("a");
    btn.href = "builder.html";
    btn.classList.add("btn");
    btn.textContent = "Create Another Bouquet";
    creationsContainer.appendChild(btn);
}