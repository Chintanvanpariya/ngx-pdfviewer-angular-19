import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
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
