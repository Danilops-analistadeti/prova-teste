import { User } from './user';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  getId: number;

  constructor(
    private service: UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if (parametros.id) {

        this.getId = parametros.id;
        this.service.list().subscribe(dados => this.users = dados);

      }
    });
  }

  clearPosParam() {
    this.router.navigate(
      ['.'],
      { relativeTo: this.route, queryParams: { id: this.getId} }
    );
  }

}
