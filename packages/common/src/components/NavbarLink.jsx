/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLink(props) {
  const { url, iconName, title } = props.link;

  return (
    <a
      className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2
        flex items-center text-xs uppercase font-bold"
      href={ url }
    >
      { iconName &&
        <React.Fragment>
          <i className={ `text-gray-500 ${iconName} text-lg leading-lg mr-2` } />
          {" "}
        </React.Fragment>
      }
      { title }
    </a>
  );
}
