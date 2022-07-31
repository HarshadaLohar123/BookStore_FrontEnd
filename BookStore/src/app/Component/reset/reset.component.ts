import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPaasword: ['', [Validators.required, Validators.minLength(6)]],
      
  });
  }

}
