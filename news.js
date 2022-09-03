// GETTING CURRENT DATE
var dater = document.getElementById("header-date");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
newdate = year + " . " + month + " . " + day;
dater.innerText = newdate
// GETTING DATE


// HUMBERGER
var openBtn = document.getElementsByClassName("humberger")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];

openBtn.addEventListener("click", function(){
  document.getElementById("sideBar").style.width = "300px";
})

closeBtn.addEventListener("click", function(){
  document.getElementById("sideBar").style.width = "0px"
})
// HUMBBERGER

// FOOTER YEAR
var footerYear = document.getElementsByClassName("footer-year")[0];
footerYear.innerHTML = year


// SCROLL TO TOP
var toTop = document.querySelector(".to-top")
toTop.addEventListener("click", function(){
  $('html,body').scrollTop(0);
})


// ACTIVE NAV ITEM
const activeNav = window.location.pathname;
const navItems = document.querySelectorAll(".nav-list a").forEach(link =>{
  if(link.href.includes(`${activeNav}`)){
    link.classList.add("activeNav");
  }
})
// APIS
// WHATSAPP
// https://api.whatsapp.com/send?text=[post-title] [post-url]
// FACEBOOK
// https://www.facebook.com/sharer.php?u=[post-url]
// TWITTER
// https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
// SHARE
// https://bufferapp.com/add?text=[post-title]&url=[post-url]


// SHARE BUTTONS
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const share = document.querySelector('.share');
const whatsapp = document.querySelector(".whatsapp");

const pageUrl = encodeURI(document.location.href);
const message = document.querySelector(".share-text").innerText;
const image = document.querySelector(".share-img").src;

const facebookApi = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
const twitterApi = ` https://twitter.com/share?url=${pageUrl}&text=${message}&via=WeAreUganda&hashtags=WEAREUGANDANEWS`
const whatsappApi = `https://api.whatsapp.com/send?text=${message} ${pageUrl}`;

facebook.addEventListener("click", function(){
  window.open(URL = facebookApi, target = "blank")
})

twitter.addEventListener("click", function(){
  window.open(URL = twitterApi, target = "blank")
})


whatsapp.addEventListener("click", function(){
  window.open(URL = whatsappApi, target = "blank")
})


share.addEventListener('click', function() {
  if(navigator.share) {
    navigator.share({
      title: 'We Are  Uganda News',
      text: `${message}`,
      url: `${pageUrl}`
    });
  }
});










