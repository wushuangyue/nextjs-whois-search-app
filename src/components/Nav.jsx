/*
 * @Author: Sam Wu wushyue@gmail.com
 * @Date: 2023-12-05 13:50:11
 * @LastEditors: Sam Wu wushyue@gmail.com
 * @LastEditTime: 2023-12-08 16:59:18
 * @FilePath: \nextjs-github-search-app\src\components\Nav.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from 'next/link'

const Nav = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">GeFei Whois Query 📦</a>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
