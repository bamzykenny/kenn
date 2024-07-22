const attractions = {
    lagos: ["Lekki Conservation Centre", "Nike Art Gallery", "Tarkwa Bay Beach", "National Museum Lagos"],
    abuja: ["Zuma Rock", "Aso Rock", "National Mosque", "Jabi Lake"],
    kano: ["Gidan Makama Museum", "Kano City Wall", "Dala Hill", "Kurmi Market"],
    rivers: ["Port Harcourt Tourist Beach", "Isaac Boro Garden Park", "Bonny Island", "Pleasure Park"]
    // Add more states and attractions as needed
};

function populateAttractions() {
    const stateSelect = document.getElementById("state");
    const attractionSelect = document.getElementById("attraction");
    const selectedState = stateSelect.value;

    // Clear previous options
    attractionSelect.innerHTML = '<option value="" disabled selected>Select an attraction</option>';

    // Populate attractions based on selected state
    if (attractions[selectedState]) {
        attractions[selectedState].forEach(attraction => {
            const option = document.createElement("option");
            option.value = attraction;
            option.textContent = attraction;
            attractionSelect.appendChild(option);
        });
    }
}

function redirectToPayment() {
    // Simple form validation
    const name = document.getElementById("name").value;
    const stateSelect = document.getElementById("state").value;
    const attractionSelect = document.getElementById("attraction").value;

    if (name && stateSelect && attractionSelect) {
        // Store booking details in localStorage
        localStorage.setItem("bookingDetails", JSON.stringify({
            name,
            state: stateSelect,
            attraction: attractionSelect
        }));
        window.location.href = "payment.html";
    } else {
        alert("Please fill in all fields.");
    }
}


function generateTicket(event) {
    event.preventDefault();

    // Retrieve booking details from localStorage
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    if (!bookingDetails) {
        alert("Booking details not found. Please book a tour first.");
        return;
    }

    const { name, state, attraction } = bookingDetails;

    // Generate ticket details
    const ticketNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const availabilityDate = new Date().toLocaleDateString();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // Ticket expires in 30 days
    const formattedExpiryDate = expiryDate.toLocaleDateString();

    // Create ticket details string
    const ticketDetails = `
        Ticket ID: ${ticketNumber}
        Name: ${name}
        State: ${state.charAt(0).toUpperCase() + state.slice(1)}
        Attraction: ${attraction}
        Date of Availability: ${availabilityDate}
        Date of Expiry: ${formattedExpiryDate}
    `;

    // Display ticket details
    alert(ticketDetails);

    // Clear booking details from localStorage
    localStorage.removeItem("bookingDetails");

    // Here you would typically also handle the payment processing logic
}
