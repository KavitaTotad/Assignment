async function myfunction(){
    function getVideo(){
        console.log("Got video");

    }
    function AddIntro(){
        return console.log("Intro Added");

    }
    function AddIntro(){
        return console.log("summary Added");
    }
    getVideo();
    await AddIntro();
    await AddIntro();
    addSummary();
}
myfunction();
console.log("await..");

