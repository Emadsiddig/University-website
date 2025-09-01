let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}
const students = {
  "emadsiddig72@gmail.com": "2530583",
  "student2@example.com": "REG456",
  "student3@example.com": "REG789"
};
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value.trim();
  const regnum = document.getElementById("regnum").value.trim();

  if (students[email] && students[email] === regnum) {
    alert("welcome" + email);
    window.location.href = "student-profile.html"; 
  } else {
    alert(" !");
  }
});