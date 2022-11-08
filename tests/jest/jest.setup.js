import '@testing-library/jest-dom'
import * as matchers from 'jest-extended'
import 'jest-chain'
import React from 'react'
global.React = React
expect.extend(matchers)
