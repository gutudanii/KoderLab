function home(){
    var hm = document.getElementById("home");
    var sc = document.getElementById("scratch");
    var cnt = document.getElementById("contact");

    hm.style.display = "inline-flex";
    sc.style.display = "none"; 
    cnt.style.display = "none"; 
}

function scratch(){
    var hm = document.getElementById("home");
    var sc = document.getElementById("scratch");
    var cnt = document.getElementById("contact");

    hm.style.display = "none";
    sc.style.display = "block"; 
    cnt.style.display = "none"; 
}

function contact(){
    var hm = document.getElementById("home");
    var sc = document.getElementById("scratch");
    var cnt = document.getElementById("contact");

    hm.style.display = "none";
    sc.style.display = "none"; 
    cnt.style.display = "block"; 
}

// FORM VALIDATION

const form = document.querySelector('.contact-form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', function (e) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
        e.preventDefault();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        var p = document.getElementById("name-alert");
        p.style.display="grid";
    }
    else{
        var p = document.getElementById("name-alert");
        p.style.color="none";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        var p = document.getElementById("email-alert");
        p.style.display="grid";
    }
    else{
        var p = document.getElementById("email-alert");
        p.style.display="none";
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        var p = document.getElementById("message-alert");
        p.style.display="grid";
    }
    else{
        var p = document.getElementById("message-alert");
        p.style.display="none";
    }

    return isValid;
}
