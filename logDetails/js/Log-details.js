$(function () {
  $('.collapse').hover(function () {
    $(this).parent('.publish-time').next().css('display','block')
  },function () {
    $(this).parent('.publish-time').next().css('display','none')
  })
  $('.open').hover(function () {
    $(this).css('display','block')
  },function () {
    $(this).css('display','none')
  })




})
