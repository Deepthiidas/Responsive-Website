document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "All fields are required!";
        formMessage.style.color = "red";
    } else {
        formMessage.innerHTML = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    }
});
