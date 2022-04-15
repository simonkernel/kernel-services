/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useNavigate } from 'react-router-dom'
import { useServices, Navbar, FooterSmall } from '@kernel/common'

import bgImage from 'assets/images/admin_bg.png'

const ADMIN_ROLE = 100 

const navbarLinks = [
  {
    url: "https://kernel.community/en/learn/",
    iconName: "far fa-file-alt",
    title: "Learn",
  },
  {
    url: "https://twitter.com/kernel0x",
    iconName: "fab fa-twitter",
    title: "Tweet",
  },
  {
    url: "https://www.youtube.com/channel/UC2kUaSgR0L-uzGkNsOxSxzw",
    iconName: "fab fa-youtube",
    title: "Watch",
  },
  {
    url: "https://github.com/kernel-community/",
    iconName: "fab fa-github",
    title: "Contribute",
  },
]

const Admin = () => {

  const navigate = useNavigate()
  const { walletLogin } = useServices()

  const handleLogin = async () => {
    const user = await walletLogin()
    console.log(user, ADMIN_ROLE)
    if (user.role <= ADMIN_ROLE) {
      return navigate('/dashboard')
    }
    navigate('/')
  }

	return (
    <div>
      <Navbar menuLinks={ navbarLinks } showRegisterButton={ true } />
        <main>
          <section className="absolute md:pt-32 pb-32 w-full h-full">
            <div
              className="absolute top-0 w-full h-full bg-gray-900"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          onClick={ handleLogin }
                          type="button">
                          Login with Kernel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall absolute />
          </section>
        </main>
    </div>
  )
}

export default Admin
