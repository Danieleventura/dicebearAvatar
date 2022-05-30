/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  filmes: any;
  constructor(private http: HTTP) { }

  obterFilme(filme: string){
    let apiURL = 'https://tastedive.com/api/similar?info=1&q='+filme+'&k=437172-whichmov-P0VVB5VJ';

     this.http.get(apiURL, {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      this.filmes =  JSON.parse(data.data);
    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
    return this.filmes;
  }

  readResult<T>(result: HTTPResponse){
    if(result){
      if(result.data){
        return JSON.parse(result.data) as T;
      }
    }

    return null;
  }

}
