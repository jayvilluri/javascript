function onClickValidator(){
    var email=document.getElementById("txtEmail").value;
    alert(email);

    if (email.includes('@') && email.includes('.') && (email.indexOf('.')> email.indexOf('@'))) {
       alert("Valid Email");
    } else {
        alert("Invalid Email");
    }
}