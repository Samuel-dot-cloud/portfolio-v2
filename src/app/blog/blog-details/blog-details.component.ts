import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog | any;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.blogService.getPostData(id!).subscribe(data => this.blog = data)
  }

}
