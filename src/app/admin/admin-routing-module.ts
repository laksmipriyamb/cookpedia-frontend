import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminDownloadlist } from './admin-downloadlist/admin-downloadlist';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminManageRecipe } from './admin-manage-recipe/admin-manage-recipe';

const routes: Routes = [
  //http://localhost:4200/admin
  {
    path:'',component:AdminDashboard,title:"Dashboard"
  },
  //http://localhost:4200/admin/downloads
  {
    path:'downloads',component:AdminDownloadlist,title:"Downloads"
  },
  //http://localhost:4200/admin/users
  {
    path:'users',component:AdminUserlist,title:"Users"
  },
  //http://localhost:4200/admin/feedbacks
  {
    path:'feedbacks',component:AdminFeedbacklist,title:"Feedbacks"
  },
  //http://localhost:4200/admin/recipes
  {
    path:'recipes',component:AdminRecipelist,title:"Recipes"
  },
  //http://localhost:4200/admin/recipes/add
  {
    path:'recipes/add',component:AdminManageRecipe,title:"Add Recipe"
  },
  //http://localhost:4200/admin/recipes/1
  {
    path:'recipes/:id',component:AdminManageRecipe,title:"Edit Recipe"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
