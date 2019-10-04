import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;

  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

  removePostWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  private removePostEvent() {
    const post = this.dialog.__postToRemove;
    this.posts = this.posts.filter(item => item !== post);
    this.dialog.hide();
  }

}
