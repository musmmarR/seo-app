import { Component } from '@angular/core';
import { BannerComponent } from '../../Components/banner/banner.component';
import { MaterialModule } from '../../material.module';
import { ClientsComponent } from '../../Components/clients/clients.component';
import { TestimonialComponent } from '../../Components/testimonial/testimonial.component';
import { SEOserviceService } from '../../seoservice.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent,MaterialModule,ClientsComponent,TestimonialComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private seoService: SEOserviceService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('About Us');
    this.seoService.updateMetaTags([
      { name: 'description', content: 'Learn more about SeoApp' },
      { name: 'keywords', content: 'about, SeoApp, company' }
    ]);
  }
}
