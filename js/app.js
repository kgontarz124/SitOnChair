/*SUBMENU - ZADANIE 1*/
var firstElementOfNav = document.querySelector(".main-nav ul").firstElementChild;
var submenu = document.querySelector(".main-nav-submenu");

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
var boxWithPictures = document.querySelector(".pictures");
var picturesContent = boxWithPictures.querySelectorAll(".picture-cnt");
var pictures = boxWithPictures.querySelectorAll("img");
var descriptions = boxWithPictures.querySelectorAll(".picture-cnt-description");

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
var prevButton = document.querySelector(".left");
var sliderElements = document.querySelector(".slider").children;


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



/*DODATKOWE*/
var arrows = document.querySelectorAll(".form .drop_down_list .list_arrow");
var panels = document.querySelectorAll(".form .drop_down_list .list_panel");
var counter = 0;

//pokazanie się i chowanie panelow po nacisnieciu strzalki
for (var i=0; i<arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        counter++;
        if (counter === 1) {
            this.nextElementSibling.style.display = "inline-block";
        } else {
            this.nextElementSibling.style.display = "none";
            counter = 0;
        }
    });
}



/*POLA WYBORU I PODSUMOWANIA*/
//typ fotela
var allLabels = document.querySelectorAll(".list_label");


var sum = document.querySelector(".sum_label");
var costs = document.querySelector(".panel_right").children;
var totalSum = 0;
var sumType = 0;
var sumColor = 0;
var sumTransport = 0;
var sumPattern = 0;

var  typeOfChairLabel = allLabels[0];
var choiseTypeOfChair = document.querySelector(".panel_left h4");
var priceTypeOfChair = document.querySelector(".panel_right h4");
var typeOfChair = panels[0].children;


for (var i=0; i<typeOfChair.length; i++) {
    typeOfChair[i].addEventListener("click", function () {
            typeOfChairLabel.innerText = this.innerText;
            choiseTypeOfChair.innerText = this.innerText;
            priceTypeOfChair.innerText = this.dataset.price;
            sumType = Number(priceTypeOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = "SUMA : " + totalSum;
    });
}


//kolor fotela
var  colorOfChairLabel = allLabels[1];
var choiseColorOfChair = document.querySelector(".panel_left .color");
var priceColorOfChair = document.querySelector(".panel_right .color");
var colorOfChair = panels[1].children;

for (var i=0; i<typeOfChair.length; i++) {
    colorOfChair[i].addEventListener("click", function () {
            colorOfChairLabel.innerText = this.innerText;
            choiseColorOfChair.innerText = this.innerText;
            priceColorOfChair.innerText = "0";
            sumColor = Number(priceColorOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = "SUMA : " + totalSum;
    });
}

//rodzaj materialu
var  patternOfChairLabel = allLabels[2];
var choisePatternOfChair = document.querySelector(".panel_left .pattern");
var pricePatternOfChair = document.querySelector(".panel_right .pattern");
var patternOfChair = panels[2].children;

for (var i=0; i<patternOfChair.length; i++) {
    patternOfChair[i].addEventListener("click", function () {
            patternOfChairLabel.innerText = this.innerText;
            choisePatternOfChair.innerText = this.innerText;
            pricePatternOfChair.innerText = this.dataset.price;
            sumPattern = Number(pricePatternOfChair.innerText);
            totalSum = sumType + sumColor + sumPattern + sumTransport;
            sum.innerText = "SUMA : " + totalSum;
    });
}

//wybor transportu
var checkboxTransport = document.querySelector("#transport");
var choiseTransport = document.querySelector(".panel_left .transport");
var priceTransport = document.querySelector(".panel_right .transport");

checkboxTransport.addEventListener("click", function () {
    if (this.checked) {
        choiseTransport.innerText = "Transport";
        priceTransport.innerText = this.dataset.price;
        sumTransport = Number(priceTransport.innerText);
        totalSum = sumType + sumColor + sumPattern + sumTransport;
        sum.innerText = "SUMA : " + totalSum;
    } else {
        sumTransport = 0;
        choiseTransport.innerText = "";
        priceTransport.innerText = "";
        totalSum = sumType + sumColor + sumPattern;
        sum.innerText = "SUMA : " + totalSum;
    }
});
