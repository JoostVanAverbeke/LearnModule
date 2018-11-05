import { Component, OnInit } from '@angular/core';
import {BoardService} from './services/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LearnModule';
  constructor(private boardService: BoardService) {}
  ngOnInit() {
    this.boardService.getBoard();
  }
}
