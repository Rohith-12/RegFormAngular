import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";

@Component({
  selector: "app-form",
  templateUrl: "./form.component1.html",
  styleUrls: ["./form.component.css"],
  // animations:[ trigger('trigg', [

  //   state('true', style({

  //     backgroundColor: 'yellow'
  //   })),

  // ],
  // ]
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) {}

  @ViewChild("upload2", { static: true }) uploadbttn: ElementRef;
  @ViewChild("upload3", { static: true }) spin: ElementRef;
  checkbox: boolean = false;
  upload: boolean = false;
  res: boolean = false;
  str: String = "";
  sucessmessage: boolean = false;
  selectedfile = null;
  mystr: string = "Upload Resume";
  mytgg = true;
  ff: any;
  ngOnInit(): void {}

  submitform(getform: NgForm, formrr) {
    if (formrr.valid) {
      this.route.navigate(["/education"]);
    }
    // const resume = new FormData();
    // resume.append("resume", this.selectedfile, this.selectedfile.name);
    this.http
      .post("https://myapp-fc054.firebaseio.com/posts.json", getform)
      .subscribe((res) => {
        console.log(res);
      });

    //getform.reset();
  }

  value = "";
  update(value: string) {
    this.value = value;
  }

  checkboxclick() {
    //console.log("hi");
    this.checkbox = !this.checkbox;
  }

  resume(eve: Event) {
    eve.preventDefault();
    this.res = !this.res;
  }

  fileupload(eve) {
    //console.log(this.uploadbttn.nativeElement);
    console.log(eve);
    console.log("hi");
    this.selectedfile = <File>eve.target.files[0];
    console.log(this.selectedfile);
    const len = this.selectedfile.name.length;
    const time = setTimeout((ele1) => {
      this.upload = true;
      this.uploadbttn.nativeElement.style.opacity = 0.8;
    }, 2000);

    const timelaspe = setTimeout((ele1) => {
      this.upload = false;
      if (eve.target.value) {
        if (len > 10) {
          const newstr = this.selectedfile.name.substring(0, 9);
          this.mystr = newstr + ".....";
          console.log(this.str);
        } else {
          this.mystr = this.mystr;
        }
        this.uploadbttn.nativeElement.style.opacity = 1;

        this.sucessmessage = true;
      } else {
        this.sucessmessage = false;
      }
    }, 5000);

    //console.log(this.selectedfile.name);
  }
}
