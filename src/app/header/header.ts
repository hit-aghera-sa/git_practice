import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  age = signal(10)
  changeName() {
    this.age.update( val => val+1)
  }
}
