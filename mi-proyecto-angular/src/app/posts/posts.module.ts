import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forRoot([{
      path: "posts",
      component: PostsComponent
    }, {
      path: "posts/:id",
      component: PostComponent
    }])
        ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
