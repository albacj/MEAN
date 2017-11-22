import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId = null;
  constructor(private route:ActivatedRoute) {
    route.params.subscribe(
      params =>{
        this.postId = parseInt(params['id']);
      }
    );
  }

  ngOnInit() {
  }

}
