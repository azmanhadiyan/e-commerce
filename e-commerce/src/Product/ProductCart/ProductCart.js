import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from "react-number-format";
import { Row, Card, Nav } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Truncate from "react-truncate";

export default function ProductCart() {
    const carts = useSelector(state => state.carts.dataCart)
    console.log(carts);
    return (
        <div className="mt-5 mx-auto w-75">
            <Row xs={1} md={4}>
              {carts.map((item, index) => {
                return (
                  <div key={index} className="p-2 float-left">
                    <Card style={{ width: "14rem",height: "70vh" , textAlign: "left"}} className="text-info rounded-lg shadow-lg bg-white rounded">
                      <Card.Img variant="top" src={item.image} className="w-100 h-50 rounded-top"/>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        <Truncate
                          lines={1}
                        >{item.description}
                        </Truncate>
                      </Card.Text>
                        <Card.Title className="mt-2">
                          <NumberFormat
                            value={item.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp."}
                            className="justify-content-between"
                          />
                          <Nav.Link>
                            <MdDelete variant="outline-info" className="float-sm-right"/>
                        </Nav.Link>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Row>
      </div>
    )
}
