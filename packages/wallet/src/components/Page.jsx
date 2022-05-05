/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Footer, Navbar } from '@kernel/common'

import AppConfig from 'App.config'

const Page = ({ children }) => {
  return (
    <>
      <Navbar
        title={AppConfig.appTitle}
        logoUrl={AppConfig.logoUrl}
        menuLinks={AppConfig.navbar?.links}
        backgroundColor='bg-kernel-dark' textColor='text-kernel-white'
      />
      {children}
      <div className='relative md:pt-32 pb-32 pt-12'>
        <Footer absolute backgroundColor='bg-kernel-dark' textColor='text-kernel-white'>
          built at <a href='https://kernel.community/' className='text-kernel-green-light'>KERNEL</a>
        </Footer>
      </div>
    </>
  )
}

export default Page