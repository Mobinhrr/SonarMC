const CONFIG = {
  // Edit these three values for your real server:
  serverIp: "5.57.34.22",
  shopUrl: "https://rubika.ir/joinc/+FFGFBIHC0MZIDRSPSESHUUSPPAAVYZOT",
  wikiUrl: "#wiki",
  discordUrl: "https://rubika.ir/joinc/+FFGFACEF0PXICBVUDCQXSKTFPFIBWNHB"
};

const translations = {
  fa: {
    "nav.home":"خانه","nav.features":"امکانات","nav.shop":"فروشگاه","nav.wiki":"ویکی","nav.join":"ورود به سرور","nav.discord":"روبیکا",
    "hero.eyebrow":"سرور آنلاین و آماده‌ی ماجراجویی","hero.title":"سرور همیشه رایگان","hero.subtitle":"دنیای خودت را بساز، دوستانت را پیدا کن و در SonarMC ماجراجویی را شروع کن.",
    "hero.ipLabel":"آدرس سرور","hero.copy":"کپی IP","hero.play":"شروع بازی","hero.guide":"راهنمای سرور","hero.scroll":"اسکرول کنید",
    "intro.kicker":"SONARMC","intro.title":"یک سرور، یک ماجراجویی تازه","intro.text":"همه‌چیز ساده طراحی شده تا سریع وارد بازی شوید و بیشتر وقتتان را صرف ساختن، کشف کردن و بازی با دوستان کنید.",
    "features.kicker":"FEATURES","features.title":"برای بازی ساخته شده","features.f1.title":"گیم‌پلی روان","features.f1.text":"محیطی ساده و مرتب برای شروع سریع ماجراجویی.","features.f2.title":"جامعه دوستانه","features.f2.text":"با بازیکنان دیگر بازی کنید، تیم بسازید و تجربه مشترک داشته باشید.","features.f3.title":"اقتصاد و فروشگاه","features.f3.text":"آیتم‌هایتان را مدیریت کنید و از امکانات اقتصادی سرور استفاده کنید.","features.f4.title":"خانه و تلپورت","features.f4.text":"با دستورهای کاربردی مثل /sethome و /home سریع جابه‌جا شوید.",
    "shop.kicker":"SHOP","shop.title":"فروشگاه SonarMC","shop.text":"فروشگاه سرور برای تهیه امکانات و آیتم‌های ویژه. لینک فروشگاه را از تنظیمات سایت وارد کنید.","shop.button":"ورود به فروشگاه",
    "wiki.kicker":"WIKI","wiki.title":"دستورهای مهم","wiki.text":"چند دستور اصلی برای شروع سریع در SonarMC.","cmd.kit":"گرفتن وسایل اولیه","cmd.shop":"باز کردن فروشگاه","cmd.sethome":"تنظیم خانه","cmd.home":"تلپورت به خانه","cmd.tpa":"درخواست تلپورت به پلیر","cmd.wild":"شروع بازی و رفتن به دنیای آزاد","wiki.button":"مشاهده ویکی کامل",
    "cta.kicker":"READY?","cta.title":"ماجراجویی از همین‌جا شروع می‌شود.","cta.text":"IP را کپی کن و وارد SonarMC شو.","cta.copy":"کپی IP سرور",
    "footer.tagline":"سرور همیشه رایگان","footer.shop":"فروشگاه","footer.wiki":"ویکی","footer.features":"امکانات",
    "copy.ok":"IP سرور کپی شد!","copy.fail":"کپی انجام نشد؛ IP را دستی کپی کنید."
  },
  en: {
    "nav.home":"Home","nav.features":"Features","nav.shop":"Shop","nav.wiki":"Wiki","nav.join":"Join Server","nav.discord":"Rubika",
    "hero.eyebrow":"Online and ready for adventure","hero.title":"Always Free Server","hero.subtitle":"Build your world, meet your friends, and start your adventure on SonarMC.",
    "hero.ipLabel":"Server address","hero.copy":"Copy IP","hero.play":"Start Playing","hero.guide":"Server Guide","hero.scroll":"Scroll",
    "intro.kicker":"SONARMC","intro.title":"One server. A new adventure.","intro.text":"Everything is designed to get you into the game quickly, so you can spend more time building, exploring, and playing with friends.",
    "features.kicker":"FEATURES","features.title":"Built for Minecraft","features.f1.title":"Smooth Gameplay","features.f1.text":"A clean, simple environment made for jumping straight into the adventure.","features.f2.title":"Friendly Community","features.f2.text":"Play with other players, build teams, and share the experience.","features.f3.title":"Economy & Shop","features.f3.text":"Manage your items and use the server's economy features.","features.f4.title":"Homes & Teleport","features.f4.text":"Move around quickly with useful commands like /sethome and /home.",
    "shop.kicker":"SHOP","shop.title":"SonarMC Shop","shop.text":"Get special items and server features from the shop. Set the real shop link in script.js.","shop.button":"Open Shop",
    "wiki.kicker":"WIKI","wiki.title":"Useful Commands","wiki.text":"A few commands to get started quickly on SonarMC.","cmd.kit":"Get starter items","cmd.shop":"Open the shop","cmd.sethome":"Set your home","cmd.home":"Teleport to your home","cmd.tpa":"Request teleport to a player","cmd.wild":"Start exploring the wild","wiki.button":"Open Full Wiki",
    "cta.kicker":"READY?","cta.title":"Your adventure starts here.","cta.text":"Copy the IP and join SonarMC.","cta.copy":"Copy Server IP",
    "footer.tagline":"Always free server","footer.shop":"Shop","footer.wiki":"Wiki","footer.features":"Features",
    "copy.ok":"Server IP copied!","copy.fail":"Copy failed; please copy the IP manually."
  }
};

let lang = "fa";
const $ = (s) => document.querySelector(s);

function applyLanguage() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  $("#languageToggle").classList.toggle("en", lang === "en");
  document.title = lang === "fa" ? "SonarMC — سرور همیشه رایگان" : "SonarMC — Always Free Server";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

async function copyIp() {
  const ip = CONFIG.serverIp;
  try {
    await navigator.clipboard.writeText(ip);
    $("#copyStatus").textContent = translations[lang]["copy.ok"];
    showToast(translations[lang]["copy.ok"]);
  } catch {
    $("#copyStatus").textContent = translations[lang]["copy.fail"];
    showToast(translations[lang]["copy.fail"]);
  }
}

$("#serverIp").textContent = CONFIG.serverIp;
$("#shopLink").href = CONFIG.shopUrl;
$("#wikiLink").href = CONFIG.wikiUrl;
$("#discordLink").href = CONFIG.discordUrl;
$("#year").textContent = new Date().getFullYear();

$("#copyIp").addEventListener("click", copyIp);
$("#copyIpBottom").addEventListener("click", copyIp);
$("#languageToggle").addEventListener("click", () => {
  lang = lang === "fa" ? "en" : "fa";
  applyLanguage();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

applyLanguage();
