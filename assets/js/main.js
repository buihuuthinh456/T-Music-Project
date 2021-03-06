const sliderContainer = document.querySelector('.slider-container');
const dotSlider = document.querySelector('.slider-dot')

const loginBtn = document.querySelector('.login');
const signUpBtn = document.querySelector('.register');
const modal = document.getElementById('modal');
const modalLogin = document.querySelector('.login-container');
const modalLoginExit = document.querySelector('.login-exit');
const modalSignUpExit = document.querySelector('.signup-exit');
const modalSignUp = document.querySelector('.signup-container');
const changeFromSignUpToLogin = document.querySelector('.option-form-top__btn.sign-up');
const changeFromLoginToSignUp = document.querySelector('.option-form-top__btn.login');

const homeMusicContainer = document.querySelector('.home-music');
const playMusicContainer = document.querySelector('.play-music');
const playMusicBtn = document.querySelector('.play-music-btn');
const homeMusicBtn = document.querySelector('.home-music-btn');

const audio = document.querySelector('#audio');
const prevBtn = document.querySelector('#prevBtn');
const playBtn = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');
const randomBtn = document.querySelector('#randomBtn');
const loopBtn = document.querySelector('#loopBtn'); 
const downloadBtn = document.querySelector('#downloadBtn');

const playlistSong = document.querySelector('.playlist-playing-song');
const currentSongName = document.querySelector('.playing-song__name');
const cdThumb = document.querySelector('.cd-thumb'); 
const youtubeCurrentSong = document.querySelector('.current-song-details__youtube')
const youtubeLyrics = document.querySelector('.current-song-details__lyrics');

const progressTime = document.querySelector('#progress-time-song');
const progressTimeValue = document.querySelector('.song-handle-time__value');

const progressVolume = document.querySelector('#progress-volume-song');
const progressVolumeValue = document.querySelector('.song-handle-volume__value');
// Song Playing Beside
const playingSongBeside = document.querySelector('.current-song-beside');
const playingCdThumbBeside = document.querySelector('.cd-thumb-beside');
const playingSongBesideName = document.querySelector('.current-song-beside-name');
// 
const imgAlbumItem = document.querySelectorAll('.ablum-item__icon-overlay__box__btn');
const rankBtn = document.querySelector('.ranklist-title__box-icon');
const headerLogo = document.querySelector('.header-logo');

let flag = 1;
// Ng??n ch???n h??nh vi scroll khi nh???n space
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });
// Th??m ch???c n??ng b???t t???t khi nh???n n??t esc, space
document.onkeyup = (e)=>{
    if(e.keyCode === 32)
    {
        if(flag===0){
            audio.pause();
            flag=1;
        }
        else{
            audio.play();
            flag=0;

        }
    }
    if(e.keyCode === 27)
    {
        modal.style.display = 'none';
    }
}

