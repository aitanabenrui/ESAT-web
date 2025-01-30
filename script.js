
//función para que asigna la clase visible a los elementos que aparecen en pantalla, 
//el 0,2 indicas que se le asigna cuando muestras el 20% del elemento
//con el forEach se decide a que conjunto de elementos se le asigna

const orangeCard = document.querySelectorAll('.orange_card');
const whiteCard = document.querySelectorAll('.white_card'); 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
      }
    });
  }, { threshold: 0.2 });

orangeCard.forEach((card)=>{
    observer.observe(card);
});

whiteCard.forEach((card)=>{
    observer.observe(card);
});