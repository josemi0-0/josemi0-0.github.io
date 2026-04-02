document.addEventListener('DOMContentLoaded', () => { // IDK what this is; it works, do NOT touch pls :D -- This means to wait till the whole document loads THEN run the JS Script
  const detailsButton = document.getElementById('details-close');
  const navDetails = document.getElementById('nav-details');
  const artifactsLink = document.querySelector('.artifacts-link');
  const artifactsDetails = document.querySelectorAll('.artifacts-details');
  const detailLink = document.querySelectorAll('.detail-link');
  const gttButton = document.getElementById('gtt');

  gttButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

//   navDetails.setAttribute('open', ''); // DELETE THIS BEFORE SUBMISSION

detailsButton.addEventListener('click', () => {
    navDetails.removeAttribute('open');});

Array.from(detailLink).forEach(link => {
    link.addEventListener('click', () => {
        navDetails.removeAttribute('open');
    });
});

artifactsLink.addEventListener('click', () => {
    Array.from(artifactsDetails).forEach(detail => {
        detail.setAttribute('open', '');
    });
});

document.addEventListener('mousemove', () => {
    gttButton.style.opacity = 1;
});

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){gttButton.style.opacity= 0;}, 1500);
}

});
// OUT OF BOUNDS BUDDY <: