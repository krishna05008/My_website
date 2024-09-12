document.addEventListener('DOMContentLoaded', function () {
    const myName = document.getElementById('my-name');
    const phrases = [
        'I am a student',
        'Pursuing my BTech in CSE',
        'I like computers and cool tech'
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Speed of typing effect (milliseconds)
    const erasingSpeed = 50; // Speed of erasing effect (milliseconds)
    const pauseTime = 2000;  // Time to pause before typing the next phrase (milliseconds)

    function typeEffect() {
        if (isDeleting) {
            // Erase characters
            myName.textContent = phrases[index].substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                // Move to the next phrase after a pause
                setTimeout(() => {
                    index = (index + 1) % phrases.length; // Move to the next phrase
                    typeEffect(); // Start typing the next phrase
                }, pauseTime);
            } else {
                setTimeout(typeEffect, erasingSpeed); // Continue deleting
            }
        } else {
            // Type characters
            myName.textContent = phrases[index].substring(0, charIndex++);
            if (charIndex > phrases[index].length) {
                isDeleting = true;
                // Pause before starting to delete
                setTimeout(typeEffect, pauseTime);
            } else {
                setTimeout(typeEffect, typingSpeed); // Continue typing
            }
        }
    }

    typeEffect(); // Start the typing effect
});
