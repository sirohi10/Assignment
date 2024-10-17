const boxes=document.querySelectorAll('#box');
boxes.forEach(box => {
box.addEventListener('mouseenter', function() {
    box.style.transform = 'rotate(360deg)'; // Rotate 360 degrees
});

// Add an event listener for mouseleave (unhover)
box.addEventListener('mouseleave', function() {
    box.style.transform = 'rotate(0deg)'; // Reset to no rotation
});
});