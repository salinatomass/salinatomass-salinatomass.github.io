/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/components/carousel/codeSnippets.js":
/*!*******************************************************!*\
  !*** ./static/js/components/carousel/codeSnippets.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comparison": () => (/* binding */ comparison),
/* harmony export */   "devFinder": () => (/* binding */ devFinder),
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
var slider = {
  htmlString: '&lt;div class=&quot;product&quot;&gt;\n  &lt;h3 class=&quot;product-title&quot;&gt;Jordan 1 Retro High&lt;/h3&gt;\n  &lt;p class=&quot;product-subtitle&quot;&gt;Pollen&lt;/p&gt;\n  &lt;ul class=&quot;product-tags&quot;&gt;\n    &lt;li&gt;100% Authentic&lt;/li&gt;\n    &lt;li&gt;Condition: new&lt;/li&gt;\n  &lt;/ul&gt;\n  &lt;div class=&quot;product-actions&quot;&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n  &lt;/div&gt;\n  &lt;canvas class=&quot;product-picture&quot; id=&quot;canvas&quot;&gt;&lt;/canvas&gt;\n  &lt;input\n    class=&quot;product-slider&quot;\n    type=&quot;range&quot;\n    min=&quot;1&quot;\n    max=&quot;36&quot;\n    value=&quot;1&quot;\n    step=&quot;1&quot;\n    id=&quot;slider&quot;\n  /&gt;\n&lt;/div&gt;',
  cssString: '.product {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font: var(--body-1);\n}\n.product-title {\n  color: var(--black);\n  font-size: 20px;\n  line-height: 26px;\n}\n.product-subtitle {\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--black);\n}\n.product-tags {\n  display: flex;\n  gap: 10px;\n  list-style: none;\n}\n.product-tags li {\n  font: var(--body-2);\n  font-weight: 500;\n  padding: 0 6px;\n  color: var(--secondary-color);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n}\n.product-picture {\n  height: 250px;\n}\n.product-slider {\n  width: 60%;\n  height: 2px;\n  align-self: center;\n  margin-bottom: 10px;\n}\n.product-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 5px;\n}\n.product-actions button {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background-color: transparent;\n  color: var(--black);\n  cursor: pointer;\n}',
  jsString: "const slider = document.querySelector('#productSlider');\nconst canvas = document.querySelector('#canvasSlider');\nconst ctx = canvas.getContext('2d');\nconst images = [];\n\nconst handleInputSlider = e => imageRendering(e.target.value);\n\nconst imageRendering = index =>\n  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);\n\nconst pageLoaded = () => {\n  for (let i = 1; i <= 36; i++) {\n    const number = i.toString().padStart(2, '00');\n    const url = `https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img${number}.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1626802470&h=320&fm=avif`;\n\n    const image = new Image();\n    image.src = url;\n    image.addEventListener('load', () => {\n      images[i] = image;\n      if (i === 1) {\n        imageRendering(i);\n      }\n    });\n  }\n\n  slider.addEventListener('input', handleInputSlider);\n};\n\nwindow.addEventListener('load', pageLoaded);"
};
var devFinder = {
  htmlString: '&lt;div class=&quot;finder&quot;&gt;\n  &lt;h3 class=&quot;finder-logo&quot;&gt;devfinder&lt;/h3&gt;\n  &lt;form class=&quot;finder-search&quot; id=&quot;finderForm&quot;&gt;\n    &lt;input\n      autocomplete=&quot;given-name&quot;\n      type=&quot;text&quot;\n      name=&quot;search&quot;\n      id=&quot;finderSearch&quot;\n      placeholder=&quot;Search GitHub username...&quot;\n    /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Search&lt;/button&gt;\n  &lt;/form&gt;\n  &lt;div class=&quot;finder-data&quot; id=&quot;finderContainer&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;',
  cssString: '.finder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n}\n.finder-logo {\n  font: var(--headline-4);\n  font-size: 20px;\n  color: #e8ebef;\n}\n.finder-search {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #1f2a48;\n  padding: 8px;\n  padding-left: 16px;\n  border-radius: 12px;\n}\n.finder-search input {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 10px;\n}\n.finder-search input::placeholder {\n  color: #d9e3f7;\n}\n.finder-search button {\n  background-color: #0279fa;\n  padding-block: 8px;\n  padding-inline: 16px;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\n.finder-search svg {\n  width: 30px;\n}\n\n.finder-data {\n  text-align: center;\n  background-color: #1f2a48;\n  padding: 25px 20px;\n  border-radius: 12px;\n  font: var(--body-2);\n}\n.finder-data h3 {\n  font: var(--body-1);\n  font-weight: 700;\n}\n.finder-data a {\n  font: var(--body-2);\n  color: #0279fa;\n  text-decoration: none;\n}\n.finder-avatar img {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 4px;\n  border: 2px solid white;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.finder-stats {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  margin-top: 25px;\n  padding-top: 25px;\n}\n.finder-stats-item {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-weight: bold;\n}\n.finder-stats-item span {\n  font-weight: normal;\n  color: #d9e3f7;\n}',
  jsString: "const BASE_API = 'https://api.github.com';\n\nconst $userContainer = document.getElementById('finderContainer');\nconst $userForm = document.getElementById('finderForm');\nconst $search = document.getElementById('finderSearch');\n\nconst fetchUser = username =>\n  new Promise(async (resolve, reject) => {\n    try {\n      const res = await fetch(`${BASE_API}/users/${username}`);\n      if (!res.ok || res.status === 404) reject('User not found');\n\n      const data = await res.json();\n      resolve(data);\n    } catch (error) {\n      reject(error);\n    }\n  });\n\nconst userTemplate = user => {\n  return `\n          &lt;picture class=&quot;finder-avatar&quot;&gt;\n            &lt;img src=${user.avatar_url} loading=&quot;lazy&quot; /&gt;\n          &lt;/picture&gt;\n          &lt;h3&gt;${user.name}&lt;/h3&gt;\n          &lt;a href=${user.html_url} target=&quot;_blank&quot;&gt;@${user.login}&lt;/a&gt;\n          &lt;ul class=&quot;finder-stats&quot;&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Repos &lt;span&gt;${user.public_repos}&lt;/span&gt;&lt;/li&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Followers &lt;span&gt;${user.followers}&lt;/span&gt;&lt;/li&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Following &lt;span&gt;${user.following}&lt;/span&gt;&lt;/li&gt;\n          &lt;/ul&gt;`\n};\n\nconst loadUser = async username => {\n  try {\n    const user = await fetchUser(username);\n    $userContainer.innerHTML = userTemplate(user);\n  } catch (error) {\n    alert(error);\n  }\n};\n\nconst searchUser = e => {\n  e.preventDefault();\n  const username = $search.value;\n  loadUser(username);\n  $search.value = '';\n};\n\nwindow.addEventListener('load', () => loadUser('salinatomass'));\n$userForm.addEventListener('submit', searchUser);"
};
var comparison = {
  htmlString: '&lt;div class=&quot;comparison&quot;&gt;\n  &lt;div class=&quot;comparison__divider&quot; id=&quot;comparisonDivider&quot;&gt;&lt;/div&gt;\n  &lt;input\n    type=&quot;range&quot;\n    min=&quot;0&quot;\n    max=&quot;100&quot;\n    value=&quot;50&quot;\n    class=&quot;comparison__slider&quot;\n    id=&quot;comparisonSlider&quot;\n  /&gt;\n&lt;/div&gt;',
  cssString: ".comparison {\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  background-image: url('https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&w=600');\n  background-repeat: no-repeat;\n  background-position: top -50px left;\n  background-size: 384px;\n}\n\n.comparison__divider {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 50%;\n  height: 100%;\n  border-right: 2px solid #ffffff;\n  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.5);\n\n  background-image: url('https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&w=600');\n  background-repeat: no-repeat;\n  background-position: top -50px left;\n  background-size: 384px;\n  filter: grayscale(90%);\n}\n\n.comparison__slider {\n  position: absolute;\n  outline: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  height: 100%;\n  width: 100%;\n  display: block;\n  background: transparent;\n  cursor: ew-resize;\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n}\n.comparison__slider::-ms-track {\n  color: transparent;\n  border-color: transparent;\n\n  -ms-appearance: none;\n}\n.comparison__slider::-moz-range-track {\n  -moz-appearance: none;\n}\n.comparison__slider::-webkit-slider-thumb {\n  width: 15px;\n  height: 15px;\n  margin-left: -3px;\n  background: #ffffff;\n  border-radius: 100%;\n  box-shadow: none;\n\n  -webkit-appearance: none;\n}\n.comparison__slider::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n}",
  jsString: "const divider = document.getElementById('comparisonDivider');\nconst slider = document.getElementById('comparisonSlider');\n\nslider.addEventListener('input', moveDivisor);\n\nfunction moveDivisor() {\n  divider.style.width = slider.value + '%';\n}"
};

