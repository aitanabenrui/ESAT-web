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