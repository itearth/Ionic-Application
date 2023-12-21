import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  subscription: Subscription[] = [];
  // Initializing the posts array to an empty array in your component. This ensures that even if the data takes some time to load, Angular won't throw an error when trying to iterate over posts.
  posts: any[] = []; 

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getPosts();
    // this.getPostsById();
  }

  getPosts() {
    this.subscription.push(
      this.commonService.getPosts().subscribe(
        (res: any) => {
          console.log('Posts:', res);
          this.posts = res;
        },
        (error) => {
          console.error('Error fetching posts:', error);
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
