import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {id: '1', body: 'Post 1'},
    {id: '2', body: 'Post 2'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
