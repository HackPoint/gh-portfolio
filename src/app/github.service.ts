import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${ environment.apiUrl }/users/${ environment.username }`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userUrl + '/orgs');
  }
}
