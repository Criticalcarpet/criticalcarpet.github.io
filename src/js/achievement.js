import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const achievements = [
  {
    name: "First Step",
    description: "Visit the website for the first time",
    id: "firstStep",
  },
  {
    name: "Code Review",
    description: "Visit the official repo of the website...",
    id: "codeReview",
  },
];

const achievementsLauncher = (achievement) => {
  localStorage.setItem(achievement.id, "true");
  return Swal.fire({
    html: `<div class="achievement-container">
        <div class="achievement-icon">
            <img src="https://img.icons8.com/color/48/000000/trophy.png" alt="trophy">
        </div>
        <br />
        <div class="achievement-text">
            <h3><u>${achievement.name}</u></h3>
            <br />
            <p>${achievement.description}</p>
        </div>
    </div>`,
    showConfirmButton: false,
    showCloseButton: true,
    allowEscapeKey: false,
    allowOutsideClick: false,
  });
};

// achievements checker

// First Step checker
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("firstStep")) {
    setTimeout(() => {
      achievementsLauncher(achievements[0]);
    }, 4000);
  }
});

// Code Review checker
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const value = params.get("redirect");
if (value === "https://github.com/Criticalcarpet/criticalcarpet.github.io") {
  if (!localStorage.getItem("codeReview")) {
    Swal.fire({
      html: `<div class="achievement-container">
            <div class="achievement-icon">
                <img src="https://img.icons8.com/color/48/000000/trophy.png" alt="trophy">
            </div>
            <br />
            <div class="achievement-text">
                <h3><u>${achievements[1].name}</u></h3>
                <br />
                <p>${achievements[1].description}</p>
            </div>
        </div>`,
      showConfirmButton: false,
      showCloseButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      footer: "You will be redirected when you close this popup !!!",
    }).then(() => {
        window.location.href = value;
    });
  } else {
    window.location.href = value;
  }
} else {
  if (value !== null) {
    window.location.href = value;
  }
}
