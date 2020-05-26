import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe(params => {

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });
   }

   getArtista( id: string ) {
      this.loading = true;
      this.spotify.getArtista(id)
                  .subscribe( resp => {
                    this.artista = resp;
                    this.loading = false;
                  });
   }

   getTopTracks(id: string) {
     this.spotify.getTopTracks(id).subscribe(resp => {
       this.topTracks = resp;
       console.log(resp);
     });

   }



}
