/*
For this project, you will build a message generator program.
Every time a user runs a program, they should get a new, randomized output.
You’re welcome to take the project in a couple of different forms,
like an astrology generator, inspirational message, or nonsensical jokes.
To make your program truly random,
the message that it outputs should be made up of
at least three different pieces of data.
Take what you know of JavaScript syntax so far to
build the program and customize it to your liking.
*/

/*
My project is an example of Horoscope string generator.
*/

const tellMe = () => {
    const keyword = {
        kw1: ['good', 'bad', 'normal'],
        kw2: ['luck', 'friends', 'job', 'illness'],
        somebody: ['no one', 'everyone', 'your friends', 'your parents', 'your pets', 'your advisor', 'yourself'],
        weather: ["sunny", "rainy", "snowy", "windy", "cloudy", "stormy"],
    }
    const msg = ["You are having <kw1> <kw2>", "You should: trust <somebody>", "Tomorrow will <weather>", "This year will bring you <kw1> <kw2>"]

    let selectMsg = msg[Math.floor(Math.random() * msg.length)]
    //console.log(selectMsg)
    let res = selectMsg.match(/<(\w+)>/g);
    res.forEach((kw) => {
        selectMsg = selectMsg.replace(kw, keyword[kw.match(/\w+/)[0]][Math.floor(Math.random() * keyword[kw.match(/\w+/)[0]].length)])
    })
    console.log(selectMsg)
}

tellMe()
