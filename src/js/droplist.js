let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
});

$( document ).ready(function(){
  $(".dropdown-1").click(function(){
   $(".dropdown-1").toggleClass('dropup');
  });
});
$( document ).ready(function(){
  $(".dropdown-2").click(function(){
   $(".dropdown-2").toggleClass('dropup');
  });
});
$( document ).ready(function(){
  $(".dropdown-3").click(function(){
   $(".dropdown-3").toggleClass('dropup');
  });
});
