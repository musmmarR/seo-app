import { Component } from '@angular/core';
import { BannerComponent } from '../../Components/banner/banner.component';
import { OurServicesComponent } from '../../Components/our-services/our-services.component';
import { ClientsComponent } from '../../Components/clients/clients.component';
import { TestimonialComponent } from '../../Components/testimonial/testimonial.component';
import { SEOserviceService } from '../../seoservice.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BannerComponent,OurServicesComponent,ClientsComponent,TestimonialComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private seoService: SEOserviceService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Services');
    this.seoService.updateMetaTags([
      { name: 'description', content: 'Discover our services at SeoApp' },
      { name: 'keywords', content: 'services, SeoApp' }
    ]);
  }
}
