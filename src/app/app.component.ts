import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang';
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  hi() {
    this.title = 'yoyoyo';
  }

  getUsers() {
    return this.http
      .get<any[]>('http://localhost:4200/user')
      .subscribe((data) => {
        this.users = data;
      });
  }
}
