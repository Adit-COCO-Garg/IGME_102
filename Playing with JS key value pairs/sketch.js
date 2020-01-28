/**
 * Adit Garg
 * IGME-102: KeyValuePairs, 2/3/19
 * Perform functions and methods on litterals and maps and play around with them
 */
"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    objectPlay();
    mapPlay();
}


function objectPlay() {
    let movieBlurbs = {}
    movieBlurbs["Kimi No Nawa"] = "A story of two people swapping bodies";
    movieBlurbs["Logan"] = "A story of a old mutant man with claws.";
    movieBlurbs["Crazy Rich Assians"] = "Girld finds out her boyfriend is rich.";
    movieBlurbs["Spirited Away"] = "Parents turn into pigs, daughter sets out to help them";
    movieBlurbs["John Wick"] = "Wife Dies, Dog's Murdered, The Devil returns.";
    for (let entry in movieBlurbs) {
        console.log(entry, ": ", movieBlurbs[entry]);
    }
    print("movieBlurbs length: ", Object.keys(movieBlurbs).length);
    delete movieBlurbs["Logan"];
    console.log("movieBlurbs length: ", Object.keys(movieBlurbs).length);
    movieBlurbs["John Wick"] = "Sloppy assasin avenges dog, Dognappers' doom";
    for (let entry in movieBlurbs) {
        print(entry, ": ", movieBlurbs[entry]);
    }
    for (let entry in movieBlurbs) {
        delete movieBlurbs[entry];
    }
    console.log(movieBlurbs);
}

function mapPlay() {
    let songChart = new Map();
    songChart.set(1, '7 Rings');
    songChart.set(17, "Youngblood")
    songChart.set(22, 'Breathin');
    songChart.set(30, 'Trip');
    songChart.set(37, 'I Like It');
    songChart.set(50, 'Natural');
    songChart.set(52, 'Be Alright');
    for (let [songRank, songTitle] of songChart) { // get key & value separately
        console.log(songTitle, " ranks high in my book, and ", songRank, " on Billboard");
    }
    console.log("songChart size: ", songChart.size);
    songChart.delete(52);
    console.log("Is there a number 1?", songChart.has(1));
    console.log("Is there a number 5?", songChart.has(5));
    console.log("Ranked at 17:", songChart.get(17));
    songChart.set(1, "Mike Perry - The Ocean");
    console.log(songChart);
    songChart.clear();
    console.log(songChart);
}
