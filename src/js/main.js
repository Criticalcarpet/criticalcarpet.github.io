import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import publicAudio from '../public/ree.mp3' 

let audio = new Audio(publicAudio);
document.getElementById("whole-content").style.display = "block";
console.log("I don't know why you are here");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("whole-content").remove();
    document.getElementById("append-head").style.display = "block";
  }, 2000);
});


const helpTemplate = `
<div>This is a help text</div>
`
document
  .getElementById("help-tooltip")
  .addEventListener("click", async () => {
    audio.play();
    Swal.fire({
      title: "Help",
      html: helpTemplate,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonText: "OK",
    });
  });


const periodChecker = localStorage.getItem('previousVisit');
if (periodChecker === null) {
alert('The website has been resetted by the admin. So you will be redoing the achievements')
localStorage.clear();
localStorage.setItem('previousVisit', 'true');
}