import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Album} from './album';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .pipe(map(response => <Album>response.json()));
  }
}
