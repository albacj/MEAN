import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    PostsComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
