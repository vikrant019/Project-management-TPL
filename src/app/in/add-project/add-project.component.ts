import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }
    addProject=new FormGroup({

    ptheme:new FormControl("",[Validators.required]),
    pReason:new FormControl("For Business"),
    pType:new FormControl("External"),
    pDivision:new FormControl("Filters"),
    pCategory:new FormControl("Quality A"),
    pPriority:new FormControl("High"),
    pDept:new FormControl("Strategy"),
    sDate:new FormControl("",[Validators.required]),
    eDate:new FormControl("",[Validators.required]),
    pLocation:new FormControl("Pune"),
    pStatus:new FormControl("Registered"),

  });
  saveProject(){

    if(this.addProject.value.ptheme && this.addProject.value.sDate && this.addProject.value.eDate){
      this.api.addProject(this.addProject.value).subscribe(res=>{
        this.router.navigate(['/in/project-list']);
      })
    }
  }
  ngOnInit(): void {

  }




}

