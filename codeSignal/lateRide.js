

// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.


// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.


function solution(n) {
    let time = '';
    let hour = Math.floor(n / 60);
    console.log(hour);
    time += hour;
    time += ':'
    let minutes = n % 60;
    if(minutes == 0){
        time += '00'
    }
    else {
        console.log(minutes);
        time += minutes;
    }
    console.log(time);
    // return time;
    let sum = 0;
    for(let i = 0; i < time.length; i++){
        // if(isNaN(Number(time[i]))){
        //     sum += time[i]
        // }
        if(time[i] == ':'){
            continue
        }
        else {
            sum += Number(time[i])
        }
    }
    console.log(sum)
    return sum;
}


solution(240);
// solution(808);