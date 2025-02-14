document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (name === "" || email === "" || password === "") {
        errorMessage.innerText = "All fields are required!";
    } else {
        alert("Form submitted successfully!");
        errorMessage.innerText = "";
    }
});
