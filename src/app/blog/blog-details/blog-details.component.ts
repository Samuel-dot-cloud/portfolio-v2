import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog;
  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    const id = this.route.snapshot.paramMap.get('id')
    return this.blogService.getPostData(id!).subscribe(data => this.blog = data)
  }

}
