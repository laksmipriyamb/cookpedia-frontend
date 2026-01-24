import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {

  server_url = "http://localhost:3000"
  http = inject(HttpClient) //HttpClient this is imported in app.config.ts

  //api function
  // 1 - get all recipes : called by home & recipes component
  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/recipes`)
  }

  //register :called by register component
  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }
  //login :called by register component
  loginAPI(user:any){
    return this.http.post(`${this.server_url}/login`,user)
  }

  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
  //view recipe
  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.server_url}/recipe/${recipeId}`,this.appendToken())
  }

  getRelatedRecipesAPI(cuisine:string){
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }

  //dowloads/:id api
  addToDownloadAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/downloads/${recipeId}`,reqBody,this.appendToken())
  }
}
