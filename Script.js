// scripts.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            
            // Gather form data
            const formData = new FormData(contactForm);
            
            // Send the form data using Fetch API
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your message!'); // Success message
                    contactForm.reset(); // Reset form fields
                } else {
                    alert('Oops! There was a problem submitting your form.'); // Error message
                }
            })
            .catch(error => {
                alert('Oops! There was a problem submitting your form.'); // Catch any errors
            });
        });
    }

    // Smooth Scrolling for Internal Links (Optional Enhancement)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
