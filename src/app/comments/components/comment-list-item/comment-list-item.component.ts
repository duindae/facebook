import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;

  constructor() {
  }

  ngOnInit() {
  }

  getCommentAuthorAvatar() {
    const url = 'http://placeskull.com/50/50/ff2744/10/0';
    return (this.comment && this.comment.author) ? this.comment.author.avatarUrl : url;
  }

}
