import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<any>;
  constructor(private userService: UsersService) { }

  async ngOnInit() {
    let res = await this.userService.getUser();
    console.log(res);
    

    this.dataSource = new MatTableDataSource(res);
    
  }

}
