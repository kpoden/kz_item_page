

$(document).ready(function(){


  $('.slider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider__nav',
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipe: true,
    infinite: false,
    touchMove: true
  });

  $('.slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__main',
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    infinite: false,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 4
        }
      }]
  });

  const related = $('.carousel__related').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    draggable: true,
    swipe: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    
    ]
  });



  const alike = $('.carousel__alike').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    autoplay: true,
    swipeToSlide: true,
    draggable: true,
    swipe: true,
    infinite: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    
    ]
  });

  const watched = $('.carousel__watched').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    autoplay: true,
    swipeToSlide: true,
    draggable: true,
    swipe: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    
    ]
  });

  function rtl(slider) {
    alike.slick("slickPause");
    setInterval(()=>slider.slick("slickPrev"), 3000);
  }
    
  rtl(alike);


  const countSlides = $('.slider__nav-item').length;
  const sliderNav = $('.slider__nav');
  const sliderNavArrows = $('.slider__nav .slick-arrow')

  if(countSlides > 4) {
    sliderNav.css("padding", "30px 0");

  }


  $('.btn-cart').click( function() {
    $(this).toggleClass('incart');
  }
    );

  $('.btn-fav').click( function() {
    $(this).toggleClass('fav');
    if($(this).hasClass('fav')) {
      $(this).attr('data-tooltip', 'Удалить из избранного')
    } else {
      $(this).attr('data-tooltip', 'Добавить в избранное');
    }
  }
    );


    function tableWidth() {
      let tables = $('.tabs__pane cite');

      tables.each(function(){
        if($(this).children().length < 2) {
          $(this).children().css('width', '90%');
         }
      })
    }

    tableWidth();



    const mainTabs = document.querySelector('.desc__tabs');
    const mainBtns = document.querySelectorAll('.main-btns > .tabs__btn');
    const mainPanes = document.querySelectorAll('.main-panes > .tabs__pane');

    const drawTabs = document.querySelector('.drawings__tabs');
    const drawBtns = document.querySelectorAll('.draw-btns .tabs__btn');
    const drawPanes = document.querySelectorAll('.draw-panes > .tabs__pane');


    function initTabs(index, wrap, btns, panes) {
      
      for (let i = 0; i < btns.length; i++) {


        btns[i].setAttribute('role', 'tab');
        btns[i].setAttribute('tabindex', i);
        btns[i].dataset.id = i;

        panes[i].setAttribute('role', 'tabpanel');
        panes[i].setAttribute('tabindex', i);

        btns[i].classList.remove('tabs__btn--active');
        panes[i].classList.remove('.tabs__pane--show');

        if(i == index) {
          btns[i].classList.add('tabs__btn--active');
          panes[i].classList.add('tabs__pane--show');
        }

        if(wrap.id == "main-tabs-wrapper") {

        [...btns].forEach(btn => btn.addEventListener('click', mainTabClick));

        } else {
          [...btns].forEach(btn => btn.addEventListener('click', drawTabClick));
        }
    }
  }

    function mainTabClick(event) {
      tabIndex = event.target.dataset.id;
      
      
      [...mainBtns].forEach((tab, i) => {
        tab.classList.remove('tabs__btn--active');
        mainPanes[i].classList.remove('tabs__pane--show');
      })
    
      mainBtns[tabIndex].classList.add('tabs__btn--active');
      mainPanes[tabIndex].classList.add('tabs__pane--show');

    }

    function drawTabClick(event) {
      tabIndex = event.target.dataset.id;
      
      
      [...drawBtns].forEach((tab, i) => {
        tab.classList.remove('tabs__btn--active');
        drawPanes[i].classList.remove('tabs__pane--show');
      })
    
      drawBtns[tabIndex].classList.add('tabs__btn--active');
      drawPanes[tabIndex].classList.add('tabs__pane--show');

    }

    initTabs(0, mainTabs, mainBtns, mainPanes);
    initTabs(0, drawTabs, drawBtns, drawPanes);


    function copyText(selector, alertMsg = "Текст скопирован в буфер обмена!") {

      const alert = document.querySelector('.alert-msg');

      $('.copyText').click(()=> {

        var $temp = $("<input>");
        $("body").append($temp);
        const text = $(selector).text();
        $temp.val(text).select();
        document.execCommand("copy");
        if (document.execCommand('copy')) {
          $temp.remove();
      }

      alert.innerText = alertMsg;

      alert.classList.add('show-alert');

      setTimeout(()=>{alert.classList.remove('show-alert')}, 1500);

      })
      
  }

  copyText('.header__email .email', "E-mail скопирован в буфер обмена!");


  const catOpen = document.querySelector('.catalog-btn');
  const catMain = document.querySelector('.catalog__main');
  const catClose = document.querySelector('.catalog__close ');

  catOpen.addEventListener("click", () => {
    catMain.classList.add('cat-show');
    document.body.style.overflow = 'hidden';
  })

  catClose.addEventListener("click", () => {
    catMain.classList.remove('cat-show');
    document.body.style.overflow = 'auto';
  })


  



});

