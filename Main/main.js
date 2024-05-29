let WidthScreen = screen.width;

function showUserSettings() {
  document.getElementById("containerUserSettings").style.display = "flex";
}
function hideUserSettings() {
  document.getElementById("containerUserSettings").style.display = "none";
}

function hideSideBar() {
  document.getElementById("SideBarContainer").style.display = "none";
  document.getElementById("XIcon").style.display = "none";
  document.getElementById("MenuIcon").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "0%";
  document.getElementById("MainComponentsHome").style.marginLeft = "";
}

function showSideBar() {
  document.getElementById("SideBarContainer").style.display = "flex";
  document.getElementById("XIcon").style.display = "flex";
  document.getElementById("MenuIcon").style.display = "none";

  if (WidthScreen <= 430) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen <= 576) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen <= 768) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen <= 992) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen <= 1200) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen <= 1700) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else {
    document.getElementById("containerIconNavBar").style.marginLeft = "16%";
  }
}

// function VerifyWidth(container) {
//   if (container.style.display === "flex") {
//     document.getElementById("subNavbarContainer").style.width = "94rem";
//   } else {
//     document.getElementById("subNavbarContainer").style.width = "102rem";
//   }
// }

function FunDate() {
  var TextDate = document.getElementById("IconSubNavConainerText");
  const Data = new Date();

  return (TextDate.innerText = `${
    Data.getDate().toString().length === 1
      ? `0${Data.getDate()}`
      : Data.getDate()
  }/${
    Data.getMonth().toString().length === 1
      ? `0${Data.getMonth() + 1}`
      : Data.getMonth() + 1
  }/${Data.getFullYear()}`);
}
FunDate();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // let i;
  // let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {
  //   slideIndex = 1;
  // }
  // if (n < 1) {
  //   slideIndex = slides.length;
  // }
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

let BooleanTheme = false;

function changeTheme() {
  BooleanTheme = !BooleanTheme;

  if (BooleanTheme) {
    document.getElementById("SunIcon").style.display = "block";
    document.getElementById("MoonIcon").style.display = "none";

    document.getElementById("SideBarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("NavBarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("containerOptions").style.backgroundColor =
      "#535353";
    document.getElementById("subNavbarContainer").style.backgroundColor =
      "#535353";
    document.getElementById("containerUserSettings").style.backgroundColor =
      "#535353";
    document.getElementById("subNavbarContainer").style.boxShadow = "none";
    document.getElementById("areaChartContainer").style.backgroundColor =
      "white";
    document.getElementById("MainContainer").style.backgroundColor = "#767676";
    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#535353";
    });
    document.getElementById("Exit").style.backgroundColor = "#747474";
  } else {
    document.getElementById("SunIcon").style.display = "none";
    document.getElementById("MoonIcon").style.display = "block";

    document.getElementById("SideBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("NavBarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("containerOptions").style.backgroundColor =
      "#0450c2";
    document.getElementById("subNavbarContainer").style.backgroundColor =
      "#0450c2";
    document.getElementById("containerUserSettings").style.backgroundColor =
      "#0450c2";
    document.getElementById("MainContainer").style.backgroundColor = "white";

    document.querySelectorAll(".subContainerOptions").forEach((item) => {
      item.style.backgroundColor = "#0450c2";
    });
    document.getElementById("Exit").style.backgroundColor = "#0073DC";
  }
}

function navigationWeb(url) {
  var HostName = window.location.hostname;
  var Port = window.location.port;
  if (HostName === "127.0.0.1") {
    return (window.location.href = `http://127.0.0.1:${Port}/${url}`);
  } else if (HostName === "automationmange.vercel.app") {
    return (window.location.href = `http://automationmange.vercel.app/${url}`);
  }
}
