document.addEventListener('DOMContentLoaded', () => {
  // Universal navigation buttons (homepage)
  const navMap = {
    "#goFarmer": "farmer-register.html",
    "#goDealer": "agro-dealer-portal.html",
    "#goVet": "vet-agronomist-register.html",
    "#goMarket": "marketplace.html",
    "#goCross": "cross-border-trade.html",
    "#goJobs": "fuel-jobs-portal.html",
    "#goAdmin": "admin-dashboard.html",
    "#goBulk": "bulk-buyer-zone.html",
    "#goSupplier": "supplier-portal.html",
    "#goPro": "professional-shop.html",
    "#goServices": "services.html",
    "#goAnimal": "animal-marketplace.html"
  };

  Object.keys(navMap).forEach(id => {
    const btn = document.querySelector(id);
    if (btn) {
      btn.addEventListener("click", () => window.location.href = navMap[id]);
    }
  });

  // Booking calculator
  const priceCalc = document.getElementById("totalPrice");
  const calcBtn = document.querySelector("button[onclick*='calculatePrice']");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const unit = document.getElementById("unitPrice").value;
      const qty = document.getElementById("quantity").value;
      const total = parseFloat(unit) * parseFloat(qty);
      if (priceCalc) priceCalc.textContent = `Total: ${total.toLocaleString()} RWF`;
    });
  }

  // Escrow submission (demo)
  const escrowForm = document.querySelector(".escrow-box form");
  if (escrowForm) {
    escrowForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Reservation request submitted! You will receive escrow instructions shortly.");
    });
  }

  // Universal form validation (register, apply, upload)
  const allForms = document.querySelectorAll("form");
  allForms.forEach(form => {
    form.addEventListener("submit", e => {
      const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");
      for (let field of requiredFields) {
        if (!field.value) {
          alert("Please fill in all required fields.");
          e.preventDefault();
          return;
        }
      }
    });
  });

  // Admin panel logic
  const adminBtns = document.querySelectorAll("button");
  adminBtns.forEach(btn => {
    if (btn.textContent.includes("Approve") || btn.textContent.includes("Resolve") || btn.textContent.includes("Broadcast")) {
      btn.addEventListener("click", () => alert("🛠️ Admin action triggered (simulate DB update)"));
    }
  });

  // Book a service
  const bookingForm = document.querySelector("#book form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("📅 Your booking has been confirmed. Advisor will reach out shortly.");
    });
  }

  // Feedback submission
  const feedbackForm = document.querySelector("#feedback form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("⭐ Thanks for your feedback!");
    });
  }
});
