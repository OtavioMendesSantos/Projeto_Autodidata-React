import React from 'react'
import UserPost from './endpoints_legacy/UserPost'
import TokenPost from './endpoints_legacy/TokenPost'
import PhotoPost from './endpoints_legacy/PhotoPost'
import PhotoGet from './endpoints_legacy/PhotoGet'

const Api = () => {
  return (
    <div>
        <h2>User Post</h2>
        <UserPost />
        <h2>Token Post</h2>
        <TokenPost />
        <h2>Photo Post</h2>
        <PhotoPost />
        <h2>Photo Get</h2>
        <PhotoGet />
    </div>
  )
}

export default Api