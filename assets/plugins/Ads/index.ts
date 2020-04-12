import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPluin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContiner: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContiner = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.player.container.appendChild(this.adsContiner);
        this.media = this.player.media;
        // timeupdate: es un evento que nos anucia que cambió cierto tiempo
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }
    
    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        // Se muestra un nuevo anuncio cada 30 segundos
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    // Desplegamos un Ad
    private renderAd() {
        // Si ya está mostrando un Ad ya no vuelve a mostrar otro
        if(this.currentAd) {
            return
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;

        // Desplegamos en la página el Add
        this.adsContiner.innerHTML = `<div class="ads">
        <a class="ads__link"href="${this.currentAd.url}"target="_blank">
          <img class="ads__img"src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>
        `;

        // Eliminamos el anuncio después de 10 segundos
        setTimeout(()=> {
            this.currentAd = null;
            this.adsContiner.innerHTML = ''
        }, 10000);

    }

}

// Lo importamos en index.ts
export default AdsPluin;