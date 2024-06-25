import { Component } from '@angular/core';
import { SEOserviceService } from '../../seoservice.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  constructor(private seoService: SEOserviceService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Blog');
    this.seoService.updateMetaTags([
      { name: 'description', content: 'Read our latest blog posts at SeoApp' },
      { name: 'keywords', content: 'blog, SeoApp, articles' }
    ]);
  }
}
