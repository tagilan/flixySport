import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import * as appConfig from '../src/assets/config/config';

@Injectable()
export class SportService {

    constructor(public http: Http, ) {
    }

    getMatches() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(appConfig.appConfig.BASEURL + appConfig.appConfig.MATCHLIST, options)
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw((error.status == 401) ? 'error' : console.log('Server Error') || 'server error'));
    }


}