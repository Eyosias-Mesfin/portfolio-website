const form = document.getElementById("contact-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
      console.error(data);
    }
  })
  .catch(error => {
    alert("❌ Network error. Please try later.");
    console.error(error);
  });
});
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
      const answer = faq.querySelector('.answer');
      if (faq.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
