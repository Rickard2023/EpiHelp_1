import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CommentList from "./CommentList";
import SingleBook from "./SingleBook";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AllTheBooks({ allBooks }) {
  /*  
    Per renderizzare un array devi usare questa sintassi:
    {array.map(el => (PARENTESI TONDE) )}
    e non 
    {array.map(el => {PARENTESI GRAFFE} )}
  */
    const [selected, setSelected] = useState(null);

    const handleSelected = (asin) => {
      setSelected(asin)
      alert(asin);
    }


  return (

    <Row>
        {allBooks.map((el) => (          
            <SingleBook 
              clicked={false}
              key={el.asin} 
              book={el}
              func = {handleSelected}
              select = {selected}
            />              
        ))}
    
    </Row>
    
  );
}
