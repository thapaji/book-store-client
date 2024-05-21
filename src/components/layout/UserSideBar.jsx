import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const sideLinks = [
    {
        title:'Books',
        to:'/admin/books'
    },
    {
        title:'Students',
        to:'/admin/students'
    },
    {
        title:'All Borrows',
        to:'/admin/borrows'
    },
    {
        title:'My Books',
        to:'/admin/my-books'
    },
    {
        title:'Profile',
        to:'/admin/profile'
    },
    {
        title:'Admins',
        to:'/admin/admins'
    }
]

export const UserSideBar = () => {
  return (
    <Stack direction="vertical" gap={1}>
       { sideLinks.map(({title,to}) => <Link to={to} className="p-2 nav-link">{title}</Link>)}
      {/* <Link to='/admin/books' className="p-2 nav-link">First item</Link>
      <Link className="p-2 nav-link">Second item</Link>
      <Link className="p-2 nav-link">Third item</Link> */}
    </Stack>
  )
}
