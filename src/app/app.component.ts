import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent implements OnInit {

  title = 'fd';


 constructor(
   private router: Router
 ) {
}

ngOnInit(){
  //Called after the constructor, initializing input properties and
  //Add 'implements OnInit' to the class.
  this.router.navigate(['Login']);
}

}
