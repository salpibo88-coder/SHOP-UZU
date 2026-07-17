import React from 'react'
import Login from '@/app/components/Card/Loging' 
import Formcard from '@/app/components/Card/Formcard'
import Topic from '@/app/components/Card/Topic'
import Payment from '@/app/components/Card/Payment'
import Qr from '@/app/components/Card/Qr'

export default function page() {
  return (
    <div>
      
      
        <Formcard/>
        <Topic/>
        <Payment/>
        <Qr/>
      
    </div>
  )
}
