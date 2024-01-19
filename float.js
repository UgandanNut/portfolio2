const bar = document.getElementById("bar");
bar.addEventListener("mouseover",function(){
 bar.style.opacity = "30%"
});


bar.addEventListener("mouseout",function(){
 bar.style.opacity = "100%"
});


 const dark = document.getElementById("dark");
 dark.style.display = "none";

 function hub(){
   window.location.href = "hub.html"
 }

function pB(){
 window.location.href = "https://www.skistudios.net/"
}

const pBid = document.getElementById("pBid");
pBid.addEventListener("mouseover",function(){
 pBid.style.opacity = "30%"
});


pBid.addEventListener("mouseout",function(){
 pBid.style.opacity = "100%"
});



function lightmode(){
 const light = document.getElementById("light");
 const body = document.getElementById("body");
 const container = document.querySelector(".container")
 const dark = document.getElementById("dark");
 dark.style.display = "block";
 light.style.display = "none";
 body.style.background = "rgb(236, 232, 232)";
 container.style.color = "black";
}

function darkmode(){
 const light = document.getElementById("light");
 const body = document.getElementById("body");
 const container = document.querySelector(".container")
 const dark = document.getElementById("dark");
 dark.style.display = "none";
 light.style.display = "block";
 body.style.background = "rgb(22, 22, 22)";
 container.style.color = "white";
}




 function sendmsg(){
alert("message is sent")
emailjs.send("service_16xlfep","template_81plbiv",{
from_name: document.getElementById("user_name").value,
email_id: document.getElementById("email_id").value,
message: document.getElementById("message").value,
});}


   const container = document.querySelector(".container")
const wrappers = document.querySelectorAll(".wrapper")
const par = document.querySelectorAll("p")
const animClasses = [
"fadeInLeft",
"fadeInRight",
"fadeInBtm",
"zoomIn",
]
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
const currentIndex = Array.from(wrappers).indexOf(entry.target)
if (entry.isIntersecting) {
par[currentIndex].classList.add(animClasses[currentIndex])
} else {
if (entry.boundingClientRect.y > 0) {
 par[currentIndex].classList.remove(animClasses[currentIndex])
}
}
})
}, {
root: container,
threshold: 0.5,
})


wrappers.forEach(wrapper => {
observer.observe(wrapper)
})
