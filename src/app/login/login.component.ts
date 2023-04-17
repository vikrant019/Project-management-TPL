import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }
  public loginForm=new FormGroup({
  uemail:new FormControl("",[Validators.required]),
  upass:new FormControl("",[Validators.required])
  });
    pass:any='password';
    class:any='fa-eye-slash';
  hpass(){
    if( this.pass=='password'){
      this.pass='text';
      this.class='fa-eye-slash';
    }else{
      this.pass="password";
      this.class='fa-eye'
    }
  }
  err:any='';
  login(){
    if(!this.loginForm.controls.uemail.invalid && !this.loginForm.controls.upass.invalid){
    this.api.getAdmin(this.loginForm.value).subscribe((res:any)=>{
      if(res.length>0){
        localStorage.setItem( 'id',JSON.stringify(res[0].admin_id));
        this.router.navigate(['/in']);
      }if(!res.length){
        this.err='invalid credentials';

      }
    })

  }
  }
  ngOnInit(): void {
  console.log(!this.loginForm.controls.uemail.invalid && !this.loginForm.controls.upass.invalid )

  }

}
