

// Some of the clouds are thunderheads and others are cumulus.



// function jumpingOnClouds(c) {
//     let jumps = 0;
//     let position = 0;
//     for(let i = 0; i < c.length; i++){
//         if(c[i+1] == 1){
//             i++
//         }
//         else if()

//     }



//     if( x == y+1 || x == y+2 )

//         jump one index 
//         jump two index 
// }

// The number on each cloud is its index in the list

// avoid 1s 
// 0s are safe



function jumpingOnClouds(c) {
    // Write your code here
    let player_position = 0;
    let jumps = 0;
    do{
        if(player_position + 2 <= c.length) {
            if(c[player_position + 2] == 0) {
                player_position = player_position + 2;
                jumps++;
            }
            else if (c[player_position + 1] == 0) {
                player_position++;
                jumps++;
            }
        }
        else {
            player_position++;
            jumps++;
        }
    } while (player_position < c.length - 1)
    return jumps;
}