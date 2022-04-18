//function to set about
var base_url = "https://icircles.app/";
aboutRender = (about) => {
    document.getElementById(
        "user_name"
    ).innerHTML = `${about.firstname} <span id="last_name">${about.lastname}!</span>`;
    document.getElementById("about_me").innerHTML = about.about_me;
    document.getElementById(
        "aboutUserName"
    ).innerHTML = `I’m I'm ${about.firstname} ${about.lastname}!`;
    document.getElementById("aboutDescription").innerHTML = about.about_me;

    let socialIcon = ``;
    if (about.facebook) {
        socialIcon += `<div class="icon">
      <div class="toltip facebook">Facebook</div>
      <span><a href="${about.facebook}" style="color: #376bd3;"><i class="fa-brands fa-facebook"></i></a></span>
  </div>`;
    }
    if (about.twitter) {
        socialIcon += `<div class="icon">
      <div class="toltip twitter">Twitter</div>
      <span><a href="${about.twitter}" style="color: #46c1F6;"><i class="fa-brands fa-twitter"></i></a></span>
     </div>`;
    }
    if (about.instagram) {
        socialIcon += `<div class="icon">
      <div class="toltip instagram">Instagram</div>
      <span><a href="${about.instagram}" style="color: #e1306e;"><i class="fa-brands fa-instagram"></i></a></span>
     </div>`;
    }
    if (about.linkedin) {
        socialIcon += `<div class="icon">
        <div class="toltip linkedin">Linkedin</div>
        <span><a href="${about.linkedin}" style="color: #0e76a8;"><i class="fa-brands fa-linkedin-in"></i></a></span>
       </div>`;
    }
    if (about.github) {
        socialIcon += `<div class="icon">
        <div class="toltip github">Github</div>
        <span><a href="${about.github}" style="color: #333;"><i class="fa-brands fa-github"></i></a></span>
       </div>`;
    }
    document.getElementById("icon_wrapper").innerHTML = socialIcon;

    let details = ``;
    if (about.dob) {
        details += `<li class="w-50"><span><i class="fa-solid fa-calendar-days"></i></span> ${about.dob}</li>`;
    }
    if (about.mobile) {
        details += `<li class="w-50"><span><i class="fa-brands fa-whatsapp"></i></span> ${about.mobile}</li>`;
    }
    if (about.email) {
        details += `<li class="w-50"><span><i class="fa-solid fa-envelope-open-text"></i></span> ${about.email}</li>`;
    }

    if (about.web) {
        details += `<li class="w-50"><span><i class="fa-solid fa-link"></i></span> ${about.web_site}</li>`;
    }

    if (about.country) {
        details += `<li class="w-50"><span><i class="fa-solid fa-location-dot"></i></span> ${about.country}</li>`;
    }
    document.getElementById('user_details').innerHTML = details;

    document.getElementById("thumb").src = base_url + about.thumb;
    document.getElementById("footer").innerHTML = `
    <span>© 2022, ${about.firstname} ${about.lastname}. All Rights Reserved.</span>
    `;
};

// function to set user educations information
educationsRender = (educations) => {
    let htmlText = "";
    educations.map((eduData) => {
        let end_date = eduData.to_date.split("-");
        if (end_date[0] == "0000") {
            htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} -<span class="fw-bold" style=" color: #d634b3"> Current</h5>
        <p>${eduData.details}</p>
      </div>`;
        } else {
            htmlText += `<div class="resume_container">
        <h4>${eduData.degree_name}</h4>
        <h5>${eduData.institution_name} / ${eduData.from_date} - ${eduData.to_date}</h5>
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
      <h5>${expData.company_name} / ${expData.from_date} - <span class="fw-bold" style=" color: #d634b3">Current</span></h5>
      <p>${expData.details} </p>
  </div>`;
        } else {
            htmlText += ` <div class="resume_container">
      <h4>${expData.job_title}</h4>
      <h5>${expData.company_name} / ${expData.from_date} - ${expData.to_date}</h5>
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

//functions to set testimonials
testimonialRender = (testimonial) => {
    let htmlText = "";
    testimonial.map((testimonialData) => {
        htmlText += `
                                      <div class="col-lg-1">
                                          <div class="queto">
                                              <img src="images/queto.png" alt="">
                                          </div>
                                      </div>
                                      <div class="col-lg-8">
                                          <p>${testimonialData.feedback}</p>
                                          <p>${testimonialData.feedback_title}</p>
                                      </div>
                                      <div class="col-lg-3">
                                          <div class="testimonial_img">
                                              <img src="${base_url}/${testimonialData.image}" alt="">
                                          </div>
                                          <div class="img_text">
                                              <h3>${testimonialData.client_name}</h3>
                                              <p>Co-founder, Colabrio</p>
                                              <div class="icons">
                                                  <ul>
                                                      <li><i class="fa-solid fa-star"></i></li>
                                                      <li><i class="fa-solid fa-star"></i></li>
                                                      <li><i class="fa-solid fa-star"></i></li>
                                                      <li><i class="fa-solid fa-star"></i></li>
                                                      <li><i class="fa-solid fa-star"></i></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
    `;
    });
    document.getElementById("testimonials").innerHTML = htmlText;
};

//function to set services
serviceRender = (services) => {
    let htmlText = "";
    services.map((serviceData) => {
        htmlText += ` <div class="col-md-6 col-lg-6">
        <div class="service_item">
            <div class="row d-flex align-items-center">
                <div class="col-md-2 serviceImg">
                    <img src="${base_url}/${serviceData.thumb}" alt="">
                </div>
                <div class="col-md-10">
                    <h3>${serviceData.service_name}</h3>
                    <p>${serviceData.details}</p>
                </div>
            </div>
        </div>
    </div> `;
    });
    document.getElementById("services").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
    let htmlText = "";
    blogs.Technology.map((techblog) => {
        htmlText += `
      <div class="col-md-6 col-lg-4">
      <div class="journal_item">
          <div class="journal_img">
              <img src="Images/journal1.png" alt="">
          </div>
          <div class="journal_content">
              <h5><span><i class="fa-solid fa-user"></i></span> Admin</h5>
              <h5><i class="fa-solid fa-calendar-days"></i></h5>
              <h5> 15 March 2022</h5>
          </div>
      </div>
      <div class="journal_text text-center">
          <h4>${techblog.title}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo is The repudiandae. </p>
      </div>
  </div>
      `;
    });
    document.getElementById("blogs").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
    let htmlText = "";
    awards.map((awardData) => {
        htmlText += ` <div class="col-md-6 col-lg-6">
        <div class="award_container">
            <div class="award_wrap">
                <div class="award_img">
                    <img src="images/batch.png" alt="">
                </div>
                <div class="award_trxt">
                    <h5>${awardData.title}</h5>
                    <h6>Google Inc -2020</h6>
                </div>
            </div>
            <p>${awardData.details}</p>
        </div>
    </div>`;
    });
    document.getElementById("awards").innerHTML = htmlText;
};

//function to set the whole ui
render = (data) => {
    aboutRender(data.about);
    educationsRender(data.educations);
    workExperienceRender(data.experiences);
    interestRender(data.interests);
    testimonialRender(data.testimonials);
    serviceRender(data.services);
    blogRender(data.blogs);
    awardRender(data.awards);
};

//Fetch api

fetch("http://icircles.app/api/profile/usermicrosite/testaccount")
    .then((responsse) => responsse.json())
    .then((data) => {
        console.log(data);
        render(data);
    });

//console.log(data);