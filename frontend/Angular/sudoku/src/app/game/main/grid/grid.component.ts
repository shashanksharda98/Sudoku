import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  sudoku: number[][] = new Array(9)
  

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.sudoku.length; i++){
      this.sudoku[i] = new Array(9).fill(0)
    }
    console.log(this.sudoku);
    
  }

}
