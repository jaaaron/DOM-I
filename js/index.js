const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\n Is \nAwesome\n",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Nav Element
let NavIndex = document.getElementsByTagName('a');
const navArr = Array.from(NavIndex)
NavIndex[0].innerText = siteContent.nav["nav-item-1"]
NavIndex[1].innerText = siteContent.nav["nav-item-2"]
NavIndex[2].innerText = siteContent.nav["nav-item-3"]
NavIndex[3].innerText = siteContent.nav["nav-item-4"]
NavIndex[4].innerText = siteContent.nav["nav-item-5"]
NavIndex[5].innerText = siteContent.nav["nav-item-6"]
// cta section
let h1section = document.querySelector('.cta-text h1')
let subheadline = document.createElement('h1')
subheadline.innerHTML = "DOM<br>Is <br>Awesome"
h1section.appendChild(subheadline)
// cta button
let buttonLoc = document.querySelector('.cta-text button')
buttonLoc.innerHTML = siteContent.cta["button"]
// cta image
let ctaimg = document.getElementById('cta-img')
ctaimg.setAttribute('src',siteContent.cta["img-src"])
/* main-content section */
// main-content h4
let mch4 = document.querySelector('.text-content h4')
let mch4EL = document.createElement('h4')
mch4EL.innerHTML = siteContent["main-content"]["features-h4"]
mch4.appendChild(mch4EL)
// main-content h4 p
let mch4p = document.querySelector('.text-content p')
let mch4ELp = document.createElement('p')
mch4ELp.innerHTML = siteContent["main-content"]["features-content"]
mch4p.appendChild(mch4ELp)
// main-content h4 right section
let h4Arr = document.querySelectorAll('.text-content h4')
const H4Arr = Array.from(h4Arr)
let m1ch4 = H4Arr[2]
let m1ch4EL = document.createElement('h4')
m1ch4EL.innerHTML = siteContent["main-content"]["about-h4"]
m1ch4.appendChild(m1ch4EL)
// main-content h4 p right section
let pArr = document.querySelectorAll('p')
const P4Arr = Array.from(pArr)

let m1ch4p = P4Arr[2]
let m1ch4ELp = document.createElement('p')
m1ch4ELp.innerHTML = siteContent["main-content"]["about-content"]
m1ch4p.appendChild(m1ch4ELp)

// center image
let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])

// bottom left text
let bttmLeft = H4Arr[3]
let bttmLeftT = document.createElement('h4')
bttmLeftT.innerHTML = siteContent["main-content"]["services-h4"]
bttmLeft.appendChild(bttmLeftT)

// bottom middle text
let bttmMLeft = H4Arr[4]
let bttmMLeftT = document.createElement('h4')
bttmMLeftT.innerHTML = siteContent["main-content"]["product-h4"]
bttmMLeft.appendChild(bttmMLeftT)

// bottom middle right
let bttmRight = H4Arr[5]
let bttmMLeftR = document.createElement('h4')
bttmMLeftR.innerHTML = siteContent["main-content"]["vision-h4"]
bttmRight.appendChild(bttmMLeftR)

// bottom p left
let bttmPleft = P4Arr[3]
let bttmPleftTxt = document.createElement('p')
bttmPleftTxt.innerHTML = siteContent["main-content"]["services-content"]
bttmPleft.appendChild(bttmPleftTxt)

// bottom p middle
let bttmPmiddle = P4Arr[4]
let bttmPmiddleTxt = document.createElement('p')
bttmPmiddleTxt.innerHTML = siteContent["main-content"]["product-content"]
bttmPmiddle.appendChild(bttmPmiddleTxt)

// bottom p right
let bttmPright = P4Arr[5]
let bttmPrightTxt = document.createElement('p')
bttmPrightTxt.innerHTML = siteContent["main-content"]["vision-content"]
bttmPright.appendChild(bttmPrightTxt)

/* contact section */
// h4
let conSech4 = document.querySelector('.contact h4')
let conSech4tex = document.createElement('h4')
conSech4tex.innerHTML = siteContent['contact']['contact-h4']
conSech4.appendChild(conSech4tex)
// address
let conAdd = document.querySelector('.contact p')
let conAddp = document.createElement('p')
conAddp.innerHTML = "123 Way 456 Street<br>Somewhere, USA"
conAdd.appendChild(conAddp)

P4Arr[7].innerHTML = siteContent['contact']['phone']
P4Arr[8].innerHTML = siteContent['contact']['email']

// footer
document.querySelector('footer p').innerHTML = siteContent['footer']['copyright']

// turning nav to green
NavIndex[0].style.color = "green"
NavIndex[1].style.color = "green"
NavIndex[2].style.color = "green"
NavIndex[3].style.color = "green"
NavIndex[4].style.color = "green"
NavIndex[5].style.color = "green"

// Utilize `.appendChild()` and `.prepend()` to add 
// two new items to the navigation system. You can call 
// them whatever you want.
const headerEl = document.querySelector('nav')
const otherHeadline = document.createElement('a')
otherHeadline.textContent = "Link1"
otherHeadline.href = "#"
headerEl.appendChild(otherHeadline)

const otherHeadline1 = document.createElement('a')
otherHeadline1.textContent = "Link2"
otherHeadline1.href = "#"
headerEl.prepend(otherHeadline1)

// stretch goal
const buttonClick = document.createElement('button')
buttonClick.textContent = "Lets Go!"

document.querySelector('button').addEventListener("click", bttnClicked)
function bttnClicked() {
  document.querySelector('button').prepend(buttonClick)
}