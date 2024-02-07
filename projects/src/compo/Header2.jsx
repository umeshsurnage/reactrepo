import React from 'react'

export const addHeader2 = () => {
  return (
    <div className='wrapper'>

      <img src="/img.jpg" alt="" />

      <h4>Max sixe: 1GB</h4>

      <h1>Upload your new profile image</h1>

      <div>

        <input type="button" value="Take Picture" />
        <input type="button" value="Upload files" />
        
      </div>

      <h3>You can change your profile picture on gravatar</h3>
    </div>

  )
}
