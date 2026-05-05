/* eslint-disable no-alert */
const USD_AMOUNT = 30;
const DEFAULT_USD_RUB = 90;
const LS_LANG = "icloudSupport.lang";
const LS_PAYMENT = "icloudSupport.payment";

const i18n = {
  ru: {
    "nav.how": "Как это работает",
    "nav.faq": "FAQ",
    "hero.kicker": "Только легально • Только для владельцев",
    "hero.title": "Официальное восстановление доступа к Apple ID / iCloud",
    "hero.lead":
      "Помогаем пройти официальный процесс: проверка ситуации, подготовка данных, сопровождение обращения и дальнейшая настройка после восстановления.",
    "hero.cta": "Оплатить и начать",
    "hero.secondary": "Как это устроено",
    "trust.legal": "Не взламываем и не обходим защиту — только официальный путь",
    "trust.owner": "Работаем только при подтверждении владения",
    "price.chip": "Один пакет",
    "price.title": "Сопровождение восстановления",
    "price.desc":
      "Подходит, если вы владелец устройства/аккаунта и хотите пройти официальный процесс максимально быстро и без ошибок.",
    "price.once": "разово",
    "price.approx": "≈",
    "price.rub": "₽",
    "price.item1": "Быстрая диагностика и план действий",
    "price.item2": "Подготовка данных для обращения",
    "price.item3": "Сопровождение до результата (в рамках законного процесса)",
    "price.item4": "Инструкция по защите аккаунта после восстановления",
    "price.pay": "Перейти к оплате",
    "price.fine": "Оплата через СБП или USDT (TRC20). После оплаты — анкета для старта.",
    "how.title": "Как это работает",
    "how.s1.title": "Оплата",
    "how.s1.text": "Выбираете способ оплаты (СБП или USDT TRC20). Получаете подтверждение и номер заявки.",
    "how.s2.title": "Анкета",
    "how.s2.text": "Заполняете анкету: устройство, регион, что помните по аккаунту, наличие чека/документов.",
    "how.s3.title": "Сопровождение",
    "how.s3.text": "Мы подсказываем шаги официального процесса и помогаем избежать ошибок до результата.",
    "faq.title": "FAQ",
    "faq.q1.q": "Вы “разблокируете” iCloud?",
    "faq.q1.a":
      "Нет. Мы не занимаемся взломом и обходом защиты. Мы помогаем владельцам пройти официальный процесс восстановления доступа к Apple ID/iCloud.",
    "faq.q2.q": "Что нужно для работы?",
    "faq.q2.a":
      "Минимум — устройство, регион и описание ситуации. Сильно помогает чек/документы и любые данные, которые подтверждают владение.",
    "faq.q3.q": "Есть гарантия?",
    "faq.q3.a":
      "Мы гарантируем корректное сопровождение и рекомендации в рамках официального процесса. Итоговое решение принимает Apple и зависит от подтверждения владения.",
    "footer.title": "iCloud Support",
    "footer.sub": "Легальная помощь владельцам: официальное восстановление доступа к Apple ID/iCloud.",
    "footer.offer": "Оферта",
    "footer.privacy": "Политика",
    "footer.contact": "Контакты",
    "footer.fine": "Важно: мы не оказываем услуги обхода защитных механизмов. Работа только с владельцами.",
    "pay.kicker": "Подтверждение транзакции",
    "pay.title": "Оплата услуги",
    "pay.serviceLabel": "Услуга",
    "pay.serviceValue": "Сопровождение восстановления",
    "pay.amountLabel": "Сумма",
    "pay.email": "Email",
    "pay.phone": "Телефон",
    "pay.method.sbp": "СБП",
    "pay.method.usdt": "USDT (TRC20)",
    "pay.sbp.title": "Оплата через СБП",
    "pay.sbp.text":
      "Здесь обычно подключается платёжный провайдер (ЮKassa/CloudPayments и т.д.). В демо покажем шаги и статус оплаты.",
    "pay.sbp.openBank": "Открыть в банке",
    "pay.usdt.title": "Оплата USDT (TRC20)",
    "pay.usdt.text":
      "Отправляйте строго USDT в сети TRON (TRC20). Другие сети/токены могут привести к потере средств.",
    "pay.usdt.amount": "Сумма",
    "pay.usdt.address": "Адрес",
    "pay.usdt.copy": "Скопировать адрес",
    "pay.agree": 'Я согласен с <a href="#" class="link">офертой</a> и <a href="#" class="link">политикой</a>',
    "pay.disclaimer": "Мы работаем только с владельцами и не оказываем услуги обхода защитных механизмов.",
    "pay.cancel": "Отмена",
    "pay.pay": "Оплатить",
    "intake.kicker": "Шаг 2 из 2",
    "intake.title": "Анкета для старта",
    "intake.lead": "Заполните данные. Мы используем их только для сопровождения официального восстановления доступа.",
    "intake.paidTitle": "Оплата подтверждена",
    "intake.paidText": "Номер заявки",
    "intake.email": "Email",
    "intake.phone": "Телефон",
    "intake.region": "Регион",
    "intake.device": "Устройство",
    "intake.caseType": "Ситуация",
    "intake.case.forgot": "Забыл пароль/нет доступа",
    "intake.case.2fa": "Проблема с 2FA/номером",
    "intake.case.locked": "Аккаунт заблокирован/disabled",
    "intake.case.other": "Другое",
    "intake.proof": "Подтверждение владения",
    "intake.proof.receipt": "Есть чек/инвойс",
    "intake.proof.box": "Есть коробка/серийники",
    "intake.proof.none": "Нет подтверждения",
    "intake.details": "Детали",
    "intake.ownerConfirm":
      "Подтверждаю, что я владелец устройства/аккаунта и не запрашиваю обход защитных механизмов",
    "intake.back": "Назад",
    "intake.submit": "Отправить анкету",
  },
  en: {
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "hero.kicker": "Legal only • Owners only",
    "hero.title": "Official Apple ID / iCloud access recovery",
    "hero.lead":
      "We guide you through the official process: quick assessment, data preparation, request support, and post-recovery setup.",
    "hero.cta": "Pay & start",
    "hero.secondary": "See how it works",
    "trust.legal": "No hacking, no bypass — official path only",
    "trust.owner": "We work only with verified owners",
    "price.chip": "Single package",
    "price.title": "Recovery assistance",
    "price.desc":
      "Best if you are the device/account owner and want to go through the official process fast and correctly.",
    "price.once": "one-time",
    "price.approx": "≈",
    "price.rub": "₽",
    "price.item1": "Quick assessment and action plan",
    "price.item2": "Prepare information for the official request",
    "price.item3": "Support until outcome (within legal/official process)",
    "price.item4": "Account security checklist after recovery",
    "price.pay": "Proceed to payment",
    "price.fine": "Pay via SBP or USDT (TRC20). After payment — intake form.",
    "how.title": "How it works",
    "how.s1.title": "Payment",
    "how.s1.text": "Choose a payment method (SBP or USDT TRC20). You receive confirmation and a ticket number.",
    "how.s2.title": "Intake",
    "how.s2.text": "Fill the form: device, region, what you remember, and any proof of ownership.",
    "how.s3.title": "Guidance",
    "how.s3.text": "We help you follow the official steps and avoid mistakes until the result.",
    "faq.title": "FAQ",
    "faq.q1.q": "Do you “unlock” iCloud?",
    "faq.q1.a":
      "No. We do not hack or bypass protections. We help owners go through Apple’s official account access recovery process.",
    "faq.q2.q": "What do I need?",
    "faq.q2.a":
      "At minimum: your device, region, and a clear description. A receipt/invoice or other proof of ownership helps a lot.",
    "faq.q3.q": "Any guarantees?",
    "faq.q3.a":
      "We guarantee careful guidance within the official process. The final decision is made by Apple and depends on ownership verification.",
    "footer.title": "iCloud Support",
    "footer.sub": "Legal owner-only assistance: official Apple ID/iCloud access recovery.",
    "footer.offer": "Terms",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.fine": "Important: we do not provide any bypass services. Owners only.",
    "pay.kicker": "Transaction confirmation",
    "pay.title": "Service payment",
    "pay.serviceLabel": "Service",
    "pay.serviceValue": "Recovery assistance",
    "pay.amountLabel": "Amount",
    "pay.email": "Email",
    "pay.phone": "Phone",
    "pay.method.sbp": "SBP",
    "pay.method.usdt": "USDT (TRC20)",
    "pay.sbp.title": "Pay via SBP",
    "pay.sbp.text":
      "A payment provider (e.g. YooKassa/CloudPayments) is usually connected here. In this demo we show the UX and statuses.",
    "pay.sbp.openBank": "Open in bank app",
    "pay.usdt.title": "Pay with USDT (TRC20)",
    "pay.usdt.text":
      "Send USDT on TRON (TRC20) only. Other networks/tokens may result in loss of funds.",
    "pay.usdt.amount": "Amount",
    "pay.usdt.address": "Address",
    "pay.usdt.copy": "Copy address",
    "pay.agree": 'I agree to the <a href="#" class="link">terms</a> and <a href="#" class="link">privacy policy</a>',
    "pay.disclaimer": "We work only with verified owners and do not provide any bypass services.",
    "pay.cancel": "Cancel",
    "pay.pay": "Pay",
    "intake.kicker": "Step 2 of 2",
    "intake.title": "Intake form",
    "intake.lead": "Fill in your details. We use them only to support the official recovery process.",
    "intake.paidTitle": "Payment confirmed",
    "intake.paidText": "Ticket",
    "intake.email": "Email",
    "intake.phone": "Phone",
    "intake.region": "Region",
    "intake.device": "Device",
    "intake.caseType": "Situation",
    "intake.case.forgot": "Forgot password / no access",
    "intake.case.2fa": "2FA / phone issue",
    "intake.case.locked": "Account disabled/locked",
    "intake.case.other": "Other",
    "intake.proof": "Proof of ownership",
    "intake.proof.receipt": "Receipt/invoice available",
    "intake.proof.box": "Box/serials available",
    "intake.proof.none": "No proof",
    "intake.details": "Details",
    "intake.ownerConfirm": "I confirm I am the owner and I’m not requesting any bypass of protections",
    "intake.back": "Back",
    "intake.submit": "Submit form",
  },
};

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

