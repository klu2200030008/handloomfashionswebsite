import React from 'react'
import ArtisanDashboard from './artisan/Dashboard'
import InventoryTable from '../components/artisan/InventoryTable'
import Stats from '../components/artisan/Stats'



export default function Artisian() {
  return (
    <div>
        <ArtisanDashboard />
        <InventoryTable />
        <Stats />
       
    </div>
  )
}
