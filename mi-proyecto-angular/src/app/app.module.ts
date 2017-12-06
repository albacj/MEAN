import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { RouterModule} from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { CreatePostFormComponent } from '././posts/create-post-form/create-post-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    PostsComponent,
    AuthorsComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostComponent,
    CreatePostFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent,
      },{
        path: "posts",
        component: PostsComponent,
        children: [{
          path: ":id",
          component: PostComponent
        }]
      },{
        path: "authors",
        component: AuthorsComponent
      },{
        path: "**",
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
