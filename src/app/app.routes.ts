import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { UserCollection } from './user-collection/user-collection';
import { UserProfile } from './user-profile/user-profile';
import { ViewRecipe } from './view-recipe/view-recipe';
import { Pnf } from './pnf/pnf';

export const routes: Routes = [
  //http://localhost:4200/
  {
    path: '', component: Home, title: "Home"
  },
  //http://localhost:4200/recipes
  {
    path: 'recipes', component: Recipes, title: "All Recipes"
  },
  //http://localhost:4200/
  {
    path: 'about', component: About, title: "About"
  },
  //http://localhost:4200/
  {
    path: 'contact', component: Contact, title: "Contact"
  },
  //http://localhost:4200/
  {
    path: 'login', component: Login, title: "Login"
  },
  //http://localhost:4200/
  {
    path: 'register', component: Register, title: "Register"
  },
  //http://localhost:4200/
  {
    path: 'user/collection', component: UserCollection, title: "Collection"
  },
  //http://localhost:4200/
  {
    path: 'user/profile', component: UserProfile, title: "Profile"
  },
  //http://localhost:4200/
  {
    path: 'recipe/:id/view', component: ViewRecipe, title: "Recipe"
  },
  //http://localhost:4200/
  {
    path: '**', component: Pnf, title: "Page Not Found"
  },
];
