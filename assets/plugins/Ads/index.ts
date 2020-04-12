import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPluin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currenAd: Ad;

    constructor() {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;
        // timeupdate: es un evento que nos anucia que cambió cierto tiempo
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }
    
    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    // Desplegamos un Ad
    private renderAd() {
        // Si ya está mostrando un Ad ya no vuelve a mostrar otro
        if(this.currenAd) {
            return
        }
        const ad = this.ads.getAd();
        this.currenAd = ad;
        console.log(ad);
    }

}

// Lo importamos en index.ts
export default AdsPluin;