import React from 'react'
import ReactQueryProvider from  '@/providers/react-query.provider'
import AuthProvider from '@/context/auth.context'

const Providers = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <AuthProvider>
    <ReactQueryProvider>
            {children}
    </ReactQueryProvider>
    </AuthProvider>
  )
}

export default Providers