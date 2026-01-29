import { Component, inject, signal } from '@angular/core';
import { ApiServices } from '../services/api-services';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-collection',
  imports: [Header, Footer, RouterLink],
  templateUrl: './user-collection.html',
  styleUrl: './user-collection.css',
})
export class UserCollection {

  allRecipes:any = signal([])
  api = inject(ApiServices)

  ngOnInit(){
    this.getUserCollection()
  }

  getUserCollection(){
    this.api.getUserSaveRecipesAPI().subscribe((res:any)=>{
      this.allRecipes.set(res)
      console.log(this.allRecipes());

    })
  }

  deleteRecipe(id:string){
    this.api.removeUserSaveRecipeItemAPI(id).subscribe((res:any)=>{
      this.getUserCollection()
    })
  }
}
