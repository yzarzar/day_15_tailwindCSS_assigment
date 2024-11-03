function togglePopupMenu() {
  const popupMenu = document.getElementById("popupMenu");
  popupMenu.classList.toggle("hidden");
}

function toggleDropdown(event, dropdownId) {
  event.stopPropagation();
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("hidden");
}

// Close dropdowns if clicked outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  const subDropdown = document.getElementById("subDropdown");

  // Check if dropdown is open and click target is outside the dropdown
  if (
    !dropdown.classList.contains("hidden") &&
    !event.target.closest(".relative")
  ) {
    dropdown.classList.add("hidden");
  }

  // Check if subDropdown is open and click target is outside the subDropdown
  if (
    !subDropdown.classList.contains("hidden") &&
    !event.target.closest("#dropdownMenu")
  ) {
    subDropdown.classList.add("hidden");
  }
});

let lastScrollTop = 0;
const contactLinks = document.querySelector(".font-nav");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    contactLinks.classList.add("hidden-contact-links");
  } else {
    // Scrolling up
    contactLinks.classList.remove("hidden-contact-links");
  }
});

const contents = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/rpWeDASdL9w?autoplay=1",
  },
  { type: "image", src: "./img/departments-1.jpg" },
  { type: "image", src: "./img/departments-2.jpg" },
  { type: "image", src: "./img/departments-3.jpg" },
  { type: "image", src: "./img/departments-4.jpg" },
  { type: "image", src: "./img/departments-5.jpg" },
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  updateModalContent();
  document.getElementById("videoModal").classList.remove("hidden");
}

function closeModal(event) {
  if (
    !event ||
    !document.querySelector("#videoModal > div").contains(event.target)
  ) {
    document.getElementById("videoModal").classList.add("hidden");
    document.getElementById("modalContent").innerHTML = "";
  }
}

