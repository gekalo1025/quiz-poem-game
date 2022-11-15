import imgPause from "../assets/icons/pause.svg";
import imgPlay from "../assets/icons/play.svg";
import imgVolume from "../assets/icons/sound-on.svg";
import imgMute from "../assets/icons/mute.svg";

class Player {
  constructor(
    audio,
    btnPlay,
    currentTime,
    maxTime,
    timebarLine,
    volumeSlider,
    muteButton
  ) {
    this.currentDuration = 0;
    this.isPlay = false;
    this.audio = audio;
    this.btnPlay = btnPlay;
    this.currentTime = currentTime;
    this.maxTime = maxTime;
    this.timebarLine = timebarLine;
    this.volumeSlider = volumeSlider;
    this.muteButton = muteButton;
  }

  playAudio() {
    if (!this.isPlay) {
      if (this.currentDuration > 0) {
        this.audio.currentTime = this.currentDuration;
        this.audio.play();
      } else {
        this.audio.play();
      }
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
      this.btnPlay.src = imgPause;
    } else {
      this.btnPlay.classList.add("pause");
      this.btnPlay.src = imgPlay;
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
  showCurrentAudioDuration(reset = false) {
    if (this.audio.duration) {
      if (reset) {
        this.currentTime.textContent = `0:00`;
        return;
      }
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
  showAudioDuration(reset = false) {
    if (this.audio.duration) {
      if (reset) {
        this.maxTime.textContent = `0:00`;
        return;
      }
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
  setVolume() {
    this.volumeSlider.min = 0;
    this.volumeSlider.max = 1;
    this.volumeSlider.step = 0.1;
    this.audio.volume = this.volumeSlider.value;
    if (this.volumeSlider.value <= 0.05) {
      this.muteButton.classList.add("mute");
      this.muteButton.src = imgMute;
    } else {
      this.muteButton.classList.remove("mute");
    }
    if (
      this.volumeSlider.value > 0.05 &&
      this.muteButton.classList.contains("mute") == false
    ) {
      this.muteButton.src = imgVolume;
    }
  }
}

export class CurrentQuestionPlayer extends Player {
  constructor(
    audio,
    btnPlay,
    currentTime,
    maxTime,
    timebarLine,
    volumeSlider,
    muteButton
  ) {
    super(
      audio,
      btnPlay,
      currentTime,
      maxTime,
      timebarLine,
      volumeSlider,
      muteButton
    );
  }
}

export class AuthorDescriptionPlayer extends Player {
  constructor(
    audio,
    btnPlay,
    currentTime,
    maxTime,
    timebarLine,
    volumeSlider,
    muteButton
  ) {
    super(
      audio,
      btnPlay,
      currentTime,
      maxTime,
      timebarLine,
      volumeSlider,
      muteButton
    );
  }
}
