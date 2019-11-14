import React, { Component } from "react";
import ImageBar from "../components/ImageBar/Index";
import ServicePrices from "../components/ServicePrices";
import Reviews from "../components/Reviews";
import BusinessHeader from "../components/BusinessHeader";
import getBusiness from "../utils/API";
import displayStars from "../utils/utils"
import API from "../utils/API";
import Loading from "../components/Loading";


class BusinessPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gotData: false,
            Profile: {
                name: "",
                phone: "",
                address: {
                    street: "",
                    cityState: "",
                    zipcode: ""
                },
                images: ["",""],
                rating: 3.7,
                servicesProvided: [
                    {
                        service: "",
                        price: 426
                    },
                    {
                        service: "",
                        price: 86
                    },
                    {
                        service: "",
                        price: 242
                    },
                    {
                        service: "",
                        price: 40
                    },
                    {
                        service: "",
                        price: 623
                    }
                ],
                // reviews: [
                    // {
                    //     title: "dawg risus break yo neck",
                    //     rating: 1.5,
                    //     service: "PlaceHolder Replacement",
                    //     price: 230,
                    //     content: "Crunk malesuada bibendum maurizzle. Crazy izzle yippiyo my nizzle augue porta pizzle. Nizzle sizzle augue. Pizzle sagittizzle. Praesent had lacus quis yo posuere adipiscing. Donizzle boofron izzle felis black get down get down. Integer fo shizzle. Nam shizznit. Like erizzle away, doggy daahng dawg, porttitizzle rizzle, imperdizzle rizzle, ass. Integizzle shut up the shizzle up black fo shizzle. Go to hizzle solicitudizzle mofo sizzle. Away mi things, convallizzle izzle, pellentesque vel, ultricizzle in, nibh. Bling bling erizzle, cool had, owned had, aliquet dizzle, fizzle. Fusce mauris risizzle, varizzle i saw beyonce tizzles and my pizzle went crizzle, adipiscing sizzle, away sizzle we gonna chung, you son of a bizzle."
                    // },
                // ]
            },
            Reviews: []
        }
        this.loadBusinesses = this.loadBusinesses.bind(this)
    }

    componentDidMount() {
        this.loadBusinesses();
        this.getReviews();
    }

    loadBusinesses = () => {
        API.getBusiness(window.location.href.match(/([^\/]+)\/?$/g)[0])
            .then(res => this.setState({ Profile: res.data }))
            .then(res => this.setState({ gotData: true }))
            .then(res => console.log(this.state.Profile))
            .catch(err => console.log(err));
    };

    getBusiness() {
        API.getBusiness()
            .then(res => this.setState({ Profile: res.data }))
    }
    getReviews() {
        API.testThing()
            .then(res => this.setState({ Reviews: res.data }))
    }

    render() {
        return (
        !this.state.gotData
            ?<Loading size="scene" />
            :<>
            {/* <ImageBar img={this.state.Profile.imageURL} /> */}

            <BusinessHeader
                // img1={ obj.images[0] }
                // img2={ obj.images[1] }
                _id={window.location.href.match(/([^\/]+)\/?$/g)[0]}
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
            <Reviews reviews={this.state.Reviews} /> */}
        </>)
    }
}

export default BusinessPage;