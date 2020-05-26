import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotifyService: SpotifyService) {

    this.error = false;
    this.loading = true;

    this.spotifyService.getNewReleases()
    .subscribe( (resp: any) => {
      this.nuevasCanciones = resp;
      this.loading = false;
    }, errorService => {

      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;
      console.log(errorService.error.error.message);
    });
   }

  ngOnInit() {
  }

}
