
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOserviceService {

  constructor(private titleService: Title, private metaService: Meta) { }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMetaTags(tags: { name: string, content: string }[]) {
    tags.forEach(tag => this.metaService.updateTag({ name: tag.name, content: tag.content }));
  }

  addLinkTag(attrs: { rel: string; href: string }) {
    const link: HTMLLinkElement = document.createElement('link');
    Object.keys(attrs).forEach((key: string) => {
      link.setAttribute(key, (attrs as any)[key]);
    });
    document.head.appendChild(link);
  }
}
