//References 
let project1 = document.querySelector("#project1");
let project2 = document.querySelector("#project2");
let project3 = document.querySelector("#project3");
let p1text = document.querySelector("#p1text");
let p2text = document.querySelector("#p2text");
let p3text = document.querySelector("#p3text");
let foot = document.querySelector("#contact");

p1text.style.display = "none"; 
p2text.style.display = "none"; 
p3text.style.display = "none"; 

for (let i=1; i<foot.children.length; i++) {
  foot.children[i].style.display = "none";
}



p1text.style.opacity = "0"; 
p1text.style.transform = "translateY(-20px)";
p1text.style.transition = "opacity 0.5s ease, transform 0.5s ease";
p1text.style.display = "block";

p2text.style.opacity = "0"; 
p2text.style.transform = "translateY(-20px)";
p2text.style.transition = "opacity 0.5s ease, transform 0.5s ease";
p2text.style.display = "block";

p3text.style.opacity = "0"; 
p3text.style.transform = "translateY(-20px)";
p3text.style.transition = "opacity 0.5s ease, transform 0.5s ease";
p3text.style.display = "block";





let profs = [document.querySelector("#person1"), document.querySelector("#person2"), document.querySelector("#person3")];
for (let i=0; i<profs.length; i++) {
  profs[i].onmouseover = function() {
    this.style.backgroundColor = "#EAE2B7";
    this.style.transition = "transform 0.5s ease";
    this.style.transform = "scale(1)";
  }
  profs[i].onmouseleave = function () {
    this.style.backgroundColor = "aliceblue";
    this.style.height = "170px";
    this.style.transform = "scale(0.75)";
  }
}



project1.onmouseover = function(){
  p1text.style.opacity = "1";
  p1text.style.transform = "translateY(0px)"
}
project1.onmouseleave = function(){
  p1text.style.opacity = "0";
  p1text.style.transform = "translateY(-20px)"
}
project2.onmouseover = function(){
  p2text.style.opacity = "1";
  p2text.style.transform = "translateY(0px)"
}
project2.onmouseleave = function(){
  p2text.style.opacity = "0";
  p2text.style.transform = "translateY(-20px)"
}
project3.onmouseover = function(){
  p3text.style.opacity = "1";
  p3text.style.transform = "translateY(0px)"
}
project3.onmouseleave = function(){
  p3text.style.opacity = "0";
  p3text.style.transform = "translateY(-20px)"
}



foot.onmouseover = function() {
  this.style.height = "100px";
  this.style.width = "80%";
  this.style.left = "125px";
  for (let i=1; i<foot.children.length; i++) {
    foot.children[i].style.display = "block";
  }
}

foot.onmouseleave = function () {
  foot.style.height = "30px";
  foot.style.width = "200px";
  this.style.left = "125px";
  for (let i=1; i<foot.children.length; i++) {
    foot.children[i].style.display = "none";
  }
}


/*
let's put all our comments in here

Also at some point we have to replace filler text with actual information

I think maybe the section should only change color, not get bigger, because that way it would fix the size problems, and always be big enough for the text.

*/

