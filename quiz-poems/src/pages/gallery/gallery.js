import "../../stylesheets/main.scss";
import poetryData from "../../js/poetryCategories";
import { poetryBiography } from "../../js/paetryBiography";
import imgPlay from "../../assets/icons/play.svg";
import imgPause from "../../assets/icons/pause.svg";
import imgVolume from "../../assets/icons/sound-on.svg";
import imgMute from "../../assets/icons/mute.svg";

function addCardVerse() {
  const galleryPoetryCards = document.querySelector(".gallery__poetry-cards");

  for (let i = 0; i < poetryData.length; i++) {
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

    verseCardPlayer.appendChild(audio);

    verseCardPlayer.innerHTML += `
    <div class="player__controls">
      <div id="timebar" class="player__timebar timebar">
        <div
          id="player-icon"
          class="verse-card__play player__play player-icon"
        >
          <img src=${imgPlay} alt="play" />
        </div>
        <input
          id="timebar-line"
          class="timebar__line"
          type="range"
          value="0"
          min="0"
          max=""
          step="1"
        />
      </div>
      <div class="timebar__info">
        <div class="timebar__info-time">
          <div
            id="timebar-current-time"
            class="timebar-current-time"
          >
            0:00
          </div>
          <span>/</span>
          <div id="timebar-max-time" class="timebar-max-time">
            0:00
          </div>
        </div>
        <div class="player__volume-slider volume">
          <img
            class="volume__img"
            src=${imgVolume}
            alt="volume"
          />
          <input
            class="volume__input"
            min="0"
            max="1"
            value="1"
            step="0.1"
            type="range"
          />
        </div>
      </div>
    </div>`;
    verseCardInfo.appendChild(verseCardPlayer);

    newCard.appendChild(verseCardInfo);

    img.src = poetryBiography.filter(
      (item) => item.nameAuthor === poetryData[i].nameAuthor
    )[0].photo;
    verseCardTitle.innerText =
      poetryData[i].nameAuthor + "\n" + `"${poetryData[i].title}"`;
    audio.src = poetryData[i].srcAudio;
    galleryPoetryCards.append(newCard);
  }
}
addCardVerse();

document.addEventListener("click", (element) => {
  if (element.target.closest("div").classList.contains("player-icon")) {
    console.log("yes");
  }
});
