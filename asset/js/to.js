$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
  //用parent來刪除span的parent整個li
  $(this).parent().fadeOut(500, function(){
    //這兩個this不一樣
    $(this).remove;
  })
  //防止觸發li.click
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  //判斷是否是enter key
  if(e.which === 13){
    var todoText = $(this).val();
    $(this).val("")
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + todoText + "</li>");
  }
});

$('.fa-plus').click(function(){
  $("input[type='text']").fadeToggle();
})