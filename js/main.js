document.getElementById('whole-content').style.display = 'block';
console.log('I don\'t know why you are here');
window.addEventListener("keyup", (event) => {
        switch (event.code) {
            case 'KeyG':
                alert('Redirecting to the repo...\nClick OK to continue');
                setTimeout(() => {
                window.location.href = 'https://github.com/Criticalcarpet/criticalcarpet.github.io';
                }, 1000);
                break;
            case 'KeyC':
                alert('Redirecting to the github profile...\nClick OK to continue');
                setTimeout(() => {
                window.location.href = 'https://github.com/Criticalcarpet/';
                }, 1000);
        }
});


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('whole-content').remove();
        document.getElementById('append-head').style.display = 'block';
    }, 2000);
});

document.addEventListener('contextmenu', event => event.preventDefault());
