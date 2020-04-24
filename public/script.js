var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos >= currentScrollPos) {
    document.getElementsByClassName('responsive-nav')[0].style.top =
            '0'
    document.getElementsByClassName('responsive-nav')[0].style.opacity =
            '1'
  } else {
    document.getElementsByClassName('responsive-nav')[0].style.opacity =
            '0'
    document.getElementsByClassName('responsive-nav')[0].style.top =
            '-' + document.getElementsByClassName('responsive-nav')[0].getBoundingClientRect().height + 'px'
  }
  prevScrollpos = currentScrollPos
}
