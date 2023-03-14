'use client'
import React from 'react'
import Link from 'next/link'

function ClientSideRoute({children, route}: {children: React.ReactNode; route: string}) {
  return (
    <Link href={route}>
      <div>{children}</div>
    </Link>
  )
}

export default ClientSideRoute
