import { Component, inject, signal } from '@angular/core';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-admin-userlist',
  standalone: false,
  templateUrl: './admin-userlist.html',
  styleUrl: './admin-userlist.css',
})
export class AdminUserlist {


  api = inject(ApiServices)
  allUsers:any = signal([])

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getUsersListAPI().subscribe((res:any)=>{
      this.allUsers.set(res)
      console.log(this.allUsers());

    })
  }
}
