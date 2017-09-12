/*SUBMENU - ZADANIE 1*/
var firstElementOfNav = document.querySelector(".main-nav ul").firstElementChild;
console.log(firstElementOfNav);
var submenu = document.querySelector(".main-nav-submenu");
console.log(submenu);

//pokazanie sie submenu
firstElementOfNav.addEventListener("mouseenter", function (){
        submenu.style.opacity = 1;
        submenu.style.visibility = "visible";
});

////schowanie sie submenu
submenu.addEventListener("mouseleave", function (){
        submenu.style.opacity = 0;
        submenu.style.visibility = "hidden";
});



/*BOXES - ZADANIE 2*/
var boxWithPictures = document.querySelector(".pictures");console.log(boxWithPictures);
var picturesContent = boxWithPictures.querySelectorAll(".picture-cnt");console.log(picturesContent);
var pictures = boxWithPictures.querySelectorAll("img");console.log(pictures);
var descriptions = boxWithPictures.querySelectorAll(".picture-cnt-description");console.log(descriptions);

//pierwszy obrazek
pictures[0].addEventListener("mouseenter", function (){
        picturesContent[0].removeChild(descriptions[0]);
});
pictures[0].addEventListener("mouseleave", function (){
        picturesContent[0].appendChild(descriptions[0]);
});

//drugi obrazek
pictures[1].addEventListener("mouseenter", function (){
        picturesContent[1].removeChild(descriptions[1]);
});
pictures[1].addEventListener("mouseleave", function (){
        picturesContent[1].appendChild(descriptions[1]);
});


/*SLIDER - ZADANIE 3*/
var nextButton = document.querySelector(".right");
console.log(nextButton);
var prevButton = document.querySelector(".left");
console.log(prevButton);
var sliderElements = document.querySelector(".slider").children;
console.log(sliderElements);


var counter = 0;
sliderElements[0].classList.add("active"); //nadanie pierwszemu elem klasy active

//przewijanie do przodu
nextButton.addEventListener("click", function (){
        counter++;
        if (counter > sliderElements.length - 1) {
            counter = 0;
            sliderElements[0].classList.add("active");
            sliderElements[sliderElements.length -1].classList.remove("active");
        } else {
            sliderElements[counter].classList.add("active");
            sliderElements[counter - 1].classList.remove("active");
        }
});

//przewijanie do tylu
prevButton.addEventListener("click", function (){
        counter--;
        if (counter < 0) {
            counter = sliderElements.length - 1;
            sliderElements[counter].classList.add("active");
            sliderElements[0].classList.remove("active");
        } else {
            sliderElements[counter + 1].classList.remove("active");
            sliderElements[counter].classList.add("active");
        }
});
