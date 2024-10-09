import React from 'react'
import { listData } from '../../lib/dummyData'
import Card from '../card/card'
import "./list.scss"

export default function List() {
  return (
    <div className="list">
        {listData.map(item=> (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}
