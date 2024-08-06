import Link from 'next/link'
import React from 'react'

type props = {
    text?: string,
    link: string,
    img?:string
}

const MenuItem = ({text, link, img}: props) => {
  return (
    <Link href = {link} className=' hover:text-gray-500 m-4'>
        {img ? <img src={img} />: text}
    </Link>
  )
}

export default MenuItem