function setLang(lang) {
  const safe = lang === "en" ? "en" : "ru";
  localStorage.setItem(LS_LANG, safe);
  document.documentElement.lang = safe;

  const pill = qs("#langPill");
  if (pill) pill.textContent = safe.toUpperCase();

  qsa("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const v = i18n[safe]?.[key];
    if (!v) return;
    if (v.includes("<a ")) el.innerHTML = v;
    else el.textContent = v;
  });
}

function getLang() {
  const saved = localStorage.getItem(LS_LANG);
  if (saved === "en" || saved === "ru") return saved;
  const nav = (navigator.language || "ru").toLowerCase();
  return nav.startsWith("en") ? "en" : "ru";
}

function formatRub(n) {
  try {
    return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n);
  } catch {
    return String(Math.round(n));
  }
}

async function fetchUsdRubRate() {
  // Public endpoint with CORS in browsers. Fallback to default if unavailable.
  const url = "https://open.er-api.com/v6/latest/USD";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("rate_fetch_failed");
  const data = await res.json();
  const rate = data?.rates?.RUB;
  if (typeof rate !== "number" || !Number.isFinite(rate)) throw new Error("rate_parse_failed");
  return rate;
}

function updatePriceUI(usdRubRate, isFallback) {
  const rub = Math.round(USD_AMOUNT * usdRubRate);
  const rubEl = qs("#rubAmount");
  const rubEl2 = qs("#rubAmount2");
  const hint = qs("#rateHint");
  if (rubEl) rubEl.textContent = formatRub(rub);
  if (rubEl2) rubEl2.textContent = formatRub(rub);
  if (hint) hint.textContent = isFallback ? " (оценка)" : "";
}

