//function to set about
var base_url = "https://icircles.app/";
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
    document.getElementById("thumb").src = base_url + about.thumb;
 
  };

 // function to set user educations information
 educationsRender = (educations) => {
    let htmlText = "";
    educations.map((eduData) => {
      let end_date = eduData.to_date.split("-");
      if (end_date[0] == "0000") {
        htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} - Current</h5>
        <p>${eduData.details}</p>
      </div>`;
      } else {
        htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} - ${end_date}</h5>
        <p>${eduData.details}</p>
      </div>`;
      }
    });
    document.getElementById("educations").innerHTML = htmlText;
  };

  //function to set work experiences
workExperienceRender = (experiences) => {
  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    if (end_date[0] == "0000") {
      htmlText += `<div class="resume_container">
      <h4>${expData.job_title}</h4>
      <h5>${expData.company_name} / ${expData.from_date} - Current</h5>
      <p>${expData.details} </p>
  </div>`;
    } else {
      htmlText += ` <div class="resume_container">
      <h4>${expData.job_title}</h4>
      <h5>${expData.company_name} / ${expData.from_date} - ${end_date}</h5>
      <p>${expData.details} </p>
  </div>`;
    }
  });
  document.getElementById("experiences").innerHTML = htmlText;
};

//function to set interests
interestRender = (interest) => {
  let htmlText = "";
  interest.map((interestData) => {
    htmlText += `
    <div class="interest_item">
    <img src="images/interest1.png" alt="">
    <div class="img_title">
        <span>${interestData.title}</span>
    </div>
  </div>
    `;
  });
  document.getElementById("interests").innerHTML = htmlText;
};



//function to set the whole ui
render = (data) => {
    aboutRender(data.about);
    educationsRender(data.educations);
    workExperienceRender(data.experiences);
    interestRender(data.interests);
  };
 


//Fetch api

fetch("http://icircles.app/api/profile/usermicrosite/testaccount")
.then((responsse)=>responsse.json())
.then((data)=>{render(data)});

console.log(data);