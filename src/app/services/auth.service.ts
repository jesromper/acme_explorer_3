import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private http: HttpClient) {}
  registerUser(actor: Actor) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .createUserWithEmailAndPassword(actor.email, actor.password)
        .then((_) => {
          // if the authentication was ok, then we proceed
          const headers = new HttpHeaders();
          headers.append('Content-type', 'application/json');
          const url = `${environment.backendApiBaseURL + '/actors'}`;
          const body = JSON.stringify(actor);
          this.http
            .post(url, body, httpOptions)
            .toPromise()
            .then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getRoles(): string[] {
    return ['CLERK', 'ADMINISTRATOR', 'CONSUMER'];
  }

  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then((_) => {
          resolve(_);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth
        .signOut()
        .then((_) => {
          resolve(_);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
