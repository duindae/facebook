import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;

  @Output() removeCommentEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getCommentAuthorAvatar() {
    const url = 'http://placeskull.com/50/50/ff2744/10/0';
    return (this.comment && this.comment.author) ? this.comment.author.avatarUrl : url;
  }

  removeComment() {
    this.removeCommentEvent.emit(this.comment);
  }


}
