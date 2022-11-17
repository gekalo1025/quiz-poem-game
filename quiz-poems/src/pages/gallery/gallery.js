import "../../stylesheets/main.scss";
import poetryData from "../../js/poetryCategories";
import { poetryBiography } from "../../js/paetryBiography";
import imgPlay from "../../assets/icons/play.svg";
import imgPause from "../../assets/icons/pause.svg";
import imgVolume from "../../assets/icons/sound-on.svg";
import imgMute from "../../assets/icons/mute.svg";
import { CurrentQuestionPlayer } from "../../js/player";
import getRandomIntInclusive from "../../js/getRandomIntInclusive";
let copyPoetryData = poetryData.slice();
function addCardVerse() {
  const galleryPoetryCards = document.querySelector(".gallery__poetry-cards");
  while (copyPoetryData.length > 0) {
    let randomNumber = getRandomIntInclusive(0, copyPoetryData.length - 1);

    const newCard = document.createElement("div");
    newCard.classList.add("verse-card");
    const verseCardImg = document.createElement("div");
    const img = document.createElement("img");
    verseCardImg.classList.add("verse-card__img");
    verseCardImg.appendChild(img);
    newCard.appendChild(verseCardImg);

    const verseCardInfo = document.createElement("div");
    verseCardInfo.classList.add("verse-card__info");
    const verseCardTitle = document.createElement("h2");
    verseCardTitle.classList.add("verse-card__title");
    verseCardInfo.appendChild(verseCardTitle);

    const verseCardPlayer = document.createElement("div");
    verseCardPlayer.classList.add("verse-card__player", "player");

    const audio = document.createElement("audio");
    audio.id = "verse-card__audio";
    audio.setAttribute("controls", "true");
    audio.setAttribute("preload", "metadata");

    verseCardPlayer.appendChild(audio);
    verseCardInfo.appendChild(verseCardPlayer);

    newCard.appendChild(verseCardInfo);

    img.src = poetryBiography.filter(
      (item) =>
        item[localStorage.getItem("language")].nameAuthor ===
        copyPoetryData[randomNumber][localStorage.getItem("language")]
          .nameAuthor
    )[0].photo;
    verseCardTitle.innerText =
      copyPoetryData[randomNumber][localStorage.getItem("language")]
        .nameAuthor +
      "\n" +
      `"${
        copyPoetryData[randomNumber][localStorage.getItem("language")].title
      }"`;
    audio.src = copyPoetryData[randomNumber].srcAudio;

    galleryPoetryCards.append(newCard);

    let delite = copyPoetryData.splice(randomNumber, 1);
  }
}
addCardVerse();
