"use strict";
/*-----burger---------*/
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;
const header = document.querySelector('.header');

document.addEventListener('click', event => {
    if(event.target.closest('.header__burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
        header.classList.toggle('active');
    };
});


//об'єктам які будуть мати класс _anim-items буде додаватись класс _active
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            //момент старту анімації
            let animFromPoint = window.innerHeight - animItemHeight / animStart;
            //момент старту анімації якщо об'єкт займає весь екран
            if (animItemHeight > window.innerHeight) {
                animFromPoint = window.innerHeight - window.innerHeight / animStart;
            };

            if ((scrollY > animItemOffset - animFromPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                //заглушка. якщо об'єкт має класс _anim-on-hide та він не буде повторно анімуватись
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                };
            }; 
        };
        
    };

    //функція (з інтернету) яка вираховує відстань зверху до об'єкта
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
    //щоб на першому екрані була анімація без скроллу
    animOnScroll ();
};








/*
const itemNavTabs = document.querySelectorAll('.naw-tabs__item');
const itemTabs = document.querySelectorAll('.body-tabs__tabs');

document.addEventListener('click', event => {
    const targetElement = event.target;
    let activeElement = null;
    let newTargetElement = null;

    if (targetElement.closest('.naw-tabs__item')) {
        itemNavTabs.forEach((item, index) => {
            if (item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };
            if (item === targetElement) {
                newTargetElement = index;
            };
        });

        targetElement.classList.add('active');
        itemTabs[activeElement].classList.remove('active');
        itemTabs[newTargetElement].classList.add('active');
    };
});

*/





























//Таби
/*
const tabsNavItems = document.querySelectorAll('.naw-tabs__item');
const tabsItems = document.querySelectorAll('.body-tabs__tabs');

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    let activeElement = null;
    let nevActiveElement = null;

    if(targetElement.closest('.naw-tabs__item')) {
        tabsNavItems.forEach(function (item, index) {
            if(item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };

            if(item === targetElement) {
                nevActiveElement = index;
            };
        });
        targetElement.classList.add('active');
        tabsItems[activeElement].classList.remove('active');
        tabsItems[nevActiveElement].classList.add('active');
    };
});
*/