
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
