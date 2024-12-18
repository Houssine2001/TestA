import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../modele/Album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  postAlbums(album: Album) {
    return this.http.post('http://localhost:3000/albums', album);
  }
  deleteAlbums(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAlbumsById(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/albums/' + id);
  }

}
