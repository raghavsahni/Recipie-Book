import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";
    showMsg: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
            message: [''],
            // address: new FormArray([]),
            address: this.formBuilder.array([])
          
        });
       
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        this.showMsg= true;
        console.log( JSON.stringify(this.registerForm.value))

        // alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value))
        this.registerForm.reset();
        this.registerForm.get('address').reset();
        this.submitted = false;
    }
    get address() {
      return this.registerForm.get('address') as FormArray;
    }
    
    onAddAddress(){
      // const control = new FormControl('');
      // (<FormArray>this.registerForm.get('address')).push(control);
      this.address.push(this.formBuilder.control(''));

    }
}

