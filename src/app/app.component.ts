import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HtmlToImageServiceService } from './html-to-image-service.service.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memes';
  imagePreview: string | ArrayBuffer | null = null;

  imageDataUrl: string | null = null;

  displayData:boolean=false;
  addData=new FormGroup({
    first:new FormControl(''),
    second:new FormControl(''),
    imageInput:new FormControl('')
  })
  submit(){
    console.log("hello",this.addData.value)
    this.displayData=true;
  }
  processFile(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  constructor(private htmlToImageService: HtmlToImageServiceService) {}

  convertToImage(): void {
    console.log("hii")
    const contentToConvert = document.querySelector('#contentToConvert') as HTMLElement;
    if (contentToConvert) {
      this.htmlToImageService.convertToImage(contentToConvert).then(dataUrl => {
        this.imageDataUrl = dataUrl;
      });
    }
  }
}
