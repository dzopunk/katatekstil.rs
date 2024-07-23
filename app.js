///mobile nav menu///
const navMenu = document.querySelector(".header__nav_menu-mobile");
const navMenuIcons = document.querySelectorAll(".nav__menu_icon");
const navMenuTabs = document.querySelector(".header__mobile");

navMenu.addEventListener("click", function (e) {
  navMenuTabs.classList.toggle("display__none");
  navMenuIcons.forEach(function (btn) {
    btn.classList.toggle("display__none");
  });
});

const curtainsMobile = document.querySelector(".header__mobile_list-item-curtains");
const curtainsMobileMenu = document.querySelector(".header__mobile_list-item--curtains");

// curtainsMobile.addEventListener("click", function (e) {
//   // e.preventDefault();
//   e.stopPropagation();
//   const icons = document.querySelectorAll(".caret");
//   icons.forEach(function (btn) {
//     btn.classList.toggle("display__none");
//   });
//   curtainsMobileMenu.classList.toggle("display__none");
// });

////change color of social icons on hover///
const changeColor = function (btn) {
  const ogsrc = btn.src;
  btn.src = btn.dataset.change;
  btn.addEventListener("mouseout", function () {
    btn.src = ogsrc;
  });
};

///lazy loading images////
const observer = lozad(); 
observer.observe();

/////youtube lazy loading////

function labnolIframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.querySelectorAll(".youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute("data-id", videoId);
    var thumbNode = document.createElement("img");
    thumbNode.setAttribute("alt", "video katatekstil");
    thumbNode.src = "https://i3.ytimg.com/vi/ID/maxresdefault.jpg".replace("ID", videoId);
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);

//////////////

const smallMenuItem = document.querySelectorAll(".curtains__menu_list-item");
const smallMenuList = document.querySelector(".curtains__menu_list");
const smallMenuLink = document.querySelectorAll(".curtains__menu_list-link");

smallMenuList.addEventListener("click", function (e) {
  const targeted = e.target.classList;
  if (targeted.contains("curtains__menu_list-item")) {
    smallMenuItem.forEach((link) => {
      link.classList.remove("active__selection");
    });
    targeted.add("active__selection");
    document.querySelectorAll(".gg-box").forEach(function (field) {
      field.classList.add("display__none");
    });
    const clickedItem = document.querySelector(`[data-set="${e.target.id}"]`);
    clickedItem.classList.remove("display__none");
  }
});
