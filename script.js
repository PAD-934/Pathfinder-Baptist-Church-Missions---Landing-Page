// Pathfinder Baptist Missions — Site Script

document.addEventListener("DOMContentLoaded", () => {
  const MISSIONARIES = [
    {
      id: 1,
      name: "Pastor Samuel Sunday Sampson",
      church: "Grace-Life Baptist Church",
      state: "Akwa Ibom State",
      location: "Ikot, Ekpene, Akwa Ibom State",
      phone: "+234 (0) 806 237 2362",
      photo: "WhatsApp Image 2026-09-01 at 7.45.10 PM.jpeg",
    },
    {
      id: 2,
      name: "Pastor Ayodeji John Peter",
      church: "First Independent Baptist Church",
      state: "Osun State",
      location: "Modakeke, Ile-Ife, Osun State",
      phone: "+234 (0) 704 254 5253",
      photo: "WhatsApp Image 2026-09-01 at 7.45.10 PM (1).jpeg",
    },
    {
      id: 3,
      name: "Pastor Anjor Philip Hundekera",
      church: "Christ Life Baptist Church",
      state: "Benue State",
      location: "Gboko, Benue State",
      phone: "+234 (0) 805 302 9504",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM.jpeg",
    },
    {
      id: 4,
      name: "Pastor Timothy Adesina Oladunni",
      church: "Philadelphia Baptist Church",
      state: "Oyo State",
      location: "Ogbomosho, Oyo State",
      phone: "+234 (0) 703 107 5797",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM (1).jpeg",
    },
    {
      id: 5,
      name: "Pastor Oluwamu Moses Sodeinde",
      church: "Grace & Truth Baptist Church",
      state: "Lagos State",
      location: "Lagos State",
      phone: "+234 806 571 6950",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM (2).jpeg",
    },
    {
      id: 6,
      name: "Pastor Oyetayo Olusola Daniel",
      church: "Ambassador Baptist Church",
      state: "Ondo State",
      location: "Ondo State",
      phone: "+234 805 141 0901",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM (3).jpeg",
    },
    {
      id: 7,
      name: "Pastor Akande Saheed Adekunle",
      church: "Radiant Baptist Church",
      state: "Oyo State",
      location: "Oyo State",
      phone: "+234 905 691 9036",
      photo: "WhatsApp Image 2026-09-01 at 7.45.12 PM.jpeg",
    },
  ];

  const grid = document.getElementById("missionaryGrid");
  const locationFilter = document.getElementById("locationFilter");
  const missionaryCount = document.getElementById("missionaryCount");

  function prayerBlock() {
    return `<details class="prayer-details">
      <summary>Prayer Requests <span aria-hidden="true">⌄</span></summary>
      <p>Pray for wisdom, strength, open doors, and faithful Gospel ministry in this community.</p>
    </details>`;
  }

  function locationBlock(location) {
    return `<div class="missionary-location missionary-location-detail">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z"/><circle cx="12" cy="10" r="2.5"/></svg>
      <span>${location}</span>
    </div>`;
  }

  function renderMissionaries(selectedState = "all") {
    if (!grid) return;

    const visibleMissionaries =
      selectedState === "all"
        ? MISSIONARIES
        : MISSIONARIES.filter(
            (missionary) => missionary.state === selectedState,
          );

    const missionaryCards = visibleMissionaries
      .map(
        (missionary) => `
      <article class="missionary-card">
        <div class="missionary-photo">
          <img src="Pictures/${missionary.photo}" alt="Field photo for ${missionary.name}" loading="lazy" />
          <span class="missionary-badge">${missionary.state}</span>
        </div>
        <div class="missionary-details">
          <h3 class="missionary-name">${missionary.name}</h3>
          <p class="missionary-church">${missionary.church}</p>
          ${locationBlock(missionary.location)}
          ${prayerBlock()}
          <div class="missionary-actions">
            <span class="missionary-phone"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><span>${missionary.phone}</span></span>
            <button class="missionary-give-btn" data-scroll-give>Give</button>
          </div>
        </div>
      </article>
    `,
      )
      .join("");

    grid.innerHTML = missionaryCards;
    if (missionaryCount) {
      missionaryCount.textContent = `${visibleMissionaries.length} ${visibleMissionaries.length === 1 ? "missionary family" : "missionary families"}`;
    }
  }

  if (locationFilter) {
    [...new Set(MISSIONARIES.map((missionary) => missionary.state))]
      .sort((firstState, secondState) => firstState.localeCompare(secondState))
      .forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        locationFilter.appendChild(option);
      });
    locationFilter.addEventListener("change", (event) =>
      renderMissionaries(event.target.value),
    );
  }
  renderMissionaries();

  const navbar = document.getElementById("navbar");
  const onScroll = () =>
    navbar?.classList.toggle("scrolled", window.scrollY > 48);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const drawer = document.getElementById("mobileDrawer");
  const closedPath = "M4 6h16M4 12h16M4 18h16";
  const openPath = "M6 18L18 6M6 6l12 12";

  function setMenuOpen(open) {
    drawer?.classList.toggle("open", open);
    hamburgerBtn?.setAttribute("aria-expanded", String(open));
    hamburgerIcon?.setAttribute("d", open ? openPath : closedPath);
  }
  hamburgerBtn?.addEventListener("click", () =>
    setMenuOpen(!drawer?.classList.contains("open")),
  );
  drawer
    ?.querySelectorAll("a")
    .forEach((link) =>
      link.addEventListener("click", () => setMenuOpen(false)),
    );

  function scrollToGive() {
    document.getElementById("give")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
  ["giveNowNav", "giveNowDrawer", "giveNowHero", "giveNowFooter"].forEach(
    (id) => {
      document.getElementById(id)?.addEventListener("click", scrollToGive);
    },
  );
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-scroll-give]")) scrollToGive();
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");
      document
        .querySelectorAll(".tab-btn")
        .forEach((tab) => tab.classList.toggle("active", tab === button));
      document
        .querySelectorAll(".tab-panel")
        .forEach((panel) =>
          panel.classList.toggle("active", panel.id === `tab-${target}`),
        );
    });
  });

  const yearEl = document.getElementById("copyrightYear");
  if (yearEl)
    yearEl.textContent = `© ${new Date().getFullYear()} Pathfinder Baptist Missions. All rights reserved. Abuja, Nigeria.`;
});
