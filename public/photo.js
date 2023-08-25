if (localStorage.getItem("id")) {
    hello();
}

function hello() {
    let alladmin = JSON.parse(localStorage.getItem('alladmin'));
    let getid = JSON.parse(localStorage.getItem("id"));

    console.log(alladmin);

    for (let i = 0; i < alladmin.length; i++) {
        if (alladmin[i].id == getid) {
            let div = document.createElement("div");
            div.setAttribute("class", "products");

            let h1 = document.createElement("h1");
            h1.innerHTML = "Product:-" + alladmin[i].product;

            let h2 = document.createElement('h2');
            h2.innerHTML = "Category:-" + alladmin[i].Category;

            let price = document.createElement('div');
            price.innerHTML = "price:-" + alladmin[i].price;

            let description = document.createElement('div');
            description.innerHTML = "Description:-" + alladmin[i].description;

            let img = document.createElement("img");
            img.src = alladmin[i].image[0];
            img.setAttribute("class", "a1");
            img.setAttribute("id", "a2");
            img.setAttribute("width", "400");
            img.setAttribute("height", "200");
            div.appendChild(img);

            for (let j = 0; j < alladmin[i].image.length; j++) {
                let img = document.createElement("img");
                img.src = alladmin[i].image[j];
                img.setAttribute("class", "image-div p-2");
                img.addEventListener("mouseover", function () {
                    changeMainImage(alladmin[i].image[j]);
                });
                img.setAttribute("width", "50");
                img.setAttribute("height", "100");
                div.appendChild(img);
            }

            div.appendChild(h1);
            div.appendChild(h2);
            div.appendChild(description);
            div.appendChild(price);

            document.getElementById('images').appendChild(div);
        }
    }
}

function changeMainImage(url) {
    let image = document.getElementById("a2");
    image.setAttribute("src", url);
}
