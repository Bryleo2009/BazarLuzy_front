import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  

  
  ngOnInit() {
    const lis = document.querySelectorAll("li");
    const a = document.querySelectorAll("li a");
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener("click", function() {
        for (let i = 0; i < lis.length; i++) {
          lis[i].classList.remove("active");
          a[i].classList.remove("active-text");
        }
        this.classList.add("active");
        a[i].classList.add("active-text");
      });
      }
  }

}
