/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react'

const alertStylesByType = {
  default: {
    backgroundColor: 'bg-yellow-100',
    textColor: 'text-gray-600'
  },
  success: {
    backgroundColor: 'bg-green-200',
    textColor: 'text-gray-600'
  },
  danger: {
    backgroundColor: 'bg-red-200',
    textColor: 'text-gray-600'
  },
  transparent: {
    backgroundColor: '',
    textColor: 'text-gray-600'
  }
}

export default function Alert (props) {
  const { type, children } = props
  const alertStyles = alertStylesByType[type] || alertStylesByType.default
  const backgroundColor = props.backgroundColor || alertStyles.backgroundColor
  const textColor = props.textColor || alertStyles.textColor

  return (
    <div className={`my-4 px-4 py-4 ${backgroundColor} ${textColor} rounded`}>
      {children}
    </div>
  )
}
