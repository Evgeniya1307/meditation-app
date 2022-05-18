// создаю функцию

const app = () => {
  const song = document.querySelector(".song"); //нужна песня она будет равна документированию запрса селектор
  const play = document.querySelector(".play"); //кпока воспроизведения документоравнна селектора запроса
  const outline = document.querySelector(".moving-outline circle"); //в круге могу получить контуп он будет равен селектору документа это будет движущийся контур
  const video = document.querySelector(".vid-container video"); // понадобится видео документ селектор видео

  // выбрать все звуки Sounds
  const sounds = document.querySelectorAll(".sound-picker button"); // документ квериселектор all всех песен

  // нужно отображение времени Time Display
  const timeDisplay = document.querySelector("time-display"); // h3

  // получить длину контура круга потому что хочу его анимировать Get the Length oof the outline
  const outlineLength = outline.getTotalLength(); //будет равна контуру получите круг который мы получили здесь тока получите общую длину это функция я еёё вызову и вернёт длину строки

  //понадобится продолжительность  песни Duration когда время истечет песня просто остановится (в html 300 600 120)
  let fakeDuration = 600;

  // хочу анимировать кркуг  получить обводку смещения чтобы как бы  с 0 начало а потом снова полноэкранным
  outline.style.strokeDasharray = outlineLength;
  // как будто нет очертания  штрих с большим смещением с пустым небольшим местом если цифры ставить если = outlineLength то будет как нет его и играть нормально
  outline.style.strokeDashoffset = outlineLength;

  // Добавлю звуки play sound
  // могу просто добавить значок и прослушиватель событий кликов
  play.addEventListener("click", () => {
    checkPlaying(song); // проверили воспроизведение и вставили эту песню
  });

  // Create a function specific to stop and play the sounds функция специфичная для остановки и воспроизведения
  // также поменять значки можем проверить приостановлена ли песня является положительно или нет песня поставлена на паузу
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    }
  };
};

//чтобы проверить играет ли могу анимировать круг  We can animated the circle
song.ontimeupdate = function () {
  //могу получить текущее время песни могу сделать текущее время равным текущему времени песни и это функция запускается каждый раз когда песня работает нормально
  let currentTime = song.currentTime;
  // получить прошедшее время поэтому время которое у нас есть о том как долго должна длиться песня текущее время которое только что создала так что это прошедшее время 
  let elapsed = fakeDuration - currentTime;
  //могу получить эти минуты секунды

};

app(); //вызов
