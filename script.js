/* BarBar&Café Selz — language toggleCafé Selz: language toggle, scroll reveal, hero sun parallax,
   programme-card tilt, film-strip depth, travelling scroll sun.
   Default language is Italian and is fully present in the HTML:
   with JavaScript disabled, the complete Italian site remains visible. */
(function () {
  "use strict";

  var I18N = {
    it: {
      pageTitle: "Bar&Café Selz, Locarno · Dal primo caffè all’aperitivo, al sole",
      stripLabel: "Galleria fotografica scorrevole",
      skip: "Vai agli orari",
      wordmarkSub: "Locarno · Città Vecchia",
      navDay: "La giornata",
      navCounter: "Dal banco",
      navFrames: "Fotogrammi",
      navVisit: "Orari e contatti",
      ctaCallShort: "Chiama",
      heroKicker: "Via Franchino Rusca 8 · di fronte alla sede del Festival",
      badgeRating: "★ 4,5 · 140 recensioni Google",
      h1a: "Dal primo caffè",
      h1b: "all’aperitivo,",
      h1c: "al sole.",
      heroLede: "Terrazza soleggiata nella Città Vecchia di Locarno, accanto a Piazza Grande: caffè e marmellata fatta in casa al mattino, la quiche a pranzo, l’aperitivo all’ora dorata.",
      ctaCall: "Chiama il bar",
      ctaDay: "La giornata al Selz",
      chipTerrace: "Terrazza soleggiata",
      chipHours: "Lun-Sab · dalle 7:30",
      chipAperitivo: "Aperitivo in terrazza",
      heroCaption: "La terrazza, al mattino",
      imgNote: "Immagine d’atmosfera",
      progTitle: "Il programma di oggi",
      prog1Name: "Mattina",
      prog1Text: "Caffè e marmellata fatta in casa",
      prog2Stamp: "Mezzogiorno",
      prog2Name: "Pranzo",
      prog2Text: "La quiche di cui parlano tutti",
      prog3Stamp: "Pomeriggio",
      prog3Name: "Terrazza",
      prog3Text: "Tè, limonate e torte",
      prog4Stamp: "Sera",
      prog4Name: "Aperitivo",
      prog4Text: "Fino alle 22:30 · ven e sab 24:00",
      actsKicker: "La giornata",
      actsTitle: "Una giornata, atto per atto",
      actsLede: "Il Selz non ha un solo momento: ne ha quattro, dalle 7:30 a mezzanotte. Ognuno ha il suo sapore, e le recensioni degli ospiti li raccontano tutti.",
      act1Label: "Atto I · Mattina",
      act1Title: "Il caffè prima di tutto",
      act1Text: "La giornata comincia presto: dalle 7:30 il bancone serve il caffè che gli ospiti definiscono «eccezionale», prima e dopo il lavoro. E c’è un dettaglio che più di uno ricorda per nome: la marmellata fatta in casa, da assaggiare con la colazione.",
      act2Stamp: "Mezzogiorno",
      act2Label: "Atto II · Mezzogiorno",
      act2Title: "Pranzo fresco, senza fretta",
      act2Text: "A pranzo la carta è breve e fresca: panini e piatti del giorno preparati al momento. Ma la protagonista è lei, la quiche: «incredibile», scrive un ospite, e i consigli si ripetono: non andate via senza provarla.",
      act3Stamp: "Pomeriggio",
      act3Label: "Atto III · Pomeriggio",
      act3Title: "Tè, limonate e dolci",
      act3Text: "Il pomeriggio appartiene alla terrazza: un tè, una limonata, una fetta delle torte del banco. E il passatempo preferito di chi si siede qui, dicono le recensioni: guardare la gente che passa, con le colline sopra i tetti.",
      act4Stamp: "Ora dorata",
      act4Label: "Atto IV · Aperitivo e sera",
      act4Title: "L’ora dorata",
      act4Text: "Quando la luce si fa dorata, la terrazza diventa il posto dell’aperitivo: qualcosa di fresco, una birra la sera, il sole che cala dietro le colline. Il venerdì e il sabato si resta fino a mezzanotte. «Il miglior posto di Locarno per un aperitivo in terrazza», parola di ospite.",
      counterKicker: "Dal banco",
      counterTitle: "Quello per cui si torna",
      counterLede: "Niente invenzioni: questo è ciò che gli ospiti citano nelle loro recensioni, voce per voce.",
      item1Name: "Caffè",
      item1Note: "«Eccezionale», dicono le recensioni",
      item2Name: "Marmellata fatta in casa",
      item2Note: "Con la colazione, citata per nome dagli ospiti",
      item3Name: "La quiche",
      item3Note: "La più consigliata di tutte",
      item4Name: "Pranzo fresco",
      item4Note: "Piatti del giorno e panini",
      item5Name: "Torte e dolci",
      item5Note: "Dal banco, per tutto il giorno",
      item6Name: "Tè e limonate",
      item6Note: "Per il pomeriggio in terrazza",
      item7Name: "Birra",
      item7Note: "La sera, guardando la gente passare",
      item8Name: "Aperitivo",
      item8Note: "In terrazza, all’ora dorata",
      billNote: "La carta del giorno e i prezzi sono al banco: il menu cambia con la stagione e non è pubblicato online.",
      framesKicker: "Fotogrammi",
      framesTitle: "La giornata in sei fotogrammi",
      framesLede: "Immagini d’atmosfera generate per questo sito: quelle vere, scattate in terrazza, le trovate su Instagram.",
      frame1: "La terrazza del mattino",
      frame2: "Colazione e marmellata",
      frame3: "La quiche del pranzo",
      frame4: "Il banco dei dolci",
      frame5: "Dentro, con calma",
      frame6: "L’ora dorata",
      stripHint: "Scorri per vedere tutti i fotogrammi →",
      voicesKicker: "Dicono di noi",
      voicesTitle: "Parola degli ospiti",
      quoteCite: "· Ospite, recensione Google",
      voicesFact: "N. 6 nella lista Wanderlog dei 50 migliori bar e locali di Locarno. Gli ospiti restano in media una mezz’ora, spesso anche di più.",
      visitKicker: "Visita",
      visitTitle: "Orari e contatti",
      hoursTitle: "Orari di apertura",
      dayMonThu: "Da lunedì a giovedì",
      dayFri: "Venerdì",
      daySat: "Sabato",
      daySun: "Domenica",
      closed: "Chiuso",
      hoursNote: "Orari dal profilo Google del locale. Un altro elenco pubblico indica chiusure più anticipate: la sera, e durante il Festival, conviene confermare al telefono.",
      insideTip: "Consiglio degli ospiti: nei giorni del Festival, dentro si sta più tranquilli.",
      contactTitle: "Trovarci è facile",
      labelAddress: "Indirizzo",
      labelPhone: "Telefono",
      igNote: "L’unica pagina online del bar",
      ctaMap: "Apri in Google Maps",
      footerDemo: "Sito dimostrativo non ufficiale, realizzato a scopo di presentazione.",
      footerSources: "Informazioni da profili pubblici (Google, Instagram), novembre 2026. Immagini d’atmosfera generate. Citazioni dalle recensioni Google degli ospiti.",
      barCall: "Chiama",
      barHours: "Orari",
      barMap: "Mappa"
    },
    en: {
      pageTitle: "Bar&Café Selz, Locarno · From the first coffee to the aperitivo, in the sun",
      stripLabel: "Scrollable photo gallery",
      skip: "Skip to opening hours",
      wordmarkSub: "Locarno · Old Town",
      navDay: "The day",
      navCounter: "From the counter",
      navFrames: "Frames",
      navVisit: "Hours & contact",
      ctaCallShort: "Call",
      heroKicker: "Via Franchino Rusca 8 · across from the Festival HQ",
      badgeRating: "★ 4.5 · 140 Google reviews",
      h1a: "From the first coffee",
      h1b: "to the aperitivo,",
      h1c: "in the sun.",
      heroLede: "A sunny terrace in Locarno’s Old Town, beside Piazza Grande: coffee and homemade jam in the morning, quiche at lunch, the aperitivo at golden hour.",
      ctaCall: "Call the bar",
      ctaDay: "A day at Selz",
      chipTerrace: "Sunny terrace",
      chipHours: "Mon-Sat · from 7:30",
      chipAperitivo: "Terrace aperitivo",
      heroCaption: "The terrace, in the morning",
      imgNote: "Atmosphere image",
      progTitle: "Today’s programme",
      prog1Name: "Morning",
      prog1Text: "Coffee and homemade jam",
      prog2Stamp: "Midday",
      prog2Name: "Lunch",
      prog2Text: "The quiche everyone talks about",
      prog3Stamp: "Afternoon",
      prog3Name: "Terrace",
      prog3Text: "Teas, lemonades and cakes",
      prog4Stamp: "Evening",
      prog4Name: "Aperitivo",
      prog4Text: "Until 22:30 · Fri & Sat 24:00",
      actsKicker: "The day",
      actsTitle: "One day, act by act",
      actsLede: "Selz doesn’t have one moment: it has four, from 7:30 to midnight. Each has its own flavour, and the guests’ reviews tell every one of them.",
      act1Label: "Act I · Morning",
      act1Title: "Coffee first of all",
      act1Text: "The day starts early: from 7:30 the counter serves the coffee guests call “exceptional”, before and after work. And there’s one detail more than one guest remembers by name: the homemade jam, to try with breakfast.",
      act2Stamp: "Midday",
      act2Label: "Act II · Midday",
      act2Title: "Fresh lunch, unhurried",
      act2Text: "At lunch the menu is short and fresh: sandwiches and daily dishes made to order. But the star is the quiche: “incredible”, writes one guest, and the advice keeps repeating: don’t leave without trying it.",
      act3Stamp: "Afternoon",
      act3Label: "Act III · Afternoon",
      act3Title: "Teas, lemonades and cakes",
      act3Text: "The afternoon belongs to the terrace: a tea, a lemonade, a slice from the cake counter. And the favourite pastime of everyone who sits here, say the reviews: watching the people go by, with the hills above the rooftops.",
      act4Stamp: "Golden hour",
      act4Label: "Act IV · Aperitivo & evening",
      act4Title: "The golden hour",
      act4Text: "When the light turns golden, the terrace becomes the aperitivo spot: something fresh, a beer in the evening, the sun setting behind the hills. On Fridays and Saturdays it stays open until midnight. “By far the best spot in Locarno for an aperitivo out on the terrace”, in a guest’s words.",
      counterKicker: "From the counter",
      counterTitle: "What people come back for",
      counterLede: "Nothing invented: this is what guests name in their reviews, item by item.",
      item1Name: "Coffee",
      item1Note: "“Exceptional”, say the reviews",
      item2Name: "Homemade jam",
      item2Note: "With breakfast, named by guests in reviews",
      item3Name: "The quiche",
      item3Note: "The most recommended of all",
      item4Name: "Fresh lunch",
      item4Note: "Daily dishes and sandwiches",
      item5Name: "Cakes & pastries",
      item5Note: "From the counter, all day",
      item6Name: "Teas & lemonades",
      item6Note: "For the afternoon on the terrace",
      item7Name: "Beer",
      item7Note: "In the evening, people-watching",
      item8Name: "Aperitivo",
      item8Note: "On the terrace, at golden hour",
      billNote: "The day’s menu and prices are at the counter: the menu changes with the season and isn’t published online.",
      framesKicker: "Frames",
      framesTitle: "The day in six frames",
      framesLede: "Atmosphere images generated for this site: the real ones, taken on the terrace, are on Instagram.",
      frame1: "The morning terrace",
      frame2: "Breakfast and jam",
      frame3: "The lunch quiche",
      frame4: "The cake counter",
      frame5: "Inside, unhurried",
      frame6: "The golden hour",
      stripHint: "Swipe to see all the frames →",
      voicesKicker: "Word of mouth",
      voicesTitle: "In the guests’ words",
      quoteCite: "· Guest, Google review",
      voicesFact: "No. 6 on Wanderlog’s list of Locarno’s 50 best bars. Guests typically spend about half an hour, often longer.",
      visitKicker: "Visit",
      visitTitle: "Hours & contact",
      hoursTitle: "Opening hours",
      dayMonThu: "Monday to Thursday",
      dayFri: "Friday",
      daySat: "Saturday",
      daySun: "Sunday",
      closed: "Closed",
      hoursNote: "Hours from the bar’s Google profile. Another public listing shows earlier closing times: in the evening, and during the Festival, it’s worth confirming by phone.",
      insideTip: "A guest tip: on Festival days, it’s calmer inside.",
      contactTitle: "Easy to find",
      labelAddress: "Address",
      labelPhone: "Phone",
      igNote: "The bar’s only page online",
      ctaMap: "Open in Google Maps",
      footerDemo: "Unofficial demo website, made for presentation purposes.",
      footerSources: "Information from public profiles (Google, Instagram), November 2026. Atmosphere images are generated. Quotes from guests’ Google reviews.",
      barCall: "Call",
      barHours: "Hours",
      barMap: "Map"
    }
  };

  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Language ---------- */
  var strip = document.getElementById("strip");
  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;
    if (strip) strip.setAttribute("aria-label", dict.stripLabel);
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("is-active", btns[j].getAttribute("data-lang") === lang);
    }
    try { window.localStorage.setItem("selz-lang", lang); } catch (e) { /* private mode */ }
  }
  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () { applyLang(this.getAttribute("data-lang")); });
  }
  var saved = null;
  try { saved = window.localStorage.getItem("selz-lang"); } catch (e) { /* ignore */ }
  if (saved === "en") applyLang("en");

  /* ---------- Reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !RM) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Scroll sun (progress rail) ---------- */
  var sunDot = document.getElementById("sunDot");
  var rail = sunDot ? sunDot.parentElement : null;
  function updateSun() {
    if (!sunDot || !rail) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var w = rail.clientWidth - 16;
    var x = 4 + p * w;
    var y = -Math.sin(p * Math.PI) * 5;
    sunDot.style.transform = "translate(" + x + "px," + y + "px)";
  }

  /* ---------- Hero parallax ---------- */
  var hero = document.querySelector(".hero");
  var layers = hero ? hero.querySelectorAll("[data-depth]") : [];
  var tx = 0, ty = 0, cx = 0, cy = 0, heroVisible = true;
  if (hero && !RM) {
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
      }).observe(hero);
    }
    hero.addEventListener("pointermove", function (e) {
      if (!FINE) return;
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });
    hero.addEventListener("pointerleave", function () { tx = 0; ty = 0; });
  }
  function parallaxFrame() {
    if (heroVisible && layers.length) {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      var sy = window.scrollY;
      for (var i = 0; i < layers.length; i++) {
        var d = parseFloat(layers[i].getAttribute("data-depth")) || 0;
        var px = cx * d * 12;
        var py = cy * d * 7 + sy * d * 0.12;
        var base = layers[i].classList.contains("hero-arc") ? "translateX(-50%) " : "";
        layers[i].style.transform = base + "translate3d(" + px.toFixed(1) + "px," + py.toFixed(1) + "px,0)";
      }
    }
    window.requestAnimationFrame(parallaxFrame);
  }
  if (!RM && layers.length) window.requestAnimationFrame(parallaxFrame);

  window.addEventListener("scroll", updateSun, { passive: true });
  window.addEventListener("resize", updateSun);
  updateSun();

  /* ---------- Act photo tilt ---------- */
  if (FINE && !RM) {
    document.querySelectorAll(".tilt").forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - r.left) / r.width - 0.5;
        var dy = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(850px) rotateX(" + (-dy * 6).toFixed(2) + "deg) rotateY(" + (dx * 6).toFixed(2) + "deg)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  /* ---------- Film-strip centre depth ---------- */
  if (strip && !RM) {
    var frames = strip.querySelectorAll(".frame");
    var stripTick = false;
    function updateStrip() {
      stripTick = false;
      var sr = strip.getBoundingClientRect();
      var centre = sr.left + sr.width / 2;
      frames.forEach(function (f) {
        var fr = f.getBoundingClientRect();
        var fc = fr.left + fr.width / 2;
        var r = Math.max(-1, Math.min(1, (fc - centre) / (sr.width / 2)));
        f.style.setProperty("--ry", (r * 10).toFixed(2) + "deg");
        f.style.setProperty("--sc", (1.02 - Math.abs(r) * 0.055).toFixed(3));
      });
    }
    strip.addEventListener("scroll", function () {
      if (!stripTick) { stripTick = true; window.requestAnimationFrame(updateStrip); }
    }, { passive: true });
    window.addEventListener("resize", updateStrip);
    updateStrip();
  }
})();
