/**
 * İÇİMDEKİ ÖYKÜ — ETKİLEŞİM, MİKRO ANİMASYONLAR & FORM MANTIĞI
 */

(function () {
  "use strict";

  const phoneRaw = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.phoneRaw)
    ? SITE_CONFIG.phoneRaw
    : "905338437890";

  // 1. Sticky Header Durumu
  const header = document.getElementById("siteHeader");
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 2. Mobil Menü Yönetimi
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  function toggleMobileDrawer(forceState) {
    if (!mobileDrawer || !menuToggle) return;
    const shouldOpen = typeof forceState === "boolean"
      ? forceState
      : !mobileDrawer.classList.contains("open");

    mobileDrawer.classList.toggle("open", shouldOpen);
    menuToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");

    if (shouldOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMobileDrawer());
  }

  // Escape tuşu ile kapatma
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      toggleMobileDrawer(false);
      menuToggle.focus();
    }
  });

  // Menü açıkken dışarıya tıklanırsa kapat
  document.addEventListener("click", (e) => {
    if (
      mobileDrawer &&
      mobileDrawer.classList.contains("open") &&
      !mobileDrawer.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      toggleMobileDrawer(false);
    }
  });

  // Ekran genişliği tablet/masaüstüne büyüdüğünde mobil menüyü otomatik kapat
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992 && mobileDrawer && mobileDrawer.classList.contains("open")) {
      toggleMobileDrawer(false);
    }
  }, { passive: true });

  // 3. Pürüzsüz Sayfa İçi Kaydırma (Smooth Scroll with Offset)
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    if (mobileDrawer && mobileDrawer.classList.contains("open")) {
      toggleMobileDrawer(false);
    }

    const headerHeight = header ? header.offsetHeight : 82;
    const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 4);

    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });

    if (window.history && window.history.pushState) {
      window.history.pushState(null, null, targetId);
    }
  });

  // 4. Scroll Spy (Aktif Menü Linki Vurgulama)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function highlightNavigation() {
    const scrollPos = window.scrollY + 150;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("active", href === `#${id}`);
        });

        mobileNavLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("active", href === `#${id}`);
        });
      }
    });
  }
  window.addEventListener("scroll", highlightNavigation, { passive: true });
  highlightNavigation();

  // 5. Scroll Reveal (Zarif Fade + Translate Efekti)
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Eski tarayıcılar için fallback
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  // 6. Timeline Dinamik İlerleme Çizgisi
  const timelineSection = document.getElementById("surec");
  const timelineFill = document.getElementById("timelineFill");
  const stepRows = document.querySelectorAll(".timeline-step-row");

  function updateTimelineProgress() {
    if (!timelineSection || !timelineFill || stepRows.length === 0) return;

    const sectionRect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Timeline görünür alana girdiyse
    if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
      const totalDist = sectionRect.height - 100;
      const currentProgress = windowHeight * 0.5 - sectionRect.top;
      let percent = Math.min(Math.max((currentProgress / totalDist) * 100, 0), 100);
      timelineFill.style.height = `${percent}%`;

      // Adımların aktifleşmesi
      stepRows.forEach((row) => {
        const rowRect = row.getBoundingClientRect();
        if (rowRect.top < windowHeight * 0.65) {
          row.classList.add("active");
        } else {
          row.classList.remove("active");
        }
      });
    }
  }
  window.addEventListener("scroll", updateTimelineProgress, { passive: true });
  updateTimelineProgress();

  // 7. İnteraktif WhatsApp Mesaj Formu
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("userName");
      const messageInput = document.getElementById("userMessage");

      const name = nameInput ? nameInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !message) {
        if (formStatus) {
          formStatus.textContent = "Lütfen adınızı ve mesajınızı eksiksiz giriniz.";
          formStatus.style.color = "#A93226";
        }
        return;
      }

      // Güvenli WhatsApp mesaj metni
      const fullText = `Merhaba İçimdeki Öykü, ben ${name}. ${message}`;
      const waUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(fullText)}`;

      if (formStatus) {
        formStatus.textContent = "Mesajınız hazırlandı. WhatsApp açılıyor...";
        formStatus.style.color = "var(--primary)";
      }

      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 300);
    });
  }
})();