function updateModalContent() {
  const modalContent = document.getElementById("modalContent");
  const content = contents[currentIndex];
  if (content.type === "video") {
    modalContent.innerHTML = `<iframe src="${content.src}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else if (content.type === "image") {
    modalContent.innerHTML = `<img src="${content.src}" alt="Content Image" />`;
  }
}

function showPreviousContent() {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length;
  updateModalContent();
}

function showNextContent() {
  currentIndex = (currentIndex + 1) % contents.length;
  updateModalContent();
}

// Departments Section Services
document.addEventListener("DOMContentLoaded", function () {
  const contentData = {
    cardiology: {
      title: "Cardiology",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      image: "./img/departments-1.jpg",
    },
    neurology: {
      title: "Neurology",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      image: "./img/departments-2.jpg",
    },
    hepatology: {
      title: "Hepatology",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      image: "./img/departments-3.jpg",
    },
    pediatrics: {
      title: "Pediatrics",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      image: "./img/departments-4.jpg",
    },
    eyeCare: {
      title: "Eye Care",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
      image: "./img/departments-5.jpg",
    },
  };

  const mainContent = document.getElementById("main-content");

  function updateContent(section) {
    const data = contentData[section];

    // Add fade-out effect
    mainContent.classList.remove("visible");

    // Update content after a short delay
    setTimeout(() => {
      mainContent.innerHTML = `
        <!-- Image for mobile -->
        <div class="w-full md:hidden mt-10">
        <img alt="${data.title}" class="w-full h-auto" src="${data.image}" />
        </div>
        <!-- Text content -->
        <div class="w-full md:w-2/3 pr-0 md:pr-6">
        <h1 class="text-3xl text-gray-600 font-heading md:mt-0 mt-10">${data.title}</h1>
        <p class="text-[17px] leading-8 italic text-gray-500 mt-4">${data.description}</p>
        <p class="text-[17px] leading-8 text-gray-500 mt-4">${data.details}</p>
        </div>
        <!-- Image for desktop -->
        <div class="hidden md:block w-full md:w-1/3 mt-4 md:mt-0">
        <img alt="${data.title}" class="w-full h-full" src="${data.image}" />
        </div>
      `;
      // Add fade-in effect
      mainContent.classList.add("visible");
    }, 500); // Delay matches CSS transition time
  }

  // Show default content with fade-in
  mainContent.classList.add("fade-content");
  updateContent("cardiology");

  document
    .getElementById("cardiology-tab")
    .addEventListener("click", (event) => {
      event.preventDefault();
      updateContent("cardiology");
    });

  document
    .getElementById("neurology-tab")
    .addEventListener("click", (event) => {
      event.preventDefault();
      updateContent("neurology");
    });

  document
    .getElementById("hepatology-tab")
    .addEventListener("click", (event) => {
      event.preventDefault();
      updateContent("hepatology");
    });

  document
    .getElementById("pediatrics-tab")
    .addEventListener("click", (event) => {
      event.preventDefault();
      updateContent("pediatrics");
    });

  document.getElementById("eye-care-tab").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent("eyeCare");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("ul li");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove the active class from all tabs
      tabs.forEach((item) => {
        item.querySelector("a").classList.remove("active", "text-blue-600");
        item.querySelector("a").classList.add("text-gray-800");
      });

      // Add the active class to the clicked tab
      this.querySelector("a").classList.add("active", "text-blue-600");
      this.querySelector("a").classList.remove("text-gray-800");
    });
  });
});

// Frequently Asked Questions Services
const faqData = [
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. ",
  },
];

function toggleAnswer(div) {
  const card = div.parentElement; // Get the parent div of the button
  const answer = div.nextElementSibling;
  const icon = div.querySelector("i");

  answer.classList.toggle("hidden");
  answer.classList.toggle("text-white");
  card.classList.toggle("bg-blue-600"); // Toggle the background color to blue
  card.classList.toggle("bg-white"); // Toggle the background color to white
  div.classList.toggle("text-white"); // Toggle text color to white
  div.classList.toggle("no-hover");

  // Toggle hover effect
  if (card.classList.contains("bg-blue-600")) {
    div.classList.remove("hover:text-blue-600");
  } else {
    div.classList.add("hover:text-blue-600");
  }

  // Toggle the icon class
  if (answer.classList.contains("hidden")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-right");
  } else {
    icon.classList.remove("fa-chevron-right");
    icon.classList.add("fa-chevron-down");
  }
}

function generateFAQ() {
  const container = document.getElementById("faq-container");
  container.innerHTML = faqData
    .map(
      (item) => `
    <div class="bg-white rounded-lg mb-4 transition-colors duration-300 border">
      <div
        class="w-full text-left p-4 text-gray-800 font-semibold flex justify-between items-center cursor-pointer hover:text-blue-600 title"
        onclick="toggleAnswer(this)"
      >
        ${item.question}
        <i class="fas fa-chevron-right text-gray-400"></i>
      </div>
      <div class="hidden p-4 text-gray-600">
        ${item.answer}
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", generateFAQ);

// Testimonials Section Services
const profilesData = [
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "./img/testimonials/testimonials-1.jpg",
    rating: 5,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "John Doe",
    role: "Developer",
    image: "./img/testimonials/testimonials-2.jpg",
    rating: 4,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "./img/testimonials/testimonials-3.jpg",
    rating: 5,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Alice Johnson",
    role: "Manager",
    image: "./img/testimonials/testimonials-4.jpg",
    rating: 3,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Bob Brown",
    role: "Consultant",
    image: "./img/testimonials/testimonials-5.jpg",
    rating: 4,
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
];

let testimonialscurrentIndex = 0; // Store the current index of the profile being displayed

function createProfileCards(dataArray) {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear existing content

  const displayProfile = (index, direction = "right") => {
    const data = dataArray[index];
    const stars = Array(data.rating)
      .fill('<i class="fas fa-star text-yellow-500"></i>')
      .join("");

    const cardHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg pt-20 mb-6 overflow-hidden">
          <div class="profile-content transition-transform duration-500 transform">
              <div class="flex items-center mb-4">
                  <img
                      alt="Portrait of a person"
                      class="w-16 h-16 rounded-full mr-4 mb-10"
                      height="100"
                      src="${data.image}"
                      width="100"
                  />
                  <div>
                      <h3 class="text-xl font-bold text-gray-800">${
                        data.name
                      }</h3>
                      <p class="text-gray-500">${data.role}</p>
                      <div class="flex items-center mt-2">
                          ${stars}
                      </div>
                  </div>
              </div>
              <p class="text-gray-600 italic mb-20">
                  <i class="fas fa-quote-left text-blue-400 mr-2"></i>
                  ${data.quote}
                  <i class="fas fa-quote-right text-blue-400 ml-2"></i>
              </p>
          </div>
          <div class="flex justify-center mt-4">
              ${dataArray
                .map((_, idx) => {
                  const isActive =
                    idx === index ? "bg-blue-500" : "bg-gray-300";
                  return `<span class="h-3 w-3 cursor-pointer ${isActive} rounded-full mx-1" data-index="${idx}"></span>`;
                })
                .join("")}
          </div>
      </div>
    `;

    // Animate out the current content
    const currentContent = content.querySelector(".profile-content");
    if (currentContent) {
      currentContent.classList.add(
        direction === "right" ? "-translate-x-full" : "translate-x-full"
      );
      setTimeout(() => {
        content.innerHTML = cardHTML;
        animateInNewContent(direction);
        addSpanEventListeners(); // Re-add event listeners after updating content
      }, 500); // Wait for the animation to complete
    } else {
      content.innerHTML = cardHTML;
      animateInNewContent(direction);
      addSpanEventListeners(); // Add event listeners for the first load
    }
  };

  const animateInNewContent = (direction) => {
    const newContent = content.querySelector(".profile-content");
    newContent.classList.add(
      direction === "right" ? "translate-x-full" : "-translate-x-full"
    );
    requestAnimationFrame(() => {
      newContent.classList.remove("translate-x-full", "-translate-x-full");
    });
  };

  const addSpanEventListeners = () => {
    const spans = content.querySelectorAll("span");
    spans.forEach((span) => {
      span.addEventListener("click", function () {
        const newIndex = this.getAttribute("data-index");
        const newDirection =
          newIndex > testimonialscurrentIndex ? "right" : "left";
        testimonialscurrentIndex = parseInt(newIndex); // Update current index
        displayProfile(testimonialscurrentIndex, newDirection); // Redisplay the profile card
      });
    });
  };

  displayProfile(testimonialscurrentIndex); // Initial call to display the first profile

  // Automatically cycle through profiles every 3 seconds
  setInterval(() => {
    const newDirection =
      (testimonialscurrentIndex + 1) % dataArray.length >
      testimonialscurrentIndex
        ? "right"
        : "left";
    testimonialscurrentIndex =
      (testimonialscurrentIndex + 1) % dataArray.length;
    displayProfile(testimonialscurrentIndex, newDirection);
  }, 5000); // 3000 milliseconds = 3 seconds
}

// Call the function to create the profile cards
createProfileCards(profilesData);

// Gallery Section Services
const imageData = [
  {
    alt: "Doctors performing surgery in an operating room",
    src: "./img/gallery/gallery-1.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Scientist working with laboratory equipment",
    src: "./img/gallery/gallery-2.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Laboratory technician working with test tubes",
    src: "./img/gallery/gallery-3.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Medical team performing surgery in an operating room",
    src: "./img/gallery/gallery-4.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Female doctor with a stethoscope and a virus illustration",
    src: "./img/gallery/gallery-5.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Scientist working with laboratory equipment",
    src: "./img/gallery/gallery-6.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Scientist working with laboratory equipment",
    src: "./img/gallery/gallery-7.jpg",
    width: 600,
    height: 400,
  },
  {
    alt: "Scientist working with laboratory equipment",
    src: "./img/gallery/gallery-8.jpg",
    width: 600,
    height: 400,
  },
];

const imageGrid = document.getElementById("imageGrid");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

let galleryCurrentIndex = 0;

const createImageCard = (image, index) => `
  <div class="overflow-hidden">
      <img
          alt="${image.alt}"
          class="w-full h-auto transition-transform duration-300 transform cursor-pointer hover:scale-110"
          src="${image.src}"
          width="${image.width}"
          height="${image.height}"
          onclick="showImageModal(${index})"
      />
  </div>
`;

imageData.forEach((image, index) => {
  imageGrid.innerHTML += createImageCard(image, index);
});

// Function to show the modal with the clicked image
function showImageModal(index) {
  galleryCurrentIndex = index;
  updateModalImage();
  updateButtonState();
  imageModal.classList.remove("hidden");
}

// Function to update the modal image based on the current index
function updateModalImage() {
  const image = imageData[galleryCurrentIndex];
  modalImage.src = image.src;
  modalImage.alt = image.alt;
}

// Function to close the modal
function closeGalleryModal() {
  imageModal.classList.add("hidden");
}

// Function for the previous button
function prevImage() {
  if (galleryCurrentIndex > 0) {
    animateImage("left");
    galleryCurrentIndex =
      (galleryCurrentIndex - 1 + imageData.length) % imageData.length;
    setTimeout(() => {
      updateModalImage();
      updateButtonState();
    }, 500); // Wait for animation to complete
  }
}

// Function for the next button
function nextImage() {
  if (galleryCurrentIndex < imageData.length - 1) {
    animateImage("right");
    galleryCurrentIndex = (galleryCurrentIndex + 1) % imageData.length;
    setTimeout(() => {
      updateModalImage();
      updateButtonState();
    }, 500); // Wait for animation to complete
  }
}

// Function to update the state of the next and previous buttons
function updateButtonState() {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  const isPrevDisabled = galleryCurrentIndex === 0;
  const isNextDisabled = galleryCurrentIndex === imageData.length - 1;

  prevButton.disabled = isPrevDisabled;
  nextButton.disabled = isNextDisabled;

  prevButton.style.display = isPrevDisabled ? "none" : "block";
  nextButton.style.display = isNextDisabled ? "none" : "block";
}

// Function to animate the image transition
function animateImage(direction) {
  modalImage.style.transform =
    direction === "left" ? "translateX(-100%)" : "translateX(100%)";
  setTimeout(() => {
    modalImage.style.transition = "none";
    modalImage.style.transform =
      direction === "left" ? "translateX(100%)" : "translateX(-100%)";
    setTimeout(() => {
      modalImage.style.transition = "transform 0.5s";
      modalImage.style.transform = "translateX(0)";
    }, 50);
  }, 500);
}

// Event listener to close the modal when clicking outside the image
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeGalleryModal();
  }
});

const scrollToTopButton = document.getElementById("scrollToTopButton");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    scrollToTopButton.classList.add("opacity-100");
    scrollToTopButton.classList.remove("opacity-0");
  } else {
    scrollToTopButton.classList.add("opacity-0");
    scrollToTopButton.classList.remove("opacity-100");
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('ul li');

  navLinks.forEach(li => {
    li.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      li.classList.add('active');
    });
  });
});