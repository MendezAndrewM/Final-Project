import React, { Component } from "react";
import { Row } from "react-materialize";
import ImageBar from "../components/ImageBar/Index";
import ServicePrices from "../components/ServicePrices"
import Reviews from "../components/Reviews"

const rating = 0.2 //Only Here as placeholder. Rating will be pulled from API 

class BusinessPage extends Component {

    state = {
        rating: 3.7, //Only Here as placeholder. Rating will be pulled from API 
        testArray: [
            {
                service:"PlaceHolder Repair",
                price: 426
            },
            {
                service: "PlaceHolder Rotation",
                price: 86
            },
            {
                service: "Service Ipsum",
                price: 242
            },
            {
                service:"Holder Recharge" ,
                price: 40
            },
            {
                service: "PlaceHolder Replacement",
                price: 623
            }
        ],

        reviews: [
            {
                title: "Trustworthy Service",
                rating: 5,
                service: "Service Ipsum",
                price: 230,
                content: "Sure fo shizzle dolizzle sit go to hizzle, cool pot elizzle. Away da bomb get down get down, aliquet volutpat, arousipizzle quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle, you son of a bizzle. Pellentesque mofo tortizzle. Sed erizzle."
            },
            {
                title: "fo shizzle nibh and turpis",
                rating: 3.5,
                service: "PlaceHolder Repair",
                price: 532,
                content: "Vivamizzle you son of a bizzle mauris yippiyo nisi black pretizzle. Vivamizzle sit my shizz shiz. That's the shizzle had nisl gangsta lacizzle auctizzle yo mamma. Shizzlin dizzle fizzle viverra izzle."
            },
            {
                title: "dawg risus break yo neck",
                rating: 1.5,
                service: "PlaceHolder Replacement",
                price: 230,
                content: "Crunk malesuada bibendum maurizzle. Crazy izzle yippiyo my nizzle augue porta pizzle. Nizzle sizzle augue. Pizzle sagittizzle. Praesent had lacus quis yo posuere adipiscing. Donizzle boofron izzle felis black get down get down. Integer fo shizzle. Nam shizznit. Like erizzle away, doggy daahng dawg, porttitizzle rizzle, imperdizzle rizzle, ass. Integizzle shut up the shizzle up black fo shizzle. Go to hizzle solicitudizzle mofo sizzle. Away mi things, convallizzle izzle, pellentesque vel, ultricizzle in, nibh. Bling bling erizzle, cool had, owned had, aliquet dizzle, fizzle. Fusce mauris risizzle, varizzle i saw beyonce tizzles and my pizzle went crizzle, adipiscing sizzle, away sizzle we gonna chung, you son of a bizzle."
            },
            {
                title: "Crizzle aliquizzle",
                rating: 4,
                service: "Service Ipsum",
                price: 230,
                content: "Nam fo shizzle dolor pizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Owned facilisi."
            }
        ]
    }

    // Event handlers
    // Functions to add comments / ratings / reviews
    // via API calls 

    displayStars = num => {
        if (num < 0.3) { return "star_half" }  //Sets minimum rating as half_star
        else {
            const whole = Math.floor(num);
            const dec = (num - Math.floor(num));
            let stars = "";
            for (let i = 0; i < whole; i++) { stars += "star " };
            if (dec > 0.3) { stars += "star_half" };
            return stars;
        }
    }



    render() {
        return (
            <div className="wrapper">

                <Row>
                    <div className="bizBox col s10 m4 offset-m2 offset-s1">
                        <h3>Name of Business here</h3>
                        <p>(602)555-5555</p>
                        <p>1234 Fake Blvd, <br />Nowhere, AZ 85001 </p>
                    </div>
                    <div className="statBoxBox col s10 m4 offset-m2 offset-s1">
                        <h1 className="material-icons">{this.displayStars(this.state.rating)}</h1>
                        <p>Price Diff Compared to others</p>
                        <p>Maybe some other sort of highlight here</p>
                    </div>
                </Row>

                <ImageBar />

                <ServicePrices services={this.state.testArray} />

                <Reviews reviews={this.state.reviews} />


            </div>
        )
    }


}

export default BusinessPage;