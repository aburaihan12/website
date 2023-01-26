
const sports_Show = document.querySelector('.sports-menu-all');
const close = document.querySelector('.close');
const closes = document.querySelector('.closes');



close.addEventListener('click', function(){


    if(sports_Show.classList.contains('hide')){
        sports_Show.classList.remove('hide');
        sports_Show.classList.add('show');

    }else{
        sports_Show.classList.remove('show');
        sports_Show.classList.add('hide');
    }


});

closes.addEventListener('click', function(){


    if(sports_Show.classList.contains('hide')){
        sports_Show.classList.remove('hide');
        sports_Show.classList.add('show');

    }else{
        sports_Show.classList.remove('show');
        sports_Show.classList.add('hide');
    }


});


