import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform = new FormGroup({ 
    Email: new FormControl('', Validators.required),
    Password: new FormControl(),
  })
  SubmitDetails(){
    alert(this.myform.value);
    console.log(this.myform.value);
    this.router.navigateByUrl("/NewsInput");
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
