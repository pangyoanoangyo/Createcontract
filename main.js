
var names = document.getElementById("name_input");
var name_id = document.getElementById("names_id");
names.addEventListener("keyup", function(){
    name_id.innerHTML = names.value;
})

var email = document.getElementById("email");
var email_id = document.getElementById("email_id");
email.addEventListener("keyup", function(){
    email_id.innerHTML = email.value;
})

var phone = document.getElementById("phone");
var phone_id = document.getElementById("phone_id");
phone.addEventListener("keyup", function(){
    phone_id.innerHTML = phone.value;
})

var address = document.getElementById("address");
var address_id = document.getElementById("address_id");
address.addEventListener("keyup", function(){
    address_id.innerHTML = address.value;
});