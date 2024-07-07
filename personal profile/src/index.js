"use strict";
const header = document.querySelector(".header");
const relatedEl = document.querySelector(".related-box");
const skillsEl = document.querySelector(".skills-box");
const fieldEl = document.querySelector(".field-box");
const fieldBtn = document.querySelector(".field-button");
const skillsBtn = document.querySelector(".skills-button");
const relatedBtn = document.querySelector(".related-button");
const openItem = document.querySelector(".open-item");
const imageEl = document.querySelector(".image-answer"); //hidden
const imageElBox = document.querySelector(".image-box-answer"); //hidden
const textElAns = document.querySelector(".text-answers"); //hidden
const tabBox = document.querySelector(".tab-box"); // each box containing tab info
const tabs = document.querySelector(".tabs"); // container containing all tabs
const tabbedButtons = document.querySelector(".tabbed"); // container containing all the tabbed buttons
const residencyContainer = document.querySelector(".residency");
const questionsContainer = document.querySelector(".questions-container");
const allParents = document.querySelectorAll(".questions-accordion");

/* *****************************/
/*Code */
/* *****************************/

// Tabs implimentation
tabbedButtons.addEventListener("click", function (e) {
  const dataSet = e.target.getAttribute("data");
  if (!dataSet) return;
  tabs.style.transform = `translateX(-${dataSet}%)`;
  const parent = e.target.closest(".tabbed");
  const allBtns = parent.querySelectorAll("button");
  allBtns.forEach((btn) => {
    if (e.target === btn) {
      e.target.classList.add("translate");
    } else {
      btn.classList.remove("translate");
    }
  });
});

// let rotate=0
// setInterval(() => {
//   rotate +=1
//   residencyContainer.style.background = `linear-gradient(${rotate}deg ,rgba(25, 36, 54, 1), rgba(25, 36, 54, 0.3))`;
//   if(rotate ===360) rotate =1
// }, 20);

/********************** */
//Curiosity
/********************** */

function toggleClass(el1, el2, el3) {
  el1.forEach((el) => el.classList.toggle("hidden"));
  el2.classList.toggle("hidden");
  el3.classList.toggle("hidden");
}
function hideElem(el1, el2, el3) {
  el1.forEach((el) => el.classList.add("hidden"));
  el2.classList.add("hidden");
  el3.classList.add("hidden");
}

function selectAndToggle(target, value) {
  const parentElem = target.closest(".questions-accordion");
  const imageEl = parentElem.querySelectorAll(".image-answer");
  const imageElBox = parentElem.querySelector(".image-box-answer");
  const textElAns = parentElem.querySelector(".text-answers");
  if (value) return toggleClass(imageEl, imageElBox, textElAns);
  if (!value) return hideElem(imageEl, imageElBox, textElAns);
}

function selectElemsAndRemove(parent) {
  const imageEl = parent.querySelectorAll(".image-answer");
  const imageElBox = parent.querySelector(".image-box-answer");
  const textElAns = parent.querySelector(".text-answers");
  hideElem(imageEl, imageElBox, textElAns);
}
// function selectAndRemove(target) {
//   const parentElem = target.closest(".questions-accordion");
//   const imageEl = parentElem.querySelectorAll(".image-answer");
//   const imageElBox = parentElem.querySelector(".image-box-answer");
//   const textElAns = parentElem.querySelector(".text-answers");
//   toggleClass(imageEl, imageElBox, textElAns);
// }

questionsContainer.addEventListener("click", function (e) {
  const currentBtn = e.target.closest("button");
  if (!currentBtn) return;
  // selectAndToggle(e.target);
  // single-selections

  // Select the parent element

  // Select the necessary elements (happens inside the loop)
  const parentElem = e.target.closest(".questions-accordion");
  const imageEl = Array.from(parentElem.querySelectorAll(".image-answer"));
  const imageElBox = parentElem.querySelector(".image-box-answer");
  const textElAns = parentElem.querySelector(".text-answers");

  // Select all parents

  // compare all parents to the current parent and work inside the loop

  allParents.forEach((pr) => {
    if (pr === parentElem) {
      selectAndToggle(e.target, true);
    } else {
      // console.log(selectElemsAndRemove(pr));  // this line of code will impliment only one open item at a time
    }
  });
});

// console.log(allImages);

// console.log(allItextElAns);
// console.log(allImageElBoxes);

// const num1=[1, 2, 3, 4, 5]
// const num2=[1, 2]

// const filtered= num2.filter((num, index)=> {
//  return num[index]=== num1.forEach(num=> num)
// } )
// console.log(filtered);


// Date implimentation

const today= new Date();
const  month= `${today.getMonth()+1}`.padStart(2, 0)
const  date= `${today.getDate()}`.padStart(2, '0')
const  year= today.getFullYear();


//  Render date
const currentDate = `${date} /${month} /${year}`;
const currentDateF2 = `  ${date}- ${month}- ${year}`;

const universityDate = document.querySelector(".university-date");
const webDevDate = document.querySelector(".web-dev-date");
universityDate.textContent=currentDate;
webDevDate.textContent = currentDateF2;