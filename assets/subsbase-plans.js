(function (d, o, s, a, m) {
  a = d.createElement(o);
  m = d.getElementsByTagName(o)[0];
  a.async = 1;
  a.defer = 1;
  a.src = s;
  m.parentNode.insertBefore(a, m);
})(document, "script", "https://embed.subsbase.com/sb.min.js");
window.sb =
  window.sb ||
  function () {
    (sb.s = sb.s || []).push(arguments);
  };
sb("siteId", "mls"); // Required
sb("checkoutVersion", "v2");
sb(
  "queryParam",
  "redirects[success]",
  "https://mls.om/pages/subscribe-thank-you"
);

// Plan1 MLS Prime Box 10kg
sb("attachPlan", "mls-prime-box-10kg-7days", "plan-1-7");
sb("attachPlan", "mls-prime-box-10kg-15days", "plan-1-15");
sb("attachPlan", "mls-prime-box-10kg-30days", "plan-1-30");

// Plan2 MLS Signature Box 12kg
sb("attachPlan", "mls-signature-box-12kg-7days", "plan-2-7");
sb("attachPlan", "mls-signature-box-12kg-15days", "plan-2-15");
sb("attachPlan", "mls-signature-box-12kg-30days", "plan-2-30");

// Plan3 Lamb Box 2.5KG
sb("attachPlan", "lamb-box-2-5kg-7days", "plan-3-7");
sb("attachPlan", "lamb-box-2-5kg-15days", "plan-3-15");
sb("attachPlan", "lamb-box-2-5kg-30days", "plan-3-30");

// Plan4 Chicken Box 2.5KG
sb("attachPlan", "chicken-box-2-5kg-7days", "plan-4-7");
sb("attachPlan", "chicken-box-2-5kg-15days", "plan-4-15");
sb("attachPlan", "chicken-box-2-5kg-30days", "plan-4-30");

// Plan5 Protein Box 2.5KG
sb("attachPlan", "protein-box-2-5kg-7days", "plan-5-7");
sb("attachPlan", "protein-box-2-5kg-15days", "plan-5-15");
sb("attachPlan", "protein-box-2-5kg-30days", "plan-5-30");

// Plan6 Barbecue Box 2.5KG
sb("attachPlan", "barbecue-box-2-5kg-7days", "plan-6-7");
sb("attachPlan", "barbecue-box-2-5kg-15days", "plan-6-15");
sb("attachPlan", "barbecue-box-2-5kg-30days", "plan-6-30");

// Plan7 All Star Angus MB 2-2.5KG
sb("attachPlan", "all-star-angus-mb-2---2-5kg-7days", "plan-7-7");
sb("attachPlan", "all-star-angus-mb-2---2-5kg-15days", "plan-7-15");
sb("attachPlan", "all-star-angus-mb-2---2-5kg-30days", "plan-7-30");

// Plan8 All Star Wagyu Box MB 5 - 4.5KG
sb("attachPlan", "all-star-wagyu-box-mb-5---4-5kg-7days", "plan-8-7");
sb("attachPlan", "all-star-wagyu-box-mb-5---4-5kg-15days", "plan-8-15");
sb("attachPlan", "all-star-wagyu-box-mb-5---4-5kg-30days", "plan-8-30");

// Plan9 Lamb Mishkak And Chop Box 4 KG
sb("attachPlan", "lamb-mishkak-and-chop-box-4-kg-7days", "plan-9-7");
sb("attachPlan", "lamb-mishkak-and-chop-box-4-kg-15days", "plan-9-15");
sb("attachPlan", "lamb-mishkak-and-chop-box-4-kg-30days", "plan-9-30");

// Plan10 Beef Box 3KG
sb("attachPlan", "beef-box-3kg-7days", "plan-10-7");
sb("attachPlan", "beef-box-3kg-15days", "plan-10-15");
sb("attachPlan", "beef-box-3kg-30days", "plan-10-30");

// Plan11 Burger Box 2.5KG
sb("attachPlan", "burger-box-2-5kg-7days", "plan-11-7");
sb("attachPlan", "burger-box-2-5kg-15days", "plan-11-15");
sb("attachPlan", "burger-box-2-5kg-30days", "plan-11-30");

// Plan12 Somali Beef Mince Box 3KG
sb("attachPlan", "somali-beef-mince-box-3kg-7days", "plan-12-7");
sb("attachPlan", "somali-beef-mince-box-3kg-15days", "plan-12-15");
sb("attachPlan", "somali-beef-mince-box-3kg-30days", "plan-12-30");

// Plan13 Beef Mishkak and Burger Box 3KG
sb("attachPlan", "beef-mishkak-and-burger-box-3kg-7days", "plan-13-7");
sb("attachPlan", "beef-mishkak-and-burger-box-3kg-15days", "plan-13-15");
sb("attachPlan", "beef-mishkak-and-burger-box-3kg-30days", "plan-13-30");

//plan-1
document
  .getElementById("plan1Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    // Show the appropriate plans button based on the selected duration #plan1
    if (selectedDuration === "7") {
      document.getElementById("plan-1-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-1-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-1-30").style.display = "block";
    }
  });

//plan-2

document
  .getElementById("plan2Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-2-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-2-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-2-30").style.display = "block";
    }
  });

//plan-3

document
  .getElementById("plan3Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-3-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-3-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-3-30").style.display = "block";
    }
  });

//plan-4

document
  .getElementById("plan4Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-4-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-4-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-4-30").style.display = "block";
    }
  });

//plan-5

document
  .getElementById("plan5Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-5-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-5-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-5-30").style.display = "block";
    }
  });

//plan-6

document
  .getElementById("plan6Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-6-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-6-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-6-30").style.display = "block";
    }
  });

//plan-7

document
  .getElementById("plan7Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-7-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-7-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-7-30").style.display = "block";
    }
  });

//plan-8

document
  .getElementById("plan8Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-8-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-8-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-8-30").style.display = "block";
    }
  });

//plan-9

document
  .getElementById("plan9Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-9-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-9-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-9-30").style.display = "block";
    }
  });

//plan-10

document
  .getElementById("plan10Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-10-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-10-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-10-30").style.display = "block";
    }
  });

//plan-11

document
  .getElementById("plan11Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-11-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-11-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-11-30").style.display = "block";
    }
  });

//plan-12

document
  .getElementById("plan12Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-12-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-12-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-12-30").style.display = "block";
    }
  });

//plan-13

document
  .getElementById("plan13Duration")
  .addEventListener("change", function () {
    var selectedDuration = this.value;

    // Hide all buttons by default
    document.querySelectorAll(".subscribe-button").forEach(function (button) {
      button.style.display = "none";
    });

    if (selectedDuration === "7") {
      document.getElementById("plan-13-7").style.display = "block";
    } else if (selectedDuration === "15") {
      document.getElementById("plan-13-15").style.display = "block";
    } else if (selectedDuration === "30") {
      document.getElementById("plan-13-30").style.display = "block";
    }
  });