/***/ }),

/***/ "./static/js/components/carousel/devFinder.js":
/*!****************************************************!*\
  !*** ./static/js/components/carousel/devFinder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



var devFinder = function devFinder() {
  var BASE_API = 'https://api.github.com';
  var $userContainer = document.getElementById('finderContainer');
  var $userForm = document.getElementById('finderForm');
  var $search = document.getElementById('finderSearch');

  var fetchUser = function fetchUser(username) {
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(resolve, reject) {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("".concat(BASE_API, "/users/").concat(username));

              case 3:
                res = _context.sent;
                if (!res.ok || res.status === 404) reject('User not found');
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                resolve(data);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  var userTemplate = function userTemplate(user) {
    return "\n          <picture class=\"finder-avatar\">\n            <img src=".concat(user.avatar_url, " loading=\"lazy\" />\n          </picture>\n          <h3>").concat(user.name, "</h3>\n          <a href=").concat(user.html_url, " target=\"_blank\">@").concat(user.login, "</a>\n          <ul class=\"finder-stats\">\n            <li class=\"finder-stats-item\">Repos <span>").concat(user.public_repos, "</span></li>\n            <li class=\"finder-stats-item\">Followers <span>").concat(user.followers, "</span></li>\n            <li class=\"finder-stats-item\">Following <span>").concat(user.following, "</span></li>\n          </ul>\n        ");
  };

  var loadUser = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(username) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetchUser(username);

            case 3:
              user = _context2.sent;
              $userContainer.innerHTML = userTemplate(user);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              alert(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function loadUser(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var searchUser = function searchUser(e) {
    e.preventDefault();
    var username = $search.value;
    loadUser(username);
    $search.value = '';
  };

  window.addEventListener('load', function () {
    return loadUser('salinatomass');
  });
  $userForm.addEventListener('submit', searchUser);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (devFinder);

/***/ }),

