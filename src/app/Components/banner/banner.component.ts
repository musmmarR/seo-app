import { Component, Input, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router,ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
@Input() path :any;
 titleService = inject(Title)
 router = inject(Router)
 activatedRoute = inject(ActivatedRoute)

 ngOnInit(): void {
     this.titleService.setTitle(this.path)
 }

}