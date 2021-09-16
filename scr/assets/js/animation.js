const images = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  for (var i = 0; i < entries.length; i++){
    if(entries[i].isIntersecting){
      entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  })
     
    }
  };
});

images.forEach((image) => {
  observer.observe(image);
});

//second
const imagess = document.querySelectorAll(".anim2");

observer = new IntersectionObserver((entries) => {
  for (var i = 0; i < entries.length; i++){
    if(entries[i].isIntersecting){ //add code of intersecting
      entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim3 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  })
     
    }
  };
});

imagess.forEach((image) => {
  observer.observe(image);
});

//slider
