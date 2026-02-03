import { Component, inject, signal } from '@angular/core';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-admin-feedbacklist',
  standalone: false,
  templateUrl: './admin-feedbacklist.html',
  styleUrl: './admin-feedbacklist.css',
})
export class AdminFeedbacklist {

  api = inject(ApiServices)
  allFeedbacks:any = signal([])

  ngOnInit(){
    this.getAllFeedbacks()
  }
  getAllFeedbacks(){
    this.api.getFeedbacksListAPI().subscribe((res:any)=>{
      this.allFeedbacks.set(res)
      console.log(this.allFeedbacks())
  })
  }

  updateFeedback(id:string,status:string){
    this.api.updateFeedbackStatusAPI(id,{status}).subscribe((res:any)=>{
      this.getAllFeedbacks()
    })
  }
}
