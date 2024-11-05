import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { User } from './types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [
    { name: "Pesho", id: 1, age: 22 },
    { name: "Ivan", id: 2, age: 25 },
    { name: "Mira", id: 3, age: 38 },
    { name: "Ganka", id: 4, age: 62 },
    { name: "Kircho", id: 5, age: 82 },
  ]
}
