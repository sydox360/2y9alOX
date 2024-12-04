var currentURL = window.location.href;
var targetDomains = ["seller-area.youcan.shop", "sydox.it", "themesmusta.youcan.shop"];
currentURL = currentURL.replace(/(^\w+:|^)\/\//, '');
currentURL = currentURL.replace(/^www\./, '');
var domainMatch = targetDomains.some(function (_0x439009) {
  _0x439009 = _0x439009.replace(/^www\./, '');
  return currentURL.includes(_0x439009);
});
if (domainMatch) {
  var productItem = document.getElementsByClassName("product-item");
  for (var i = 0; i < productItem.length; i++) {
    if (null !== productItem[i].querySelector("div.product-info > div > span.currency-value.before")) {
      productItem[i].style.position = "relative";
      var e = document.createElement("span");
      e.setAttribute("class", "discount_pp");
      productItem[i].appendChild(e);
      var t;
      var r;
      var a = productItem[i].querySelector("div.product-info > div > span.currency-value.before > span.value");
      var o = productItem[i].querySelector("div.product-info > div > span.currency-value.after > span.value");
      var n = parseInt(o.textContent);
      var s = parseInt(a.textContent);
      var c = Math.round(100 - 100 * n / s).toString();
      e.innerHTML = c + '%-';
    }
  }
  var price_befff = null !== document.querySelector("div.product-section.price-section > h3 > span.before.currency-value");
  if (price_befff) {
    var l;
    var o = document.querySelector("div.product-section.price-section > h3 > span.after.currency-value > span.value").textContent;
    var a = document.querySelector("div.product-section.price-section > h3 > span.before.currency-value > span.value").textContent;
    var d = parseInt(a);
    var u = parseInt(o);
    var m = document.querySelector("div.product-section.price-section > h3 > span.before.currency-value");
    var f = document.createElement("span");
    f.setAttribute("class", "discount_prcnt");
    var p = Math.round(100 - 100 * u / d).toString();
    f.innerHTML = "<style>.discount_text{margin-right: 10px; background-color:var(--primary-color); font-weight:bold;border-radius: 10px;padding: 5px 6px;color: #fff; font-size: 12px;margin-left: 13px;}</style><span class='discount_text'>&nbsp;تخفيض " + p + "%</span>";
    m.after(f);
  }
  var buy_button = document.querySelector("div.product-section.add-to-cart-section > button");
  if (null === buy_button || buy_button.disabled) {
    var g = document.querySelector("div.product-section.add-to-cart-section > button > i");
    if (g) {
      g.remove();
    }
    var y = document.querySelector("div.product-section.add-to-cart-section.disabled > button > i");
    if (y) {
      y.remove();
    }
  } else {
    buy_button.insertAdjacentHTML("afterend", "<style>@keyframes ring {0% {transform: rotate(0)}1% {transform: rotate(15deg)}3% {transform: rotate(-14deg)}5% {transform: rotate(17deg)}7% {transform: rotate(-16deg)}9% {transform: rotate(15deg)}11% {transform: rotate(-14deg)}13% {transform: rotate(13deg)}15% {transform: rotate(-12deg)}17% {transform: rotate(12deg)}19% {transform: rotate(-10deg)}21% {transform: rotate(9deg)}23% {transform: rotate(-8deg)}25% {transform: rotate(7deg)}27% {transform: rotate(-5deg)}29% {transform: rotate(5deg)}31% {transform: rotate(-4deg)}33% {transform: rotate(3deg)}35% {transform: rotate(-2deg)}37% {transform: rotate(1deg)}39% {transform: rotate(-1deg)}41% {transform: rotate(1deg)}43% {transform: rotate(0)}to {transform: rotate(0)}}i.fa.fa-shopping-cart { animation: ring 3s ease-in-out .7s infinite; font-size: 18px; margin-left: 5px;}.single-product .single-submit { color: #ffffff; background-color: var(--primary-color); display: flex; flex-direction: row-reverse; overflow: hidden; position: relative; border: 2px solid #D0021BFFFF !important;}@keyframes shiny-btn1 {0% {opacity: 0;transform: scale(0) rotate(45deg)}80% {opacity: .5;transform: scale(0) rotate(45deg)}81% {opacity: 1;transform: scale(4) rotate(45deg)}to {opacity: 0;transform: scale(50) rotate(45deg)}}button.button.single-submit:after{ background-color: #678983FF;}@keyframes button-loading-spin{from{transform:rotate(0turn);}to {transform:rotate(1turn);}}.add-to-cart-section .single-submit:disabled {opacity:1;font-size:0px;}.is-loading::after { content: \"\"; position: absolute; width: 19px; height: 19px; top: 0; left: 0; right: 0; bottom: 0; margin: auto; border: 4px solid transparent; border-top-color: white; border-radius: 50%; animation: button-loading-spin 1s ease infinite;}.button { transition: all 0s;}</style>");
  }
  var buttons = document.getElementsByClassName("cart-button");
  Array.prototype.forEach.call(buttons, function (_0x3e944b) {
    var _0x26c58a = document.createElement('i');
    _0x26c58a.className = "fa fa-cart-arrow-down";
    var _0x4b5970 = _0x3e944b.getElementsByTagName('a')[0];
    if (_0x4b5970) {
      _0x4b5970.insertBefore(_0x26c58a, _0x4b5970.firstChild);
    }
  });
  var containers = document.getElementsByClassName("product-title");
  for (var i = 0; i < containers.length; i++) {
    var t = containers[i];
    var o = document.createElement("div");
    o.className = "stars";
    for (var e = 0; e < 5; e++) {
      var s = document.createElement("span");
      s.className = "fa fa-star checked";
      o.appendChild(s);
    }
    t.appendChild(o);
  }
  var pagesToHideStars = ["/checkout/information", "/checkout/shipping", "/checkout/payment", "/checkout/all-in-one"];
  pagesToHideStars.forEach(function (_0x5b1b1f) {
    if (-1 !== window.location.href.indexOf(_0x5b1b1f)) {
      var _0x2c31ab = document.getElementsByClassName("stars");
      for (var _0x56e99e = 0; _0x56e99e < _0x2c31ab.length; _0x56e99e++) {
        _0x2c31ab[_0x56e99e].style.display = "none";
      }
    }
  });
  var buy_button = document.getElementsByClassName("button single-submit");
  if (0 !== buy_button.length) {
    for (var i = 0; i < buy_button.length; i++) {
      var e = document.createElement('i');
      e.setAttribute("class", "fa fa-shopping-cart");
      buy_button[i].appendChild(e);
    }
  }
  var targetElements = document.getElementsByClassName("product-thumbnail");
  for (var i = 0; i < targetElements.length; i++) {
    var t = targetElements[i];
    var e = document.createElement("div");
    e.className = "cart-button";
    var o = document.createElement('a');
    o.textContent = "شراء الآن  ";
    e.appendChild(o);
    t.appendChild(e);
  }
  var elementsToHide = document.getElementsByClassName("cart-button");
  var currentPage = window.location.pathname;
  if (("/checkout/information" === currentPage || "/checkout/shipping" === currentPage || "/checkout/payment" === currentPage || "/checkout/all-in-one" === currentPage) && elementsToHide.length > 0) {
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  }
  var buttons = document.getElementsByClassName("cart-button");
  Array.prototype.forEach.call(buttons, function (_0x4b74dc) {
    var _0x33f21d = document.createElement('i');
    _0x33f21d.className = "fa fa-cart-arrow-down";
    var _0x46d7bf = _0x4b74dc.getElementsByTagName('a')[0];
    if (_0x46d7bf) {
      _0x46d7bf.insertBefore(_0x33f21d, _0x46d7bf.firstChild);
    }
  });
  if ('/' === window.location.pathname) {
    window.onload = function () {
      var _0x274c83 = document.getElementById("sydox");
      if (null !== _0x274c83) {
        _0x274c83.setAttribute("href", "https://sydox.it/");
        _0x274c83.innerHTML = "SYDOX";
      } else {
        window.location.href = "https://sydox.it/";
      }
    };
  }
  var messageHeader = document.querySelector(".message-header");
  if (messageHeader) {
    var t = messageHeader.querySelector("img");
    if (t) {
      t.src = sidoxthankyouimg;
    }
  }
  var messageBodyElement = document.querySelector(".message-body");
  var messageBody = document.querySelector(".message-body");
  if (messageBody) {
    messageBody.innerHTML += "\n        <div class=\"thankyoupagebtn\" bis_skin_checked=\"1\">\n            <a href=\"" + contactUrl + "\" class=\"sidox-button\"><i class=\"fa fa-whatsapp\"></i>اتصل بنا</a>\n        </div>\n    ";
  }
  var addToCartSection = document.querySelector(".add-to-cart-section");
  if (addToCartSection) {
    var e = document.createElement('a');
    e.className = "boton-contact-sidox";
    e.target = "_self";
    e.innerHTML = "الطلب عبر <i class=\"fa fa-whatsapp\"></i>";
    e.onclick = sendWhatsApp;
    addToCartSection.insertAdjacentElement("afterend", e);
  } else {
    console.log("لم يتم العثور على قسم add-to-cart-section");
  }
  function sendWhatsApp() {
    var _0x3251f9 = document.querySelector("input[name=\"" + uName + "\"]").value;
    var _0x1c6ddf = document.querySelector("input[name=\"" + nNumber + "\"]").value;
    var _0x1f1640 = document.querySelector("input[name=\"" + aAddress + "\"]").value;
    var _0x11f360 = window.location.href;
    if (!_0x3251f9 || !_0x1c6ddf || !_0x1f1640) {
      alert("الرجاء تعبئة جميع الحقول قبل إرسال الطلب.");
      return;
    }
    var _0x2553b9 = contactwts + "?text=" + encodeURIComponent("مرحبا، اسمي " + _0x3251f9 + " أرغب في تقديم طلب.\n 📲 رقم هاتفي : " + _0x1c6ddf + ".\n 🏡 العنوان : " + _0x1f1640 + ". \n 📦 رابط المنتج :\n " + _0x11f360);
    window.location.href = _0x2553b9;
  }
  const addDiscountProduct = () => {
    let _0x30feb4 = document.querySelector(".single-price");
    if (_0x30feb4) {
      let _0x2608d6 = _0x30feb4.querySelector(".after .value");
      let _0x4b530d = _0x30feb4.querySelector(".before .value");
      let _0x3a2863 = document.querySelector(".currency");
      if (_0x2608d6 && _0x4b530d) {
        let _0x51a033 = parseInt(_0x2608d6.textContent);
        let _0x43b5ba = parseInt(_0x4b530d.textContent);
        let _0x473212 = document.createElement("span");
        _0x473212.className = "discount-sidox";
        let _0x4c672b = _0x3a2863 ? _0x3a2863.textContent : "mad";
        _0x473212.textContent = "خصم " + (_0x43b5ba - _0x51a033) + " " + _0x4c672b;
        _0x30feb4.appendChild(_0x473212); 
      }
    }
  };
  addDiscountProduct();
} else {
  window.location.href = "https://sydox.it";
}