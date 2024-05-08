import React from 'react'
import StatusScreen from '../components/Status/statusScreen'
import Sidebar from '../components/Common/sidebar'

const Status = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <StatusScreen />
    </div>
  )
}

export default Status