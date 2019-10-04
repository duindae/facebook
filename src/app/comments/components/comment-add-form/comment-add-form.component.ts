import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';

import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null,
    },
    body: null,
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(formularz) {
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toLocaleDateString();
    comment.author.id = uuid.v4();
    comment.author.name = faker.name.findName();
    comment.author.avatarUrl = 'http://placeskull.com/50/50/ff2744/';
    this.addComment.emit(comment);
    formularz.reset();
  }

}
