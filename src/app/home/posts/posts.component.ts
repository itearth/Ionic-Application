// posts.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { LoadingController } from '@ionic/angular';  //using the ionic loader

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  subscription: Subscription[] = [];
  posts: any[] = [];
  loader: any; // variable to store the loading component

  constructor(
    private commonService: CommonService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    this.loader = await this.loadingController.create({
      message: 'Loading...', // Loading message
    });

    this.loader.present(); // Show the loader

    this.subscription.push(
      this.commonService.getPosts().subscribe(
        (res: any) => {
          console.log('Posts:', res);
          this.posts = res;
          this.loader.dismiss(); // Hiding the loader when data is loaded
        },
        (error) => {
          console.error('Error fetching posts:', error);
          this.loader.dismiss(); // Hiding the loader in case of an error
        }
      )
    );
  }

  
  // getPostsById() {
  //   this.subscription.push(
  //     this.commonService.getPostById(20).subscribe((res: any) => {
  //       console.log(res);
  //     })
  //   );
  // }
}






