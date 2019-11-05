import React, { Component } from "react";
import ImageBar from "../components/ImageBar/Index";
import ServicePrices from "../components/ServicePrices";
import Reviews from "../components/Reviews";
import BusinessHeader from "../components/BusinessHeader";
import getBusiness from "../utils/API";
import displayStars from "../utils/utils"
import API from "../utils/API";
// import displayStars from "../utils/utils";


class BusinessPage extends Component {

    state = {


        Profile: [{
            name: "Name of Business here",
            phone: "(602)555-5555",
            address: {
                street: "1234 Fake Blvd",
                cityState: "Nowhere, AZ",
                zipcode: "85001" 
            },
            images: ["http://placeimg.com/400/275/arch", "http://placeimg.com/1200/1200/arch"],
            rating: 3.7, 

            servicesProvided: [
                {
                    service: "PlaceHolder Repair",
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
                    service: "Holder Recharge",
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
                    rating: 3,
                    service: "Service Ipsum",
                    price: 230,
                    content: "Sure fo shizzle dolizzle sit go to hizzle, cool pot elizzle. Away da bomb get down get down, aliquet volutpat, arousipizzle quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle, you son of a bizzle. Pellentesque mofo tortizzle. Sed erizzle."
                },
                {
                    title: "fo shizzle nibh and turpis",
                    rating: 2.5,
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
                    rating: 2,
                    service: "Service Ipsum",
                    price: 230,
                    content: "Nam fo shizzle dolor pizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Owned facilisi."
                }
            ]

        }]

    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBusiness(window.location.href.match(/([^\/]+)\/?$/g)[0])
            .then(res =>
                this.setState({ Profile: res.data })
            ).then(res => console.log(this.state.Profile))
            .catch(err => console.log(err));
    };


    getBusiness() {
        API.getBusiness()
        .then(res => this.setState({Profile: res.data }))
    }

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



    // render() {
    //     return ( <>
    //         {this.state.Profile.map(obj => <>
    //             <ImageBar img={obj.imageURL} />

    //             <BusinessHeader
    //             // img1={ obj.images[0] }
    //             // img2={ obj.images[1] }
    //             header={ obj.name }
    //             phone={ obj.phone }
    //             streetAddress={ obj.address.street }
    //             cityState={ `${obj.address.cityState} ${obj.address.zipcode}` }
    //             rating={ displayStars(obj.avgRating) }
    //             />

    //             <ImageBar img={obj.imageURL} />

    //              {/* <ServicePrices 
    //                 services={this.state.Profile[0].servicesProvided} 
    //                 />
    //                 <Reviews 
    //                 reviews={this.state.Profile[0].reviews}  */}
    //             {/* /> */}
    //             </>
    //         )}
    //     </>)
    // }

        render() {
            return (<>
                {/* <ImageBar img={this.state.Profile.imageURL} /> */}

                <BusinessHeader
                    // img1={ obj.images[0] }
                    // img2={ obj.images[1] }
                    header={this.state.Profile.name}
                    phone={this.state.Profile.phone}
                    streetAddress={this.state.Profile.address.street}
                    cityState={`${this.state.Profile.address.cityState} ${this.state.Profile.address.zipcode}`}
                    rating={displayStars(this.state.Profile.avgRating)}
                />

                <ImageBar img={this.state.Profile.imageURL} />

                {/* <ServicePrices 
                    services={this.state.Profile[0].servicesProvided} 
                    />
                    <Reviews 
                    reviews={this.state.Profile[0].reviews}  */}
                {/* /> */}
            </>)
        }
    


}

export default BusinessPage;