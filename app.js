let gearRatio = 3.54;
class Cars {
    constructor (weight, valume, power) {
        this.weight = weight + ' [кг]';
        this.valume = valume + ' [л]';
        this.power = power + ' [л.с]';
        this.consumption = (power * 0.7 + weight) / valume / 100 + ' [л/км]';
        this.racing = power * 0.7 / 100 + ' [км/с]';
        this.maxSpeed = power * 0.7 * gearRatio + ' [км/ч]';
        this.race = function (distance) {
            let duration = valume * power / distance ,
                milliseconds = parseInt((duration%1000)/100)
                , seconds = parseInt((duration/1000)%60)
                , minutes = parseInt((duration/(1000*60))%60)
                , hours = parseInt((duration/(1000*60*60))%24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        }
    }


}


let bmw = new Cars(2000, 85, 245);
vw = new Cars(2222, 85, 128);

console.log(bmw);
console.log(bmw.race(4000));