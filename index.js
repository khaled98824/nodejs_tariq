const EventsEmitter = require('events');

class VideoManager extends EventsEmitter{
    constructor(){
        super();
    }

    download(videoName){
        console.log(`Start downloading v ${videoName}`);
        setTimeout(()=>{
            console.log(`video ${videoName} has bn downloaded`);
            const video = {name: videoName};
            this.emit("downloadComplete" , video);
        },3000);
    }
}

const videoManager =new VideoManager();
videoManager.download('video3,mp4');
videoManager.on('downloadComplete',(args)=>{
    console.log(`i have recived s downloadComplete with ${args.name}`);
});