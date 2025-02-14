document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', function() {
        alert('Welcome to StudyMate!');
    });
});
document.getElementById("greetButton").addEventListener("click", function() {
    const avatar = document.getElementById("avatar-container");
    avatar.style.animation = "waveAnimation 2s infinite";
});
    