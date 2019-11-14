import React, { Component } from "react";
import { Row } from "react-materialize";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import _About from "../components/About";
import displayStars from "../utils/utils";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { Query } from "mongoose";

class Home extends Component {
    state = {
        gotData: false,
        businesses:[],
        query: ""
    }

    componentDidMount() {
    this.loadBusinesses();
    this.handleSearch();
    this.handleBizzClick();
    }

    handleBizzClick() {
        API.getReviews().then(res => console.log(res.data));
    }
    
    loadBusinesses = () => {
        API.getBusinesses()
        .then(res => this.setState({businesses: res.data }))  
        .then(res => this.setState({ gotData: true }))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const {name, value} = event.target;
       
  
        this.setState({
          query: event.target.value
        }); 
  
      };
    handleSearch = (event) => {
        this.state.businesses.filter(businesses => 
            businesses.address.zipcode.includes(this.state.query)).map(searchedzip => {
                console.log(searchedzip);
              
            })
            
        }
        
        
        
        render() {

            return (
                <div>
                <Jumbotron 
                onClick={this.handleSearch}
                onChange={this.handleInputChange}
                name="query"
                value={this.state.query}
                />
                <Row>
                    <div className="col s10 m8 offset-m2 offset-s1 ">
                        {this.state.loggedIn ? <_About /> : <></>}
                        <br></br>
                        <h3>Featured Businesses</h3>
                        {!this.state.gotData
                        ? <Loading size="scene" />
                        : this.state.businesses.filter(obj => !obj.author)
                        .map(obj =>
                            <Result 
                            name={obj.name} 
                            avgRating={displayStars(obj.avgRating)}
                            // priceCompare={obj.}
                                // average={}
                                phone={obj.phone}
                                url={obj.url}
                                address={obj.address.full}
                                map={obj.map}
                                description={obj.description}
                                _id={obj._id}
                                />)
                        }
                    </div>
                </Row>
            </div>
        )
    }
}    
    
export default Home;