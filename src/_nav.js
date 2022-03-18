import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilCalendarCheck,
  cilEducation,
  cilNotes,
  cilPeople,
  cilSettings,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavItem,
    name: '      ',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
  },
]

export default _nav
