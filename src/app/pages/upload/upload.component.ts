import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  
}
