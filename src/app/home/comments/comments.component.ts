import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  subscription: Subscription[] = [];
  comments: any[] = []; // Initialize to an empty array

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.subscription.push(
      this.commonService.getComments().subscribe(
        (res: any) => {
          console.log('Comments:', res);
          this.comments = res;
        },
        (error) => {
          console.error('Error fetching comments:', error);
        }
      )
    );
  }
}
