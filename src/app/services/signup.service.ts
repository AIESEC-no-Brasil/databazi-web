import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

	public static url: string = environment.apiUrl;

	constructor( public http: Http ) { }

	headers(){
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new RequestOptions({ headers: headers });
	}

	addGvParticipant(user){
		return this.http.post(SignupService.url + '/gv_participants', user, this.headers())
			.toPromise()
			.then((res) => res.json());
	}

	addGtParticipant(user){
		return this.http.post(SignupService.url + '/gt_participants', user, this.headers())
			.toPromise()
			.then((res) => res.json());
	}

	addGeParticipant(user){
		return this.http.post(SignupService.url + '/ge_participants', user, this.headers())
			.toPromise()
			.then((res) => res.json());
	}

	checkValidEmail(email){
		return this.http.get(SignupService.url + '/exchange_participants?email=' + email)
			.toPromise()
			.then((res) => res.json());
	}

	getUniversities(search?, city?){
		search = search || '';
		city = city || '';
		return this.http.get(SignupService.url + `/universities?name=${search}&city=${city.name}&limit=10`)
			.toPromise()
			.then((res) => res.json());
	}

	getCourses(){
		return this.http.get(SignupService.url + '/college_courses')
			.toPromise()
			.then((res) => res.json());
	}

	getLocalCommittees(){
		return this.http.get(SignupService.url + '/local_committees')
			.toPromise()
			.then((res) => res.json());
	}
}
