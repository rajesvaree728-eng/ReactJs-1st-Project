import React from 'react'

const Login = (isloggedIn) => {
  return (
    <div>
      {isloggedIn ? <p>Welcome back!</p>:<p>PLease login</p>}
    </div>
  )
}

export default Login
