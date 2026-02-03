import { Component, inject, signal } from '@angular/core';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-admin-downloadlist',
  standalone: false,
  templateUrl: './admin-downloadlist.html',
  styleUrl: './admin-downloadlist.css',
})
export class AdminDownloadlist {


  api = inject(ApiServices)
  downloadlist:any = signal([])

  ngOnInit(){
    this.getDownloadList()
  }

  getDownloadList(){
    this.api.getDownloadListAPI().subscribe((res:any)=>{
      this.downloadlist.set(res)
      console.log(this.downloadlist());

    })
  }
}
