import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'play-ngapp';

  constructor(private data: DataService) {
    this.data.getFoo().subscribe(res => console.log(res));
  }
}
