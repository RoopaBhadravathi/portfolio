// 




/* ===== Overview counter animation ===== */
const counters = document.querySelectorAll(".stat-number");
let started = false;

// Function to start counting
const startCount = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 60;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Observe the Overview heading instead of #about
const overviewHeading = document.querySelector(".overview-title");

if (overviewHeading) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      startCount();
    }
  }, { threshold: 0.5 }); // 50% of heading visible

  observer.observe(overviewHeading);
}



// ========================education=======================

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

timelineItems.forEach(item => observer.observe(item));

const eduRows = document.querySelectorAll(".edu-row");

const eduObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.3 }
);

eduRows.forEach(row => eduObserver.observe(row));


// ============================contact emailJS==========================================

//<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


//(function() {
  //emailjs.init("T1FyNORwx57dFwL8S"); // EmailJS Public Key
//})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  // set time dynamically
  this.time.value = new Date().toLocaleString();

  emailjs.sendForm(
    "service_4lr88vv",
    "template_4addifo",
    this
  )
  .then(() => {
    status.textContent = "Message sent successfully ✅";
    this.reset();
  })
  .catch((error) => {
    status.textContent = "Failed to send ❌";
    console.log(error);
  });
});



// ======================================portfolio section=========================================




  const projectCards = document.querySelectorAll('.project-card');

  const observerr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  projectCards.forEach(card => observerr.observe(card));


