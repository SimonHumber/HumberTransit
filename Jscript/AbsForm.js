function superForm(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value


    if (fname == ""){
        alert("First name not filled out, please try again!");
    }

    else if (lname == ""){
        alert("Last name not filled out, please try again!");
    }

    else if (email == ""){
        alert("Email has not been filled out, please try again!");
    }

    else {
        alert("Thank you! You have been subscribed to the HT email service!");
    }

}