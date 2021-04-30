class Movies {
    constructor(elem) {
        this.connection = document.querySelector(elem.connection);
        this.video = this.connection.querySelector('video');
        this.play = this.connection.querySelector('.play');
        this.pause = this.connection.querySelector('.pause');
        this.loadCurrent = this.connection.querySelector('.load__line_current');
        this.volume = this.connection.querySelector('.volume');
        this.muted = this.connection.querySelector('.muted');
        this.video.addEventListener('timeupdate', () => this.loadTime())

        this.volume.addEventListener('click', () => this.volumeOn())
        this.muted.addEventListener('click', () => this.volumeOn())
        this.video.addEventListener('click', () => this.videoPlay())
        this.play.addEventListener('click', () => this.videoPlay())
        this.pause.addEventListener('click', () => this.videoPlay())

    }
    loadTime() {
        this.loadCurrent.style.width = `${this.video.currentTime / this.video.duration * 100 }%`
    }
    videoPlay() {
        if (this.pause.classList.contains('hidden')) {
            this.pause.classList.remove('hidden');
            this.play.classList.add('hidden');

            this.video.play()
        } else {
            this.pause.classList.add('hidden');
            this.play.classList.remove('hidden');
            this.video.pause();

        }
    }
    volumeOn() {
        if (this.volume.classList.contains('hidden')) {
            this.volume.classList.remove('hidden');
            this.muted.classList.add('hidden');
            this.video.muted= true;
        } else {
            this.volume.classList.add('hidden');
            this.muted.classList.remove('hidden');
            this.video.muted= false;
        }
    }


}



const video = new Movies({
    connection: '.video__player'
})