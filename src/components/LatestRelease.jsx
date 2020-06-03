import React from 'react';
import { Card, Container } from "react-bootstrap"

const SingleBook = (props) => {
    return (
        <Container>

            <div className='row'>
                <Card className="col-md-3">
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    )
}

export default SingleBook