import { Component } from '@angular/core';
import { Album } from 'src/app/modele/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album: Album;
  albums: Album[] = [];

  constructor(private crud: AlbumService) {
    this.album = new Album();
  }


  ngOnInit(): void {

  }
 /* onSubmit(): void {
    this.menu.approuved = false;
    this.menu.mark = 0;
    this.menus.push({ ...this.menu });
    this.menu = new Menu(); // Reset the form
    console.log(this.menus);

  }*/


    onSubmit(album:Album){
      album.archived = 0;
 album.creationDate = new Date();
     this.crud.postAlbums(album).subscribe();
      
    }
}
