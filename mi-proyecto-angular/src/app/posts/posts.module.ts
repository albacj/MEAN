import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
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
    PostComponent,
    CreatePostFormComponent,
    PostListComponent
  ]
})
export class PostsModule { }