function openModal() {
  const modal = qs("#payModal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const email = qs("#contactEmail");
  if (email) email.focus();
}

function closeModal() {
  const modal = qs("#payModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  clearStatus();
}

function setStatus(text, kind = "info") {
  const el = qs("#payStatus") || qs("#formStatus");
  if (!el) return;
  el.classList.add("is-show");
  el.classList.remove("is-good", "is-bad");
  if (kind === "good") el.classList.add("is-good");
  if (kind === "bad") el.classList.add("is-bad");
  el.textContent = text;
}

function clearStatus() {
  const el = qs("#payStatus");
  if (!el) return;
  el.classList.remove("is-show", "is-good", "is-bad");
  el.textContent = "";
}

function getSelectedMethod() {
  const active = qs(".tab.is-active");
  return active?.getAttribute("data-method") || "sbp";
}

function setMethod(method) {
  const m = method === "usdt" ? "usdt" : "sbp";
  qsa(".tab").forEach((t) => {
    const on = t.getAttribute("data-method") === m;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  const sbp = qs("#methodSbp");
  const usdt = qs("#methodUsdt");
  if (sbp) sbp.classList.toggle("is-active", m === "sbp");
  if (usdt) usdt.classList.toggle("is-active", m === "usdt");
}

function genTicket() {
  const s = Math.random().toString(16).slice(2, 6).toUpperCase();
  const t = Date.now().toString(36).slice(-5).toUpperCase();
  return `IC-${t}-${s}`;
}

function savePayment({ ticketId, method, email, phone }) {
  const payload = {
    ticketId,
    method,
    email: email || "",
    phone: phone || "",
    paidAt: new Date().toISOString(),
  };
  localStorage.setItem(LS_PAYMENT, JSON.stringify(payload));
}

function loadPayment() {
  try {
    const raw = localStorage.getItem(LS_PAYMENT);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function startSbpTimer() {
  const el = qs("#sbpTimer");
  if (!el) return () => {};
  let left = 10 * 60;
  el.textContent = "10:00";
  const id = setInterval(() => {
    left -= 1;
    const m = String(Math.max(0, Math.floor(left / 60))).padStart(2, "0");
    const s = String(Math.max(0, left % 60)).padStart(2, "0");
    el.textContent = `${m}:${s}`;
    if (left <= 0) clearInterval(id);
  }, 1000);
  return () => clearInterval(id);
}

function initLanding() {
  const open1 = qs("#openPay");
  const open2 = qs("#openPay2");
  if (open1) open1.addEventListener("click", openModal);
  if (open2) open2.addEventListener("click", openModal);

  qsa("[data-close='1']").forEach((el) => el.addEventListener("click", closeModal));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  let stopTimer = () => {};
  const modal = qs("#payModal");
  if (modal) {
    const obs = new MutationObserver(() => {
      if (modal.classList.contains("is-open")) stopTimer = startSbpTimer();
      else stopTimer();
    });
    obs.observe(modal, { attributes: true, attributeFilter: ["class"] });
  }

  qsa(".tab").forEach((t) =>
    t.addEventListener("click", () => setMethod(t.getAttribute("data-method")))
  );

  const copyBtn = qs("#copyUsdt");
  const addressEl = qs("#usdtAddress");
  const copyHint = qs("#copyHint");
  if (copyBtn && addressEl) {
    copyBtn.addEventListener("click", async () => {
      const text = addressEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        if (copyHint) copyHint.textContent = "Скопировано";
        setTimeout(() => {
          if (copyHint) copyHint.textContent = "";
        }, 1200);
      } catch {
        if (copyHint) copyHint.textContent = "Не удалось скопировать";
      }
    });
  }

  const payBtn = qs("#payBtn");
  if (payBtn) {
    payBtn.addEventListener("click", async () => {
      clearStatus();

      const email = qs("#contactEmail")?.value?.trim() || "";
      const phone = qs("#contactPhone")?.value?.trim() || "";
      const agree = qs("#agree")?.checked;
      const method = getSelectedMethod();
      const lang = getLang();

      if (!agree) {
        setStatus(lang === "en" ? "Please accept the terms and privacy policy." : "Примите оферту и политику.", "bad");
        return;
      }
      if (!email && !phone) {
        setStatus(lang === "en" ? "Please provide email or phone." : "Укажите email или телефон.", "bad");
        return;
      }

      setStatus(lang === "en" ? "Creating payment..." : "Создаём платёж…");

      // Demo flow: simulate status transitions (no real provider/backend yet).
      await new Promise((r) => setTimeout(r, 650));

      if (method === "sbp") {
        setStatus(lang === "en" ? "Awaiting SBP payment..." : "Ожидаем оплату по СБП…");
        await new Promise((r) => setTimeout(r, 1400));
      } else {
        setStatus(lang === "en" ? "Waiting for network confirmations..." : "Ждём подтверждения сети…");
        await new Promise((r) => setTimeout(r, 1400));
      }

      const ticketId = genTicket();
      savePayment({ ticketId, method, email, phone });

      setStatus(lang === "en" ? `Payment successful. Ticket: ${ticketId}` : `Оплата прошла. Заявка: ${ticketId}`, "good");

      setTimeout(() => {
        window.location.href = `./intake.html?lang=${encodeURIComponent(lang)}`;
      }, 900);
    });
  }

  const openBank = qs("#openBank");
  if (openBank) {
    openBank.addEventListener("click", () => {
      const lang = getLang();
      alert(lang === "en" ? "In production: open SBP deep link." : "В проде: открытие deep link СБП.");
    });
  }
}

function initIntake() {
  const payment = loadPayment();
  if (payment) {
    const b = qs("#paymentBanner");
    if (b) b.hidden = false;
    const id = qs("#ticketId");
    if (id) id.textContent = payment.ticketId || "—";
    const via = qs("#paidVia");
    if (via) via.textContent = payment.method === "usdt" ? "USDT TRC20" : "СБП";

    const email = qs("#email");
    const phone = qs("#phone");
    if (email && payment.email) email.value = payment.email;
    if (phone && payment.phone) phone.value = payment.phone;
  }

  const form = qs("#intakeForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lang = getLang();
    const owner = qs("#ownerConfirm")?.checked;
    if (!owner) {
      const el = qs("#formStatus");
      if (el) {
        el.classList.add("is-show", "is-bad");
        el.textContent =
          lang === "en"
            ? "Please confirm you are the owner and not requesting any bypass."
            : "Подтвердите, что вы владелец и не запрашиваете обход защиты.";
      }
      return;
    }

    const el = qs("#formStatus");
    if (el) {
      el.classList.add("is-show");
      el.classList.remove("is-good", "is-bad");
      el.textContent = lang === "en" ? "Submitting..." : "Отправляем…";
    }

    // Demo: simulate submit. In production, connect to Telegram bot / email / CRM.
    await new Promise((r) => setTimeout(r, 900));

    if (el) {
      el.classList.add("is-good");
      el.textContent =
        lang === "en"
          ? "Submitted. We will contact you soon."
          : "Отправлено. Мы свяжемся с вами в ближайшее время.";
    }
  });
}

function initLangToggle() {
  const toggle = qs("#langToggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const cur = getLang();
    setLang(cur === "ru" ? "en" : "ru");
  });
}

async function initPrice() {
  const usd = qs("#usdAmount");
  if (usd) usd.textContent = String(USD_AMOUNT);

  try {
    const rate = await fetchUsdRubRate();
    updatePriceUI(rate, false);
  } catch {
    updatePriceUI(DEFAULT_USD_RUB, true);
  }
}

function initFromQuery() {
  const u = new URL(window.location.href);
  const qLang = u.searchParams.get("lang");
  if (qLang === "en" || qLang === "ru") localStorage.setItem(LS_LANG, qLang);
}

document.addEventListener("DOMContentLoaded", () => {
  initFromQuery();
  setLang(getLang());
  initLangToggle();
  initPrice();
  initLanding();
  initIntake();
});

