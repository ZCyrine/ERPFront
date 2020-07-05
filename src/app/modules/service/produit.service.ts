import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

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
    const url = this.baseUrl + '/produits';
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  addProduit(produit) {
    return this.http.post(this.baseUrl + '/produits' , produit);
  }

  getDelete(id) {
    return this.http.delete(this.baseUrl + '/produits/' + id);
  }

  updateProduit(id, produit) {
    return this.http.put(this.baseUrl + '/produits/' + id, produit);
  }

  getProduitId(id) {
    return this.http.get('http://localhost:8000' + id);
  }

}

