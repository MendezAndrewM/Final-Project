export default {

    displayStars: num => {
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

};