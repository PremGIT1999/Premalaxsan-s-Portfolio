function showWorks() {
    
    alert("Display photographer's works here.");
}

function contactMe() {
    
    alert("Contact the photographer here.");
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn");
    var clickSound = document.getElementById("clickSound");

    button.addEventListener("click", function() {
        // Play the click sound
        clickSound.currentTime = 0; // Reset audio to the beginning (allows rapid clicks)
        clickSound.play();
        
        // Your other button click logic here...
    });
});