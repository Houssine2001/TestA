import { Component } from '@angular/core';
import { Album } from 'src/app/modele/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent {
 listAlbums!: Album[];

  album!: Album;

  constructor(private service: AlbumService) { }

  ngOnInit(): void {
    this.album = new Album();

    this.service.getAlbums().subscribe((data: Album[]) => {
      this.listAlbums = data;
    });
  }
}
