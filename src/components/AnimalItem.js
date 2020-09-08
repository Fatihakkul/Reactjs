import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const AnimalItem =(props)=>{

    
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.name}
                </Card.Text>
            <Button variant="primary">Git</Button>
            </Card.Body>
        </Card>
    )
}
export {AnimalItem}