/***/ "./static/js/components/carousel/imageComparison.js":
/*!**********************************************************!*\
  !*** ./static/js/components/carousel/imageComparison.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var imageComparison = function imageComparison() {
  var divider = document.getElementById('comparisonDivider');
  var slider = document.getElementById('comparisonSlider');
  slider.addEventListener('input', moveDivisor);

  function moveDivisor() {
    divider.style.width = slider.value + '%';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageComparison);

/***/ }),

/***/ "./static/js/components/carousel/index.js":
/*!************************************************!*\
  !*** ./static/js/components/carousel/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _codeSnippets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codeSnippets.js */ "./static/js/components/carousel/codeSnippets.js");

var $carouselContainer = document.getElementById('carouselContainer');
var $carouselItemList = document.querySelectorAll('.carousel-item');
var $backwardButton = document.getElementById('backward');
var $forwardButton = document.getElementById('forward');
var $htmlCode = document.getElementById('htmlCode');
var $cssCode = document.getElementById('cssCode');
var $jsCode = document.getElementById('jsCode');

var carousel = function carousel() {
  var position = 0;
  var minPosition = -800;
  var maxPosition = 0;
  var movement = 400; // item size + gap

  var itemInFocus = 0; // index

  var hiddenItem = function hiddenItem($item) {
    return $item.classList.remove('active');
  };

  var showItem = function showItem($item) {
    return $item.classList.add('active');
  };

  var updateCodeTabs = function updateCodeTabs(_ref) {
    var htmlString = _ref.htmlString,
        cssString = _ref.cssString,
        jsString = _ref.jsString;
    $htmlCode.innerHTML = htmlString;
    $cssCode.innerHTML = cssString;
    $jsCode.innerHTML = jsString;
    window.hljs.highlightAll();
  };

  var setCodeHighlight = function setCodeHighlight($item) {
    var codeTabName = $item.dataset.name;

    switch (codeTabName) {
      case 'slider':
        updateCodeTabs(_codeSnippets_js__WEBPACK_IMPORTED_MODULE_0__.slider);
        break;

      case 'devFinder':
        updateCodeTabs(_codeSnippets_js__WEBPACK_IMPORTED_MODULE_0__.devFinder);
        break;

      case 'comparison':
        updateCodeTabs(_codeSnippets_js__WEBPACK_IMPORTED_MODULE_0__.comparison);
        break;
    }
  };

  var moveCarouselToLeft = function moveCarouselToLeft() {
    if (position === minPosition) return;
    position -= movement;
    $carouselContainer.style.transform = "translate(".concat(position, "px)");
    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus += 1;
    showItem($carouselItemList[itemInFocus]);
    setCodeHighlight($carouselItemList[itemInFocus]);
  };

  var moveCarouselToRight = function moveCarouselToRight() {
    if (position === maxPosition) return;
    position += movement;
    $carouselContainer.style.transform = "translate(".concat(position, "px)");
    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus -= 1;
    showItem($carouselItemList[itemInFocus]);
    setCodeHighlight($carouselItemList[itemInFocus]);
  };

  updateCodeTabs(_codeSnippets_js__WEBPACK_IMPORTED_MODULE_0__.slider);
  $forwardButton.addEventListener('click', function () {
    moveCarouselToLeft();
    console.log(position);
  });
  $backwardButton.addEventListener('click', function () {
    moveCarouselToRight();
    console.log(position);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ }),

/***/ "./static/js/components/carousel/slider.js":
/*!*************************************************!*\
  !*** ./static/js/components/carousel/slider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var slider = function slider() {
  var slider = document.querySelector('#productSlider');
  var canvas = document.querySelector('#canvasSlider');
  var ctx = canvas.getContext('2d');
  var images = [];

  var handleInputSlider = function handleInputSlider(e) {
    return imageRendering(e.target.value);
  };

  var imageRendering = function imageRendering(index) {
    return ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
  };

  var pageLoaded = function pageLoaded() {
    var _loop = function _loop(i) {
      var number = i.toString().padStart(2, '00');
      var url = "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img".concat(number, ".jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1626802470&h=320&fm=avif");
      var image = new Image();
      image.src = url;
      image.addEventListener('load', function () {
        images[i] = image;

        if (i === 1) {
          imageRendering(i);
        }
      });
    };

    for (var i = 1; i <= 36; i++) {
      _loop(i);
    }

    slider.addEventListener('input', handleInputSlider);
  };

  window.addEventListener('load', pageLoaded);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./static/js/components/certificatesComponent.js":
/*!*******************************************************!*\
  !*** ./static/js/components/certificatesComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var summaryTemplate = "\n  <summary>\n    <p>See more</p>\n    <img src=\"./assets/arrow-down.svg\" alt=\"Arrow down\" />\n  </summary>\n";

var certificateTemplate = function certificateTemplate(certificate) {
  var name = certificate.name,
      image = certificate.image;
  return "\n    <li class=\"certificates-courses-item\">\n      <img src=\"".concat(image.url, "\" alt=\"").concat(image.alt, "\" />\n      <p>").concat(name, "</p>\n    </li>\n  ");
};

var certificatesComponent = function certificatesComponent(certificates) {
  var primaryList = certificates.filter(function (item) {
    return item.id < 10;
  }).map(function (item) {
    return certificateTemplate(item);
  }).join('');
  var secondaryList = certificates.filter(function (item) {
    return item.id >= 10;
  }).map(function (item) {
    return certificateTemplate(item);
  }).join('');
  var $mainCertificates = document.createElement('ul');
  $mainCertificates.innerHTML = primaryList;
  var $secondaryCertificates = document.createElement('details');
  $secondaryCertificates.innerHTML = summaryTemplate + secondaryList;
  var $lineUp = document.createElement('div');
  $lineUp.classList.add('line', 'line-up');
  var $lineDown = document.createElement('div');
  $lineDown.classList.add('line', 'line-down');
  var $certificatesContainer = document.createElement('div');
  $certificatesContainer.classList.add('certificates-courses-wrapper');
  $certificatesContainer.append($lineUp, $mainCertificates, $secondaryCertificates, $lineDown);
  return $certificatesContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificatesComponent);

/***/ }),

