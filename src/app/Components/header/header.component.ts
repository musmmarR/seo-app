import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router =inject(Router)
  NavBar:any=[{title:"Home",route:'/home'},
  {title:"About",route:'/about'},
  {title:"Contact",route:'/contact'},
  {title:"Services",route:'/services'},
  {title:"Blog",route:'/blog'},
  ]
  onNavigate(url:any){
    console.log(url)
    this.router.navigateByUrl(url);

  }
}


