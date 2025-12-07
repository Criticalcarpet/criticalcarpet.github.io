
if (window.location.pathname.toLowerCase() === "/slide-memorizer/") {
    window.location.href = "https://criticalcarpet.github.io/slide-memorizer/";
}   else {
document.getElementById('keys').addEventListener('keypress', () => {
    document.location.href = '/'
});
}
 