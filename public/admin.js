let alladmin = []
let image = []
let n = 0

if (localStorage.getItem("alladmin")) {
    alladmin = JSON.parse(localStorage.getItem('alladmin'))
    console.log(alladmin);

}

function success() {
    let product = document.getElementById('product').value
    let description = document.getElementById('description').value
    let Category = document.getElementById('Category').value
    let price = document.getElementById('price').value


    let data = {
        product: product,
        description: description,
        Category: Category,
        price: price,
        image: image,
        id: Date.now()

    }
    let dee = false
    if (document.getElementById('product').value == '') {
        alert('please Enter  product')
    }

    else {
        if (document.getElementById('description').value == '') {
            alert('please fill description')
        }
        else {
            if (document.getElementById('Category').value == '') {
                alert('please fill Category')
            }
            else {
                if (document.getElementById('price').value == '') {
                    alert('please fill price')
                }
                else {
                    alladmin.push(data)
                    dee = true
                }
                if (dee) {
                    window.location.href = "/table.html"
                }

                else {
                    alert('something went wrong try again')
                }
            }
        }
    }


    localStorage.setItem('alladmin', JSON.stringify(alladmin))
    console.log(alladmin)
    document.getElementById("m1")


    document.getElementById('product').value = ''
    document.getElementById('description').value = ''
    document.getElementById('Category').value = ''
    document.getElementById('price').value = ''
    document.getElementById("file").value = ''

    image = []

}


if (localStorage.getItem('decode')) {
    data6()
}



function data6() {

    console.log(alladmin);
    alladmin = JSON.parse(localStorage.getItem('alladmin'))

    let edit = localStorage.getItem('decode')

    for (let i = 0; i < alladmin.length; i++) {
        if (alladmin[i].id == edit) {
            document.getElementById('product').value = alladmin[i].product
            document.getElementById('description').value = alladmin[i].description
            document.getElementById('Category').value = alladmin[i].Category
            document.getElementById('price').value = alladmin[i].price

            image = alladmin[i].image

        }

        for (let j = 0; j < alladmin[i].image.length; j++) {
            var main = document.getElementById('priview')

            let imageEl = document.createElement('img')
            imageEl.src = alladmin[i].image[j]
            imageEl.setAttribute('id', 'parths' + j)
            imageEl.setAttribute('class', 'm1')
            imageEl.setAttribute('width', '100')
            imageEl.setAttribute('height', '100')


            let button = document.createElement('button')
            button.innerHTML = "Remove";
            button.setAttribute("class", 'btn btn-dark m2')

            button.setAttribute('id', 'rathod' + j)
            button.setAttribute('onclick', 'mi2(' + j + ',"' + alladmin[i].image[j] + '")')

            main.appendChild(imageEl)
            main.appendChild(button)


        }

    }

    localStorage.setItem('alladmin', JSON.stringify(alladmin))
    document.getElementById("m1")



}

var loadFile = function (event) {
    var image1 = document.getElementById('priview');
};

const fileInput = document.getElementById('file');

let newImage = ''
if (fileInput) {
    fileInput.addEventListener('change', (event) => {
        for (let i = 0; i < event.target.files.length; i++) {
            const imageFile = event.target.files[i];

            if (imageFile) {
                const reader = new FileReader();
                let url = URL.createObjectURL(event.target.files[i]);
                reader.readAsDataURL(imageFile);

                reader.addEventListener('load', () => {
                    n++
                    let img = document.createElement('img')
                    img.setAttribute('class', 'ghano ')
                    img.setAttribute('width', 150)
                    img.setAttribute('id', 'img' + n)
                    img.src = reader.result

                    let btn = document.createElement('button')
                    btn.innerHTML = '<i class="bi bi-trash3 fs-5"></i>'
                    btn.setAttribute('onclick', 'handleImg(' + n + ',"' + reader.result + '")')
                    btn.setAttribute('id', 'btn' + n)
                    btn.setAttribute('class', 'but')

                    document.getElementById('priview').appendChild(img)
                    document.getElementById('priview').appendChild(btn)
                    image.push(reader.result)
                    console.log(reader.result);
                });
            }
        }
    });
}

function harshil() {
    if (localStorage.getItem('decode')) {
        updateData()
    } else {
        success()
    }
}


