import React from 'react'
import CommunityScreen from '../components/Communities/communityScreen'
import Sidebar from '../components/Common/sidebar'

const Communities = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <CommunityScreen />
    </div>
  )
}

export default Communities