const words = [
    {
        word:"Tarantism",
        type:"(n.)",
        synonym:"The uncontrollable urge to dance.",
        pronounciation:"tar-uhn-tiz-uhm",
        origin:"Italian",
        image_320:"https://picture.lk/files/preview/960x1713/11710022000fpxcboah6jvdottwsmsrpkousw26foxhgze95w4prrkz0qh4f7haj70a8tzg3uflki4h1ckxaodt6obecbp63ltdazvxpl7xiusf.jpg",
        image_1200:"https://wallpapercave.com/wp/wp8137310.jpg",
    },
    {
        word:"Prevaricate",
        type:"(v.)",
        synonym:"To avoid giving a direct answer or deviate from the truth",
        pronounciation:"pruh-veh-ruh-kayt",
        origin:"Latin",
        image_320:"https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-long-nose-of-business-person-image_1105819.jpg",
        image_1200:"https://media.licdn.com/dms/image/v2/C5112AQE8xf0lC-Hg_g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1545289011152?e=2147483647&v=beta&t=wb7J8nyZfLoNv69AOo5gZ7xmALJMHOHgKP3_dr3dwQA",
    },
    {
        word:"Ameliorate",
        type:"(v.)",
        synonym:"To make a bad situation better",
        pronounciation:"uh-mee-lee-ur-ayt",
        origin:"Latin",
        image_320:"https://i.scdn.co/image/ab67616d00001e02ac624d2d029755e4e26af0b2",
        image_1200:"https://potential2success.com/wp-content/uploads/2015/10/rsz_1rsz_content.jpg",
    }
] 
let count = 1
const word_list_count=words.length
function btnChange (){
    if (count<word_list_count){
        const styles=`
        .main{
            background-image:url(${words[count].image_1200});
            }
        @media (min-width:320px) {
            .main{
                background-image: url(${words[count].image_320});
                } 
            }
        @media (min-width:576px) {
    .main{
        background-image: url(${words[count].image_1200});
    }
}
@media (min-width:768px) {
    .main{
        background-image: url(${words[count].image_1200});
    }
}
@media (min-width:992px) {
    .main{
        background-image: url(${words[count].image_1200});
    }
}
@media (min-width:1200px) {
    .main{
        background-image: url(${words[count].image_1200});
    }
}        `
        const styleSheet =document.createElement("style");
        styleSheet.textContent=styles;
        document.head.appendChild(styleSheet);    
        document.getElementById("compat").innerHTML=
        `<div class="word-container">
        <h1 class="word" id="Pronounce_Word">${words[count].word} <span class="word-classify">${words[count].type}</span></h1>
        <p class="word-desc">${words[count].synonym}</p>
        <div class="pronounce_cont" onclick="pronounce()">
                        <i class="fa-solid fa-volume-low speaker"></i>
                        <p class="pronounce">Pronounciation: <span class="word-pronounce">${words[count].pronounciation}</span></p>
                    </div>
        <p class="origin">Origin: <span class="word-origin"> ${words[count].origin}</span></p>
    </div>`
    count+=1
    if (count>(word_list_count-1)){
        count=0
    }
    }
}
function pronounce(){
    window.speechSynthesis.cancel()
    const voices = window.speechSynthesis.getVoices();
    const tsW=document.getElementById("Pronounce_Word").textContent
    const utterance = new SpeechSynthesisUtterance(tsW);
    const randVoice=Math.floor(Math.random()*3)
    utterance.voice=voices[randVoice]
    utterance.pitch=0.9;
    utterance.rate=1;
    window.speechSynthesis.speak(utterance);
    console.log("test_alive")
}
