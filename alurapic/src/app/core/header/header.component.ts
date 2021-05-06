import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  user$: Observable<User>; //$ é uma boa prática para observable
  user: User;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe((user) => (this.user = user)); //subscribe() é usado para poder ler o objeto em header.componente.html
  }
}
