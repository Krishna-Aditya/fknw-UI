import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  myform = new FormGroup({ 
    FullName: new FormControl('', Validators.required),
    Password: new FormControl(),
    Phone: new FormControl(),
    Email:new FormControl(),
    Dob:new FormControl(),
  })
  SubmitDetails(){
    alert(this.myform.value);
    console.log(this.myform.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
