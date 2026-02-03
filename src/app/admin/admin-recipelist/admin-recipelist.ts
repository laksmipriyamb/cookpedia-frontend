import { Component, inject, signal } from '@angular/core';
import { ApiServices } from '../../services/api-services';

@Component({
  selector: 'app-admin-recipelist',
  standalone: false,
  templateUrl: './admin-recipelist.html',
  styleUrl: './admin-recipelist.css',
})
export class AdminRecipelist {

  api = inject(ApiServices)
  allrecipes:any = signal([])
  searchKey:string = ""

  ngOnInit(){
    this.getRecipes()
  }

  getRecipes(){
    this.api.getAllRecipeAPI().subscribe((res:any)=>{
      this.allrecipes.set(res)
      console.log(this.allrecipes());

    })
  }
}
