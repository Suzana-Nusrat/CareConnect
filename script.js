const caregivers = [
  {
    name: "Fatema Akter",
    service: "Elderly Care",
    experience: 5,
    fee: 600,
    status: "Available",
    icon: "👩‍⚕️"
  },
  {
    name: "Salma Begum",
    service: "Patient Attendant",
    experience: 7,
    fee: 750,
    status: "Available",
    icon: "🧕"
  },
  {
    name: "Rahima Khatun",
    service: "Post-Surgery Care",
    experience: 4,
    fee: 650,
    status: "Busy",
    icon: "👩"
  }
];

const caregiverList = document.getElementById("caregiverList");

if (caregiverList) {
  caregivers.forEach((caregiver) => {
    caregiverList.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="caregiver-card">
          <div class="caregiver-img">${caregiver.icon}</div>
          <h5>${caregiver.name}</h5>
          <p class="mb-1"><strong>Service:</strong> ${caregiver.service}</p>
          <p class="mb-1"><strong>Experience:</strong> ${caregiver.experience} years</p>
          <p class="mb-1"><strong>Fee:</strong> BDT ${caregiver.fee}/day</p>
          <p class="mb-3"><strong>Status:</strong> ${caregiver.status}</p>
          <a href="login.html" class="btn btn-outline-primary rounded-pill w-100">Book Now</a>
        </div>
      </div>
    `;
  });
}

const quickBookingForm = document.getElementById("quickBookingForm");

if (quickBookingForm) {
  quickBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Please login or register first to complete your booking.");
    window.location.href = "login.html";
  });
}