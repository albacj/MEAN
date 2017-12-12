import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BlogPost} from "../blog-post";

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  //open(content) {
  //  this.model = new BlogPost('Nuevo título para la entrada');
  //  this.modalService.open(content, {backdrop: 'static', size: 'lg'});
  //}
  //submit() {
  //  console.log(JSON.stringify(this.model));
  //}

}
