import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jokes-api';
  constructor(private http: HttpClient) {};
  data: any;
  showPunchline = false;

  ngOnInit() {
    this.getDataFromApiJokes().subscribe(response => {
      this.data = response;
    })
  }

  getDataFromApiJokes () {
    return this.http.get<any>('https://official-joke-api.appspot.com/random_joke');
  }

  revealPunchline () {
    this.showPunchline = true
  }

  refreshPage () {
    window.location.reload();
  }
}

