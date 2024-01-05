import React from 'react';
import '.search-bar.css'
import {Col, Form, ForGroup, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup>
                      <span><i class="ri-map-pin-line"></i></span>
                      <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" />
                        <h3></h3>
                      </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar