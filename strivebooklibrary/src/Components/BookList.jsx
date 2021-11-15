import SingleBookCard from "./SingleBook";
import CommentsArea from "./CommentsArea";

import { Col, Container, Row, Form } from "react-bootstrap";
import React from "react";
class BookList extends React.Component {
  state = {
    searchQuery: "",
    selectedBook: false,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-8">
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search for Book"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <>
                    <Col md={3}>
                      <SingleBookCard book={b} />
                    </Col>
                  </>
                ))}
            </Row>
          </Col>
          <Col className="col-4 mt-4">
            <h3>Comments</h3>
            <CommentsArea />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
