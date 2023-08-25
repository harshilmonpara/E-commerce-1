

let alladmin = []; // Define the variable to hold your data

function show() {
    alladmin = JSON.parse(localStorage.getItem('alladmin'));
    console.log(alladmin);

    for (let i = 0; i < alladmin.length; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute('id', alladmin[i].id);
        tr.setAttribute('class', 'pg');
        document.getElementById('m1').appendChild(tr);

        let btn = document.createElement('button')
        btn.setAttribute("class", 'btn btn-dark')
        btn.innerHTML = 'Edit'
        btn.setAttribute('onclick', 'edit("' + alladmin[i].id + '")');




        let btn1 = document.createElement("button");
        btn1.innerHTML = "Remove";
        btn1.setAttribute("class", 'btn btn-dark')
        btn1.setAttribute("onclick", 'har(' + alladmin[i].id + ')');

        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');
        let col4 = document.createElement('td');
        let col5 = document.createElement('td');
        let col6 = document.createElement('td');
        let col7 = document.createElement('td');


        col1.innerHTML = alladmin[i].product;
        col2.innerHTML = alladmin[i].description;
        col3.innerHTML = alladmin[i].Category;
        col4.innerHTML = alladmin[i].price;

        let img = document.createElement("img");
        img.setAttribute('width', 50);
        img.src = alladmin[i].image;

        tr.appendChild(col1);
        tr.appendChild(col2);
        tr.appendChild(col3);
        tr.appendChild(col4);
        tr.appendChild(col5);
        tr.appendChild(col6);
        tr.appendChild(col7);




        col6.appendChild(btn1);
        col7.appendChild(btn)


        var img2 = document.createElement('img');
        img2.src = alladmin[i].image[0];
        img2.setAttribute('class', 'lee');
        col5.appendChild(img2);
        img2.setAttribute('width', 50);

    }
}


function har(id) {
    alladmin = alladmin.filter((item) => item.id !== id);
    console.log(alladmin);

    let tab = document.getElementById('m1');
    let tr = document.getElementById(id);

    tab.removeChild(tr);

    localStorage.setItem('alladmin', JSON.stringify(alladmin));
}


function edit(aa) {
    localStorage.setItem('decode', aa);
    window.location.href = '/admin.html';
}
