import { Component } from '@angular/core';
import { BannerComponent } from '../../Components/banner/banner.component';
import { SEOserviceService } from '../../seoservice.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private seoService: SEOserviceService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Contact Us');
    this.seoService.updateMetaTags([
      { name: 'description', content: 'Get in touch with us at SeoApp' },
      { name: 'keywords', content: 'contact, SeoApp' }
    ]);
  }
}
