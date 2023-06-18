import poetryData from "../data/poetryCategories";
import { poetryBiography } from "../data/paetryBiography";
import getRandomIntInclusive from "./getRandomIntInclusive";

import { galleryPoetryCards } from "../js/const";
export default function addCardVerse() {
  let copyPoetryData = poetryData.slice();

  while (copyPoetryData.length > 0) {
    let randomNumber = getRandomIntInclusive(0, copyPoetryData.length - 1);

    const createCardVerse = () => {
      const newCard = document.createElement("div");
      const verseCardImg = document.createElement("div");
      const img = document.createElement("img");
      const verseCardInfo = document.createElement("div");
      const verseCardTitle = document.createElement("h2");
      const verseCardPlayer = document.createElement("div");
      const audio = document.createElement("audio");

      newCard.classList.add("verse-card");
      verseCardImg.classList.add("verse-card__img");
      verseCardInfo.classList.add("verse-card__info");
      verseCardTitle.classList.add("verse-card__title");
      verseCardPlayer.classList.add("verse-card__player", "player");

      audio.id = "verse-card__audio";
      audio.setAttribute("controls", "true");
      audio.setAttribute("preload", "metadata");

      verseCardImg.appendChild(img);
      newCard.appendChild(verseCardImg);
      verseCardInfo.appendChild(verseCardTitle);
      verseCardPlayer.appendChild(audio);
      verseCardInfo.appendChild(verseCardPlayer);
      newCard.appendChild(verseCardInfo);

      img.src = poetryBiography.filter((item) => item[localStorage.getItem("language")].nameAuthor === copyPoetryData[randomNumber][localStorage.getItem("language")].nameAuthor)[0].photo;

      verseCardTitle.innerText = copyPoetryData[randomNumber][localStorage.getItem("language")].nameAuthor + "\n" + `"${copyPoetryData[randomNumber][localStorage.getItem("language")].title}"`;

      audio.src = copyPoetryData[randomNumber].srcAudio;

      return newCard;
    };

    const newCard = createCardVerse();
    galleryPoetryCards.append(newCard);

    copyPoetryData.splice(randomNumber, 1);
  }
}
