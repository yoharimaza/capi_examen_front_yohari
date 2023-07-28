import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit{

  userList: any = [];

  constructor(private usersServices: UsersService){
    
  }

  ngOnInit():void{
    this.usersServices.getUsers().subscribe((response: any) => this.userList = response);
  }
}
