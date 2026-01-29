import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { ApiServices } from '../services/api-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [Header,Footer,FormsModule,RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

  api = inject(ApiServices)
  downloadList:any = signal([])
  username:string = ""
  userImage:any = signal("https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg")


  ngOnInit(){
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user")||"")
      this.username = user.username
      user.picture && this.userImage.set(`${this.api.server_url}/uploads/${user.picture}`)
    }
    this.getUserDownloadList()
  }

  getUserDownloadList(){
    this.api.getUserDownloadListAPI().subscribe((res:any)=>{
      this.downloadList.set(res)
      console.log(this.downloadList());

    })
  }

  updateProfilePicture(event:Event){
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length>0){
      const uploadFile = input.files[0]
      const reqBody = new FormData()
      reqBody.append("picture",uploadFile)
      this.api.editUserPictureAPI(reqBody).subscribe((res:any)=>{
        console.log(res);
        
        alert("Prodile picture updated successfully!!!")
        sessionStorage.setItem("user",JSON.stringify(res))
        this.userImage.set(`${this.api.server_url}/uploads/${res.picture}`)
      })
    }
  }
}
