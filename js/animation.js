// apparition des éléments du header et de la bannier lorsque le html est chargé

const header = document.querySelector('header');
const bannier = document.querySelector('.bannier');

console.log(header, bannier)

document.addEventListener('DOMContentLoaded', function() {
    header.classList.add('apparition-h');
    setTimeout(() => {
        bannier.classList.add('apparition-b');
    }, 400);
})

// apparition des best-seller

const bestseller = document.querySelectorAll('.article');
console.log(bestseller);

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            entry.target.classList.add('apparition-a');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

bestseller.forEach(function(el) {
    observer.observe(el);
});

// apparition produits de qualité

const qualite = document.querySelectorAll('.qualite');
const img_produit_qualite = document.getElementById('img-produit-qualite');
const chiffres = document.querySelector('.chiffres');
console.log(qualite, img_produit_qualite, chiffres);


const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            entry.target.classList.add('apparition-q');
            observer2.unobserve(entry.target);
            img_produit_qualite.classList.add('apparition-q');
            chiffres.classList.add('apparition-q');
        }
    });
}, {
    threshold: 0.5
});

qualite.forEach(function(el) {
    observer2.observe(el);
});


// apparition des avis

const avis = document.querySelectorAll('.avis-seul');
console.log(avis);

const observer3 = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            entry.target.classList.add('apparition-avis');
            observer3.unobserve(entry.target);
            img_produit_qualite.classList.add('apparition-avis');
            chiffres.classList.add('apparition-avis');
        }
    });
}, {
    threshold: 0.5
});

avis.forEach(function(el) {
    observer3.observe(el);
});