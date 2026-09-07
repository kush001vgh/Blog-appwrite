import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-slate-900
        text-white
        border-t
        border-white/10
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center"
            >
              <Logo width="100px" />
            </Link>

            <h2 className="
              mt-6
              text-2xl
              font-bold
              tracking-wide
              text-white
            ">
              My Blog
            </h2>

            <p className="
              mt-4
              max-w-md
              text-sm
              leading-7
              text-gray-400
            ">
              Discover amazing stories, creative ideas and
              interesting articles. Explore, learn and share
              your thoughts with the world.
            </p>

          </div>

          <div>

            <h3 className="
              mb-6
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-white
            ">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Affiliate Program
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Press Kit
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="
              mb-6
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-white
            ">
              Support
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Account
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Customer Support
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="
              mb-6
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-white
            ">
              Legals
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-gray-400
                    hover:text-white
                    transition
                    duration-200
                  "
                >
                  Licensing
                </Link>
              </li>

            </ul>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10"></div>

        <div className="
          flex
          flex-col
          gap-4
          pt-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <p className="text-sm text-gray-500">
            &copy; 2026 My Blog. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with React & Appwrite
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer