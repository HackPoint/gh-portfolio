import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username = environment.username;

  constructor(private readonly title: Title,
              private readonly meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle('Github portfolio application...');
    this.meta.addTags([
      { name: 'description', content: `${ this.username }'s GitHub portfolio` },
      { name: 'author', content: this.username }
    ]);
  }
}
