import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { get_fish } from '../Action/fishAction';
const FishList = () => {
   const dispatch=useDispatch()
   useEffect(()=>{dispatch(get_fish())},[dispatch])
   const fishes=useSelector((state)=>state.fishes)

  return (
    <div>
    {fishes.map((el) => {
        return(<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.type}</Card.Title>
          <Card.Text>
            {el.prix}
          </Card.Text>
          <Button variant="primary" >ajouter au pannier</Button>
        </Card.Body>
      </Card>)
      
    })}
    
    </div>
  )
}

export default FishList