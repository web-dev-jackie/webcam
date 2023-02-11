import React from 'react'
import Card from './Card'

const canine = {
  name: 'Rosie',
  description: 'The best girl',
  id: 1,
  img:  "./rosie-avatar.png"
}
const canine2 = {
  name: 'Utah',
  description: 'The best boy',
  id: 2,
  img:  "./rover-utah.jpeg"
}
const canine3 = {
  name: 'Dog A',
  description: 'The best boy',
  id: 3,
  img:  "./default-profile.png"
}
const canine4 = {
  name: 'Dog B',
  description: 'The best boy',
  id: 4,
  img:  "./default-profile.png"
}
const canine5 = {
  name: 'Dog C',
  description: 'The best boy',
  id: 5,
  img: "./default-profile.png"
  
}

export default function Display() {
  return (
    <div>
        <Card name={canine.name} description={canine.description} id={canine.id} card-img-top={canine.img} />
        <Card name={canine2.name} description={canine2.description} id={canine2.id} />
        <Card name={canine3.name} description={canine3.description} id={canine3.id} />
        <Card name={canine4.name} description={canine4.description} id={canine4.id} />
        <Card name={canine5.name} description={canine5.description} id={canine5.id} />
    </div>
  )
}
