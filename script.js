// Pathfinder Baptist Missions — Site Script

document.addEventListener("DOMContentLoaded", () => {
  const MISSIONARIES = [
    {
      id: 1,
      name: "Pastor Samuel Sunday Sampson",
      church: "Grace-Life Baptist Church",
      state: "Akwa Ibom State",
      location: "Ikot Ekpene, Akwa Ibom State",
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
      name: "Pastor Uchechukwu Augustine Okoye",
      church: "Awka Independent Baptist Church",
      state: "Anambra State",
      location: "Awka, Anambra State",
      phone: "+234 (0) 911 744 3513",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM (2).jpeg",
    },
    {
      id: 6,
      name: "Pastor Sikiru M. Okunola",
      church: "Mission Baptist Church",
      state: "Akwa Ibom State",
      location: "Akwa Ibom State",
      phone: "+234 (0) 803 845 9027",
      photo: "WhatsApp Image 2026-09-01 at 7.45.11 PM (3).jpeg",
    },
    {
      id: 7,
      name: "Pastor Habila Umaru",
      church: "Bishara Independent Baptist Church",
      state: "Kaduna State",
      location: "Kuli Gidan Hassan, Kaduna State",
      phone: "+234 (0) 708 606 8695",
      photo: "WhatsApp Image 2026-09-01 at 7.45.12 PM.jpeg",
    },
    {
      id: 8,
      name: "Pastor Olaoluwa Moses Sodeinde",
      church: "Bible-Based Believers Baptist Church",
      state: "Lagos State",
      location: "Igbogbo, Ikorodu, Lagos State",
      phone: "+234 (0) 705 665 4367",
      photo: "WhatsApp Image 2026-09-01 at 7.45.12 PM (2).jpeg",
    },
    {
      id: 9,
      name: "Pastor Alande Adekunle",
      church: "Grace and Truth Baptist Church",
      state: "Oyo State",
      location: "Olorunda Village, Ibadan, Oyo State",
      phone: "+234 (0) 806 571 6950",
      photo: "WhatsApp Image 2026-09-01 at 7.45.13 PM (1).jpeg",
    },
    {
      id: 10,
      name: "Pastor James Oluwasayo Adesina",
      church: "Truth Haven Baptist Church",
      state: "Ogun State",
      location: "Ago Iwoye, Ogun State",
      phone: "+234 (0) 810 274 8461",
      photo: "WhatsApp Image 2026-09-01 at 7.45.13 PM (2).jpeg",
    },
    {
      id: 11,
      name: "Pastor Olayemi Oladibu O.",
      church: "Radiant Independent Baptist Church",
      state: "Oyo State",
      location: "Ibarapa Eruwa, Oyo State",
      phone: "+234 (0) 905 691 9036",
      photo: "WhatsApp Image 2026-09-01 at 7.45.13 PM (3).jpeg",
    },
    {
      id: 12,
      name: "Pastor Oyetayo Olusola Daniel",
      church: "Independent Baptist Church",
      state: "Ondo State",
      location: "Ijoka, Akure, Ondo State",
      phone: "+234 (0) 806 695 8861",
      photo: "WhatsApp Image 2026-09-01 at 7.45.13 PM.jpeg",
    },
    {
      id: 13,
      name: "Rev. Adebayo Oyewole Akanji",
      church: "Grace Alone Independent Baptist Church",
      state: "Ondo State",
      location: "Ondo State",
      phone: "+234 (0) 703 011 7621",
      photo: "WhatsApp Image 2026-09-01 at 7.45.14 PM (1).jpeg",
    },
    {
      id: 14,
      name: "Pastor Dindam Mamchak",
      church: "Verity Baptist Church",
      state: "Plateau State",
      location: "Pilgani, Langtang North, Plateau State",
      phone: "+234 (0) 806 810 7335",
      photo: "WhatsApp Image 2026-09-01 at 7.45.14 PM (2).jpeg",
    },
    {
      id: 15,
      name: "Bartholomew Ikefujikwu Family",
      church: "Maranatha Baptist Church",
      state: "FCT Abuja",
      location: "Lugbe, Abuja",
      phone: "+234 (0) 906 333 4237",
      photo: "WhatsApp Image 2026-09-01 at 7.45.14 PM (3).jpeg",
    },
    {
      id: 16,
      name: "Pastor Nathaniel Okon Udoh",
      church: "Mission Independent Baptist Church",
      state: "Akwa Ibom State",
      location: "Eket, Akwa Ibom State",
      phone: "+234 (0) 912 792 3216",
      photo: "WhatsApp Image 2026-09-01 at 7.45.15 PM (1).jpeg",
    },
    {
      id: 17,
      name: "Samuel Cletus Family",
      church: "Amazing Grace Independent Baptist Church",
      state: "Akwa Ibom State",
      location: "Oron, Akwa Ibom State",
      phone: "+234 (0) 815 629 6547",
      photo: "WhatsApp Image 2026-09-01 at 7.45.15 PM (2).jpeg",
    },
    {
      id: 18,
      name: "Evangelist Babatunde Ajayi Family",
      church: "Grace for Change Ministry",
      state: "Location not listed",
      location: "",
      phone: "08034989048",
      photo: "WhatsApp Image 2026-09-01 at 7.45.15 PM (3).jpeg",
    },
    {
      id: 19,
      name: "Pastor Emmanuel Okoh Family",
      church: "Ambassador Baptist Church",
      state: "Akwa Ibom State",
      location: "Afghan, Oku-Uyo, Akwa Ibom State",
      phone: "+234 (0) 706 455 8837",
      photo: "WhatsApp Image 2026-09-01 at 7.45.15 PM.jpeg",
    },
    {
      id: 20,
      name: "Abiodun Esiola Family",
      church: "Christ Life Baptist Church",
      state: "Ogun State",
      location: "Ibara, Abeokuta",
      phone: "+234 (0) 703 040 6074",
      photo: "WhatsApp Image 2026-09-01 at 7.45.16 PM (1).jpeg",
    },
    {
      id: 21,
      name: "Abel Umaru Habila Family",
      church: "Bishara Independent Baptist Church",
      state: "Kaduna State",
      location: "Gidan Kuli, Kaduna State",
      phone: "07086068695",
      photo: "WhatsApp Image 2026-09-01 at 7.45.16 PM (2).jpeg",
    },
    {
      id: 22,
      name: "Samson Adams Family",
      church: "Spring Valley Baptist Church",
      state: "FCT Abuja",
      location: "Tunga Maje, Abuja",
      phone: "+23481064746120 (please verify)",
      photo: "WhatsApp Image 2026-09-01 at 7.45.16 PM (3).jpeg",
    },
    {
      id: 23,
      name: "Bob Manuel Ransom Family",
      church: "Grace Haven Independent Baptist Church",
      state: "Rivers State",
      location: "Unyengala, Andoni, Rivers State",
      phone: "08057425102 / 08140370703",
      photo: "WhatsApp Image 2026-09-01 at 7.45.17 PM (1).jpeg",
    },
    {
      id: 24,
      name: "Botimi Koinyan Family",
      church: "Omagwa Independent Baptist Church",
      state: "Rivers State",
      location: "Omagwa, Rivers State",
      phone: "+234 (0) 701 066 0613",
      photo: "WhatsApp Image 2026-09-01 at 7.45.17 PM (2).jpeg",
    },
    {
      id: 25,
      name: "Taiwo Ojo Family",
      church: "First Independent Baptist Church of Ijokodo",
      state: "Oyo State",
      location: "Ijokodo, Ibadan, Oyo State",
      phone: "+234 (0) 703 808 5652",
      photo: "WhatsApp Image 2026-09-01 at 7.45.17 PM (3).jpeg",
    },
    {
      id: 26,
      name: "Olawadamilola Oluwarokanni Family",
      church: "Ambassador Baptist Church",
      state: "FCT Abuja",
      location: "Galadimawa, FCT Abuja",
      phone: "+234 (0) 805 141 0901",
      photo: "WhatsApp Image 2026-09-01 at 7.45.17 PM.jpeg",
    },
    {
      id: 27,
      name: "Timothy Lasi Esho Family",
      church: "Land of Mercy Independent Baptist Church",
      state: "Ogun State",
      location: "Wasimi, Iyana Mosan, Abeokuta",
      phone: "+234 (0) 803 529 5520",
      photo: "WhatsApp Image 2026-09-01 at 7.45.18 PM (1).jpeg",
    },
    {
      id: 28,
      name: "Pastor Adegboye Adekola Family",
      church: "Love Baptist Church",
      state: "Lagos State",
      location: "Mowo, Badagry, Lagos State",
      phone: "+234 (0) 803 265 4489",
      photo: "WhatsApp Image 2026-09-01 at 7.45.18 PM (2).jpeg",
    },
    {
      id: 29,
      name: "Augustine Okoye Family",
      church: "Awka Independent Baptist Church",
      state: "Anambra State",
      location: "Awka, Anambra State",
      phone: "+234 (0) 803 294 8063",
      photo: "WhatsApp Image 2026-09-01 at 7.45.18 PM.jpeg",
    },
    {
      id: 30,
      name: "Thomas Yohanna Family",
      church: "Victory Independent Baptist Church",
      state: "Bauchi State",
      location: "Bauchi State",
      phone: "+234 (0) 813 670 7717",
      photo: "WhatsApp Image 2026-09-01 at 7.45.19 PM (1).jpeg",
    },
    {
      id: 31,
      name: "Bedou Ph. Abandy Family",
      church: "Independent Baptist Church of Makoko",
      state: "Lagos State",
      location: "Makoko, Lagos State",
      phone: "+234 (0) 703 798 8606",
      photo: "WhatsApp Image 2026-09-01 at 7.45.19 PM (2).jpeg",
    },
    {
      id: 32,
      name: "Pastor Olayemi Oladibu Family",
      church: "Radiant Baptist Church",
      state: "Oyo State",
      location: "Eruwa City, Oyo State",
      phone: "+234 (0) 905 691 9036",
      photo: "WhatsApp Image 2026-09-01 at 7.45.19 PM.jpeg",
    },
    {
      id: 33,
      name: "Airade Family",
      church: "All Grace Independent Baptist Church",
      state: "Lagos State",
      location: "Cele Nica, Lagos State",
      phone: "+234 (0) 701 131 4147",
      photo: "WhatsApp Image 2026-09-16 at 7.53.02 PM.jpeg",
    },
    {
      id: 34,
      name: "Pastor Sunday O. Elson Family",
      church: "Salem Independent Baptist Church",
      state: "Cross River State",
      location: "Calabar, Cross River State",
      phone: "08032249729",
      photo: "WhatsApp Image 2026-09-01 at 7.45.20 PM.jpeg",
    },
    {
      id: 35,
      name: "Solomon Michael Family",
      church: "Independent Baptist Church of Ogoja",
      state: "Cross River State",
      location: "Ogoja, Cross River State",
      phone: "+2349067752012",
      photo: "WhatsApp Image 2026-09-16 at 7.53.12 PM.jpeg",
    },
    {
      id: 36,
      name: "Moses Nyiku Family",
      church: "Praise & Glory Baptist Church",
      state: "Benue State",
      location: "Makurdi, Benue State",
      phone: "07067916105",
      photo: "WhatsApp Image 2026-09-16 at 7.53.28 PM.jpeg",
    },
  ];

  const grid = document.getElementById("missionaryGrid");
  const locationFilter = document.getElementById("locationFilter");
  const missionaryCount = document.getElementById("missionaryCount");
  const loadMoreButton = document.getElementById("missionaryLoadMore");
  const profileDialog = document.getElementById("missionaryProfileDialog");
  const profilePhoto = document.getElementById("missionaryProfilePhoto");
  const profileName = document.getElementById("missionaryProfileName");
  const profileChurch = document.getElementById("missionaryProfileChurch");
  const profileState = document.getElementById("missionaryProfileState");
  const profileLocation = document.getElementById("missionaryProfileLocation");
  const profilePhone = document.getElementById("missionaryProfilePhone");
  const profilePrayer = document.getElementById("missionaryProfilePrayer");
  const generalPrayerPoints = [
    "Church growth and open doors to reach people with the Gospel.",
    "Good health, protection, and provision for the family.",
    "Wisdom, strength, and encouragement for faithful ministry.",
  ];

  function prayerBlock() {
    return `<details class="prayer-details">
      <summary>Prayer Requests <span aria-hidden="true">⌄</span></summary>
      <p>Pray for wisdom, strength, open doors, and faithful Gospel ministry in this community.</p>
    </details>`;
  }

  function locationBlock(location) {
    if (!location) return "";
    return `<div class="missionary-location missionary-location-detail">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z"/><circle cx="12" cy="10" r="2.5"/></svg>
      <span>${location}</span>
    </div>`;
  }

  const initialMissionaryLimit = 6;
  const missionaryBatchSize = 6;
  let selectedMissionaryState = "all";
  let visibleMissionaryLimit = initialMissionaryLimit;

  function renderMissionaries() {
    if (!grid) return;

    const visibleMissionaries =
      selectedMissionaryState === "all"
        ? MISSIONARIES
        : MISSIONARIES.filter(
            (missionary) => missionary.state === selectedMissionaryState,
          );

    const displayedMissionaries = visibleMissionaries.slice(
      0,
      visibleMissionaryLimit,
    );
    const missionaryCards = displayedMissionaries
      .map(
        (missionary) => `
      <article class="missionary-card">
        <div class="missionary-photo">
          <button
            class="missionary-photo-trigger"
            type="button"
            data-missionary-profile="${missionary.id}"
            aria-label="Open missionary profile for ${missionary.name}"
            aria-haspopup="dialog"
          >
            <img src="Pictures/${missionary.photo}" alt="" loading="lazy" />
          </button>
          <span class="missionary-badge">${missionary.state}</span>
        </div>
        <div class="missionary-details">
          <h3 class="missionary-name">
            <button
              class="missionary-profile-trigger"
              type="button"
              data-missionary-profile="${missionary.id}"
              aria-haspopup="dialog"
            >${missionary.name}</button>
          </h3>
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
      missionaryCount.textContent = `Showing ${displayedMissionaries.length} of ${visibleMissionaries.length} ${visibleMissionaries.length === 1 ? "ministry card" : "ministry cards"}`;
    }
    if (loadMoreButton) {
      const hasMoreMissionaries =
        displayedMissionaries.length < visibleMissionaries.length;
      loadMoreButton.hidden = !hasMoreMissionaries;
      loadMoreButton.textContent = "See More";
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
    locationFilter.addEventListener("change", (event) => {
      selectedMissionaryState = event.target.value;
      visibleMissionaryLimit = initialMissionaryLimit;
      renderMissionaries();
    });
  }
  renderMissionaries();
  loadMoreButton?.addEventListener("click", () => {
    visibleMissionaryLimit += missionaryBatchSize;
    renderMissionaries();
  });

  grid?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-missionary-profile]");
    if (!trigger) return;

    const missionary = MISSIONARIES.find(
      (item) => item.id === Number(trigger.dataset.missionaryProfile),
    );
    if (!missionary) {
      console.error("Unable to open profile: missionary was not found.");
      return;
    }
    if (
      !profileDialog ||
      !profilePhoto ||
      !profileName ||
      !profileChurch ||
      !profileState ||
      !profileLocation ||
      !profilePhone ||
      !profilePrayer
    ) {
      console.error("Unable to open profile: profile dialog is incomplete.");
      return;
    }

    profilePhoto.src = `Pictures/${missionary.photo}`;
    profilePhoto.alt = `Missionary prayer and support card for ${missionary.name}`;
    profileName.textContent = missionary.name;
    profileChurch.textContent = missionary.church;
    profileState.textContent = missionary.state;
    profileLocation.innerHTML = locationBlock(missionary.location);
    profilePhone.textContent = missionary.phone;
    profilePhone.href = `tel:${missionary.phone.replace(/[^\d+]/g, "")}`;
    profilePhone.setAttribute(
      "aria-label",
      `Call ${missionary.name} at ${missionary.phone}`,
    );
    profilePrayer.replaceChildren(
      ...generalPrayerPoints.map((request) => {
        const item = document.createElement("li");
        item.textContent = request;
        return item;
      }),
    );
    profileDialog.showModal();
    document.documentElement.classList.add("missionary-profile-open");
  });

  function closeProfileDialog() {
    if (!profileDialog?.open) return;
    profileDialog.close();
    document.documentElement.classList.remove("missionary-profile-open");
  }

  profileDialog
    ?.querySelector(".missionary-profile-close")
    ?.addEventListener("click", closeProfileDialog);
  profileDialog?.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closeProfileDialog();
  });
  profileDialog?.addEventListener("cancel", () => {
    document.documentElement.classList.remove("missionary-profile-open");
  });
  profileDialog?.addEventListener("close", () => {
    document.documentElement.classList.remove("missionary-profile-open");
  });
  profileDialog?.addEventListener("click", (event) => {
    if (event.target !== profileDialog) return;
    const bounds = profileDialog.getBoundingClientRect();
    const isBackdropClick =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (isBackdropClick) closeProfileDialog();
  });

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
    closeProfileDialog();
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
