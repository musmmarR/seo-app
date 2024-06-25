import { Component } from '@angular/core';
import { BannerComponent } from '../../Components/banner/banner.component';
import { MaterialModule } from '../../material.module';
import { ClientsComponent } from '../../Components/clients/clients.component';
import { TestimonialComponent } from '../../Components/testimonial/testimonial.component';
import { OurServicesComponent } from '../../Components/our-services/our-services.component';
import { SEOserviceService } from '../../seoservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,MaterialModule,ClientsComponent,TestimonialComponent,OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private seoService: SEOserviceService) { }
  ngOnInit(): void {
    this.seoService.updateTitle('Home');
    this.seoService.updateMetaTags([
      { name: 'description', content: 'Welcome to the home page of SeoApp' },
      { name: 'keywords', content: 'home, SeoApp, welcome' }
    ]);
    // this.seoService.addLinkTag({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' });
    // this.seoService.addLinkTag({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });
  }
}
