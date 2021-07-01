"use strict";

// When you click the hamburger show the menu
document.querySelector("#hamburger").addEventListener("click", function() {
    // document.querySelector(".menu").style.display = "block";
    document.querySelector(".menu").classList.add("animate");
});

// click letters menu
document.querySelector(".lettersMenuItem").addEventListener("click", function(e){
    // console.log("You clicked the letters")
    e.preventDefault();
    
    // show letters
    document.querySelector("#letters").style.display = "block";
    
    // hide numbers
    document.querySelector("#numbers").style.display = "none";
    
    //hide the menu
    // document.querySelector(".menu").style.display = "none";
    document.querySelector(".menu").classList.remove("animate");
    
});

//click numbers menu
document.querySelector(".numbersMenuItem").addEventListener("click", function(e){
    // console.log("You clicked the numbers")
    e.preventDefault();
    
    // show numbers
    document.querySelector("#numbers").style.display = "block";
    
    // hide letters
    document.querySelector("#letters").style.display = "none";
    
    //hide the menu
    // document.querySelector(".menu").style.display = "none";
    document.querySelector(".menu").classList.remove("animate");
});



    // EVENT BUBBLING
    // document.querySelector("p"),addEventListener("click", function() {
    //     console.log("you click a paragraph")
    // })
    // document.querySelector("section"),addEventListener("click", function(e) {
    //     console.log("you click a section")
    //     e.stopPropagation(); //stop bubbling
    // })
    // document.querySelector("main"),addEventListener("click", function() {
    //     console.log("you click a main")
    // })
    // document.querySelector("div"),addEventListener("click", function() {
    //     console.log("you click a div")
    // })

