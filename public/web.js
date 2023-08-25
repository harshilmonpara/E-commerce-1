let alladmin = [];
let image = []
let n = 0


if (localStorage.getItem("alladmin")) {
    alladmin = JSON.parse(localStorage.getItem('alladmin'));
    console.log(alladmin);
}

for (let i = 0; i < alladmin.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("onclick", "hello( " + alladmin[i].id + ")")
    div.setAttribute("class", "products");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Product:-" + alladmin[i].product;

    let h2 = document.createElement('h2');
    h2.innerHTML = "Category:-" + alladmin[i].Category;

    let price = document.createElement('div');
    price.innerHTML = "price:-" + alladmin[i].price;

    // for (let h = 0; h < alladmin[i].image.length; h++) { 
    //     let img = document.createElement("img");
    //     img.setAttribute("src", alladmin[i].image[h]);
    //     div.appendChild(img);
    // }

    let img = document.createElement("img")
    div.appendChild(img);
    img.setAttribute("src", alladmin[i].image[0]);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(price);




    document.getElementById('products').appendChild(div);
}

function hello(id) {
    window.location.href = "photo.html"
    localStorage.setItem("id", id);
}


function login() {
    window.location.href = "login.html"
}






