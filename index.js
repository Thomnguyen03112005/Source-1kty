$(document).ready(function(){
    $.ajax({
      url: "https://63e9d1f7811db3d7ef014610.mockapi.io/newss",
      type: "GET",
      dataType: "json",
      success: function(data) {
        for (let i = 0; i < data.length; i++) {
              // Xử lý dữ liệu
          let img = data[i].img;
          let id = data[i].id;
          let title = data[i].title;
          let content = data[i].content;
            // Hiển thị dữ liệu
            $("#card-id-1").eq(i).text(id);
          $(".card-title1").eq(i).text(title);
          $(".card-img-top-1").eq(i).html(img);
          $(".card-text-1").eq(i).text(content)
        }
      }
    });
    
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
      });  
  });
