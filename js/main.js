(function () {
  "use strict";

  var translations = {
    es: {
      skip: "Ir al contacto",
      nav_services: "Servicios",
      nav_work: "Portafolio",
      nav_process: "Proceso",
      nav_contact: "Contacto",
      hero_title: "Webs que hacen que tu restaurante venda más",
      hero_sub: "Diseño y desarrollo de sitios para restaurantes y negocios locales, con menú digital, pedidos por WhatsApp y un diseño que la gente sí abre desde el celular.",
      hero_cta_primary: "Solicitar cotización",
      hero_cta_secondary: "Ver trabajo",
      services_title: "Servicios",
      services_sub: "Sitios hechos a medida, no plantillas genéricas.",
      service1_title: "Webs para restaurantes",
      service1_desc: "Menú digital siempre actualizado, botón de pedido por WhatsApp con mensaje precargado, ubicación y horario claros. Pensado para que el cliente pida en menos de un minuto.",
      service2_title: "Webs para negocios locales",
      service2_desc: "Tiendas, salones, talleres, consultorios. Una sola página, rápida, clara, con la información real de tu negocio y un solo objetivo: que te contacten.",
      service3_title: "Ajustes y mantenimiento",
      service3_desc: "Cambios de menú, precios, fotos o textos después del lanzamiento. Tu sitio se mantiene al día sin que tengas que tocar código.",
      work_title: "Portafolio",
      work_sub: "Ejemplos reales de lo que puedo construir para tu negocio.",
      work1_title: "DUNA — Restaurante",
      work1_desc: "Menú digital por categorías, reserva directa por WhatsApp y diseño 100% responsive.",
      work2_title: "Philippe Auguste Studio",
      work2_desc: "Sitio para un estudio de fotografía y film de bodas en Santo Domingo, con galería y paquetes de servicio.",
      work3_title: "Marleny Luna Event Planner",
      work3_desc: "Sitio para una wedding & event planner, pensado para agendar asesorías y mostrar el portafolio de bodas.",
      work_cta: "Ver sitio en vivo",
      process_title: "Cómo trabajo",
      process_sub: "Simple y sin vueltas, de la primera llamada al sitio publicado.",
      process1_title: "Conversamos",
      process1_desc: "Me cuentas de tu negocio, qué necesitas resolver y qué fotos/menú tienes disponibles.",
      process2_title: "Diseño y construyo",
      process2_desc: "Armo el sitio con tu marca real: tus fotos, tu menú, tus colores. Nada de plantillas genéricas.",
      process3_title: "Ajustamos juntos",
      process3_desc: "Revisas el sitio y hacemos los cambios necesarios hasta que quede exactamente como lo quieres.",
      process4_title: "Publicamos",
      process4_desc: "Subo el sitio a tu hosting o dominio, activo el certificado de seguridad y queda listo para recibir clientes.",
      contact_title: "Hablemos de tu negocio",
      contact_sub: "Cuéntame sobre tu restaurante o negocio y te respondo con una cotización a medida — sin paquetes genéricos.",
      contact_email_label: "También puedes escribirme directo a",
      form_name: "Nombre",
      form_business: "Nombre del negocio",
      form_whatsapp: "WhatsApp o teléfono (opcional)",
      form_message: "Cuéntame sobre tu negocio",
      form_submit: "Enviar mensaje",
      form_note: "Te respondo normalmente en menos de 24 horas.",
      footer_rights: "Todos los derechos reservados."
    },
    en: {
      skip: "Skip to contact",
      nav_services: "Services",
      nav_work: "Work",
      nav_process: "Process",
      nav_contact: "Contact",
      hero_title: "Websites that make your restaurant sell more",
      hero_sub: "Design and development for restaurants and local businesses: digital menus, WhatsApp ordering, and a design people actually open on their phone.",
      hero_cta_primary: "Request a quote",
      hero_cta_secondary: "See the work",
      services_title: "Services",
      services_sub: "Custom-built sites, not generic templates.",
      service1_title: "Restaurant websites",
      service1_desc: "An always up-to-date digital menu, a WhatsApp order button with a pre-filled message, and clear location and hours. Built so customers can order in under a minute.",
      service2_title: "Local business websites",
      service2_desc: "Shops, salons, workshops, clinics. One clear, fast page with your business's real information and a single goal: getting people to reach out.",
      service3_title: "Updates and maintenance",
      service3_desc: "Menu changes, pricing, photos or copy after launch. Your site stays current without you touching a line of code.",
      work_title: "Portfolio",
      work_sub: "Real examples of what I can build for your business.",
      work1_title: "DUNA — Restaurant",
      work1_desc: "A digital menu by category, direct WhatsApp reservations, and a fully responsive design.",
      work2_title: "Philippe Auguste Studio",
      work2_desc: "A site for a wedding photography and film studio in Santo Domingo, with a gallery and service packages.",
      work3_title: "Marleny Luna Event Planner",
      work3_desc: "A site for a wedding and event planner, built to book consultations and showcase a wedding portfolio.",
      work_cta: "View live site",
      process_title: "How I work",
      process_sub: "Simple and direct, from the first call to the published site.",
      process1_title: "We talk",
      process1_desc: "You tell me about your business, what you need solved, and what photos/menu you already have.",
      process2_title: "I design and build",
      process2_desc: "I build the site around your real brand: your photos, your menu, your colors. No generic templates.",
      process3_title: "We refine it together",
      process3_desc: "You review the site and we make the changes needed until it's exactly what you want.",
      process4_title: "We publish",
      process4_desc: "I upload the site to your hosting or domain, turn on the security certificate, and it's ready to bring in customers.",
      contact_title: "Let's talk about your business",
      contact_sub: "Tell me about your restaurant or business and I'll reply with a quote tailored to you — no generic packages.",
      contact_email_label: "You can also email me directly at",
      form_name: "Name",
      form_business: "Business name",
      form_whatsapp: "WhatsApp or phone (optional)",
      form_message: "Tell me about your business",
      form_submit: "Send message",
      form_note: "I usually reply within 24 hours.",
      footer_rights: "All rights reserved."
    }
  };

  var langToggle = document.getElementById("lang-toggle");
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");
  var htmlEl = document.documentElement;

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    htmlEl.setAttribute("lang", lang);
    langToggle.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang-label") === lang);
    });
    langToggle.dataset.current = lang;
  }

  langToggle.addEventListener("click", function () {
    var current = langToggle.dataset.current || "es";
    applyLanguage(current === "es" ? "en" : "es");
  });

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  applyLanguage("es");
})();
