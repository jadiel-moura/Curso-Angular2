import { Component } from '@angular/core';
import * as _ from 'lodash';

//import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula_diretivas';

  list = _.map([1, 2, 3], (n) => `# ${n}`);
}
