import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-educationform",
  templateUrl: "./educationform.component.html",
  styleUrls: ["./educationform.component.css"],
  //interpolation: [`[`, `]`]
})
export class EducationformComponent implements OnInit {
  constructor() {}

  @ViewChild("education") getothereducation: ElementRef;

  get: string = "hello";
  option: boolean = true;
  ngOnInit(): void {}

  HigestQulification = [
    {
      name: "Doctorate/PhD",
      course: [
        {
          name: ["Ph.D/Doctorate", "MPHIL", "Other"],
          specization: [
            "Advestring and Mass Communication",
            "Agriculture",
            "Anthropology",
            "Architecture",
            "Art's and Humantities",
            "Astrophysics",
          ],
        },
      ],
    },

    {
      name: "Masters and Postgradution",
      course: [
        {
          name: ["CA", "CS", "DM"],
          specization: [
            "Cardic-Anaens",
            "Endocringology",
            "Anthropology",
            "Architecture",
            "Art's and Humantities",
            "Astrophysics",
          ],
        },
      ],
    },
  ];
  courses: Array<any>;
  spec: Array<any>;
  qu: string = "";

  selecthigh(getval) {
    this.courses = this.HigestQulification.find(
      (cntry) => cntry.name == getval
    ).course;
    this.qu = getval;
    this.option = true;
  }

  course(cou) {
    this.spec = this.HigestQulification.find(
      (cntry) => cntry.name == this.qu
    ).course.find((stat) => stat.name == cou).specization;
  }

  othereducation() {
    this.option = false;
  }
}
