
//change text HTML SECTION
changeText2 = () => {
  const element = document.getElementById("textid");
  const textone =
    "HTML was the beginning of my journey to web development, although at first glance not so complex as the other two, i had a blast experimenting with it in my first day doing simple websites and there is a bunch of things to always improve while working with HTML,new tags to help SEO, better formating or just more comments! There is always room to improvement";
    const groovy = "HTML is groovy, isn't it?";
  if (element.classList.contains("textclass-default")) {
    element.classList.remove("textclass-default");
    element.innerHTML = `${groovy}`;
  } else {
    element.innerHTML = `${textone}`;
    element.classList.add("textclass-default");
  }
};
//css html
changeText = () =>{
  
  document.querySelectorAll(".tcd").forEach(text => 
    {
      if(text.classList.contains("textclass-default")){
        text.classList.remove("textclass-default");
        text.classList.add("tcd-ninja");

      }
      else{
         text.classList.add("textclass-default");
        text.classList.remove("tcd-ninja");
      }
    
  
})};

//little easter egg

hide = () => {
  const element = document.getElementById("mainsection");
  if (element.classList.contains("main-section")) {
    element.classList.remove("main-section");
    element.classList.add("ninja");
  } else {
    element.classList.add("main-section");
    element.classList.remove("ninja");
  }
};

show = () => {
  const element = document.getElementById("mainsection");
  if (element.classList.contains("ninja")) {
    element.classList.add("main-section");
    element.classList.remove("ninja");
  }
};

//heart footer
loveIt = () => {
  
  const heart = document.getElementById("snackbar");
  heart.className = "show";
  setTimeout(function(){ heart.className = heart.className.replace("show", ""); }, 6500);
}
const heart = document.getElementById("snackbar");
const closeh = document.getElementById("closetoast");
closetoast.addEventListener("click", () => {
  heart.classList.remove("show");
  clearTimeout(heartTimeout);
});
