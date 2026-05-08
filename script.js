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

    const response = await fetch("http://localhost:3001/stats");
    const data = await response.json();

    console.log(data);
}

loadStats();
