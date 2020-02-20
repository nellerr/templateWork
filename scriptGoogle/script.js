let y = document.querySelectorAll(".zA.zE:nth-child(3n)"); // Получаем все элементы таблицы с классом и выбираем каждый третий



for(let i=0;i<y.length;i++){

    y[i].style.display = "none"        // Циклом перебираем все элементы с данным классом после чего убираем из видимости

};
