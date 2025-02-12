import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyModalComponent } from './my-modal/my-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxExtendedPdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  base64Str:any;

  constructor(
    private modalService: NgbModal
  ) {}

  openScrollableContent(){
    this.modalService.open(MyModalComponent, {  size: 'xl',centered :true,scrollable: true });
  }

}
