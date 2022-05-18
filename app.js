// создаю функцию

const app = () => {
const song =document.querySelector('.song'); //нужна песня она будет равна документированию запрса селектор
const play = document.querySelector('.play'); //кпока воспроизведения документоравнна селектора запроса
const outline = document.querySelector('.moving-outline circle'); //в круге могу получить контуп он будет равен селектору документа это будет движущийся контур 
const video = document.querySelector('.vid-container video'); // понадобится видео документ селектор видео 

// выбрать все звуки Sounds
const sounds = document.querySelectorAll('.sound-picker button'); // документ квериселектор all всех песен

// нужно отображение времени Time Display
const timeDisplay = document.querySelector('time-display'); // h3

// получить длину контура круга потому что хочу его анимировать Get the Length oof the outline
const outlineLength = outline.getTotalLength() //будет равна контуру получите круг который мы получили здесь тока получите общую длину это функция я еёё вызову и вернёт длину строки 

//понадобится продолжительность  песни Duration когда время истечет песня просто остановится (в html 300 600 120)
let fakeDuration =600;

// хочу анимировать кркуг  получить обводку смещения чтобы как бы  с 0 начало а потом снова полноэкранным
outline.style.strokeDasharray = outlineLength;

}

app()//вызов