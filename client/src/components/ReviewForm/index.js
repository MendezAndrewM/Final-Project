import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Reviews from "./Reviews/Reviews.js";
import "./style.css";

class ReviewForm extends Component {
  render() {
    return (
      <div class="row">
        <form class="col s8">
          <div class="row">
            <div class="input-field col s8">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Leave a Review</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
