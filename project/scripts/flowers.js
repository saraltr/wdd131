const bouquets = [

    {
        name: "Sunset Charm",
        flowers: ["Chrysanthemum", "Rose", "Carnation", "Snapdragon"],
        colors: ["Orange", "Pink", "Gold"],
        size: "Medium",
        occasion: "Housewarming",
        price: 34,
        promo: 29.5,
        description: "Warm tones and rich textures that bring cozy energy into any room.",
        image: "images/autumn.jpg",
        popularMonths: [2, 4, 9, 10, 11]
    },
    {
        name: "Classic red roses",
        flowers: ["Rose", "Carnation"],
        colors: ["Peach", "Soft Pink"],
        size: "Large",
        occasion: "Gift",
        price: 35,
        promo: 32.99,
        description: "Red roses are strongly associated with romantic love and passion, perfect for a romantic gesture.",
        image: "images/redroses.jpg",
        popularMonths: [1, 2, 4, 6, 9, 10, 12]
    },
    {
        name: "Classic Romance",
        flowers: ["Rose", "Peony"],
        colors: ["Red", "Pink"],
        size: "Medium",
        occasion: "Romantic",
        price: 35,
        promo: 30.5,
        description: "A timeless bouquet made with roses and peonies, perfect for romantic occasions.",
        image: "images/classic.jpg",
        popularMonths: [2, 5, 6, 7, 8]
    },
    {
        name: "Sunny Day",
        flowers: ["Sunflower", "Daisy"],
        colors: ["Yellow", "White"],
        size: "Large",
        occasion: "Celebration",
        price: 30,
        promo: 24,
        description: "A bright and cheerful bouquet designed to bring warmth and happiness.",
        image: "images/sunny.jpg",
        popularMonths: [4, 6, 7, 8, 9]
    },
    {
        name: "Elegant Whites",
        flowers: ["Lily", "Rose"],
        colors: ["White"],
        size: "Medium",
        occasion: "Formal",
        price: 40,
        promo: 36.99,
        description: "A refined bouquet of white lilies and red roses, ideal for formal events.",
        image: "images/whites.jpg",
        popularMonths: [1, 2, 11, 12]
    },
    {
        name: "Spring Bloom",
        flowers: ["Tulip", "Daisy"],
        colors: ["Pink", "Yellow"],
        size: "Small",
        occasion: "Everyday",
        price: 25,
        promo: 19.99,
        description: "A light and fresh bouquet inspired by the colors of spring.",
        image: "images/spring.jpg",
        popularMonths: [3, 4, 5, 6, 7]
    },
    {
        name: "Modern Orchid",
        flowers: ["Orchid"],
        colors: ["Purple", "White"],
        size: "Small",
        occasion: "Modern",
        price: 45,
        promo: 39.99,
        description: "A minimalist bouquet featuring elegant orchids for a contemporary look.",
        image: "images/orchid.jpg",
        popularMonths: [1, 10, 11, 12]
    },
    {
        name: "Blush Morning",
        flowers: ["Ranunculus", "Rose"],
        colors: ["Blush", "Cream"],
        size: "Medium",
        occasion: "Romantic",
        price: 38,
        promo: 33.5,
        description: "Soft colors and delicate blooms that feel like a calm, slow morning wrapped in flowers.",
        image: "images/blush.jpg",
        popularMonths: [2, 3, 4, 5]
    },
    {
        name: "Wild Garden",
        flowers: ["Carnations", "Lavender", "Snapdragon"],
        colors: ["Purple", "White", "Green"],
        size: "Large",
        occasion: "Everyday",
        price: 32,
        promo: 27.99,
        description: "A loose, slightly wild mix that looks like it was picked straight from a sunny garden.",
        image: "images/wild.jpg",
        popularMonths: [5, 6, 7, 8]
    },
    {
        name: "Winter Calm",
        flowers: ["Alstroemeria", "Snapdragon", "Eucalyptus", "Succulents"],
        colors: ["White", "Green"],
        size: "Large",
        occasion: "Holiday",
        price: 42,
        promo: 37.99,
        description: "Clean whites and winter greens for a calm, elegant look during the colder months.",
        image: "images/winter.jpg",
        popularMonths: [12, 1, 2]
    },
    {
        name: "Peachy Love",
        flowers: ["Rose", "Carnation"],
        colors: ["Peach", "Soft Pink"],
        size: "Small",
        occasion: "Gift",
        price: 28,
        promo: 22.99,
        description: "Sweet, simple, and full of warmth.",
        image: "images/peachy.jpg",
        popularMonths: [3, 4, 6, 7]
    },

];

