import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thing',
  templateUrl: './user_home.component.html',
  styleUrls: ['./user_home.component.css']
})
export class UserhomeComponent implements OnInit {

  state:string[] = ['未招领','招领中','已招领'];
  type:string[] = ['电子产品','证件卡片','包','钥匙','衣物','书籍','其他'];
  time:string[] = ['一周内','一月内','一月前'];

  constructor() { }

  ngOnInit() {
  }

}
