/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react'
import { NavbarLink } from '@kernel/common';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [ navbarOpen, setNavbarOpen ] = React.useState(false);
  const { menuLinks, showRegisterButton } = props;

  return (
    <nav
      className={
        (props.transparent
          ? "bg-gray-900 top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
          >
            <Link to="/">Kernel Community</Link>
          </button>
          { menuLinks &&
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          }
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            { menuLinks?.map(menuLink => {
                return (
                  <li key={ menuLink.url } className="flex items-center">
                    <NavbarLink link={ menuLink } />
                  </li>
                );
            })}

            { showRegisterButton &&
              <li className="flex items-center">
                <button
                  className={`bg-pink-500 text-white active:bg-pink-600 text-xs font-bold uppercase
                  px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0
                  ml-3 mb-3` }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="fas fa-user-plus"></i> <Link to="/register" >Register</Link>
                </button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
