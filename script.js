function exploreMenu() {
    alert("Exploring the menu...");
}

function orderNow() {
    alert("Ordering functionality not implemented.");
}

document.getElementById('signIn').addEventListener('click', function() {
    window.location.href = 'sign-in.html';
});

document.getElementById('joinNow').addEventListener('click', function() {
    alert("Join now functionality not implemented.");
});

// Add event listener for the Menu button
document.querySelector('Menu').addEventListener('click', function() {
    window.location.href = 'menu.html';
});
