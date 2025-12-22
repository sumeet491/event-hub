const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);

const allEvents = [
  {
    title: "Live Rock Concert",
    date: "Sun, 21 Dec • 07:00 PM",
    place: "Delhi • Jawaharlal Stadium",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Standup Comedy Night",
    date: "Fri, 27 Dec • 08:30 PM",
    place: "Mumbai • Habitat Comedy Club",
    img: "https://cdn.pixabay.com/photo/2021/02/24/10/24/microphone-6046111_1280.jpg"
  },
  {
    title: "EDM DJ Party",
    date: "Sat, 28 Dec • 10:00 PM",
    place: "Goa • Tito,s Arena",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745"
  },
  {
    title: "Startup Networking Meetup",
    date: "Mon, 30 Dec • 11:00 AM",
    place: "Bangalore • WeWork",
    img: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
  },
  {
    title: "Classical Music Evening",
    date: "Tue, 31 Dec • 06:00 PM",
    place: "Chennai • Music Academy",
    img: "https://cdn.pixabay.com/photo/2018/09/26/01/06/piano-3703616_1280.jpg"
  },
  {
    title: "Photography Workshop",
    date: "Wed, 01 Jan • 09:00 AM",
    place: "Jaipur • Art Street",
    img: "https://cdn.pixabay.com/photo/2018/09/12/12/31/photographer-3672075_1280.jpg"
  },
  {
    title: "Fitness Bootcamp",
    date: "Thu, 02 Jan • 06:00 AM",
    place: "Pune • Koregaon Park",
    img: "https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_1280.jpg"
  },
  {
    title: "Food & Wine Festival",
    date: "Fri, 03 Jan • 05:00 PM",
    place: "Gurgaon • Cyber Hub",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
  },
  {
    title: "Tech Conference 2025",
    date: "Sat, 04 Jan • 10:00 AM",
    place: "Hyderabad • HICC",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  },
  {
    title: "Art & Painting Workshop",
    date: "Sun, 05 Jan • 02:00 PM",
    place: "Delhi • Art Hub",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
  },
  {
    title: "Bollywood Dance Class",
    date: "Mon, 06 Jan • 04:00 PM",
    place: "Mumbai • Dance Studio",
    img: "https://cdn.pixabay.com/photo/2020/03/06/11/14/black-4906807_1280.jpg"
  },
  {
    title: "Poetry Open Mic",
    date: "Tue, 07 Jan • 07:30 PM",
    place: "Lucknow • Cafe Literati",
    img: "https://cdn.pixabay.com/photo/2016/05/07/19/01/feather-pen-1378026_1280.jpg"
  },
  {
    title: "Gaming LAN Tournament",
    date: "Wed, 08 Jan • 12:00 PM",
    place: "Noida • Gaming Zone",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
  },
  {
    title: "Fashion Expo",
    date: "Thu, 09 Jan • 11:00 AM",
    place: "Delhi • Pragati Maidan",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  },
  {
    title: "Motivational Speaker Session",
    date: "Fri, 10 Jan • 03:00 PM",
    place: "Indore • Convention Hall",
    img: "https://images.unsplash.com/photo-1503424886307-b090341d25d1"
  },
  {
    title: "Travel Vlogging Workshop",
    date: "Sat, 11 Jan • 09:30 AM",
    place: "Manali • Travel Hub",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "New Year Pool Party",
    date: "Sun, 12 Jan • 01:00 PM",
    place: "Goa • Beach Resort",
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
  },
  {
    title: "Yoga & Wellness Retreat",
    date: "Mon, 13 Jan • 06:00 AM",
    place: "Rishikesh • Ashram",
    img: "https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_1280.jpg"
  },
  {
    title: "Business Leadership Seminar",
    date: "Tue, 14 Jan • 10:00 AM",
    place: "Ahmedabad • Trade Centre",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
  },
  {
    title: "Film Screening & Director Talk",
    date: "Wed, 15 Jan • 08:00 PM",
    place: "Kolkata • Film Centre",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
  }
];


const grid = document.getElementById("eventsGrid");

allEvents.forEach((event) => {
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <div class="event-img">
      <img src="${event.img}" alt="${event.title}">
      <div class="heart" onclick="toggleLike(this)">
        <svg viewBox="0 0 24 24">
          <path d="M12 21s-6.5-4.35-9.33-7.17A5.88 5.88 0 0 1 12 5.3a5.88 5.88 0 0 1 9.33 8.53C18.5 16.65 12 21 12 21z"/>
        </svg>
      </div>
    </div>

    <div class="event-body">
      <p class="event-date">${event.date}</p>
      <h3 class="event-name">${event.title}</h3>
      <p class="event-place">${event.place}</p>
      <button class="book-btn" onclick="bookEvent()">Book Now</button>
    </div>
  `;

  grid.appendChild(card);
});

function bookEvent() {
  alert("🎉 Event booked successfully!");
}

function toggleLike(el) {
  el.classList.toggle("liked");
}
const slider = document.getElementById("momentsCarousel");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});
