// var btnRegister = document.forms['form-register']['btn-submit'];
// btnRegister.onclick = function () {
//     var txtFirstName = document.forms['form-register']['firstName'];
//     var txtLastName = document.forms['form-register']['lastName'];
//     var txtPassword = document.forms['form-register']['password'];
//     var txtAddress = document.forms['form-register']['address'];
//     var txtPhone = document.forms['form-register']['phone'];
//     var txtAvatar = document.forms['form-register']['avatar'];
//     var txtEmail = document.forms['form-register']['Email'];
//     var txtBirthday = document.forms['form-register']['birthday'];
//     var txtGender = document.forms['form-register']['gender'];
//
//     if(txtFirstName !== null &&  txtLastName !== null && txtPassword !== null && txtAddress !== null
//         && txtPhone !== null && txtEmail !== null && txtBirthday !== null && txtGender !== null) {
//         var Member = {
//             firstName: txtFirstName.value,
//             lastName: txtLastName.value,
//             password: txtPassword.value,
//             address: txtAddress.value,
//             phone: txtPhone.value,
//             avatar: txtAvatar.value,
//             gender: txtGender.value,
//             email: txtEmail.value,
//             birthday: txtBirthday.value,
//         }
//         var dataJSON = JSON.stringify(Member);
//         postMember(dataJSON);
//
//     }
//     function postMember(dataJSON) {
//         var REGISTER_API = "https://2-dot-backup-server-001.appspot.com/_api/v2/members";
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", REGISTER_API, true);
//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4 && this.status === 201) {
//                 console.log("may da dang ki thanh cong")
//             }else if (this.readyState === 4) {
//                 console.log("Fails");
//             }
//         };
//         xhr.setRequestHeader('Content-type','application/json');
//         xhr.send(dataJSON);
//     }
//
//
// };
var btnRegister = document.forms['form-register']['btn-submit'];
btnRegister.onclick = function () {
var txtfirstrname = document.forms["form-register"]["firstName"];
var msgfisrtname = txtfirstrname.nextElementSibling;
if (txtfirstrname == null || txtfirstrname.value.length == 0) {
    msgfisrtname.innerHTML = "* vui lòng nhập firstname đầy đủ ";
    msgfisrtname.classList.remove("hidden-text");
} else {
    msgfisrtname.innerHTML = " tên hợp  ";
    msgfisrtname.classList.remove("hidden-text");
    msgfisrtname.classList.remove("danger-text");
    msgfisrtname.classList.add("success-text");
}
var txlastname = document.forms["form-register"]["lastName"];
var mslastname = txlastname.nextElementSibling;
if (txlastname == null || txlastname.value.length == 0) {
    mslastname.innerHTML = "* vui lòng nhập lastname đầy đủ ";
    mslastname.classList.remove("hidden-text");
} else {
    mslastname.innerHTML = " tên hợp ";
    mslastname.classList.remove("hidden-text");
    mslastname.classList.remove("danger-text");
    mslastname.classList.add("success-text");
}
var numberphone = document.forms["form-register"]["phone"];
var msphone = numberphone.nextElementSibling;
if (numberphone == null || numberphone.value.length == 0) {
    msphone.innerHTML = "* vui lòng nhập số điện thoại  ";
    msphone.classList.remove("hidden-text");
} else if (numberphone.value.length > 11 && numberphone.value.length < 10) {
    msphone.innerHTML = "* số điện thoại không hợp lệ  ";
    msphone.classList.remove("hidden-text");
}

else {
    msphone.innerHTML = " số điện thoại hợp lệ ";
    msphone.classList.remove("hidden-text");
    msphone.classList.remove("danger-text");
    msphone.classList.add("success-text");
}
var pwpass = document.forms["form-register"]["password"];
var msgpassword = pwpass.nextElementSibling;
if (pwpass == null || pwpass.value.length == 0) {
    msgpassword.innerHTML = "*vui long nhap mat khau.";
    msgpassword.classList.remove("hidden-text");
} else if (pwpass.value.length < 6) {
    msgpassword.innerHTML = "* mât khẩu yếu. ";
    msgpassword.classList.remove("hidden-text");
}

else {
    msgpassword.innerHTML = " mật khẩu an  toàn .";
    msgpassword.classList.remove("hidden-text");
    msgpassword.classList.remove("danger-text");
    msgpassword.classList.add("success-text");
}
var birthday = document.forms["form-register"]["birthday"];
var smgbirthday = birthday.nextElementSibling;
if (birthday == null || birthday.value.length == 0) {
    smgbirthday.innerHTML = "* vui lòng nhập ngày sinh ";
    smgbirthday.classList.remove("hidden-text");
} else {
    smgbirthday.innerHTML = " ngày sinh hợp lệ  ";
    smgbirthday.classList.remove("hidden-text");
    smgbirthday.classList.remove("danger-text");
    smgbirthday.classList.add("success-text");
}
var txtaddress = document.forms["form-register"]["address"];
var msgaddress = txtaddress.nextElementSibling;
if (txtaddress == null || txtaddress.value.length == 0) {
    msgaddress.innerHTML = "*vui lòng nhập địa chỉ  ";
    msgaddress.classList.remove("hidden-text");

} else {
    msgaddress.innerHTML = " địa chỉ hợp lệ ";
    msgaddress.classList.remove("hidden-text");
    msgaddress.classList.remove("danger-text");
    msgaddress.classList.add("success-text");
}
var mail = document.forms["form-register"]["email"];
var msgmail = mail.nextElementSibling;
var n = mail.value.includes("@");
if (mail == null || mail.value.length == 0) {
    msgmail.innerHTML = "*vui lòng nhập email";
    msgmail.classList.remove("hidden-text");
}
else if (n == false) {
    msgmail.innerHTML = " Email không hợp lệ .";
    msgmail.classList.remove("hidden-text");
}
else {
    msgmail.innerHTML = " Email hợp lệ .";
    msgmail.classList.remove("hidden-text");
    msgmail.classList.remove("danger-text");
    msgmail.classList.add("success-text");
}
    var txtGender = document.forms['form-register']['gender'];
    var txtAvatar = document.forms['form-register']['avatar'];
    var Member = {
        firstName: txtfirstrname.value,
        lastName: txlastname.value,
        password: pwpass.value,
        address: txtaddress.value,
        phone: numberphone.value,
        avatar: txtAvatar.value,
        gender: txtGender.value,
        email: mail.value,
        birthday: birthday.value,
    }
    var dataJSON = JSON.stringify(Member);
    postMember(dataJSON);

}
function postMember(dataJSON) {
    var REGISTER_API = "https://2-dot-backup-server-003.appspot.com/_api/v2/members";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", REGISTER_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            console.log("may da dang ki thanh cong")
        }else if (this.readyState === 4) {
            console.log("Fails");
        }
    };
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(dataJSON);
};