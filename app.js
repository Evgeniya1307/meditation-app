const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
    
  });


const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};























//  создаю функцию

// const app = () => {
//   const song = document.querySelector(".song"); //нужна песня она будет равна документированию запрса селектор
//   const play = document.querySelector(".play"); //кпока воспроизведения документоравнна селектора запроса
//   const replay = document.querySelector(".replay");
//   const outline = document.querySelector(".moving-outline circle"); //в круге могу получить контуп он будет равен селектору документа это будет движущийся контур
//   const video = document.querySelector(".vid-container video"); // понадобится видео документ селектор видео

//    выбрать все звуки Sounds
//   const sounds = document.querySelectorAll(".sound-picker button"); // документ квериселектор all всех песен

//    нужно отображение времени Time Display
//   const timeDisplay = document.querySelector(".time-display"); // h3
//  получить длину контура круга потому что хочу его анимировать Get the Length oof the outline
// const outlineLength = outline.getTotalLength(); //будет равна контуру получите круг который мы получили здесь тока получите общую длину это функция я еёё вызову и вернёт длину строки
//    выбор времени затрат
//   const timeSelect = document.querySelectorAll(".time-select button"); //кнопка выбора времени
  

//   понадобится продолжительность  песни Duration когда время истечет песня просто остановится (в html 300 600 120)
//   let fakeDuration = 600;

//    хочу анимировать кркуг  получить обводку смещения чтобы как бы  с 0 начало а потом снова полноэкранным
//   outline.style.strokeDashoffset = outlineLength;
//    как будто нет очертания  штрих с большим смещением с пустым небольшим местом если цифры ставить если = outlineLength то будет как нет его и играть нормально
//   outline.style.strokeDasharray = outlineLength;
//   timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
//     fakeDuration % 60
//   )}`;

//   sounds.forEach(sound => {
//     sound.addEventListener("click", function() {
//       song.src = this.getAttribute("data-sound");
//       video.src = this.getAttribute("data-video");
//       checkPlaying(song);
//     });
//   });
  

//    Добавлю звуки play sound
//    могу просто добавить значок и прослушиватель событий кликов
//   play.addEventListener("click", function() {
//     checkPlaying(song); // проверили воспроизведение и вставили эту песню
//   });

//   replay.addEventListener("click", function() {
//     restartSong(song);
//   });


//   const restartSong = song =>{
//     let currentTime = song.currentTime;
//     song.currentTime = 0;
//     console.log("ciao")

// }

// timeSelect.forEach(option => {
//   option.addEventListener("click", function() {
//     fakeDuration = this.getAttribute("data-time");
//     timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
//       fakeDuration % 60
//     )}`;
//   });
// });

//  сделать выбор звука зделать время 

//    Create a function specific to stop and play the sounds функция специфичная для остановки и воспроизведения
//    также поменять значки можем проверить приостановлена ли песня является положительно или нет песня поставлена на паузу
//   const checkPlaying = song => {
//     if (song.paused) {
//       song.play();
//       video.play();
//       play.src = "./svg/pause.svg";
//     } else {
//       song.pause();
//       video.pause();
//       play.src = "./svg/play.svg";
//     }
//   };
//   чтобы проверить играет ли могу анимировать круг  We can animated the circle
//   song.ontimeupdate = function() {
//     могу получить текущее время песни могу сделать текущее время равным текущему времени песни и это функция запускается каждый раз когда песня работает нормально
//     let currentTime = song.currentTime;
//      получить прошедшее время поэтому время которое у нас есть о том как долго должна длиться песня текущее время которое только что создала так что это прошедшее время
//     let elapsed = fakeDuration - currentTime;
//     могу получить эти минуты секунды а также анимировать текст так что секунды будут равны в основном прошедшему поэтому истекшее время могу сделать процент 60 в основном это будет идти 1 2 3 4 5 6 7 8 9 10 и когда дойдёт до 60 он сбросавыется обратно
//     let seconds = Math.floor(elapsed % 60); // чтобы было равное число Math.floor
//     могу получить две минуты в минутах и это будет равно прошедщему делённому на 60 потому что 60 разделенные к 60  будет 1минута
//     let minutes = Math.floor(elapsed / 60);
//     timeDisplay.textContent = `${minutes}:${seconds}`; //анимирую текст отображаю точечное текствое содержимое времени которое будет равно минуты и затем секунды получим обратный отсёт
//     Animate the circle чтобы индикатор прогресса анимировал полосу по кругу могу получить его длину контура -  мы можем получить текущее время, разделённую на фальшивую продолжительность а затем могу получить точечный штрих в стиле контура
//     let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
//     outline.style.strokeDashoffset = progress;
   
//     if (currentTime >= fakeDuration) {
//       song.pause();
//       song.currentTime = 0;
//       play.src = "./svg/play.svg";
//       video.pause();
//     }
//   };

