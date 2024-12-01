// Smooth Scrolling for Navbar Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Auto-Sliding Animation for Skills Section
let skillSlider = document.querySelector('.skills-slider .skill-slide');
let scrollAmount = 0;

function slideSkills() {
    scrollAmount += 1;
    if (scrollAmount >= skillSlider.scrollWidth / 2) {
        // Reset the scroll position to create an infinite scroll effect
        skillSlider.style.transform = 'translateX(0)';
        scrollAmount = 0;
    } else {
        skillSlider.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

setInterval(slideSkills, 35); // Adjust interval for speed

// Auto-Scrolling Preview on Project Hover
document.querySelectorAll('.project-card').forEach(projectCard => {
    projectCard.addEventListener('mouseenter', function () {
        const img = this.querySelector('img');
        img.style.transition = 'transform 5s linear';
        img.style.transform = 'translateY(-100%)';
    });

    projectCard.addEventListener('mouseleave', function () {
        const img = this.querySelector('img');
        img.style.transition = 'transform 1s ease';
        img.style.transform = 'translateY(0)';
    });
});

// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('check-icon').checked = false; // Uncheck the checkbox
    });
});

//Filter-Portfolio-section
$(document).ready(function () {
    // Portfolio filter buttons
    $(".filter-btn").click(function () {
        const filter = $(this).data("filter");

        // Change active class for filter buttons
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Show/Hide portfolio items based on filter
        if (filter === "all") {
            $(".portfolio-item").show();
        } else {
            $(".portfolio-item").hide();
            $(`.portfolio-item[data-category="${filter}"]`).show();
        }
    });
});
//contact-form
function sendEmail() {
    // Retrieve values from form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the form fields
    if (!name || !email || !phone || !message) {
        alert('Please fill out all the fields.');
        return;
    }

    // Debugging: Show field values in the console
    console.log('Sending email with the following data:');
    console.log({ name, email, phone, message });

    // Configure and send the email
    Email.send({
        Host: "smtp.elasticemail.com", // Your SMTP host
        Username: "tahiruddinsk111@gmail.com", // Replace with your SMTP username
        Password: "35AF797525C7C896A1A80BED099848399FC7", // Replace with your SMTP password
        To: "tahiruddinsk111@gmail.com", // Replace with your email address
        From: "tahiruddinsk111@gmail.com", // Replace with your email address
        Subject: `New Contact Form Submission from ${name}`,
        Body: `
            <h3>Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact No:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    }).then((response) => {
        console.log('Email response:', response);
        if (response === 'OK') {
            alert('Your message has been sent successfully!');
            // Reset the form after a successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Failed to send the message. Please try again later.');
        }
    }).catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message: ' + error);
    });
}
// Timeline Script 
function showEducation() {
    document.getElementById("educationToggle").classList.add("active");
    document.getElementById("trainingToggle").classList.remove("active");
    document.getElementById("educationTimeline").style.display = "block";
    document.getElementById("trainingTimeline").style.display = "none";
  }
  
  function showTraining() {
    document.getElementById("educationToggle").classList.remove("active");
    document.getElementById("trainingToggle").classList.add("active");
    document.getElementById("educationTimeline").style.display = "none";
    document.getElementById("trainingTimeline").style.display = "block";
  }
  
  // Check screen width on page load and resize
  function updateTimelineDisplay() {
    if (window.innerWidth > 768) {
      // Show both columns on desktop view
      document.getElementById("educationTimeline").style.display = "block";
      document.getElementById("trainingTimeline").style.display = "block";
      document.querySelector('.toggle-buttons').style.display = "none";
    } else {
      // Hide one timeline initially on mobile view
      document.getElementById("educationTimeline").style.display = "block";
      document.getElementById("trainingTimeline").style.display = "none";
      document.getElementById("educationToggle").classList.add("active");
      document.getElementById("trainingToggle").classList.remove("active");
      document.querySelector('.toggle-buttons').style.display = "flex";
    }
  }
  
  // Run on page load
  window.addEventListener("load", updateTimelineDisplay);
  // Run on window resize
  window.addEventListener("resize", updateTimelineDisplay);
  