import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';



@Injectable()
export class HttpService {

    public host: string;
    public data: {};
    public showMessage = false;

    constructor(private jsonp: Jsonp) {
      this.host = environment.host;
    }

    getMusic(name: string): Observable<{}> {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(`${this.host}${name}`, {search:params})
                     .map(data => this.data = data.json().results)
                     .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      this.showMessage = true;
      return Promise.reject(error.message || error);
    }

}
