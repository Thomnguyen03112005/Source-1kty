$(document).ready(function(){
    $.ajax({
      //url: "https://63e9d1f7811db3d7ef014610.mockapi.io/newss",
      url: "data.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        for (let i = 0; i < data.length; i++) {
              // Xử lý dữ liệu
          let img = data[0].img;
          let id = data[i].id;
          let title = data[0].title;
          let content = data[0].content;
          let nd = data[0].noidung;
            // Hiển thị dữ liệu
            $("#card-id-1").eq(i).text(id);
            //tieu de
          $(".card-title").html(data[0].title);
          $(".card-title1").html(data[1].title);
          $(".card-title2").html(data[2].title);
          $(".card-title3").html(data[3].title);
          $(".card-title4").html(data[4].title);
          $(".card-title5").html(data[5].title);
          $(".card-title6").html(data[6].title);
          $(".card-title7").html(data[7].title);
          $(".card-title8").html(data[8].title);
          $(".card-title9").html(data[9].title);
          $(".card-title10").html(data[10].title);
          //hinhanh
          //$(".card-img-top").html(data[0].img);
          //$(".card-img-top1").html(data[1].img);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          //content1
          $(".noidung").html(data[0].noidung)
          $(".noidung1").html(data[1].noidung)
          $(".noidung2").html(data[2].noidung)
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
