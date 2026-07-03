let player;
let current = 0;

const clips = [
  {title:"Beyoncé - Part II", id:"4m1EFMoRFvY", start:242, end:261},

  {title:"Beyoncé - Hands In Heaven", id:"tJ8CfpXajdo", start:310, end:310},

  {title:"Jhené Aiko - Sun/Son 1", id:"zZtBexvLCQI", start:53, end:98},
  {title:"Jhené Aiko - Sun/Son 2", id:"zZtBexvLCQI", start:108, end:180},

  {title:"Jhené Aiko - Sing To Me 1", id:"Ln31QeUseP4", start:50, end:62},
  {title:"Jhené Aiko - Sing To Me 2", id:"Ln31QeUseP4", start:110, end:132},

  {title:"Jhené Aiko - Eternal Sunshine", id:"SnnJhEy9IzY", start:0, end:999},

  {title:"Jhené Aiko - Promises 1", id:"soQhR7uAZOY", start:46, end:60},
  {title:"Jhené Aiko - Promises 2", id:"FPEKjdQaNi8", start:324, end:334},

  {title:"Lauryn Hill - Can't Take My Eyes Off You", id:"wVzvXW9bo5U", start:0, end:999},

  {title:"Jay Z - Glory", id:"vpL8VZqArXo", start:0, end:999},

  {title:"Stevie Wonder - Isn't She Lovely", id:"oE56g61mW44", start:0, end:999},

  {title:"Lauryn Hill - To Zion", id:"1sQjh261rU8", start:145, end:270},

  {title:"Jhené Aiko - Love", id:"2iAmEMbiwVI", start:63, end:88},

  {title:"Jhené Aiko - While We Were Young", id:"1RabtoFwOAQ", start:158, end:168},

  {title:"Beyoncé - Protector", id:"f4xrbll8Tvw", start:100, end:125},

  {title:"My Heart My Son", id:"HFtzDh3CtG8", start:0, end:5},

  {title:"Adele - My Little Love", id:"zlF70l1zUKU", start:0, end:40},

  {title:"Beyoncé ft BOOTS - Dreams 1", id:"NZGP2ai07BA", start:160, end:187},
  {title:"Beyoncé ft BOOTS - Dreams 2", id:"NZGP2ai07BA", start:188, end:248},

  {title:"Trippie Redd - Forever Ever", id:"XYb1mdGu5aQ", start:0, end:13},

  {title:"New Edition - Candy Girl", id:"0AzqPl46HcU", start:22, end:40},

  {title:"Lauryn Hill - Sweetest Thing", id:"y-Co5Kz2LuI", start:72, end:90},

  {title:"My Daughter My Princess", id:"3XIXhgA9m54", start:50, end:79},

  {title:"Jhené Aiko - For My Brother", id:"l7gHrZhQnoc", start:126, end:144},

  {title:"Beyoncé - God Made You Beautiful 1", id:"Txrcqgig-jA", start:26, end:52},
  {title:"Beyoncé - God Made You Beautiful 2", id:"Txrcqgig-jA", start:80, end:106},
  {title:"Beyoncé - God Made You Beautiful 3", id:"Txrcqgig-jA", start:189, end:213},

  {title:"Ciara - Promises 1", id:"FPEKjdQaNi8", start:204, end:214},
  {title:"Ciara - Promises 2", id:"FPEKjdQaNi8", start:222, end:232},

  {title:"Bibipi No Beat - Always Be Friends Forever", id:"2WZpjNjVLo4", start:134, end:145},

  {title:"Dave - Raindance", id:"t4yafKiE-5U", start:70, end:88},

  {title:"Mary of Gold - My Little Light", id:"EkitjOdMI54", start:25, end:47},

  {title:"Dave - Yebba's Heartbreak", id:"9rlW2rUzyn0", start:95, end:120},

  {title:"So This Is Love", id:"B4eOCvSvpJM", start:15, end:38},

  {title:"Ciara - I Got You (MV)", id:"BfmawjvHdKo", start:31, end:49},

  {title:"Ebony Jenae - Little Brown Girl 1", id:"V9Y-A2k1Oql", start:61, end:67},
  {title:"Ebony Jenae - Little Brown Girl 2", id:"V9Y-A2k1Oql", start:68, end:77},

  {title:"Kizz Daniel - For You", id:"x_JsNa2oRnl", start:20, end:28},

  {title:"Billie Eilish - Everything I Wanted", id:"qCTMq7xvdXU", start:17, end:24},

  {title:"Alexa Goddard - Angel of Mine", id:"yedjq0RAdCY", start:25, end:47},
  {title:"Alexa Goddard - Angel of Mine 2", id:"yedjq0RAdCY", start:62, end:85}
];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '220',
    width: '100%',
    videoId: clips[0].id,
    events: {
      'onReady': playClip,
      'onStateChange': onStateChange
    }
  });
}

function playClip() {
  const clip = clips[current];
  document.getElementById("nowPlaying").innerText = clip.title;

  player.loadVideoById({
    videoId: clip.id,
    startSeconds: clip.start,
    endSeconds: clip.end
  });
}

function nextClip() {
  if (current < clips.length - 1) current++;
  playClip();
}

function prevClip() {
  if (current > 0) current--;
  playClip();
}

function onStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextClip();
  }
}