const MUSIC_STORAGE_KEY = 'MUSIC_PLAYER';
const app = {
    currentIndex:0,
    isRandom:false,
    isRepeat:false,
    isPlaying:false,
    config:JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY))||{},
    songs:[
        {
            name:'C?????i Th??i',
            singer:'Masew,TAP,B-Ray',
            mp3:'./assets/music-mp3/CuoiThoi.mp3',
            youtube:'_8ldAdQd9WU',
            image:'./assets/music-img/CuoiThoi.jpg',
            lyrics:`My babe, my babe <br>
            L??m sao cho anh ?????n ????y v?? h???i c?????i em m???i hay<br>
            Yeah-eh-eh<br>
            My babe, my babe<br>
            M??? anh b???o r???ng ch???ng th??ch em n??n anh c??? m??i ph??n v??n<br>
            Gi???ng nh?? bao c?? th??i m??<br>
            T??m m??i m???i g???p ???????c anh m??<br>
            Ch??ng ta quen nhau l??u r???i<br>
            C??ng ???? ??m h??n nhau lu??n r???i<br>
            Gi???ng nh?? bao l???i anh h???a<br>
            Gi???u m???i ng?????i l??m chi n???a<br>
            Ng?????i gi??? v??? kh??ng quen em ????? em ph???i ??au bu???n h??n<br>
            C?????i em ??i anh ??i<br>
            Gi??? em ch???ng mu???n l??i th??i<br>
            ????? khi 2 v???ch m???i c?????i, kh??n nh?? anh qu?? em ?????y<br>
            C?????i em ??i anh ??i<br>
            V??? nh?? r???i ch??ng ta ch??i<br>
            V?? em th????ng em m???i th???<br>
            Anh c?? ra sao v???n m??<br>
            C?????i ??i th??i anh ??i<br>
            Yeah-eh<br>
            Oh-oh-oh<br>
            Ta c?????i nhau th??i anh ??i<br>
            Yeah-eh<br>
            Oh-uhm-uhm<br>
            Ng?????i ??i ng?????i ????u g???p g??? l??m chi<br>
            Khi n??o ki???u ????? ???????c r?????c n??ng ??i<br>
            Song gia ch?? b??c b???n d??<br>
            G??p m???t chung vui v??o ng??y hoan h???<br>
            Con g??i l?? con g??i r?????u<br>
            ????y l?? phi v??? c??? tr??m ng??n t???<br>
            S??nh l??? c??ng ch???ng c?? g??<br>
            M???t chai r?????u m???n, m???t t???n v??ng y<br>
            Em ??i em ??i m??nh c?????i nhau ??i<br>
            K??? t??? c??i ng??y s??t ????nh kh??ng ch???t, th?? anh ???? k???t l???y em v??? nh??<br>
            Ch???t s??? v???y lu??n cho b???t c???ng k???nh<br>
            Ng??y m?? em va v??o cu???c ?????i anh<br>
            Ph?? tan c?? ????n v?? ???? kh??ng ?????n<br>
            L?? em ???? n??? c??? ?????i c??? ki???p, n??? th???ng cu t??<br>
            M??nh c?????i nhau ??i<br>
            My babe, my babe<br>
            M??? anh b???o r???ng ch???ng th??ch em n??n anh c??? m??i ph??n v??n<br>
            Yeah-eh-eh<br>
            My babe, my babe<br>
            K??? ai m???c ai c?? n??i c??ng ch???ng quan t??m th??? cho nhanh<br>
            Gi??? t??nh sao?<br>
            Uh-oh-oh-oh<br>`,
        },
        {
            name:'Nh???ng Ng??y',
            singer:'Dick,Tuy???t',
            mp3:'./assets/music-mp3/NhungNgay.mp3',
            youtube:'8BTfgwE27CY',
            image:'./assets/music-img/NhungNgay.jpg',
            lyrics:`
            V??... Anh mu???n n??i em nghe v??i l???n<br>
            Nh???ng ng??y m??nh c?? ???????c nhau l?? nh???ng ng??y b??nh y??n cu???c s???ng ngo??i ?????i<br>
            Ngo??i tr???i c?? h???t s????ng c??i l??ng em l?? ch??n g???i<br>
            Anh n???m b??n tay em l???y n??? h??n l?? ranh gi???i<br>
            Ch??? anh nh?? h??y c??ng nhau l??m t??ch c?? ph?? v??o s??ng nay<br>
            Gi???t n???ng chi???u d?????i nh???ng t??n c??y nh??n ???????ng ch??n tr???i d?????i ??ng m??y<br>
            Em b???o m???y ng??y ta y??u anh b???o kh??ng t??nh b???ng v??i c??u ?????i<br>
            L?? l?? thu r??i x??o x???c ch???ng ???????ng c??ng nhau ??? ngo??i con ph???<br>
            N???ng h???. V????ng tr??n c??nh l?? v?? h????ng hoa<br>
            Anh c??n l??u ch??t k??? ni???m m???i t?????ng ch???ng l?? h??m qua<br>
            Nh??ng qu?? kh??? l?? chuy???n c?? h??y qu??n ??i ?????ng ch???m v??o<br>
            Th??? duy nh???t m?? anh gi??? l???i l?? nh???ng n??t b??t c??n s???m m??u<br>
            Anh l???i mu???n ???????c c??ng em hai ta lang thang tr??n ??o???n d???c<br>
            Anh v???i v?? t??m m???t nh??nh hoa nh??? nh??ng c??i l??n tr??n l???n t??c<br>
            V??? t??nh n??y l?? thanh khi???t kh??ng c???n n??i ???? b???t g???p<br>
            Anh ch???ng cho em m???t gi???c m?? xin em ?????ng ?????m ????? tr??? th??nh ??c m???ng<br>
            
            ??o???n Tuy???t :<br>  
            C??ng b??ng qua bao th??ng n??m ng?? nghi??ng<br>
            V?????t ch??ng ch??nh, ta m??i lu??n ??? b??n <br>
            K??? vai nhau m?? gi???c m?? b??nh y??n <br>
            Say c??n m??, nghe gi?? ru tim m??nh <br>
            ????n chi???c h??n em ????ng ?????y <br>
            H??y ?????n v???i em cho ????m t??n <br>
            R??t ?????m say cho lan tr??n <br>
            Ng??t m??u y??u mang v??o tim <br>
            
            Ver 2 :<br>
            Anh l???i gh?? qua n??i ????y nh???ng ng??ybu???i chi???u phim c??t s??t<br>
            Kh??ng ti???ng s??ng v??? r?? r??o ch??? ngo??i n?????c ngo??i g??c b???p<br>
            Anh nh??n v??o ????m th??u n??i th???p l??n ng???n l???a t??nh <br>
            Anh ch???t th???y c???nh n???ng h??? ???? c?? em ??? gi???a m??nh<br>
            V?? em l?? ng?????i khi???n cho n???i nh??? ???????c c???i thi???n<br>
            Y??u l?? th???i kh???c ????? ni???m tin ???????c tr???i nghi???m<br>
            Xa nhau l?? kho???ng tr???ng nh?? c?? ????m m?? thi???u ng??y<br>
            ????m nay sao ?????n tr??? em nh??n anh nh??u m??y<br>
            M??nh c?? ng??y h?? h???n trong kh??t v???ng ho??i l???c b?????c<br>
            Ng??y th??ng 10 v??ng ngo???i ?? ?????ng l?? v??ng v??i h???t n?????c<br>
            Ngo??i tr???i th?? gi?? m??a li???u c?? s???c tr??n t???ng ng??y<br>
            Ch??? c???n em nh???n ??i???m h???n anh kh??ng ng???i v???t s???ng n??y<br>
            Anh y??u c??? b???u tr???i y??u c??nh ?????ng v?? c??? lau<br>
            Anh y??u nh???ng ng??y n???ng ??o???n ???????ng v???ng ??? ng?? sau<br>
            Li???u c??u h???i ???????c ?????t ra gi???a bi???t bao phong ba t??nh<br>
            Anh im l???ng nh??? nh??ngv?? t???ng cho em m???t b??ng hoa qu???nh<br>
            H??t :  <br>
            Ng?????i v??? ????y tr??m ng??n mong ch??? <br>
            V?? h???n em phi??u di??u c??ng gi??<br>
            G???i m??a y??u m?? m??ng c??u th???<br>
            ?????i x?? nghi??ng m??i m??i ko r???i<br>
            
            ????n chi???c h??n em ??ong ?????y<br>
            H??y ?????n v???i em cho ????m t??n <br>
            R??t ?????m say cho lan tr??n<br>
            Ng??t m??u y??u mang v??o tim<br>
            
            Nghe ng??n nga trong tim l???i ca v??? anh, nh??? th????ng bao ????m anh ??i c?? hay<br>
            Mong ta m??i ??? b??n ng?????i ??i, ch??? gh?? qua nh?? c??n gi?? bu???n<br>
            Nghe b??ng khu??ng trong tim ni???m y??u, ch??? m??y bay cho tan c??n m??a chi???u nh??? nhung<br>
            M?? n???ng m??i ???m trong ?????i, mang anh y??u ?????n, ru l??ng ng??t say<br>
            
            ????n chi???c h??n em ??ong ?????y<br>
            H??y ?????n v???i em cho ????m t??n <br>
            R??t ?????m say cho lan tr??n<br>
            Ng??t m??u y??u mang v??o tim<br>
            `,
        },
        {
            name:'Th??ng 10 Cho Em',
            singer:'Tofu, 1nG',
            mp3:'./assets/music-mp3/Thang10ChoEm.mp3',
            youtube:'g3Xu-sx9CEc',
            image:'./assets/music-img/Thang10ChoEm.jpg',
            lyrics:'Kh??ng x??c ?????nh',
        },
        {
            name:'C?? H???t S????ng Tr??n M???t Em',
            singer:'Dick,NHA,X??m',
            mp3:'./assets/music-mp3/CoHatSuongTrenMatEm.mp3',
            youtube:'tCEdzGldeaA',
            image:'./assets/music-img/CoHatSuongTrenMatEm.jpg',
            lyrics:'Kh??ng x??c ?????nh',
        },
        {
            name:'Anh Bi???t',
            singer:'X??m, D.Blue',
            mp3:'./assets/music-mp3/AnhBiet.mp3',
            youtube:'OufLTUWAEWc',
            image:'./assets/music-img/AnhBiet.jpg',
            lyrics:'Kh??ng x??c ?????nh',
        },
        {
            name:'Mu???n ???????c C??ng Em',
            singer:'Freaky, Qu???nh Gai, CM1X',
            mp3:'./assets/music-mp3/MuonDuocCungEm.mp3',
            youtube:'BZYp-6D0SDY',
            image:'./assets/music-img/MuonDuocCungEm.jpg',
            lyrics:'Kh??ng x??c ?????nh',
        },
        {
            name:'Gh?? Qua',
            singer:'Tofu, Dick, PC',
            mp3:'./assets/music-mp3/GheQua.mp3',
            youtube:'zEWSSod0zTY',
            image:'./assets/music-img/GheQua.jpg',
            lyrics:'Kh??ng x??c ?????nh',
        },
    ],
    setConfig:function(key,value){
        this.config[key]=value;
        localStorage.setItem(MUSIC_STORAGE_KEY,JSON.stringify(this.config));
    },
    render:function(){
        const htmls = this.songs.map((song,index)=>{
            return `
            <li class="playlist-playing-song-item ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                <img src="${song.image}" alt="Avatar_Song" 
                    class="playlist-playing-song-item__img">
                <div class="playlist-playing-song-item-details">
                    <div class="playlist-playing-song-item-details__name">
                        T??n b??i h??t: <span>${song.name}</span>
                    </div>
                    <div class="playlist-playing-song-item-details__singer">
                        T??n ca s??: <span>${song.singer}</span>
                    </div>
                    <div class="playlist-playing-song-item-details__author">
                        Ng?????i s??ng t??c: <span>${song.singer}</span>
                    </div>
                </div>
            </li> `
        });
        playlistSong.innerHTML = htmls.join('');
    },
    loadCurrentSong:function(){
        currentSongName.innerHTML = `<span>B??i h??t ??ang ???????c ch???y:</span>${this.songs[this.currentIndex].name}`;
        cdThumb.style.backgroundImage = `url(${this.songs[this.currentIndex].image})`;
        audio.src = this.songs[this.currentIndex].mp3;
        youtubeCurrentSong.src = `https://www.youtube.com/embed/${this.songs[this.currentIndex].youtube}`;
        youtubeLyrics.innerHTML =`Lyrics: </br> ${this.songs[this.currentIndex].lyrics}`;
        playingSongBesideName.innerHTML=`${this.songs[this.currentIndex].name}`;
        playingCdThumbBeside.style.backgroundImage=`url(${this.songs[this.currentIndex].image})`;
        
    },
    loadConfig:function(){
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    handleEvents:function(){
       // _this = this;
        // X??? l?? ????a nh???c quay quay
        // const cdWidth = cdThumb.offsetWidth;
        const cdThumbAnimate = cdThumb.animate([
            {transform:'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        });
        cdThumbAnimate.pause();
        // X??? l?? ????a nh???c Song Beside xoay
        // const cdSongBesideWidth = playingCdThumbBeside.offsetWidth;
        const cdThumbSongBesideAnimate = playingCdThumbBeside.animate([
            {transform:'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        });
        cdThumbSongBesideAnimate.pause();
        // X??? l?? khi nh???n n??t play
        playBtn.addEventListener('click',()=>{
            if ( this.isPlaying){
                audio.pause();
            }
            else{
                audio.play();
            }
        })
        // Khi xong ???????c play
        audio.onplay=()=>{
            this.isPlaying=true;
            playBtn.classList.remove('ti-control-play');
            playBtn.classList.add('ti-control-pause');
            playingSongBeside.style.display = 'flex';
            cdThumbAnimate.play();
            cdThumbSongBesideAnimate.play();
        }
        audio.onpause=()=>{
            this.isPlaying=false;
            playBtn.classList.add('ti-control-play');
            playBtn.classList.remove('ti-control-pause');
            cdThumbAnimate.pause();
            cdThumbSongBesideAnimate.pause();
            playingSongBeside.style.display = 'none';
        }

        // X??? l?? khi th???i gian thay ?????i
        audio.ontimeupdate = ()=>{
            if(audio.duration){
                const progressPercent = Math.floor((audio.currentTime / audio.duration * 100));
                const minutes = Math.floor(audio.currentTime/60);
                const seconds = Math.floor(audio.currentTime-minutes*60);

                progressTime.value = progressPercent;
                progressTimeValue.innerHTML=`0${minutes}:${seconds>=10?seconds:"0"+seconds}`;
            }
        }
        // X??? l?? khi tua music
        progressTime.oninput = (e)=>{
            const seekTime = e.target.value/100 * audio.duration;
            audio.currentTime = seekTime;
        }
        // X??? l?? khi thay ?????i ??m l?????ng
        progressVolume.oninput = (e)=>{
            const seekVolume = e.target.value;
            progressVolume.value = seekVolume;
            progressVolumeValue.innerHTML=`${seekVolume}%`
            audio.volume = seekVolume/100;
            console.log(seekVolume);
        }
        // X??? l?? khi end song th?? auto next
        audio.onended = ()=>{
            if(this.isRepeat){
                 audio.play()
            }
            else{
                nextBtn.click()
            }
        }
        // Khi nh???n n??t next song
        nextBtn.addEventListener('click',()=>{
            if(this.isRandom){
                this.playRandomSong();
            }
            else{
                this.nextSong();
            }
            this.render();
            this.scrolltoCurrentSong();
            audio.play();
        })
        // Khi nh???n n??t prev song
        prevBtn.addEventListener('click',()=>{
            if(this.isRandom){
                this.playRandomSong();
            }
            else{
                this.prevSong();
            }
            this.render();
            this.scrolltoCurrentSong();
            audio.play();
        })
        // Khi nh???n n??t Random
        randomBtn.addEventListener('click',()=>{
            this.isRandom = !this.isRandom;
            this.setConfig('isRandom',this.isRandom);
            randomBtn.classList.toggle('active',this.isRandom);
        })
        // Khi nh???n n??t Repeat
        loopBtn.addEventListener('click',()=>{
            this.isRepeat = !this.isRepeat;
            this.setConfig('isRepeat',this.isRepeat);
            loopBtn.classList.toggle('active',this.isRepeat);
        })
        // Khi nh???n n??t download
        downloadBtn.addEventListener('click',{})


        // X??? l?? khi click v??o 1 song c??? th???
        playlistSong.onclick = (e)=>{
            const songNode = e.target.closest('.playlist-playing-song-item:not(.active)');
            if(songNode&& !e.target.closest('.option')){
                this.currentIndex = Number(songNode.dataset.index);
                this.loadCurrentSong();
                this.render();
                audio.play();
            }
            if(e.target.closest('.option'))
            {
                console.log(123123);
            }

        }
    },
    nextSong:function(){
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length){
            this.currentIndex =0;
        }
        this.loadCurrentSong();
    },
    prevSong:function(){
        this.currentIndex--;
        if(this.currentIndex<0){
            this.currentIndex =this.songs.length-1;
        }
        this.loadCurrentSong();
    },
    playRandomSong:function(){
        let newIndex ;
        do {
            newIndex = Math.floor(Math.random()* this.songs.length);
        }while(newIndex==this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    scrolltoCurrentSong:function(){
        setTimeout(()=>{
            document.querySelector('.playlist-playing-song-item.active').scrollIntoView({
                behavior:'smooth',
                block: this.currentIndex < 3 ? 'center': 'nearest' 
            })
        },300)
    },
    start:function(){
        //Load state Config
        this.loadConfig();
        //Render Playlist Song
        this.render();
        //Load CurrentSong
        this.loadCurrentSong();
        //X??? l?? event
        this.handleEvents();
        // Hi???n th??? tr???ng th??i config button ???? l??u
        randomBtn.classList.toggle('active',this.isRandom);
        loopBtn.classList.toggle('active',this.isRepeat);
    },
    
}
app.start();

// Modal
function showModalSignUp(){
    modal.style.display = 'flex';
    modalSignUp.style.display = 'block';
    modalLogin.style.display = 'none';
}
function showModalLogin(){
    modal.style.display = 'flex';
    modalLogin.style.display = 'block';
    modalSignUp.style.display = 'none';
}
function closeModal(){
    modal.style.display = 'none';
    modalLogin.style.display = 'none';
    modalSignUp.style.display = 'none';
}
// Slide Button
function openPlayMusic(){
    homeMusicContainer.style.display = 'none';
    playMusicContainer.style.display = 'flex';
}
function openHomeMusic(){
    homeMusicContainer.style.display = 'flex';
    playMusicContainer.style.display = 'none';
}

loginBtn.addEventListener('click',showModalLogin);
signUpBtn.addEventListener('click',showModalSignUp);

changeFromSignUpToLogin.addEventListener('click',showModalLogin);
changeFromLoginToSignUp.addEventListener('click',showModalSignUp);


modalLoginExit.addEventListener('click',closeModal);
modalSignUpExit.addEventListener('click',closeModal);

modal.addEventListener('click',closeModal);
modalLogin.addEventListener('click',(e)=>e.stopPropagation());
modalSignUp.addEventListener('click',(e)=>e.stopPropagation());


playMusicBtn.addEventListener('click',openPlayMusic);
homeMusicBtn.addEventListener('click',openHomeMusic);

imgAlbumItem.forEach((element)=>{
    element.addEventListener('dblclick',openPlayMusic);
})
rankBtn.addEventListener('click',openPlayMusic);
headerLogo.addEventListener('click',openHomeMusic);

// Slider
const slider = {
    currentIndex:1,
    listSliders:[
        {
            name: 'Yoona',
            path:'./assets/img/Yoona.jpg',
        },
        {
            name: 'YNhi',
            path:'./assets/img/YNhi.jpg',
        },
        {
            name: 'Yurisa',
            path:'./assets/img/Yurisa.jpg',
        },
        {
            name: 'IU',
            path:'./assets/img/IU.jpg',
        },
        {
            name: 'Dahuyn',
            path:'./assets/img/Dahuyn.jpg',
        },
        {
            name: 'TinhY',
            path:'./assets/img/TinhY.jpg',
        },
    ],
    render: function(){
        const lengthSlider = this.listSliders.length -1;
        // Render slider
        let htmlsSlider = this.listSliders.map((sliderElement,index)=>{
           if(index===0||index===lengthSlider){
                if(index===0){
                    return   `
                    <div class="mySlider">
                        <img src="${this.listSliders[lengthSlider].path}" alt="${this.listSliders[lengthSlider].name}" class="mySlider__img">
                    </div>
                    <div class="mySlider">
                         <img src="${sliderElement.path}" alt="${sliderElement.name}" class="mySlider__img">
                     </div>
                             `
                }
                else{
                    return   `
                    <div class="mySlider">
                         <img src="${sliderElement.path}" alt="${sliderElement.name}" class="mySlider__img">
                     </div>
                    <div class="mySlider">
                        <img src="${this.listSliders[0].path}" alt="${this.listSliders[0].name}" class="mySlider__img">
                    </div>
                             `
                }
           }
           else{
               return   `
              <div class="mySlider">
                   <img src="${sliderElement.path}" alt="${sliderElement.name}" class="mySlider__img">
               </div>
                       `
           }
        });
        htmlsSlider.push(`
        <button class="btn-prev ti-angle-left" ></button>
        <button class="btn-next  ti-angle-right" ></button>
        `)
        sliderContainer.innerHTML = htmlsSlider.join('');
        // Render dot slider
        let htmlsDotSlider = this.listSliders.map((sliderElement,index)=>{
            return `<span class="dot" data-sliderindex='${index+1}'></span>`
        })
        dotSlider.innerHTML =  htmlsDotSlider.join('');
        
    },
    showSlider:function(direction='right',jumpIndex=-99){
        const mySlider = [...document.querySelectorAll('.mySlider')];
        const myDot = [...document.querySelectorAll('.dot')];
        if(jumpIndex>0){
            this.currentIndex = Number(jumpIndex);
            console.log(jumpIndex);
        }
        myDot.forEach((element)=>{
           element.classList.remove('center','left','right');
        });
       
        mySlider[this.currentIndex].classList.add('center');

        mySlider[this.currentIndex-1].classList.add('left');

        mySlider[this.currentIndex+1].classList.add('right');
        if(direction=='right'){
            this.animationRight();
        }
        else if (direction=='left'){
            this.animationLeft();
        }
        myDot[this.currentIndex-1].classList.add('active');
        myDot.forEach((element)=>{
            element.addEventListener('click',(e)=>{
                this.render();
                this.showSlider('right',e.target.dataset.sliderindex);
                this.handleEvents();
                clearInterval(sliderRun);
                sliderRun = setInterval(slider.sliderStart.bind(slider),5000);
            });
        });
    },
    animationRight:function(){
        const mySlider = [...document.querySelectorAll('.mySlider')];
        const widthSlider = mySlider[this.currentIndex+1].offsetWidth;
        const widthSliderCenter = mySlider[this.currentIndex].offsetWidth;
        const distance = widthSliderCenter - Math.floor(widthSliderCenter*0.6) +widthSlider;
        let animationCenter = mySlider[this.currentIndex].animate([
            {   
                transform: `scale(0.6,1) translateX(${distance}px)`,
                filter:'brightness(40%)'
            },
            { 
                transform: 'scale(1,1.1) translateX(0px)',
                filter:'brightness(100%)',
             }
        ],{
            duration:1200,
        })
        animationCenter.play();
        let animationLeft = mySlider[this.currentIndex-1].animate([
            {   
                transform: `scale(1,1.1) translateX(${widthSlider}px)`,
                filter:'brightness(100%)'
            },
            { 
                transform: 'scale(0.8,1) translateX(0px)',
                filter:'brightness(40%)',
             }
        ],{
            duration:1000,
        })
        animationLeft.play();
        let animationRight = mySlider[this.currentIndex+1].animate([
            {   
                transform: `translateX(${widthSlider}px)`,
                filter:'brightness(100%)'
            },
            { 
                transform: 'translateX(0px)',
                filter:'brightness(40%)',
             }
        ],{
            duration:1000,
        })
        animationRight.play();
    },
    animationLeft:function(){
        const mySlider = [...document.querySelectorAll('.mySlider')];
        const widthSlider = mySlider[this.currentIndex+1].offsetWidth;
        const widthSliderCenter = mySlider[this.currentIndex].offsetWidth;
        const distance = widthSliderCenter - Math.floor(widthSliderCenter*0.6) +widthSlider;
        let animationCenter = mySlider[this.currentIndex].animate([
            {   
                transform: `scale(0.6,1) translateX(-${distance}px)`,
                filter:'brightness(40%)'
            },
            { 
                transform: 'scale(1,1.1) translateX(0px)',
                filter:'brightness(100%)',
             }
        ],{
            duration:1000,
        })
        animationCenter.play();
        let animationLeft = mySlider[this.currentIndex-1].animate([
            {   
                transform: `scale(1,1.1) translateX(-${widthSlider}px)`,
                filter:'brightness(100%)'
            },
            { 
                transform: 'scale(0.8,1) translateX(0px)',
                filter:'brightness(40%)',
             }
        ],{
            duration:1000,
        })
        animationLeft.play();
        let animationRight = mySlider[this.currentIndex+1].animate([
            {   
                transform: `translateX(-${widthSlider}px)`,
                filter:'brightness(100%)'
            },
            { 
                transform: 'translateX(0px)',
                filter:'brightness(40%)',
             }
        ],{
            duration:1000,
        })
        animationRight.play();
    },
    changeSlider:function(number){
        const mySlider = [...document.querySelectorAll('.mySlider')];
        this.currentIndex+=number;
        if(this.currentIndex>mySlider.length-2){
            this.currentIndex=1;
        }
        if(this.currentIndex<1){
            this.currentIndex=mySlider.length-2;
        }
    },
    handleEvents:function(){
        const btnNext = document.querySelector('.btn-next');
        const btnPrev = document.querySelector('.btn-prev');
        btnNext.addEventListener('click',()=>{
            this.changeSlider(1);
            this.render();
            this.showSlider();
            this.handleEvents();
            clearInterval(sliderRun);
            sliderRun = setInterval(slider.sliderStart.bind(slider),5000);
        })
        btnPrev.addEventListener('click',()=>{
            this.changeSlider(-1);
            this.render();
            this.showSlider('left');
            this.handleEvents();
            clearInterval(sliderRun);
            sliderRun = setInterval(slider.sliderStart.bind(slider),5000);
        })
    },
    sliderStart:function(){
        this.changeSlider(1);
        this.render();
        this.showSlider();
        this.handleEvents();
    },
}
slider.sliderStart.bind(slider)();
let sliderRun = setInterval(slider.sliderStart.bind(slider),5000);


