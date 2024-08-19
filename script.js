function validateForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (firstname === "") {
        window.alert("Name Must Be Filled");
        return false
    }

    if (lastname === "") {
        window.alert("Last Name Must Be Filled");
        return false
    }

    if (email === "") {
        window.alert("Email Must Be Filled");
        return false
    }

    if (phone === "") {
        window.alert("phone Number Must Be Filled");
        return false
    }
    return true;

}

