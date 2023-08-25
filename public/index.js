let alldata = []
let otp = ''






function submit() {
    let uname = document.getElementById('uname').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let otp = document.getElementById('otp').value
    let password = document.getElementById('password').value


    let data = {
        uname: uname,
        email: email,
        number: number,
        otp: otp,
        password: password,
        id: Date.now()

    }

    let see = false
    for (let i = 0; i < alldata.length; i++) {
        if (alldata[i].uname == uname) {
            see = true
        }
    }

    if (document.getElementById('password').value == '' && document.getElementById('num66+ber').value == '') {
        alert('please fill in data')
    }




    else {
        var mobileNumber = document.getElementById("number").value;
        var lblError = document.getElementById("lblError");
        // lblError.innerHTML = ""
        var expr = /^(0|91)?[6-9][0-9]{9}$/;
        if (!expr.test(mobileNumber)) {
            alert("Invalid Mobile Number")
        }

        else {
            if (OTP == otp) {
                if (see) {
                    alert('contact already register')
                }

                else {
                    if (document.getElementById('otp').value == '') {
                        alert('Invalid OTP')
                    }

                    else {
                        alldata.push(data)
                    }
                }
            }

            else {
                alert('Please enter valid OTP')

            }

        }

        localStorage.setItem('alldata', JSON.stringify(alldata))

        console.log(alldata)

        OTP = []
        document.getElementById("uname").value = ''
        document.getElementById("email").value = ''

        document.getElementById("password").value = ''
        document.getElementById("number").value = ''
        document.getElementById("otp").value = ''
    }


}



if (localStorage.getItem('alldata')) {
    alldata = JSON.parse(localStorage.getItem('alldata'))
}



let OTP = ''
let final = ''


function handelotp() {
    OTP = ''
    var digits = '0123456789';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    alert(OTP)

}
document.getElementById('otp').value = ""






function login() {



    let dee = false
    let miraj = false



    for (let i = 0; i < alldata.length; i++) {
        if (document.getElementById('uname01').value == alldata[i].email) {
            dee = true

            if (document.getElementById('pass01').value == alldata[i].password) {
                miraj = true
            }
        }
    }


    if (dee && miraj) {
        alert("successfully")
        window.location.href = "/admin.html"
        console.log(alldata);
    }

    else {

        if (dee) {
            alert('something went wrong try again pass')
        }
        else {
            alert('something went wrong try again email')
        }
    }




    document.getElementById('uname01').value = ""
    document.getElementById('pass01').value = ""
}


function hendellogin() {
    window.location.href = "login.html"
}


