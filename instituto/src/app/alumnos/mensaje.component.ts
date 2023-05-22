import { MensajeService } from './mensaje.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  constructor(public MensajeService: MensajeService) {}

}
