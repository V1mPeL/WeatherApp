import React from 'react'
import './navbar.scss'

export const Navbar = () => {
  return (
  
    <nav>
      <div className="container">
          <div className="navbar">
              <div className="logo"> <a className="logoLink" href="/">Weather</a> </div>
              <ul className="menu">
                  <li className="menu__item"><a href="/" className="menu__item-link" data-scroll>Main</a></li>
                  <li className="menu__item"><a href="/" className="menu__item-link" data-scroll>Capitals</a></li>
              </ul>
              <div className="burger">
                  <span></span>
              </div>
          </div>
      </div>
    </nav>
  )




//   // Мобильное меню бургер
// function burgerMenu() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.menu')
//     const body = document.querySelector('body')
//     burger.addEventListener('click', () => {
//       if (!menu.classNameList.contains('active')) {
//         menu.classNameList.add('active')
//         burger.classNameList.add('active-burger')
//         body.classNameList.add('locked')
//       } else {
//         menu.classNameList.remove('active')
//         burger.classNameList.remove('active-burger')
//         body.classNameList.remove('locked')
//       }
//     })
//     // Вот тут мы ставим брейкпоинт навбара
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 991.98) {
//         menu.classNameList.remove('active')
//         burger.classNameList.remove('active-burger')
//         body.classNameList.remove('locked')
//       }
//     })
//   }
//   burgerMenu()
}
