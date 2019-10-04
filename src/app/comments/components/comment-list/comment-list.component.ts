import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeCommentWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removeCommentEvent() {
    const comment = this.dialog.__postToRemove;
    this.comments = this.comments.filter(item => item !== comment);
    this.dialog.hide();
  }

}
