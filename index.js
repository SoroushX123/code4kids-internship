document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Code4Kids! We’ll get back to you soon.");
});

document
  .querySelector("#volunteerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Thank you for applying as a volunteer! We'll review your application soon."
    );
  });
