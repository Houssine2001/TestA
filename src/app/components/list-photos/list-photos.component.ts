import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/modele/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent {
  album:Album= new Album();
  albumId: string | null = null;
  constructor(private serv:AlbumService , private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    this.serv.getAlbumsById(this.albumId).subscribe((data:any)=>this.album=data);
  }

 
}
