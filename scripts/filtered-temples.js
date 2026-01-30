const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector(".navigation");

hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-1075592-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
  {
    templeName: "Billings Montana",
    location: "Billings Montana",
    dedicated: "1999, November, 20",
    area: 33800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/09-Billings-Montana-Temple-933544.jpg"
  }
];

// temples container
const container = document.querySelector(".temples");

function displayTemples(templesArray) {
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const div = document.createElement("div");
    div.classList.add("templeDiv");

    const h2 = document.createElement("h2");
    h2.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.classList.add("templeInfo");
    info.innerHTML = `
      <p><b>Location:</b> ${temple.location}</p>
      <p><b>Dedicated:</b> ${temple.dedicated}</p>
      <p><b>Size:</b> ${temple.area} sq ft</p>
    `;

    div.append(h2, info, img);
    container.appendChild(div);
  });
}

displayTemples(temples);

// nav filtering
const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const filter = link.dataset.filter;
    let filteredTemples = [];

    if (filter === "all") {
      filteredTemples = temples;
    }
    else if (filter === "old") {
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
      });
    }
    else if (filter === "new") {
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
    }
    else if (filter === "large") {
      filteredTemples = temples.filter(temple => {
        return temple.area > 90000;
      });
    }
    else if (filter === "small") {
      filteredTemples = temples.filter(temple => {
        return temple.area < 10000;
      });
    }

    displayTemples(filteredTemples);
  });
});