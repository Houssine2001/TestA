import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/modele/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  listAlbums!: Album[];
  albume:Album= new Album();
  albumId: string | null = null;

  album!: Album;

  constructor(private service: AlbumService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.album = new Album();
    this.albumId = this.route.snapshot.paramMap.get('id');
    this.service.getAlbumsById(this.albumId).subscribe((data:any)=>this.album=data);
    this.service.getAlbums().subscribe((data: Album[]) => {
      this.listAlbums = data;
    });
  }


  deleteAlbums(id: number) {
    this.service.deleteAlbums(id).subscribe(() => {
      this.listAlbums = this.listAlbums.filter(p => p.id !== id);
    });
  }






 








}
