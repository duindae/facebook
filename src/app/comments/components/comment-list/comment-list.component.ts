import {Component, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [
    {id: '123123', body: '123123123123'},
    {id: '8888', body: 'asgfkjahsfkjahsgf'}
  ] as ICommentList;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('addComment', comment);
    this.comments.push(comment);
  }

}
