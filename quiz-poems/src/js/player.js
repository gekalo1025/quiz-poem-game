import imgPause from "../assets/icons/pause.svg";
import imgPlay from "../assets/icons/play.svg";

class Player {
  constructor(audio, btnPlay, currentTime, maxTime, timebarLine) {
    this.currentDuration = 0;
    this.isPlay = false;
    this.audio = audio;
    this.btnPlay = btnPlay;
    this.currentTime = currentTime;
    this.maxTime = maxTime;
    this.timebarLine = timebarLine;
  }

  playAudio() {
    if (!this.isPlay) {
      this.audio.currentTime = 0;
      this.audio.play();
      this.isPlay = true;
      this.currentTimeAudio();
    } else {
      this.audio.pause();
      this.isPlay = false;
    }
  }
  toggleBtn() {
    if (this.isPlay) {
      this.btnPlay.classList.remove("pause");
      this.btnPlay.childNodes[1].src = imgPause;
    } else {
      this.btnPlay.classList.add("pause");
      this.btnPlay.childNodes[1].src = imgPlay;
    }
  }
  currentTimeAudio() {
    this.timebarLine.min = 0;
    this.timebarLine.value = this.audio.currentTime;
    this.currentDuration = Math.ceil(this.audio.currentTime);
    this.timebarLine.max = Math.ceil(this.audio.duration);
    this.showCurrentAudioDuration();
    setTimeout(this.currentTimeAudio.bind(this), 1000);
  }
  audioRewind() {
    this.audio.currentTime = this.timebarLine.value;
  }
  showCurrentAudioDuration() {
    if (this.audio.duration) {
      if (this.currentDuration < 60) {
        this.currentTime.textContent = `0:${String(
          this.currentDuration
        ).padStart(2, "0")}`;
      }
      if (this.currentDuration >= 60) {
        this.currentTime.textContent = `${Math.trunc(
          this.currentDuration / 60
        )}:${String(Math.round(this.currentDuration) % 60).padStart(2, "0")}`;
      }
    }
  }
  showAudioDuration() {
    if (this.audio.duration) {
      if (this.audio.duration < 60) {
        this.maxTime.textContent = `0:${Math.round(this.audio.duration)}`;
      }
      if (this.audio.duration >= 60) {
        this.maxTime.textContent = `${Math.trunc(this.audio.duration / 60)}:${
          Math.round(this.audio.duration) % 60
        }`;
      }
    }
  }
}

export class CurrentQuestionPlayer extends Player {
  constructor(audio, btnPlay, currentTime, maxTime, timebarLine) {
    super(audio, btnPlay, currentTime, maxTime, timebarLine);
  }
}

export class AuthorDescriptionPlayer extends Player {
  constructor(audio, btnPlay, currentTime, maxTime, timebarLine) {
    super(audio, btnPlay, currentTime, maxTime, timebarLine);
  }
}
