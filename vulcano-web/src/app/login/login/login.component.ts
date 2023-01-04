import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  imageUrl = '../../../assets/img/Plantilla_cuento_volcanes_001.png';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('identificado') === 'true') {
      this.router.navigateByUrl('cuento');
      return;
    }

    this.form = this.formBuilder.group({
      username: ['correodeprueba@gmail.com', Validators.required],
      password: ['123456789', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    localStorage.setItem('identificado', 'true');
    this.router.navigateByUrl('cuento');
  }
}
