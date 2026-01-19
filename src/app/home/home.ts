import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";
import { ApiServices } from '../services/api-services';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  allrecipes:any = signal([])
  api = inject(ApiServices)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipeAPI().subscribe((res:any)=>{
      //console.log(res);
      this.allrecipes.set(res.slice(0,6))
      console.log(this.allrecipes());

    })
  }

}
