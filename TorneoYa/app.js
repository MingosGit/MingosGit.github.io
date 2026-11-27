// app.js - Lógica para la landing page de TorneoYa
    // Año dinámico (para ambos footers)
    document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

    // Scroll suave para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)){
          e.preventDefault();
          document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', id);
        }
      });
    });

    // ======= I18N ÚNICO (ES, CA, EN) =======
    const I18N = {
      es: {
        "installbar.prompt": "¿Listo para jugar?",
        "installbar.cta": "Descargar",
        "nav.badge": "Sin anuncios • Sin pagos",
        "nav.download": "Descargar",
        "nav.features": "Características",
        "hero.android": "Para Android",
        "hero.title": "Organiza partidos con tus amigos en segundos",
        "hero.subtitle": "Crea o únete a partidos, lleva el recuento de goles, comenta y vota encuestas. Todo en una interfaz cuidada, sin anuncios y sin transacciones.",
        "hero.ctaPrimary": "Obtener TorneoYa",
        "hero.ctaGhost": "Ver cómo funciona",
        "hero.statMatches": "Partidos",
        "hero.statMatchesValue": "∞",
        "hero.statGoals": "Goles",
        "hero.statGoalsValue": "Incontables",
        "hero.statPolls": "Encuestas",
        "hero.statPollsValue": "Todos los días",

        "features.title": "Todo lo que necesitas para jugar",
        "features.item1.title": "Conecta con amigos",
        "features.item1.desc": "Invita a tu grupo, crea equipos y mantén tu red de fútbol siempre activa.",
        "features.item2.title": "Crea partidos",
        "features.item2.desc": "Fecha y hora. Controla la visibilidad.",
        "features.item3.title": "Únete en 1 toque",
        "features.item3.desc": "Visualiza partidos y únete fácilmente.",
        "features.item4.title": "Recuento de goles",
        "features.item4.desc": "Goles y asistencias por jugador. Suma MVP y estadísticas básicas.",
        "features.item5.title": "Comentarios",
        "features.item5.desc": "Crónicas rápidas, reacciones y debates rápidos.",
        "features.item6.title": "Encuestas",
        "features.item6.desc": "Decide quien ha sido el mejor o si una jugada es polémica.",
        "features.badge1": "Interfaz bonita",
        "features.badge2": "Notificaciones claras",
        "features.badge3": "Sin anuncios ni transacciones",

        "how.title": "Cómo funciona",
        "how.step1.title": "Conecta",
        "how.step1.desc": "Agrega amigos y grupos. Crea tu equipo con amigos y organiza la semana.",
        "how.step2.title": "Crea o únete",
        "how.step2.desc": "Publica un partido o únete a uno existente. Gestiona plazas al instante.",
        "how.step3.title": "Juega y registra",
        "how.step3.desc": "Lleva el marcador, comenta la jugada y vota encuestas. Tus stats quedan guardadas.",

        "testi.quote": "“Desde que usamos TorneoYa nunca nos quedamos sin gente.”",
        "testi.author": "Diego, capitán del 7v7 de los jueves",
        "testi.point1": "Grupos activos sin chats infinitos",
        "testi.point2": "Plazas claras y notificaciones justas",
        "testi.point3": "Marcador y encuestas integradas",
        "testi.ratingLabel": "Puntuación de usuarios",
        "testi.ratingSub": "Interfaz • Simplicidad • Sin anuncios",

        "faq.title": "Preguntas frecuentes",
        "faq.q1": "¿Tiene anuncios o compras?",
        "faq.a1": "No. TorneoYa no incluye anuncios ni transacciones dentro de la app.",
        "faq.q2": "¿Necesito cuenta?",
        "faq.a2": "Sí. Puedes registrarte con email.",
        "faq.q3": "¿Puedo llevar estadísticas?",
        "faq.a3": "Sí. Goles, asistencias, promedio de gol por partido y partidos jugados.",
        "faq.q4": "¿Tiene tema claro?",
        "faq.a4_1": "Sí. TorneoYa soporta <strong>tema claro y oscuro</strong>. Por defecto se adapta al <em>modo del sistema</em> (auto), y desde Ajustes puedes <strong>forzarlo</strong> a claro u oscuro.",
        "faq.a4_li1": "Auto: sigue el ajuste del dispositivo.",
        "faq.a4_li2": "Claro: interfaz de alto contraste sobre fondo claro.",
        "faq.a4_li3": "Oscuro: interfaz cuidada para entornos de poca luz.",
        "faq.q5": "¿Está disponible en diferentes idiomas?",
        "faq.a5_1": "Sí. La app está disponible en <strong>español</strong>, <strong>catalán</strong> e <strong>inglés</strong>.",
        "faq.a5_2": "El idioma se selecciona automáticamente según el del dispositivo; también puedes cambiarlo manualmente en <strong>Ajustes → Idioma</strong>.",
        "faq.q6": "¿Puedo eliminar mi cuenta?",
        "faq.a6_1": "Sí. Puedes borrar tu cuenta en <strong>Ajustes → Cuenta → Eliminar cuenta</strong>. Esto elimina tus datos personales y estadísticas asociadas.",
        "faq.a6_li1": "La eliminación es <strong>permanente</strong> y no reversible.",

        "download.title": "Descarga TorneoYa",
        "download.subtitle": "Instala la app en tu Android y empieza a jugar hoy.",
        "download.apk": "APK directo",
        "download.play": "Google Play",

        "install.title":"Cómo instalar el APK",
        "install.step1":"Descarga el archivo .apk en tu móvil.",
        "install.step2":"Permite instalaciones desde el navegador (orígenes desconocidos).",
        "install.step3":"Toca el archivo descargado y confirma la instalación.",
        "install.warn":"Si Android bloquea la instalación, revisa Ajustes → Seguridad → Instalar apps desconocidas.",

        "footer.copy": "TorneoYa — Juega con tu gente",
        "modal.beta.title": "🚀 La app está en pruebas",
        "modal.beta.body": "Estamos en <strong>beta cerrada</strong>.<br>¿Quieres unirte al <strong>programa de testers</strong>?",
        "modal.beta.no": "Ahora no",
        "modal.beta.yes": "Quiero ser tester"
      },
      ca: {
        "installbar.prompt": "A punt per jugar?",
        "installbar.cta": "Descarregar",
        "nav.badge": "Sense anuncis • Sense pagaments",
        "nav.download": "Descarregar",
        "nav.features": "Característiques",
        "hero.android": "Per a Android",
        "hero.title": "Organitza partits amb els teus amics en segons",
        "hero.subtitle": "Crea o uneix-te a partits, porta el recompte de gols, comenta i vota enquestes. Tot amb una interfície cuidada, sense anuncis ni transaccions.",
        "hero.ctaPrimary": "Obtenir TorneoYa",
        "hero.ctaGhost": "Veure com funciona",
        "hero.statMatches": "Partits",
        "hero.statMatchesValue": "∞",
        "hero.statGoals": "Gols",
        "hero.statGoalsValue": "Incomptables",
        "hero.statPolls": "Enquestes",
        "hero.statPollsValue": "Cada dia",

        "features.title": "Tot el que necessites per jugar",
        "features.item1.title": "Connecta amb amics",
        "features.item1.desc": "Convida el teu grup, crea equips i mantén la teva xarxa de futbol sempre activa.",
        "features.item2.title": "Crea partits",
        "features.item2.desc": "Data i hora. Controla la visibilitat.",
        "features.item3.title": "Uneix-t'hi en 1 toc",
        "features.item3.desc": "Visualitza partits i uneix-t'hi fàcilment.",
        "features.item4.title": "Recompte de gols",
        "features.item4.desc": "Gols i assistències per jugador. Suma MVP i estadístiques bàsiques.",
        "features.item5.title": "Comentaris",
        "features.item5.desc": "Cròniques ràpides, reaccions i debats àgils.",
        "features.item6.title": "Enquestes",
        "features.item6.desc": "Decideix qui ha estat el millor o si una jugada és polèmica.",
        "features.badge1": "Interfície bonica",
        "features.badge2": "Notificacions clares",
        "features.badge3": "Sense anuncis ni transaccions",

        "how.title": "Com funciona",
        "how.step1.title": "Connecta",
        "how.step1.desc": "Afegeix amics i grups. Crea el teu equip i organitza la setmana.",
        "how.step2.title": "Crea o uneix-t'hi",
        "how.step2.desc": "Publica un partit o uneix-te a un d'existent. Gestiona places a l'instant.",
        "how.step3.title": "Juga i registra",
        "how.step3.desc": "Porta el marcador, comenta la jugada i vota enquestes. Les teves estadístiques queden desades.",

        "testi.quote": "“Des que fem servir TorneoYa mai ens falten jugadors.”",
        "testi.author": "Diego, capità del 7v7 dels dijous",
        "testi.point1": "Grups actius sense xats infinits",
        "testi.point2": "Places clares i notificacions justes",
        "testi.point3": "Marcador i enquestes integrades",
        "testi.ratingLabel": "Puntuació d'usuaris",
        "testi.ratingSub": "Interfície • Simplicitat • Sense anuncis",

        "faq.title": "Preguntes freqüents",
        "faq.q1": "Té anuncis o compres?",
        "faq.a1": "No. TorneoYa no inclou anuncis ni transaccions dins l'app.",
        "faq.q2": "Necessito un compte?",
        "faq.a2": "Sí. Pots registrar-t'hi amb email.",
        "faq.q3": "Puc portar estadístiques?",
        "faq.a3": "Sí. Gols, assistències, mitjana de gol per partit i partits jugats.",
        "faq.q4": "Té tema clar?",
        "faq.a4_1": "Sí. TorneoYa suporta <strong>tema clar i fosc</strong>. Per defecte s'adapta al <em>mode del sistema</em> (auto), i des d'Ajustos el pots <strong>forçar</strong> a clar o fosc.",
        "faq.a4_li1": "Auto: segueix l'ajust del dispositiu.",
        "faq.a4_li2": "Clar: interfície d'alt contrast sobre fons clar.",
        "faq.a4_li3": "Fosc: interfície acurada per ambients de poca llum.",
        "faq.q5": "Està disponible en diferents idiomes?",
        "faq.a5_1": "Sí. L'app està disponible en <strong>espanyol</strong>, <strong>català</strong> i <strong>anglès</strong>.",
        "faq.a5_2": "L'idioma se selecciona automàticament segons el del dispositiu; també el pots canviar manualment a <strong>Ajustos → Idioma</strong>.",
        "faq.q6": "Puc eliminar el meu compte?",
        "faq.a6_1": "Sí. Pots esborrar el teu compte a <strong>Ajustos → Compte → Eliminar compte</strong>. Això elimina les teves dades personals i estadístiques associades.",
        "faq.a6_li1": "L'eliminació és <strong>permanent</strong> i no reversible.",

        "download.title": "Descarrega TorneoYa",
        "download.subtitle": "Instal·la l'app al teu Android i comença a jugar avui.",
        "download.apk": "APK directe",
        "download.play": "Google Play",

        "install.title":"Com instal·lar l'APK",
        "install.step1":"Descarrega el fitxer .apk.",
        "install.step2":"Permet instal·lacions d'orígens desconeguts.",
        "install.step3":"Obre el fitxer i confirma.",
        "install.warn":"Si Android el bloqueja, mira Ajustos → Seguretat → Apps desconegudes.",

        "footer.copy": "TorneoYa — Juga amb la teva gent",
        "modal.beta.title": "🚀 L'app està en proves",
        "modal.beta.body": "Som en <strong>beta tancada</strong>.<br>Vols unir-te al <strong>programa de testers</strong>?",
        "modal.beta.no": "Ara no",
        "modal.beta.yes": "Vull ser tester"
      },
      en: {
        "installbar.prompt": "Ready to play?",
        "installbar.cta": "Download",
        "nav.badge": "No ads • No payments",
        "nav.download": "Download",
        "nav.features": "Features",
        "hero.android": "For Android",
        "hero.title": "Organise matches with friends in seconds",
        "hero.subtitle": "Create or join matches, track goals, comment and vote in polls. All in a polished interface, with no ads and no transactions.",
        "hero.ctaPrimary": "Get TorneoYa",
        "hero.ctaGhost": "See how it works",
        "hero.statMatches": "Matches",
        "hero.statMatchesValue": "∞",
        "hero.statGoals": "Goals",
        "hero.statGoalsValue": "Countless",
        "hero.statPolls": "Polls",
        "hero.statPollsValue": "Every day",

        "features.title": "Everything you need to play",
        "features.item1.title": "Connect with friends",
        "features.item1.desc": "Invite your group, create teams and keep your football network active.",
        "features.item2.title": "Create matches",
        "features.item2.desc": "Date and time. Control visibility.",
        "features.item3.title": "Join in 1 tap",
        "features.item3.desc": "Browse matches and join easily.",
        "features.item4.title": "Goal tracking",
        "features.item4.desc": "Goals and assists per player. MVP points and basic stats.",
        "features.item5.title": "Comments",
        "features.item5.desc": "Quick recaps, reactions and fast debates.",
        "features.item6.title": "Polls",
        "features.item6.desc": "Decide who was best or if a play was controversial.",
        "features.badge1": "Beautiful UI",
        "features.badge2": "Clear notifications",
        "features.badge3": "No ads or IAPs",

        "how.title": "How it works",
        "how.step1.title": "Connect",
        "how.step1.desc": "Add friends and groups. Build your team and plan the week.",
        "how.step2.title": "Create or join",
        "how.step2.desc": "Publish a match or join an existing one. Manage spots instantly.",
        "how.step3.title": "Play & record",
        "how.step3.desc": "Keep score, comment plays and vote in polls. Your stats are saved.",

        "testi.quote": "“Since using TorneoYa we never run short of players.”",
        "testi.author": "Diego, captain of the Thursday 7v7",
        "testi.point1": "Active groups without endless chats",
        "testi.point2": "Clear spots & fair notifications",
        "testi.point3": "Built-in scoreboard & polls",
        "testi.ratingLabel": "User rating",
        "testi.ratingSub": "Interface • Simplicity • No ads",

        "faq.title": "FAQ",
        "faq.q1": "Does it have ads or purchases?",
        "faq.a1": "No. TorneoYa includes no ads and no in-app transactions.",
        "faq.q2": "Do I need an account?",
        "faq.a2": "Yes. You can sign up with email.",
        "faq.q3": "Can I track stats?",
        "faq.a3": "Yes. Goals, assists, goals per game and matches played.",
        "faq.q4": "Is there a light theme?",
        "faq.a4_1": "Yes. TorneoYa supports <strong>light and dark</strong> themes. By default it follows the <em>system setting</em> (auto), and from Settings you can <strong>force</strong> light or dark.",
        "faq.a4_li1": "Auto: follows device setting.",
        "faq.a4_li2": "Light: high-contrast UI on light background.",
        "faq.a4_li3": "Dark: comfy UI for low-light.",
        "faq.q5": "Is it available in multiple languages?",
        "faq.a5_1": "Yes. The app is available in <strong>Spanish</strong>, <strong>Catalan</strong> and <strong>English</strong>.",
        "faq.a5_2": "Language follows your device automatically; you can also change it manually in <strong>Settings → Language</strong>.",
        "faq.q6": "Can I delete my account?",
        "faq.a6_1": "Yes. Delete it in <strong>Settings → Account → Delete account</strong>. This removes your personal data and related stats.",
        "faq.a6_li1": "Deletion is <strong>permanent</strong> and irreversible.",

        "download.title": "Download TorneoYa",
        "download.subtitle": "Install the app on Android and start playing today.",
        "download.apk": "Direct APK",
        "download.play": "Google Play",

        "install.title":"How to install the APK",
        "install.step1":"Download the .apk to your phone.",
        "install.step2":"Allow installs from your browser (unknown sources).",
        "install.step3":"Open the file and confirm.",
        "install.warn":"If blocked, check Settings → Security → Install unknown apps.",

        "footer.copy": "TorneoYa — Play with your people",
        "modal.beta.title": "🚀 The app is in testing",
        "modal.beta.body": "We’re in a <strong>closed beta</strong>.<br>Do you want to join the <strong>tester program</strong>?",
        "modal.beta.no": "Not now",
        "modal.beta.yes": "I want to test"
      }
    };

    const LANG_FLAGS = { es: "es", ca: "ca", en: "uk" };

    function applyTranslations(lang) {
      const dict = I18N[lang] || I18N.es;
      document.documentElement.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;
        const val = dict[key];
        if (val == null) return;
        if (/<\/?(strong|em|br)>/i.test(val)) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      });

      // Flag del botón (solo desktop)
      const flag = document.getElementById("currentFlag");
      if (flag) {
        flag.className = "flag " + (LANG_FLAGS[lang] || "es");
        flag.title = lang === "es" ? "Español" : lang === "ca" ? "Català" : "English";
      }

      try { localStorage.setItem("torneoya_lang", lang); } catch(e){}
    }

    // Listeners de selección (desktop dropdown + mobile sheet)
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-opt");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      applyTranslations(lang);
    });

    // Idioma inicial
    (function initLang(){
      let lang = "es";
      try {
        const param = new URLSearchParams(location.search).get("lang");  // ?lang=en desde el portfolio en inglés
        const saved = (param && I18N[param]) ? param : localStorage.getItem("torneoya_lang");
        if (saved && I18N[saved]) lang = saved;
        else {
          const nav = (navigator.language || "es").slice(0,2);
          if (I18N[nav]) lang = nav;
        }
      } catch(e){}
      applyTranslations(lang);
    })();

    // PWA mínimo (opcional)
    if("serviceWorker" in navigator){
      const swCode = `self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>self.clients.claim());`;
      const blob = new Blob([swCode],{type:"text/javascript"});
      const swURL = URL.createObjectURL(blob);
      navigator.serviceWorker.register(swURL).catch(()=>{});
    }
