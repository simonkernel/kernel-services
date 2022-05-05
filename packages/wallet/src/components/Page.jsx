/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FooterSmall, Navbar } from '@kernel/common'

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
        <FooterSmall absolute />
      </div>
    </>
  )
}

export default Page