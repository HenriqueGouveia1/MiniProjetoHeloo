import React, { Component } from 'react';
import {Card, Row,Col,CardBody,CardText,Button,CardTitle} from 'reactstrap'

export class Post extends Component {
  render() {
    return (
      <div>
          <Row>
      <Col sm="12" className="mt-3">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="12" className="mt-3">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
      </div>
    );
  }
}

export default Post;
