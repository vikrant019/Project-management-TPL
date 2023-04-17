import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Event,NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  dashboard:any=""
  constructor(private routes:ActivatedRoute,private router:Router) {
    this.changeTitile()
  }

  ngOnInit(): void {

  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
    this.changeTitile()
  }
  })
  }
  changeTitile(){
    if(window.location.pathname=='/in/dashboard'){
      this.dashboard='Dashboard'
    }else if(window.location.pathname=='/in/project-list'){
      this.dashboard="Project List"
    }else if(window.location.pathname=='/in/add-project'){
      this.dashboard="Add Project"
    }else{
      this.dashboard="";
    }
  }

  onActivated(_component:any){
    this.changeTitile();
  }

}
