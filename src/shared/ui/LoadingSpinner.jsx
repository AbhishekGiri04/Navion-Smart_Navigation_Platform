import React from 'react'

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      <img 
        src="https://cdn.dribbble.com/userupload/22339761/file/original-4bb3252c384129a3c31eee02cd1dde24.gif"
        alt="Loading"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default LoadingScreen