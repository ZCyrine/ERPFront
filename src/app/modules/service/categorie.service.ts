import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  getAll() {
    const url = this.baseUrl + '/categories';
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  addCategorie(categorie) {
    return this.http.post(this.baseUrl + '/categories' , categorie);
  }

  getDelete(id) {
    return this.http.delete(this.baseUrl + '/categories/' + id);
  }

  updateCategorie(id, categorie) {
    return this.http.put(this.baseUrl + '/categories/' + id, categorie);
  }



}
