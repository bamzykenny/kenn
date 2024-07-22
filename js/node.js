  //  let searchBtn = document.querySelector('#search-btn');
  //  let searchBar = document.querySelector('.search-bar-container');
  //  let formBtn = document.querySelector('#login-Btn');
  //  let loginForm = document.querySelector('.login-form-container');
  //  let formClose = document.querySelector('#form-close');
  //  let menu = document.querySelector('#menu-bar');
  //  let navbar = document.querySelector('.navbar');
  //  let videoBtn = document.querySelectorAll('.vid-btn');
  


  //  window.onscroll = () =>{
  //   searchBtn.classList.remove('fa-times');
  //   searchBar.classList.remove('active');
  //   menu.classList.remove('fa-times');
  //   navbar.classList.remove('active');
  //   loginForm.classList.remove('active');

  //  };

  //  menu.addEventListener('click', () =>{
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');

  //  });

  //  searchBtn.addEventListener('click', () =>{
  //     searchBtn.classList.toggle('fa-times');
  //     searchBar.classList.toggle('active');
  
  //    });

  //  formBtn.addEventListener('click', () =>{
  //     loginForm.classList.add('active'); 
  //    });

  //    formClose.addEventListener('click', () =>{
  //     loginForm.classList.remove('active'); 
  //    });


  //    videoBtn.forEach(btn =>{
  //     btn.addEventListener('click', ()=>{
  //        document.querySelector('.controls .active').classList.remove('active');
  //        btn.classList.add('active');
  //        let src = btn.getAttribute('data-src');
  //        document.querySelector('#video-slider').src = src;
  //     });
  //  });
 
  //  var swiper = new Swiper(".review-slider", {
  //   spaceBetween: 20,
  //   loop:true,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction:false,
  //   },
  //   breakpoints: {
  //     450: {
  //       slidesPerView:2,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     991: {
  //       slidesPerView: 4,
  //     },
  //     1200: {
  //       slidesPerView: 5,
  //     }, 
  //   },
  //  });

  



  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');
  let videoBtn = document.querySelectorAll('.vid-btn');

  window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    loginForm.classList.remove('active');
  };

  menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
   });

  searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
  });

  formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
  });

  formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
  });
   
  videoBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
           document.querySelector('.controls .active').classList.remove('active');
           btn.classList.add('active');
           let src = btn.getAttribute('data-src');
           document.querySelector('#video-slider').src = src;
        });
     });



        async function searchWord(word, pages) {
            for (const page of pages) {
                try {
                    const response = await fetch(page);
                    const text = await response.text();
                    if (text.includes(word)) {
                        // Save the search word and page URL to local storage
                        localStorage.setItem('searchWord', word);
                        localStorage.setItem('searchPage', page);
                        // Navigate to the page
                        window.location.href = page;
                        return; // Exit after finding the word
                    }
                } catch (error) {
                    console.error(`Error fetching ${page}:`, error);
                }
            }
            console.log(`Word "${word}" not found in any page`);
        }

        function initiateSearch() {
            const word = document.getElementById('searchWord').value;
            const pages = [
                'index.html',
                'index1.html',
                'page3.html'
            ];
            searchWord(word, pages);
        }



        window.onload = function() {
          const searchWord = localStorage.getItem('searchWord');
          if (searchWord) {
              const bodyText = document.body.innerHTML;
              const regex = new RegExp(`(${searchWord})`, 'gi');
              const highlightedText = bodyText.replace(regex, '<span class="highlight">$1</span>');
              document.body.innerHTML = highlightedText;

              const highlights = document.querySelectorAll('.highlight');
              if (highlights.length > 0) {
                  highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
              }

              // Hide all other content
              document.querySelectorAll('body *').forEach(element => {
                  if (!element.classList.contains('highlight')) {
                      // element.classList.add('hidden');
                  }
              });

              // Remove the search word from local storage
              localStorage.removeItem('searchWord');
          }
      };



  //    function searchNavbar() {
  //     // Get the input value
  //     let input = document.getElementById('searchBar').value.toUpperCase();
      
  //     // Get the navbar list items
  //     let ul = document.getElementById('navbar');
  //     let li = ul.getElementsByTagName('li');

  //     // Loop through all list items and hide those that don't match the search query
  //     for (let i = 0; i < li.length; i++) {
  //         let textValue = li[i].textContent || li[i].innerText;
  //         if (textValue.toUpperCase().indexOf(input) > -1) {
  //             li[i].style.display = '';
  //         } else {
  //             li[i].style.display = 'none';
  //         }
  //     }
  // }


//   function filterTours() {
//     // Get the input value
//     let input = document.getElementById('searchBar').value.toUpperCase();
//     let locationFilter = document.getElementById('filterLocation').value.toUpperCase();

//     // Get the list items
//     let ul = document.getElementById('tours');
//     let li = ul.getElementsByTagName('li');

