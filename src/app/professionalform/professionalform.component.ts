import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-professionalform",
  templateUrl: "./professionalform.component.html",
  styleUrls: ["./professionalform.component.css"],
})
export class ProfessionalformComponent implements OnInit {
  constructor() {}
  value: string = "get";
  ngOnInit(): void {}
}
