import { User } from './user';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {

    this.service.list().subscribe(dados => this.users = dados);
  }

  view_user(id: number){
    this.router.navigate(['/user', id]);
  }

}
