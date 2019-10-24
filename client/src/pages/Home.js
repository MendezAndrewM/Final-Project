import React, { Component } from "react";
import { Row } from "react-materialize";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Result from "../components/Results";
import _About from "../components/About";


// Lines 11-31 only exist to generate placeholder Results
const resultArr = []
for (let i = 0; i < 10; i++) {
    resultArr.push(
        <Result name="PlaceHolder" image="https://via.placeholder.com/150" 
                        avgRating={<i class="material-icons">star star star star star_half</i>} 
                        priceCompare="50"
                        average="45"
                        phone="(602)555-5555"
                        url="www.example.com"
                        address="4810 N 7th St, Phoenix, AZ 85014"
                        map="https://www.google.com/maps/place/4810+N+7th+St,+Phoenix,+AZ+85014/@33.5080698,-112.0676407,1036m/data=!3m2!1e3!4b1!4m5!3m4!1s0x872b12967529c021:0x4d7fb7ed97544881!8m2!3d33.5080653!4d-112.065452"
                        description="信用して」と彼は言った。 インフレを抑制しよ
                        うとして金融政策に偏重すると、金融、したがって景気を必要以上
                        に締め付けることになりかねない。 愛してる。 ２、３ページの英
                        語を訳すのに２時間以上もかかりました。 彼は約束を破った。 村人
                        たちは皆、行方不明になった猫を探すために山の中へでかけた。 申
                        し訳ないけど長居できないんですよ。 驚かない所をみると知ってた
                        のね。 お願いだから泣かないで。 いつ神戸に来るのか教えて下さい。"
                        />);
}

class Home extends Component {
    state = {
        loggedIn: true,
    }

    // componentDidMount() {
    //     reRenderThingsHereIThink();
    // }

    /*
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                            API Calls will go Here
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    */



    render() {
        return (
            <div>
                <Jumbotron />
                <Row>
                    <div className="col s10 m8 offset-m2 offset-s1 ">
                        
                        {this.state.loggedIn ? <_About /> : <></>}
                        <br></br>
                        <h3>Featured Businesses</h3>
                        {resultArr}
                    </div>
                </Row>
            </div>
        )
    }
}

export default Home;