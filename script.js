function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Card animation
document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

});


// Fetch statistics from backend
async function loadStats() {

    const response = await fetch("https://t7-the-addiction-recovery-gap-1.onrender.com");

    const data = await response.json();

    console.log(data);
}

loadStats();
