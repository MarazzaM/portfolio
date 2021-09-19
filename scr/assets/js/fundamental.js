changeStyle = () => {
  const element = document.getElementById("cssid");
  if (element.classList.contains("base-card-f")) {
    element.classList.remove("base-card-f");
    element.classList.add("second-style-f");
  } else {
    element.classList.add("base-card-f");
    element.classList.remove("second-style-f");
  }
};
/* I DONT KNOW, TO SELECT CLASSES, IGUESS A FOR CYCLE IS MISSING

changeStyles = () => {
    const element = document.querySelectorAll("card-fundamental");
if(element.classList.contains("base-card-f")){
    
    element.classList.remove("base-card-f");
    element.classList.add("second-style-f");
}

else{
    element.classList.add("base-card-f");
    element.classList.remove("second-style-f");
}

}
//FOR LOOP NEEDED
changeStyles = () =>{
    const x = document.getElementById("cards-fundamentals");
const y = x.getElementsByClassName("card-fundamental");
let i;
for (i = 0; i < y.length; i++) {
  y[i].style.backgroundColor = "red";
}
}
*/
//change text HTML SECTION
changeText = () => {
  const element = document.getElementById("textid");
  const textone =
    "HTML was the beginning of my journey to web development, although at first glance not so complex as the other two, i had a blast experimenting with it in my first day doing simple websites and there is a bunch of things to always improve while working with HTML,new tags to help SEO, better formating or just more comments! There is always room to improvement";
  if (element.classList.contains("textclass-default")) {
    element.classList.remove("textclass-default");
    element.innerHTML = "HTML is groovy, isn't it?";
  } else {
    element.innerHTML = `${textone}`;
    element.classList.add("textclass-default");
  }
};

//change clock
clockState = () => {
  const element = document.getElementById("clock-wrapper");
  if (element.classList.contains("ninja")) {
    element.classList.remove("ninja");
  } else {
    element.classList.add("ninja");;
  }
};