/***/ "./static/js/components/projectsComponent.js":
/*!***************************************************!*\
  !*** ./static/js/components/projectsComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var projectTemplate = function projectTemplate(project) {
  var id = project.id,
      title = project.title,
      role = project.role,
      description = project.description,
      website = project.website,
      repository = project.repository;
  var primaryImage = project.images[0];
  var secondaryImage = project.images[1];
  return "\n    <article class=\"portfolio-projects-item\">\n      <div class=\"portfolio-projects-images\">\n        <img \n          class=\"main_picture\" \n          src=\"".concat(primaryImage.url, "\" \n          alt=\"").concat(primaryImage.alt, "\" \n        />\n        <img \n          class=\"secondary_picture\" \n          src=\"").concat(secondaryImage.url, "\" \n          alt=\"").concat(secondaryImage.alt, "\" \n        />\n      </div>\n      <div class=\"portfolio-projects-description\">\n        <div class=\"portfolio-projects-details\">\n          <span>0").concat(id + 1, "</span>\n          <h3>").concat(title, "</h3>\n          <div class=\"portfolio-projects-skill\">\n            <img src=\"./assets/bullet.svg\" alt=\"Bullet gray\" />\n            <h4>").concat(role, "</h4>\n          </div>\n          <p>").concat(description, "</p>\n        </div>\n        <div class=\"portfolio-projects-buttons\">\n          <a href=\"").concat(website, "\"  target=\"_blank\" class=\"btn btn-primary\">Live preview</a>\n          <a href=\"").concat(repository, "\"  target=\"_blank\" class=\"btn btn-secondary\">See code</a>\n        </div>\n      </div>\n    </article>\n  ");
};

var projectsComponent = function projectsComponent(projects) {
  var projectsList = projects.map(function (item) {
    return projectTemplate(item);
  }).join('');
  var $projectsContainer = document.createElement('div');
  $projectsContainer.classList.add('portfolio-projects');
  $projectsContainer.innerHTML = projectsList;
  return $projectsContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsComponent);

/***/ }),