const flowers = [];

// monthly best

const currentMonth = new Date().getMonth(); 

const currentMonthNumber = currentMonth + 1;

const bestSellers = bouquets.filter(bouquet =>
  bouquet.popularMonths.includes(currentMonthNumber)
);


const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthlySection = document.querySelector(".monthly-title")

if (monthlySection) {

    monthlySection.textContent =
  `${monthNames[currentMonth]} Best Sellers`;

    const popularContainer = document.querySelector(".popularContainer");

    flowersDisplay(bestSellers, popularContainer, true);

};


function flowersDisplay(type, container, showDescription = false){

    type.forEach(bouquet => {
        const bouquetContainer = document.createElement("div");
        bouquetContainer.classList.add("bouquet")

        const bouquetImg = document.createElement("img");
        bouquetImg.src = bouquet.image;
        bouquetImg.alt = `${bouquet.name} bouquet image`;

        const h3 = document.createElement("h3");
        h3.textContent = bouquet.name;

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");

        const newPrice = document.createElement("p");
        newPrice.innerHTML = `$${bouquet.promo}`;
        priceDiv.appendChild(newPrice);

        const originalPrice = document.createElement("p");
        originalPrice.innerHTML = `$${bouquet.price}`;
        originalPrice.style.fontSize = "smaller";
        originalPrice.style.textDecoration = "line-through"
        priceDiv.appendChild(originalPrice);


        bouquetContainer.appendChild(bouquetImg);
        bouquetContainer.appendChild(h3);

        if(showDescription){
            const desc = document.createElement("p");
            desc.textContent = bouquet.description;
            bouquetContainer.appendChild(desc);
            
        }

        bouquetContainer.appendChild(priceDiv);

        container.appendChild(bouquetContainer);
        
    });
}

// form

bouquets.forEach(bouquet => {
    bouquet.flowers.forEach(flower => {
    if (!flowers.includes(flower)) {
        flowers.push(flower);
    }
    });
});

const flowerContainer = document.querySelector(".flower-options");

if (flowerContainer){

    flowers.forEach(flower => {
        const label = document.createElement("label");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = flower;

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + flower));

        flowerContainer.appendChild(label);
    });

    const totalDisplay = document.getElementById("total");
    const sizeSelect = document.getElementById("size");

    function calculateTotal() {
        const selectedFlowers = document.querySelectorAll(
            ".flower-options input:checked"
        );

        let flowerTotal = selectedFlowers.length * 5;

        let sizePrice = 0;
        if (sizeSelect.value === "small") sizePrice = 20;
        if (sizeSelect.value === "medium") sizePrice = 30;
        if (sizeSelect.value === "large") sizePrice = 40;

        totalDisplay.textContent = flowerTotal + sizePrice;
    };

    document.addEventListener("change", calculateTotal);
    document.addEventListener("change", updatePreview);


    const previewList = document.getElementById("selectedFlowers");

    function updatePreview() {
        const selectedFlowers = document.querySelectorAll(
            ".flower-options input:checked"
        );

        previewList.innerHTML = "";

        const pricePerFlower = 5;

        if (selectedFlowers.length === 0) {
            previewList.innerHTML = "<li>No flowers selected yet</li>";
            return;
        }

        selectedFlowers.forEach(flower => {
            const li = document.createElement("li");

            li.innerHTML = `
                ${flower.value} 
                <span class="flower-price">$${pricePerFlower}</span>
            `;

            previewList.appendChild(li);
        });

    }


    const form = document.querySelector(".builderForm");

    if (form) {
        form.addEventListener("submit", () => {

            let bouquetsCreated = Number(localStorage.getItem("bouquetsNum")) || 0;

            bouquetsCreated++;
            localStorage.setItem("bouquetsNum", bouquetsCreated);

        });
    };

};

// catalogue

const catalogueSection = document.querySelector(".title")

if (catalogueSection) {
    
    catalogueSection.textContent = `Catalogue`;

    const catalogueContainer = document.querySelector(".catalogueContainer");

    flowersDisplay(bouquets, catalogueContainer);

};