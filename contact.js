function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  alert("Thank you, "+ name + "."+" Your message has been received!");

  document.getElementById("contactForm").reset();
}