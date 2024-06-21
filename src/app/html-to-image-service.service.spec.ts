import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class HtmlToImageServiceService {

  constructor() { }

  convertToImage(element: HTMLElement): Promise<string> {
    return html2canvas(element).then(canvas => {
      return canvas.toDataURL('image/png');
    });
  }
}