//     // Loop through all list items and hide those that don't match the search query and location filter
//     for (let i = 0; i < li.length; i++) {
//         let textValue = li[i].textContent || li[i].innerText;
//         let locationValue = li[i].getAttribute('data-location').toUpperCase();

//         if ((textValue.toUpperCase().indexOf(input) > -1 || input === '') &&
//             (locationValue === locationFilter || locationFilter === '')) {
//             li[i].style.display = '';
//         } else {
//             li[i].style.display = 'none';
//         }
//     }
// }

    //  function initMap() {
    //   var location = {lat: -25.363, lng: 131.044};
    //   var map = new google.maps.Map(document.getElementById("map"),{
    //     zoom: 4,
    //     center: location

    //   });
    //   var marker = new google.maps.marker({
    //     position: location,
    //     map: map
    //   });
    //  }

    //  async defer src="https://maps.googleapis.com/maps/api/js?key=callback=initMap"
    



  //    const statesAndCities = {
  //     "Lagos": ["Ikeja", "Epe", "Ikorodu", "Badagry", "Victoria Island"],
  //     "Kano": ["Fagge", "Nasarawa", "Gwale", "Dala", "Tarauni"],
  //     "Kaduna": ["Zaria", "Kafanchan", "Soba", "Kajuru", "Jema'a"],
  //     "Rivers": ["Port Harcourt", "Obio-Akpor", "Bonny", "Eleme", "Okrika"],
  //     "Oyo": ["Ibadan", "Ogbomosho", "Oyo", "Iseyin", "Eruwa"]
  //     // Add more states and cities as needed
  // };
  
  // document.addEventListener('DOMContentLoaded', () => {
  //     const searchInput = document.getElementById('search');
  //     const resultsDiv = document.getElementById('results');
  //     const mapDiv = document.getElementById('map');
  
  //     let map;
  //     let service;
  //     let infowindow;
  
  //     function initializeMap() {
  //         const nigeria = new google.maps.LatLng(9.0820, 8.6753);
  //         map = new google.maps.Map(mapDiv, {
  //             center: nigeria,
  //             zoom: 6
  //         });
  //         infowindow = new google.maps.InfoWindow();
  //     }
  
  //     function createList(state, cities) {
  //         const stateHeader = document.createElement('h2');
  //         stateHeader.textContent = state;
  //         resultsDiv.appendChild(stateHeader);
  
  //         const citiesList = document.createElement('ul');
  //         cities.forEach(city => {
  //             const cityItem = document.createElement('li');
  //             cityItem.textContent = city;
  //             cityItem.addEventListener('click', () => {
  //                 searchCity(city);
  //             });
  //             citiesList.appendChild(cityItem);
  //         });
  //         resultsDiv.appendChild(citiesList);
  //     }
  
  //     function searchCity(city) {
  //         const request = {
  //             query: city,
  //             fields: ['name', 'geometry'],
  //         };
  
  //         service = new google.maps.places.PlacesService(map);
  //         service.findPlaceFromQuery(request, (results, status) => {
  //             if (status === google.maps.places.PlacesServiceStatus.OK) {
  //                 for (let i = 0; i < results.length; i++) {
  //                     createMarker(results[i]);
  //                 }
  //                 map.setCenter(results[0].geometry.location);
  //             }
  //         });
  //     }
  
  //     function createMarker(place) {
  //         const marker = new google.maps.Marker({
  //             map: map,
  //             position: place.geometry.location
  //         });
  
  //         google.maps.event.addListener(marker, 'click', () => {
  //             infowindow.setContent(place.name);
  //             infowindow.open(map, marker);
  //         });
  //     }
  
  //     function searchHandler() {
  //         const query = searchInput.value.toLowerCase();
  //         resultsDiv.innerHTML = '';
  
  //         Object.keys(statesAndCities).forEach(state => {
  //             if (state.toLowerCase().includes(query) || statesAndCities[state].some(city => city.toLowerCase().includes(query))) {
  //                 createList(state, statesAndCities[state]);
  //             }
  //         });
  //     }
  
  //     searchInput.addEventListener('input', searchHandler);
  //     initializeMap();
  // });

//  const checkbox = document.getElementById("checkbox");

// function introAboutLogoTransition() {
//     $("#about-quad").css("top", "70%");
//     $("#about-quad").css("opacity", "1");
// }



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
};

        // function search() {
        //     var input, filter, divs, div, i, txtValue;
        //     input = document.getElementById("searchInput");
        //     filter = input.value.toUpperCase();
        //     divs = document.getElementsByTagName("div");
        
        //     for (i = 0; i < divs.length; i++) {
        //         div = divs[i];
        //         txtValue = div.textContent || div.innerText;
        //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //             div.style.display = "";
        //         } else {
        //             div.style.display = "none";
        //         }
        //     }
        // }
        





     var swiper = new Swiper(".review-slider",{
      spaceBetween: 20,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView:1,
        },
        768: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView: 3,
        },
      },
   });

  
 var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction:false,
    },
    breakpoints: {
      450: {
        slidesPerView:2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
   });




   