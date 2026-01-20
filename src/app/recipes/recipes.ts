import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiServices } from '../services/api-services';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [Header, Footer,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  p: number = 1;
  searchKey:string = ""
  allrecipes: any = signal([])
  dummyAllRecipes:any = []
  cuisineArray: any = signal([])
  mealTypeArray:any = signal([])
  api = inject(ApiServices)


  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      //console.log(res);
      this.allrecipes.set(res)
      this.dummyAllRecipes = this.allrecipes()
      //console.log(this.allrecipes());
      this.allrecipes().forEach((item:any)=>{
        !this.cuisineArray().includes(item.cuisine) && this.cuisineArray().push(item.cuisine)
      })
      //console.log(this.cuisineArray());
      let dummyMealTypeArray = this.allrecipes().map((item:any)=>item.mealType).flat(Infinity)
      dummyMealTypeArray.forEach((item:any)=>{
        !this.mealTypeArray().includes(item) && this.mealTypeArray().push(item)
      })
      console.log(this.mealTypeArray());

    })
  }
  filterRecipe(key:string,value:string){
    this.allrecipes.set(this.dummyAllRecipes.filter((item:any)=>item[key]==value))
  }
}
