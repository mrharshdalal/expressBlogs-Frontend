import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  // Correct property names: imports and styleUrls
  imports: [FormsModule, MatIconModule, MatChipsModule, MatButtonModule],
  styleUrls: ['./home.component.css'], // Correct property name: styleUrls
  templateUrl: './home.component.html',
})
export class HomeComponent {
  tags: string[] = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];
  selectedTags: string[] = [];
}
