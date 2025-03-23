import { success, error, defaultModules } from "../../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";
defaultModules.set(PNotifyMobile, {});

const keys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const keyElement = document.querySelector(".key");
const countElement = document.querySelector(".count-correct");
const resetBtn = document.querySelector(".reset-btn");

let count = 0;
let keyIndex = getRandomKeyIndex();

keyElement.textContent = keys[keyIndex];

document.addEventListener("keydown", (event) => {
    if (event.key === keys[keyIndex]) {
        keyIndex = getRandomKeyIndex();
        keyElement.textContent = keys[keyIndex];
        const successMessage = success({ text: "Правильно!", delay: 300 });
        updateCount(++count);
    } else {
      const errorMessage = error({text: "Натиснуто неправильну клавішу!", delay: 300});
    }
});

resetBtn.addEventListener("click", () => {
    keyIndex = getRandomKeyIndex();
    keyElement.textContent = keys[keyIndex];
    count = 0;
    updateCount(count);
});

function getRandomKeyIndex() {
    return Math.floor(Math.random() * 10);
}

function updateCount(value) {
    countElement.textContent = `Сума правильних натискань: ${value}`;
}