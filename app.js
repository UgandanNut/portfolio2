function sendmsg(){
    alert("message is sent")
    emailjs.send("service_16xlfep","template_81plbiv",{
    from_name: document.getElementById("user_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    });}
   
    
    
    
    
    

const amsg = document.getElementById("amsg")
amsg.style.display = "none";

const backk = document.getElementById("backk")
backk.style.display = "none";

const imag1 = document.getElementById("imag1")

imag1.addEventListener("mouseover", function(){
    imag1.style.opacity = "80%"
})

imag1.addEventListener("mouseout", function(){
    imag1.style.opacity = "100%"
})

function img1(){
    window.location.href = "https://www.skistudios.net/website2/"
}


var imag2 = document.getElementById("imag2")

    imag2.addEventListener("mouseover", function(){
        imag2.style.opacity = "80%"
    })

    imag2.addEventListener("mouseout", function(){
        imag2.style.opacity = "100%"
    })


    function img2(){
        window.location.href = "https://ugandannut.github.io/KALAMKUDUS-FORUM-IMLEK_/"
    }

    var imag3 = document.getElementById("imag3")

    imag3.addEventListener("mouseover", function(){
        imag3.style.opacity = "70%"
    })

    imag3.addEventListener("mouseout", function(){
        imag3.style.opacity = "100%"
    })


    function img3(){
        window.location.href = "https://ugandannut.github.io/bitcavee/index.html"
    }


    // about

    const aboutt = document.getElementById("aboutt")

    aboutt.addEventListener("mouseover", function(){
        aboutt.style.opacity = "70%"
    })

    aboutt.addEventListener("mouseout", function(){
        aboutt.style.opacity = "100%"
    })
    
    //


    function about() {
        const imag1 = document.getElementById("imag1");
        const imag2 = document.getElementById("imag2");
        const imag3 = document.getElementById("imag3");
        const client = document.getElementById("client");
        const personal = document.getElementById("personal");
        const backk = document.getElementById("backk");
        const amsg = document.getElementById("amsg")
        const contactform = document.getElementById("contactform")
        amsg.style.display = "block";
        backk.style.display = "block";
        contactform.style.display = "none";
        imag1.style.display = "none";
        imag2.style.display = "none";
        imag3.style.display = "none";
        client.style.display = "none";
        personal.style.display = "none";
        
    }

    function back() {
        const imag1 = document.getElementById("imag1");
        const imag2 = document.getElementById("imag2");
        const imag3 = document.getElementById("imag3");
        const client = document.getElementById("client");
        const personal = document.getElementById("personal");
        const backk = document.getElementById("backk")
        const amsg = document.getElementById("amsg")
        const contactform = document.getElementById("contactform")
        amsg.style.display = "none";
        backk.style.display = "none";
        contactform.style.display = "block";
        imag1.style.display = "block";
        imag2.style.display = "block";
        imag3.style.display = "block";
        client.style.display = "block";
        personal.style.display = "block";
       
    }
