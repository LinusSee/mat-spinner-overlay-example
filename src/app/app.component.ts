import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-spinner-overlay-example';
  public loadingEnv: boolean = false;
  private env: any;

  constructor(private httpClient: HttpClient) {
    this.loadingEnv = true;
    this.httpClient.get('http://localhost:3000/assets/config/env.json')
      .subscribe(env => {
        this.env = env;
        this.loadingEnv = false;
      });
  }

  public like(): void {
    console.log("Like!");
  }

  public share(): void {
    console.log("Share!");
  }

  public readEnv(): string {
    return JSON.stringify(this.env);
  }
}
