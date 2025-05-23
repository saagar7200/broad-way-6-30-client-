import React from 'react'
import ReactQueryProvider from  '@/providers/react-query.provider'
const Providers = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <ReactQueryProvider>
            {children}
    </ReactQueryProvider>
  )
}

export default Providers