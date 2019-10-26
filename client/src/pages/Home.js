import React, { Component } from "react";
import { Row } from "react-materialize";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import _About from "../components/About";
import displayStars from "../utils/utils";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        businesses:[]

    }

    // componentDidMount() {
    // // this.loadBusinesses();
    // this.handleSearch();
    // }
                                      //    ||
    // handleBizzClick() {             //      ||    This will need to appear below, in the JSX part
    //     //                                 \||/               
    //     //                                  \/
    //     // <Link to="/" className={window.location.pathname === "/">    
    // }
    
    loadBusinesses = () => {
        API.getBusinesses()
        .then(res => this.setState({businesses: res.data }))  
        .catch(err => console.log(err))
    }
        
   handleSearch = event => {
        
        this.loadBusinesses()
        console.log("iv been clicked")
    }


    render() {
        return (
            <div>
                <Jumbotron 
                onClick={this.handleSearch}
                />
                <Row>
                    <div className="col s10 m8 offset-m2 offset-s1 ">
                        
                        {this.state.loggedIn ? <_About /> : <></>}
                        <br></br>
                        <h3>Featured Businesses</h3>
                        {this.state.businesses.map(obj =>
                            <Result onClick={this.handleBizzClick()}
                                name={obj.name} 
                                avgRating={displayStars(obj.avgRating)}
                                // priceCompare={obj.}
                                // average={}
                                phone={obj.phone}
                                url={obj.url}
                                address={obj.address.full}
                                map={obj.map}
                                description={obj.description}
                            />)
                        }
                    </div>
                </Row>
            </div>
        )
    }
}

export default Home;