import React from 'react';
import { Card, Col } from "react-bootstrap"

const SingleBook = (props) => {
    return (
        <>
            {props.books && props.books.map(book =>
                <Col md={2}>
                    <Card>
                        <div style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={book.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.price}€
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
            }
        </>
    )
}
export default SingleBook