/*
Creator: Anne Hellerman
Date Created: 6/15/19
Date last modified: 6/19/19
*/

function validateForm () {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var reason = document.forms["contactForm"]["reason"].value;
    var info = document.forms["contactForm"]["info"].value;
    var pastCustomer = document.forms["contactForm"]["past-customer"].value;
    var contactDay = document.forms["contactForm"]["contact-day"].value;

    if (name == "") {
        alert("Please enter your name.");
        document.forms["contactForm"]["name"].focus();
        return false;
    }

    if (email == "" ){
        alert("Please enter your email.");
        document.forms["contactForm"]["email"].focus();
        return false;
    }

    if (phone == ""){
        alert("Please enter your phone number.");
        document.forms["contactForm"]["phone"].focus();
        return false;
    }

    if (reason == "") {
        alert("Please select your reason for inquiry.");
        document.forms["contactForm"]["reason"].focus();
        return false;
    }

    if (info == "") {
        alert("Please enter additional information regarding your request.");
        document.forms["contactForm"]["info"].focus();
        return false;
    }


    alert("Thank you! Your submission is valid.");
    return false;


}