function updateData() {

    alldata = JSON.parse(localStorage.getItem('alladmin'))
    let id = localStorage.getItem('decode')

    objIndex = alladmin.findIndex((obj => obj.id == id));

    alladmin[objIndex].product = document.getElementById('product').value
    alladmin[objIndex].description = document.getElementById('description').value
    alladmin[objIndex].Category = document.getElementById('Category').value
    alladmin[objIndex].price = document.getElementById('price').value

    alladmin[objIndex].image = image



    console.log(alladmin)
    let row = document.getElementsByClassName('pg');
    let number = row.length;  // Use row.length instead of alladmin.length

    for (let i = 0; i < number; i++) {
        row[i].remove();  // Remove each element in the collection
    }




    for (let i = 0; i < alladmin.length; i++) {

        let tr = document.createElement('tr');
        tr.setAttribute('id', alladmin[i].id);
        tr.setAttribute('class', 'pg');



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

        for (let j = 0; j < alladmin[i].image.length; j++) {
            let img = document.createElement('img');
            img.src = alladmin[i].image[j];
            img.setAttribute('class', 'lee');
            col5.appendChild(img);
            img.setAttribute('width', 50);
        }
    }


    document.getElementById('product').value = ''
    document.getElementById('description').value = ''
    document.getElementById('Category').value = ''
    document.getElementById('price').value = ''
    document.getElementById("file").value = ''

    localStorage.setItem('alladmin', JSON.stringify(alladmin))
    localStorage.removeItem('decode')

    window.location.href = '/table.html'

    image = []


}




function har(id) {
    alladmin = alladmin.filter((item) => item.id !== id);
    console.log(alladmin);

    let tab = document.getElementById('m1');
    let tr = document.getElementById(id);

    tab.removeChild(tr);

    localStorage.setItem('alladmin', JSON.stringify(alladmin));
}

function mi2(j, sdfgsd) {
    let ba = document.getElementById('priview');
    let sa = document.getElementById('parths' + j);
    let aa = document.getElementById('rathod' + j);

    ba.removeChild(sa);
    ba.removeChild(aa);

    image = image.filter((item) => item !== sdfgsd);
    console.log(image);
}

function handleImg(index, imageUrl) {
    let main = document.getElementById('priview');
    let imgElement = document.getElementById('img' + index);
    let btnElement = document.getElementById('btn' + index);

    main.removeChild(imgElement);
    main.removeChild(btnElement);

    image = image.filter((item) => item !== imageUrl);

    console.log(image);
}



// for (let i = 0; i < alladmin.length; i++) {
//     let tr = document.createElement('tr')
//     // tr.setAttribute('class', 'd1')
//     tr.setAttribute('id', alladmin[i].id)
//     document.getElementById('m1').appendChild(tr)

//     let btn = document.createElement('button')
//     btn.innerHTML = 'edit'
//     btn.setAttribute('onclick', 'edit("' + alladmin[i].email + '")')


//     let btn1 = document.createElement("button")
//     btn1.innerHTML = "Remove"
//     btn1.setAttribute("onclick", 'har(' + alladmin[i].id + ')')

//     let col1 = document.createElement('td');
//     let col2 = document.createElement('td');
//     let col3 = document.createElement('td');
//     let col4 = document.createElement('td');
//     let col5 = document.createElement('td');
//     let col6 = document.createElement('td');
//     let col7 = document.createElement('td');


//     col1.innerHTML = alladmin[i].product;
//     col2.innerHTML = alladmin[i].description;
//     col3.innerHTML = alladmin[i].Category;
//     col4.innerHTML = alladmin[i].price;


//     let img = document.createElement("img")
//     img.setAttribute('width', 100)
//     img.src = alladmin[i].image


//     tr.appendChild(col1)
//     tr.appendChild(col2)
//     tr.appendChild(col3)
//     tr.appendChild(col4)
//     tr.appendChild(col5)
//     tr.appendChild(col6)


//     col4.appendChild(btn)
//     col5.appendChild(btn1)
//     col6.appendChild(img)




//     for (let j = 0; j < alladmin[i].image.length; j++) {
//         let img = document.createElement('img')
//         img.src = alladmin[i].image[j]
//         img.setAttribute('class', 'img-fluid')
//         img.setAttribute('width', '100')
//         img.setAttribute('height', '100')
//         col7.appendChild(img)
//     }

//     let dd = document.getElementsByClassName('ghano')
//     let number = dd.length
//     for (let i = 0; i < number; i++) {
//         dd[0].remove()
//     }

//     let ss = document.getElementsByClassName('but')
//     let number1 = ss.length
//     for (let i = 0; i < number1; i++) {
//         ss[0].remove()
//     }


// }
