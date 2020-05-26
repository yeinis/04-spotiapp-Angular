import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) { }

  buscar(termino: string) {
    this.loading = true;
    if (termino) {
      this.spotifyService.getArtistas(termino)
      .subscribe((resp: any ) => {
        this.artistas = resp;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

}
