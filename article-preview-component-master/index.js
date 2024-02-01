const share = document.querySelector('.container-share');
const overlay = document.querySelector('.container-share-overlay');
share.addEventListener('click', () => {
    overlay.classList.toggle('active');
});