/***/ "./static/js/components/skillsComponent.js":
/*!*************************************************!*\
  !*** ./static/js/components/skillsComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var skillTemplate = function skillTemplate(skill) {
  var name = skill.name;
  var image = skill.image;
  return "\n    <li class=\"card-item\">\n      <img src=\"".concat(image.url, "\" alt=\"").concat(image.alt, " logo\" />\n      <p>").concat(name, "</p>\n    </li>\n  ");
};

var skillsComponent = function skillsComponent(skills) {
  var skillsList = skills.map(function (skill) {
    return skillTemplate(skill);
  }).join('');
  var $skillsContainer = document.createElement('ul');
  $skillsContainer.classList.add('card-container');
  $skillsContainer.innerHTML = skillsList;
  return $skillsContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skillsComponent);

/***/ }),

/***/ "./static/js/utils/getData.js":
/*!************************************!*\
  !*** ./static/js/utils/getData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_API": () => (/* binding */ BASE_API),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var BASE_API = 'https://salinatomass-api.onrender.com';
var getData = function getData(path) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(resolve, reject) {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(BASE_API).concat(path));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              resolve(data);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ "./static/js/utils/openDetails.js":
/*!****************************************!*\
  !*** ./static/js/utils/openDetails.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var openDetails = function openDetails() {
  var $details = document.querySelector('details');
  var mediaQuery = window.matchMedia('(min-width: 768px)');
  if (mediaQuery.matches) $details.setAttribute('open', true);
  mediaQuery.addEventListener('change', function (e) {
    e.matches ? $details.setAttribute('open', true) : $details.removeAttribute('open');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openDetails);

/***/ }),

/***/ "./static/js/utils/render.js":
/*!***********************************!*\
  !*** ./static/js/utils/render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "queryAll": () => (/* binding */ queryAll),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
var query = function query(el) {
  return document.querySelector(el);
};
var queryAll = function queryAll(el) {
  return document.querySelectorAll(el);
};
var render = function render(node, element) {
  return element.append(node);
};

/***/ }),

