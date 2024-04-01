import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import CommentList from './CommentList';
import Container from 'react-bootstrap/Container'

export default function SingleBook({book}) {

  const {id, asin, title, img, func, select} = book;
  return (
    <>
      <Col md={{ span: 4, offset: 4 }} id={id}  >
      <Card style={{ width: "18rem" }} onClick = {() => func(asin)} className={select ? "p-4 ms-4 md-4 card-border selected" : "p-4 ms-4 md-4 card-border"} >
          <Card.Img variant="404" src={img} height={150} width={150} />
          <Card.Body>
              <Card.Title className="text-warning">{title}</Card.Title>
              <Card.Text>
              {title}                 
              </Card.Text>
              <Button variant="primary">Post Comment</Button>
          </Card.Body>
      </Card>
      </Col>  
     


    </>
 
  );
}
