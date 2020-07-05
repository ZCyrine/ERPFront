import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

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
    const url = this.baseUrl + '/commandes';
    return this.http.get(url, this.httpOptions);
  }

  addCommande(commande){
    return this.http.post(this.baseUrl + '/commandes' , commande);
  }

  getDelete(id) {
    return this.http.delete(this.baseUrl + '/commandes/' + id);
  }

  updateCommande(id, commande) {
    return this.http.put(this.baseUrl + '/commandes/' + id, commande);
  }
}
