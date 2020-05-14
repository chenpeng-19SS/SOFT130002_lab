const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let main = document.getElementsByClassName("flex-container")[0];


function createObject(data) {
    let item = document.createElement("div");
    item.className = "item";

    let genre = document.createElement("h4");
    genre.innerText = "Genre " + data.tips;
    item.appendChild(genre);

    let infoBox = document.createElement("div");
    infoBox.className = "inner-box";
    item.appendChild(infoBox);

    let imgBox = document.createElement("div");
    imgBox.className = "inner-box";
    item.appendChild(imgBox);

    let button = document.createElement("button");
    button.innerText = "Visit";
    item.appendChild(button);

    let author = document.createElement("h3");
    author.innerText = data.author;
    let lifetime = document.createElement("h5");
    lifetime.innerText = "lifetime: " + data.lifetime;

    author.style.display = "inline";
    author.style.marginRight = "1em";
    lifetime.style.display = "inline";

    infoBox.appendChild(author); infoBox.appendChild(lifetime);

    let title = document.createElement("h3");
    title.innerText = "Popular Photos";
    imgBox.appendChild(title);

    let photos = [];
    for (let i = 0; i < data.photos.length; i++) {
        photos[i] = document.createElement("img");
        photos[i].src = data.photos[i]; photos[i].className = "photo";
        imgBox.appendChild(photos[i]);
    }

    return item;
}

for (let i = 0; i < works.length; i++) {
    let element = createObject(works[i]);
    main.appendChild(element);
}
