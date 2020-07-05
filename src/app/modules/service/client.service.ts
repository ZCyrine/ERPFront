import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

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
    const url = this.baseUrl + '/clients';
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  addClient(client) {
    return this.http.post(this.baseUrl + '/clients' , client);
  }

  getDelete(id) {
    return this.http.delete(this.baseUrl + '/clients/' + id);
  }

  updateClient(id, client){
    return this.http.put(this.baseUrl+ '/clients/'+id, client);
  }
}
