import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "react-materialize";
// import Reviews from "./Reviews/Reviews.js";
import "./style.css";
import API from "../../utils/API";
import {useParams} from "react-router";



class ReviewForm extends Component {
    
 
    state = {
      location: "",
      author: "",
      comment: "",
      service: "",
      payment: "",
      rating: 0
    };

    componentDidMount(){
      const {match:{params}} = this.props;
      axios.get(`api/business/${params.businessid}/review`)
        .then(({data: business}) => {
          this.setState({
              location: {business}
          })
        })

      this.setState({
        location: `${params.businessid}`
      })
    }

    handleInputChange = event => {
      const {name, value} = event.target;
     

      this.setState({
        [name]: value
      }); 

    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (!this.state.comment || !this.state.service || !this.state.payment || !this.state.rating) {
        alert("Fill out the whole name please:)");
      if (!this.state.author){
        this.setState({
          author: "anon"
        })
      }  
      } else {

        API.saveReview({
          location: this.state.location,
          author: this.state.author,
          comment: this.state.comment,
          service: this.state.service,
          payment: this.state.payment,
          rating: this.state.rating
        }).catch(err => console.log(err))
        alert("Thank you for your review!")
      }
      this.setState({
        author: "",
        comment: "",
        service: "",
        payment: "",
        rating: ""
      });

    };

    
    render() {
      

    return (
      <Row className="bigWrap">
        <Col s={10} offset="s3">
          <Row>
            <Col s={6} className="input-field">
              <textarea 
              id="textarea0" 
              className="materialize-textarea" 
              data-length="120"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
               />
              <label for="textarea0">Name(optional)</label>
            </Col>
          </Row>
          <Row>
            <Col s={6} className="input-field">
              <textarea 
              id="textarea1" 
              className="materialize-textarea" 
              data-length="120"
              name="comment"
              value={this.state.comment}
              onChange={this.handleInputChange}
               />
              <label for="textarea1">Comment</label>
            </Col>
          </Row>
          <Row>
            <Col s={6} className="input-field">
              <textarea 
              id="textarea2" 
              className="materialize-textarea" 
              data-length="120"
              name="service"
              value={this.state.service}
              onChange={this.handleInputChange}
              />
              <label for="textarea2">Service Provided</label>
            </Col>
          </Row>
          <Row>
            <Col s={6} className="input-field">
              <textarea 
              id="textarea2"
              className="materialize-textarea" 
              data-length="120"
              name="payment"
              value={this.state.payment}
              onChange={this.handleInputChange}
              />
              <label for="textarea2">What did you pay?</label>
            </Col>
          </Row>
          <Row>
            <Col s={1}>

              <div>
                <label>
                  <input 
                  className="with-gap" 
                  value="0"                   
                  type="radio"
                  name="rating" 
                  checked={this.state.rating == 0}
                  onChange={this.handleInputChange}
                  />
                  <span>0</span>
                </label>
              </div>
            </Col>
            <Col s={1}>
              <div>
                <label>
                  <input 
                  className="with-gap" 
                  value="1"               
                  type="radio"
                  name="rating" 
                  checked={this.state.rating == 1}
                  onChange={this.handleInputChange}
                  />
                  <span>1</span>
                </label>
              </div>
            </Col>
            <Col s={1}>
              <div>
                <label>
                  <input 
                  className="with-gap" 
                  value="2"                   
                  type="radio"
                  name="rating"
                  checked={this.state.rating == 2}
                  onChange={this.handleInputChange} 
                  />
                  <span>2</span>
                </label>
              </div>
            </Col>
            <Col s={1}>
              <div>
                <label>
                  <input 
                  className="with-gap" 
                  value="3"                    
                  type="radio"
                  name="rating" 
                  checked={this.state.rating == 3}
                  onChange={this.handleInputChange}
                  />
                  <span>3</span>
                </label>
              </div>
            </Col>
            <Col s={1}>

              <div>
                <label>
                  <input
                  className="with-gap" 
                  value="4"                    
                  type="radio"
                  name="rating" 
                  checked={this.state.rating == 4}
                  onChange={this.handleInputChange}
                  />
                  <span>4</span>
                </label>
              </div>
            </Col>
            <Col s={1}>

              <div>
                <label>
                  <input 
                  className="with-gap" 
                  value="5"                    
                  type="radio"
                  name="rating" 
                  checked={this.state.rating == 5}
                  onChange={this.handleInputChange}
                  />
                  <span>5</span>
                </label>
              </div>
            </Col>

          </Row>
          <Row>
            <Col s={3} offset="s4">

              <button 
              className="btn waves-effect waves-light" 
              type="submit" 
              name="action"
              name="rating" 
              onClick={this.handleFormSubmit}
              >Submit
                <i className="material-icons right">send</i>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ReviewForm;
