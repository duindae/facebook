import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post: IPost = null;

  @Output() removePostItem = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.post && change.post.firstChange) {
      this.post.comments = [];
    }
  }

  getPostUrl() {
    return this.post ? `/posts/${this.post.id}` : '';
  }

  getPostAuthorAvatarUrl() {
    return (this.post && this.post.author) ? this.post.author.avatarUrl : '';
  }

  removePost() {
    this.removePostItem.emit(this.post);
  }

}
