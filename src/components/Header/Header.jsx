import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header
      className="
        w-full
        sticky
        top-0
        z-50
        bg-slate-900/90
        backdrop-blur-md
        border-b
        border-white/10
        shadow-lg
      "
    >

      <Container>

        <nav
          className="
            flex
            items-center
            justify-between
            min-h-[75px]
          "
        >

          {/* ================= LOGO ================= */}

          <div className="flex items-center">

            <Link
              to="/"
              className="
                flex
                items-center
                gap-3
                group
              "
            >

              <Logo width="65px" />

              <span
                className="
                  hidden
                  sm:block
                  text-xl
                  font-bold
                  tracking-wide
                  text-white
                  group-hover:text-blue-300
                  transition
                  duration-200
                "
              >
                My Blog
              </span>

            </Link>

          </div>


          {/* ================= NAVIGATION ================= */}

          <ul
            className="
              flex
              items-center
              gap-1
              sm:gap-2
            "
          >

            {navItems.map((item) =>
              item.active ? (

                <li key={item.name}>

                  <button
                    onClick={() => navigate(item.slug)}
                    className={`
                      px-3
                      sm:px-5
                      py-2.5
                      text-sm
                      font-medium
                      rounded-full
                      transition-all
                      duration-200

                      ${
                        location.pathname === item.slug
                          ? `
                            bg-white
                            text-slate-900
                            shadow-lg
                          `
                          : `
                            text-white/90
                            hover:bg-white/15
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {item.name}
                  </button>

                </li>

              ) : null
            )}


            {/* ================= LOGOUT ================= */}

            {authStatus && (

              <li className="ml-1 sm:ml-2">

                <LogoutBtn />

              </li>

            )}

          </ul>

        </nav>

      </Container>

    </header>
  )
}

export default Header