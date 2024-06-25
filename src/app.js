import 'bootstrap'
import AOS from 'aos'
import $ from 'jquery'
import 'aos/dist/aos.css'
import './scss/styles.scss'

AOS.init()

// Dark mode
$(function () {
  function applyTheme(theme) {
    if (theme === 'light') {
      $('html').attr('data-bs-theme', 'light')
      // $('.download-btn').removeClass('btn-dark').addClass('btn-light')
    } else if (theme === 'dark') {
      $('html').attr('data-bs-theme', 'dark')
      // $('.download-btn').removeClass('btn-light').addClass('btn-dark')
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        $('html').attr('data-bs-theme', 'dark')
        // $('.download-btn').removeClass('btn-dark').addClass('btn-light')
      } else {
        $('html').attr('data-bs-theme', 'light')
        // $('.download-btn').removeClass('btn-light').addClass('btn-dark')
      }
    }
  }

  function initializeTheme() {
    var savedTheme = localStorage.getItem('selectedTheme')
    if (savedTheme) {
      applyTheme(savedTheme)
      $('.dropdown-item[data-theme="' + savedTheme + '"]').addClass('active')
    } else {
      applyTheme('light')
      $('.dropdown-item[data-theme="light"]').addClass('active')
    }
  }

  initializeTheme()

  $('.dropdown-item').on('click', function (e) {
    e.preventDefault()
    var theme = $(this).data('theme')
    applyTheme(theme)
    localStorage.setItem('selectedTheme', theme)

    $('.dropdown-item').removeClass('active').removeClass('text-black')
    $(this).addClass('active').addClass('text-black')
  })
})

// Animation

$(document).ready(function () {
  $(window).scroll(function () {
    var positionFromTop = $('.hero').offset().top
    var windowHeight = $(window).height()

    // Check if the section is in the viewport
    if (positionFromTop - windowHeight < 0) {
      $('.hero').addClass('show')
    } else {
      $('.hero').removeClass('show')
    }
  })
})
