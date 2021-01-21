import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-reg",
  templateUrl: "./reg.component1.html",
  styleUrls: ["./reg.component.css"],
})
export class RegComponent implements OnInit {
  constructor(private rou: Router) {}

  ngOnInit(): void {}

  // nav() {
  //   this.rou.navigate(["/form"]);
  // }
}
