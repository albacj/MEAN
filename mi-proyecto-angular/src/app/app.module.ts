import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    PostsComponent,
    AuthorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },{
        path: "posts",
        component: PostsComponent
      },{
        path: "authors",
        component: AuthorsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
