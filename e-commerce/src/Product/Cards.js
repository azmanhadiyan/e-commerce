import React from "react";
import NumberFormat from "react-number-format";
import { Row, Card, Nav } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import Truncate from "react-truncate";

const Cards = ({ products, handleOnClick }) => {
  return (
    <div className="mt-5 mx-auto w-75">
      {products !== null && (
        <div>
          <Row xs={1} md={4}>
            {products.map((item, index) => {
              return (
                <div key={index} className="p-2 mr-auto ">
                  <Card
                    style={{
                      width: "14rem",
                      height: "70vh",
                      textAlign: "left",
                    }}
                    className="text-info rounded-lg shadow-lg bg-white rounded"
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="w-100 h-50 d-inline-block rounded-top"
                    />
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
                        <Nav.Link onClick={() => handleOnClick(item)}>
                          <MdShoppingCart
                            variant="outline-info"
                            className="float-sm-right"
                          />
                        </Nav.Link>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};
export default Cards;
