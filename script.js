// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to open the login popup
function openPopup() {
    document.getElementById('loginPopup').style.display = 'flex';
}

// Function to close the login popup
function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

// Add event listener to the Login button
document.querySelector('.login-btn').addEventListener('click', openPopup);

// Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('loginPopup');
    if (event.target === popup) {
        closePopup();
    }
});
