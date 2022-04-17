//function to set about
aboutRender = (about) => {
    document.getElementById("user_name").innerHTML = `${about.firstname} <span id="last_name">${about.lastname}!</span>`;
    document.getElementById("about_me").innerHTML = about.about_me;
    document.getElementById("aboutUserName").innerHTML = `I’m I'm ${about.firstname} ${about.lastname}!`
    document. getElementById("aboutDescription").innerHTML = about.about_me;
    if(about.email){
        document.getElementById("email").innerHTML = `<span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.email}`;
    }
    if(about.dob){
        document.getElementById("dob").innerHTML = `<span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.dob}`;
    }
    if(about.mobile){
        document.getElementById("mobile").innerHTML = `<span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.mobile}`;
    }
    if(about.web){
        document.getElementById("web").innerHTML = `<span><i class="fa-solid fa-link"></i></span> ${about.web_site}`;
    }
   
    if(about.country){
        document.getElementById("country").innerHTML = `<span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.country}`;
    }
    if(about.country){
        document.getElementById("facebookIcon").innerHTML = `
         <div class="toltip facebook">Facebook</div>
        <span><a href=${about.country} style="color: #376bd3;"><i class="fa-brands fa-facebook"></i></a></span>`
    }
    if(about.twitter){
        document.getElementById("twitterIcon").innerHTML = `
        <div class="toltip twitter">Twitter</div>
        <span><a href=${about.twitter} style="color: #46c1F6;"><i class="fa-brands fa-twitter"></i></a></span>`
    }
    if(about.instagram){
        document.getElementById("instagramIcon").innerHTML = `
        <div class="toltip instagram">Instagram</div>
        <span><a href=${about.instagram} style="color: #e1306e;"><i class="fa-brands fa-instagram"></i></a></span>`
    }
    if(about.linkedin){
        document.getElementById("linkedinIcon").innerHTML = `
        <div class="toltip linkedin">Linkedin</div>
        <span><a href=${about.linkedin} style="color: #0e76a8;"><i class="fa-brands fa-linkedin-in"></i></a></span>`
    }
    if(about.github){
        document.getElementById("githubIcon").innerHTML = `
        <div class="toltip github">Github</div>
        <span><a href=${about.github} style="color: #333;"><i class="fa-brands fa-github"></i></a></span>`
    }

 
  };


//function to set the whole ui
render = (data) => {
    aboutRender(data.about);
  };


//Fetch api

fetch("http://icircles.app/api/profile/usermicrosite/testaccount")
.then((responsse)=>responsse.json())
.then((data)=>{render(data)});

console.log(data);