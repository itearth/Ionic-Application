// comments.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  subscription: Subscription[] = [];
  comments: any[] = [];
  loader: any;

  constructor(
    private commonService: CommonService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getComments();
  }

  async getComments() {
    this.loader = await this.loadingController.create({
      message: 'Loading...', // loading message as needed
    });

    this.loader.present(); // Show the loader

    this.subscription.push(
      this.commonService.getComments().subscribe(
        (res: any) => {
          console.log('Comments:', res);
          this.comments = res;
          this.loader.dismiss(); // Hiding the loader when data is loaded
        },
        (error) => {
          console.error('Error fetching comments:', error);
          this.loader.dismiss(); // Hiding the loader in case of an error
        }
      )
    );
  }
}
