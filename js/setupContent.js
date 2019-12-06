var section = 'comprehension';
var app = 0;
var content = information[0].appInfo;
var cont = content.comprehension;
$('#' + app).addClass('top-menu-active');


$('.app-name').html(information[app].appName);
$('#logo').css("background-image", "url( img/" + information[app].appIcon + ")");
$('#site').attr("href", information[app].appUrl);
$('#site').html(information[app].appUrl);

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
populate();

$('.top-menu-item').click(function(){
  section = 'comprehension';
  app = $(event.target).attr('id');
  content = information[app].appInfo;
  cont = content.comprehension;

  $('.app-name').html(information[app].appName);
  $('#logo').css("background-image", "url( img/" + information[app].appIcon + ")");
  $('#site').attr("href", information[app].appUrl);
  $('#site').html(information[app].appUrl);

  if($('.top-menu-item').hasClass('top-menu-active')){
    $('.top-menu-item').removeClass('top-menu-active');
  }
  $('#' + app).addClass('top-menu-active');

  if($('.side-menu-item').hasClass('side-menu-active')){
    $('.side-menu-item').removeClass('side-menu-active');
    $('.side-menu-item').addClass('side-menu-inactive');
  }
  $('#' + section).addClass('side-menu-active');
  $('#' + section).removeClass('side-menu-inactive');

  populate();
});

$('.side-menu-item').click(function(){
  section = $(event.target).attr('id');
  if($('.side-menu-item').hasClass('side-menu-active')){
    $('.side-menu-item').removeClass('side-menu-active');
    $('.side-menu-item').addClass('side-menu-inactive');
  }
  $(event.target).addClass('side-menu-active');
  $(event.target).removeClass('side-menu-inactive');
  switch (section) {
    case 'privacy':
      cont = content.privacy;
      break;
    case 'collaborability':
      cont = content.collaborability;
      break;
    case 'other':
      cont = content.other;
      break;
    default:
      cont = content.comprehension;
  }
  populate();
});

function populate(){
  var pageContent = '';

  for (var i = 0; i < cont.length; i++) {
    if (cont[i][0] === 'div') {
      switch (cont[i][1]) {
        case 1:
          pageContent += '</div>';
          break;
        default:
          pageContent += '<div class="content-subsection">';
      }
    }
    else if (cont[i][0] === 'ul') {
      pageContent += '<ul>';
      for (var j = 0; j < cont[i][1].length; j++){
        pageContent += '<li>' + cont[i][1][j] + '</li>';
      }
      pageContent += '</ul>';
    }
    else if (cont[i][0] === 'img') {
      if (cont[i].length > 2){
        pageContent += '<img src="img/' + cont[i][1] + '" + class="' + cont[i][2] + '"/>';
      }
      else{
        pageContent += '<img src="img/' + cont[i][1] + '" />';
      }
    }
    else if (cont[i][0] === 'a') {
      pageContent += '<a href="' + cont[i][1] + '" target="_blank">' + cont[i][2] + '</a>';
    }
    else if (cont[i].length > 2) {
      pageContent += '<' + cont[i][0] + ' class="' + cont[i][2] + '">' + cont[i][1] + '</' + cont[i][0] + '>';
    }
    else{
      pageContent += '<' + cont[i][0] + '>' + cont[i][1] + '</' + cont[i][0] + '>';
    }
  }

  $('#content-area').html(pageContent);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
