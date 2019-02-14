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

		let headers = new Headers();
		headers.append('Mime-Type', 'multipart/form-data');
		user = this.transformObjectToFormData(user);

		return this.http.post(SignupService.url + '/gt_participants', user, new RequestOptions({ headers: headers }))
			.toPromise()
			.then((res) => res.json());

	}

	addGeParticipant(user){

		let headers = new Headers();
		headers.append('Mime-Type', 'multipart/form-data');
		user = this.transformObjectToFormData(user);

		return this.http.post(SignupService.url + '/ge_participants', user, new RequestOptions({ headers: headers }))
			.toPromise()
			.then((res) => res.json());
	}

	transformObjectToFormData(object) {
		let formData = new FormData();

		let participant = Object.keys(object)[0];

		for(let i = 0; i < Object.keys(object[participant]).length; i++) {

			let k = Object.keys(object[participant])[i];
			formData.append(participant + '[' + k + ']', object[participant][k]);

		}

		return formData;
	}

	checkValidEmail(email){
		return this.http.get(SignupService.url + '/exchange_participants?email=' + email)
			.toPromise()
			.then((res) => res.json());
	}

	getUniversities(search?, city?){

		let query = { limit : 10, name : '', city : '' };

		if (search) query.name = search;
		if (city) query.city = city;

		return this.http.get(SignupService.url + `/universities`, {
			params : query
		})
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
