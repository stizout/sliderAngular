import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();


  ngOnInit() {
  }

  goPrevious() {
    this.goPrev.emit(true)
  }

  goToNext() {
    this.goNext.emit(true)
    console.log(this.currentPage, this.totalPages)
  }

}