/***/ "./static/js/utils/toggleMenu.js":
/*!***************************************!*\
  !*** ./static/js/utils/toggleMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var toggleMenu = function toggleMenu() {
  var $menu = document.querySelector('#menu');
  var $nav = document.querySelector('#nav');
  $menu.addEventListener('click', function () {
    $nav.classList.toggle('visible');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);

/***/ }),

/***/ "./lib/highlight/styles/atom-one-dark.min.css":
/*!****************************************************!*\
  !*** ./lib/highlight/styles/atom-one-dark.min.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static/css/main.css":
/*!*****************************!*\
  !*** ./static/css/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getData.js */ "./static/js/utils/getData.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.js */ "./static/js/utils/render.js");
/* harmony import */ var _utils_toggleMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/toggleMenu.js */ "./static/js/utils/toggleMenu.js");
/* harmony import */ var _utils_openDetails_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/openDetails.js */ "./static/js/utils/openDetails.js");
/* harmony import */ var _components_carousel_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carousel/index.js */ "./static/js/components/carousel/index.js");
/* harmony import */ var _components_skillsComponent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skillsComponent.js */ "./static/js/components/skillsComponent.js");
/* harmony import */ var _components_projectsComponent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projectsComponent.js */ "./static/js/components/projectsComponent.js");
/* harmony import */ var _components_certificatesComponent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/certificatesComponent.js */ "./static/js/components/certificatesComponent.js");
/* harmony import */ var _components_carousel_slider_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel/slider.js */ "./static/js/components/carousel/slider.js");
/* harmony import */ var _components_carousel_devFinder_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/devFinder.js */ "./static/js/components/carousel/devFinder.js");
/* harmony import */ var _components_carousel_imageComparison_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/carousel/imageComparison.js */ "./static/js/components/carousel/imageComparison.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/main.css */ "./static/css/main.css");
/* harmony import */ var _lib_highlight_styles_atom_one_dark_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/highlight/styles/atom-one-dark.min.css */ "./lib/highlight/styles/atom-one-dark.min.css");
















(function () {
  var _load = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var _yield$Promise$all, _yield$Promise$all2, skills, projects, certificates, frontendSkillsNode, $frontendSkillsContainer, complementarySkillsNode, $complementarySkillsContainer, projectsNode, $projectsContainer, certificatesNode, $certificatesContainer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([(0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_3__.getData)('/api/skills'), (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_3__.getData)('/api/projects'), (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_3__.getData)('/api/certificates')]);

          case 2:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 3);
            skills = _yield$Promise$all2[0];
            projects = _yield$Promise$all2[1];
            certificates = _yield$Promise$all2[2];
            // FRONTEND_SKILLS_____
            frontendSkillsNode = (0,_components_skillsComponent_js__WEBPACK_IMPORTED_MODULE_8__["default"])(skills.data.filter(function (item) {
              return item.category === 'frontend';
            }));
            $frontendSkillsContainer = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.queryAll)('.card')[0];
            _context.next = 11;
            return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(frontendSkillsNode, $frontendSkillsContainer);

          case 11:
            // COMPLEMENTARY_SKILLS_____
            complementarySkillsNode = (0,_components_skillsComponent_js__WEBPACK_IMPORTED_MODULE_8__["default"])(skills.data.filter(function (item) {
              return item.category === 'complementary';
            }));
            $complementarySkillsContainer = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.queryAll)('.card')[1];
            _context.next = 15;
            return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(complementarySkillsNode, $complementarySkillsContainer);

          case 15:
            // PROJECTS_____
            projectsNode = (0,_components_projectsComponent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(projects.data);
            $projectsContainer = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.query)('#projectsContainer');
            _context.next = 19;
            return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(projectsNode, $projectsContainer);

          case 19:
            // CERTIFICATES_____
            certificatesNode = (0,_components_certificatesComponent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(certificates.data.courses);
            $certificatesContainer = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.query)('#certificatesContainer');
            _context.next = 23;
            return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(certificatesNode, $certificatesContainer);

          case 23:
            (0,_utils_toggleMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
            (0,_utils_openDetails_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
            (0,_components_carousel_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function load() {
    return _load.apply(this, arguments);
  }

  return load;
})()();
(0,_components_carousel_slider_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
(0,_components_carousel_devFinder_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
(0,_components_carousel_imageComparison_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map