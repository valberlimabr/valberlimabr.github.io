//color pallete switches for change theme
  $('document').ready(function(){
    // hide and show 
    $('.switch').on('click',function(){
    $(".pallete-box-main").toggleClass("active");
  });

//switch color mode
    $('.pallete').on('click',function(){
      $palletecolor = $(this).attr('id');
      localStorage.setItem('astunvshtheme', $palletecolor);
      $(document.documentElement).attr("data-theme", $palletecolor); 
    });
    $newpallete = localStorage.getItem('astunvshtheme');
      if (localStorage.getItem("astunvshtheme") === null) {
        $(document.documentElement).attr("data-theme", "gold");
      }
      else{ 
        $(document.documentElement).attr("data-theme", $newpallete);
      }
    });

//Contact Form validate  
   $("#contactform").validate({
    rules:{
      // if any
    },
    messages:{
    //  if any
    }
  });

//Contact Form validate  
  $("#newsletterform").validate({
    rules:{
      // if any
    },
    messages:{
    //  if any
    }
  });
 

// offcanvas menu close
  document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasNavbar2');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("offcanvasbutton").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });
  // $('.nav-link').on( "click", function(){
  //   $('.close').click(); 
  // });

//   back to top
  var btn = $('#backtotop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function scrollToTop(e){
      window.scrollTo(0, 0);
  });

// about splide slide
if($(".abt-splide").length > 0){
  new Splide('.abt-splide', {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: true,
    interval: 3000,
    speed: 4000,
    arrows: false,
    pagination: false,
    pauseOnHover: false
  }).mount();
}

  $(window).on('load', function () {
    const voucherShownTime = localStorage.getItem('voucherShownTime');
    const currentTime = new Date().getTime();
    const fiveHours = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

    if (!voucherShownTime || currentTime - voucherShownTime > fiveHours) {
        $('#Promo').modal('show');
        localStorage.setItem('voucherShownTime', currentTime);
    }
});



//copy voucher code
  //const answer = document.getElementById("copyResult");
  //const copy   = document.getElementById("copy"); 
  //const selection = window.getSelection();
  //const range = document.createRange();
  //const textToCopy = document.getElementById("code")
  //copy.addEventListener('click', function(e) {
  //    range.selectNodeContents(textToCopy);
  //    selection.removeAllRanges();
  //    selection.addRange(range);
  //    const successful = document.execCommand('copy');
  //    if(successful){
  //      answer.innerHTML = 'Copied!';
  //    } else {
  //      answer.innerHTML = 'Unable to copy!';  
  //    }
  //    window.getSelection().removeAllRanges()
  //});
  //$('#vouchermodalbtn').click(function(){
  //  answer.innerHTML = '';
  //})


  // Sticky Header On Scroll

  let lastScrollY = window.scrollY;
  const header = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 0.5) {
          header.classList.add('active');
      } else {
          header.classList.remove('active');
      }
  });
  
  // Current Year

  $(document).ready(function() {
      $('#currentYear').text(new Date().getFullYear());
  });

  if($("#headline").length > 0){
  var typed = new Typed("#headline", { 
    strings: ["Seja Bem-Vindo ao Nemesis BR", "Bem-Vindo ao Nemesis BR", "Crie sua conta e comece a diversão!"], 
    typeSpeed: 100, 
    backSpeed: 50, 
    loop: true, 
    showCursor: false
  }); 
}

  // 
  window.onload = function () {
    var successMessage = localStorage.getItem("successMessage");
    var errorMessage = localStorage.getItem("emailfailed");
  
    if (successMessage) {
        // Display the success message in a Bootstrap alert
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg z-3';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = successMessage +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(alertDiv);
  
        // Remove the success message from localStorage after displaying it
        localStorage.removeItem("successMessage");
    }
    else if(errorMessage) {
      // Display the success message in a Bootstrap alert
      var alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-danger alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg';
      alertDiv.role = 'alert';
      alertDiv.innerHTML = errorMessage +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
      document.body.prepend(alertDiv);
  
      // Remove the success message from localStorage after displaying it
      localStorage.removeItem("emailfailed");
    }
  };

  // preloader
if (($("#preloader").length) > 0){
  function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
  }
  window.addEventListener("load",function(){
    setTimeout(closepreloader, 1200);
  });
  }
 

  
  
  $("#sidebar-toggle").on("click", function () {
    let sidebar = $(".sidebar");
  
    if (sidebar.css("opacity") === "0") {
      sidebar.css({
        "opacity": "1",
        "visibility": "visible",
        "transform": "translateX(0)",
        "transition": "transform 0.5s ease, opacity 0.5s ease"
      });
    } else {
      sidebar.css({
        "opacity": "0",
        "visibility": "hidden",
        "transform": "translateX(100%)",
        "transition": "transform 0.5s ease, opacity 0.5s ease"
      });
    }
  });
  