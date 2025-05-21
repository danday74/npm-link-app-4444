import { Component } from '@angular/core'
import { MyNpmLinkLibComponent } from 'my-npm-link-lib'

@Component({
  selector: 'app-root',
  imports: [MyNpmLinkLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
