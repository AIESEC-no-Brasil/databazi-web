import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import * as Sentry from '@sentry/browser';
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
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	addGtParticipant(user){
		return this.http.post(SignupService.url + '/gt_participants', user, this.headers())
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	addGeParticipant(user){
		return this.http.post(SignupService.url + '/ge_participants', user, this.headers())
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	addHostParticipant(user){
		return this.http.post(SignupService.url + '/exchange_student_hosts', user, this.headers())
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	checkValidEmail(email){
		return this.http.get(SignupService.url + '/exchange_participants?email=' + email)
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	getUniversities(search?){
		search = search || '';
		return this.http.get(SignupService.url + `/universities?name=${search}&limit=10`)
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	getCourses(){
		return this.http.get(SignupService.url + '/college_courses')
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}

	getLocalCommittees(){
		return this.http.get(SignupService.url + '/local_committees')
			.toPromise()
			.then((res) => res.json(), (err) => {
				try {
	        Sentry.captureException(err);
	      } catch (e) {
	        console.error('sentry', e);
	      }
			});
	}
}
