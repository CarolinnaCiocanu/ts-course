function domReady(fn) {
  window.addEventListener("load", fn);
}

function domContentReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);

  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

domContentReady(() => {
  var heroHeadlines = document.getElementsByClassName("hero-headlines__item");
  if (heroHeadlines[0]) {
    heroHeadlines[0].classList.add("white-loader");
  }
});

var observerOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
};

function observeInit(imageUrl) {
  document.querySelector(
    ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
  ).innerHTML = "Download Brief";

  document.querySelector(".hero-headlines__item .lazyload-wrapper").remove();
  document.querySelector(
    ".hero-headlines__item"
  ).innerHTML += `<div class="lazyload-wrapper industry"><img alt="" aria-hidden="true" role="presentation" src="${imageUrl}"style="margin-bottom: 15px;" /></div>`;
}

domReady(() => {
  var sixSense = sessionStorage.getItem("six_sense_data");

  if (sixSense) {
    sixSense = JSON.parse(sixSense);
    console.log("sixSense.segments", sixSense.segments);
    console.log(
      "sixSense.segments INCLUDES",
      sixSense.segments.includes("Retail Industry")
    );

    if (sixSense.segments.includes("Retail Industry")) {
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content h2"
      ).innerHTML = "Combating Burnout and Shifting Skills";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content p"
      ).innerHTML =
        "Refocusing hiring to support changing demands and better communication";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
      ).href =
        "https://www.hirevue.com/resources/guide/industry-brief-retail-hiring";
      observeInit(
        "https://webapi.hirevue.com/wp-content/uploads/2022/11/retail-hiring.png"
      );
    }

    if (sixSense.segments.includes("Business Services Industry")) {
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content h2"
      ).innerHTML =
        "Facing Costly Turnover and Demands for Better Candidate Experience";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content p"
      ).innerHTML =
        "The business services industry provides critical services to the economy, but in the wake of the pandemic, hiring managers, especially those in tech and telco, are facing a new landscape.";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
      ).href =
        "https://www.hirevue.com/resources/report/business-services-facing-costly-turnover-and-demands-for-better-candidate-experience";
      observeInit(
        "https://webapi.hirevue.com/wp-content/uploads/2022/11/business-services-hiring.jpg"
      );
    }

    if (sixSense.segments.includes("Hospitality Industry")) {
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content h2"
      ).innerHTML = "Tackling Historic Labor Shortages";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content p"
      ).innerHTML =
        "Hospitality and tourism employ nearly 15 million people in the US, but even though travel is starting to come back online and approach pre-pandemic levels, the industry saw great upheaval in the wake of COVID-19.";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
      ).href =
        "https://www.hirevue.com/resources/report/hospitality-tackling-historic-labor-shortages";
      observeInit(
        "https://webapi.hirevue.com/wp-content/uploads/2022/11/hospitality-hiring.jpg"
      );
    }

    if (sixSense.segments.includes("Industrial Manufacturing Industry")) {
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content h2"
      ).innerHTML = "Hire Faster and Smarter and Get Back to the Floor";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content p"
      ).innerHTML =
        "The industrial manufacturing industry is facing challenges worldwide, where an unprecedented number of jobs are remaining unfilled.";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
      ).href =
        "https://www.hirevue.com/resources/report/industrial-manufacturing-hire-faster-and-smarter-and-get-back-to-the-floor";
      observeInit(
        "https://webapi.hirevue.com/wp-content/uploads/2022/11/industrial-manufacturing-hiring.jpg"
      );
    }

    if (sixSense.segments.includes("Financial Services Industry")) {
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content h2"
      ).innerHTML = "Combatting Archaic Hiring Practices";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content p"
      ).innerHTML =
        "The financial services industry is a foundation of the workforce, but their hiring teams are being forced to change traditional hiring processes.";
      document.querySelector(
        ".hero-headlines__item .hero-headlines__item-content a.btn-primary"
      ).href =
        "https://www.hirevue.com/resources/report/financial-services-combatting-archaic-hiring-practices";
      observeInit(
        "https://webapi.hirevue.com/wp-content/uploads/2022/11/financial-services-hiring.jpg"
      );
    }
  }

  var heroHeadlines = document.getElementsByClassName("hero-headlines__item");

  if (heroHeadlines[0]) {
    heroHeadlines[0].classList.remove("white-loader");
  }
});
