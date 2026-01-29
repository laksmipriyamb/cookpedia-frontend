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

//save/:id api -called when save recipe button clicked
  addToSaveRecipeAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/recipes/${recipeId}/save`,reqBody,this.appendToken())
  }

  //get request from save recipe component when page load
  getUserSaveRecipesAPI(){
    return this.http.get(`${this.server_url}/recipe-collection`,this.appendToken())
  }

  //delte request from save recipe component when delete button clicked
  removeUserSaveRecipeItemAPI(recipeId:string){
    return this.http.delete(`${this.server_url}/recipe-collection/${recipeId}`,this.appendToken())
  }

  //feedback post request by contact componnt
  addFeedbackAPI(reqBody:any){
    return this.http.post(`${this.server_url}/feedback`,reqBody)
  }

  //user downloads -get by profile component
  getUserDownloadListAPI(){
    return this.http.get(`${this.server_url}/user-downloads`,this.appendToken())
  }

  //user edit picture - by profile component
  editUserPictureAPI(reqBody:any){
    return this.http.put(`${this.server_url}/user-edit`,reqBody,this.appendToken())
  }

   //get feebcaks when approved by home page
  getApproveFeedbacksAPI(){
    return this.http.get(`${this.server_url}/feedbacks-approve`)
  }
}
