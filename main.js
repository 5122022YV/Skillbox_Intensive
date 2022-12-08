/*Получить доступ ко всем пунктам меню. Напоминание! пункты меню это ссылки,
которые имеют классы header__menu-link */

const MENU_LINKS = document.querySelectorAll('.header__menu-link'); 
MENU_LINKS.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));


const HERO_DOTS = document.querySelectorAll('.hero__dot'); /* выбираем все элементы, 
у которых есть класс hero__dot в index.html файле*/
const HERO_IMAGE = document.querySelector('.hero__image'); /*будем менять картинку,
которая лежит в классе hero__image */
const HERO_TITLE = document.querySelector('.hero__title'); /*the same sense*/

const HERO_TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];

/*далее, когда кликаем на каждый dot, из функции достаётся сам dot и его индекс.
dot.addEventListener('click', event => - это значит для каждого dot добавляем 
слушатель события по клику на dot и event - это функция которая будет обрабатывать событие*/    
HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', event => {
    HERO_DOTS.forEach(el => {
        el.classList.remove('active')
    });
/*далее для точки на которую мы сейчас нажали, которая вызвала событие click, */
    dot.classList.add('active')

    HERO_IMAGE.src = `assets/hero_${index + 1}.png`; /* !!! обратные ковычки */      
    HERO_TITLE.textContent = HERO_TITLES[index];
}))


/*const alertHello = () => {
    alert('Hello')
}
alertHello(); */