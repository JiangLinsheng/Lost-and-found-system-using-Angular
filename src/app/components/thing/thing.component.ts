import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  thing:any[] = 
  [
    {
      img:1,
      title:'猫咪',
      describe:'某位好心人在楸苑2幢下面发现的'
    },
    {
      img:2,
      title:'耳机',
      describe:'某位好心人在图书馆3楼E区发现的'
    },
    {
      img:3,
      title:'充电宝',
      describe:'某位好心人在格物楼2503发现的'
    },
    {
      img:4,
      title:'学生卡',
      describe:'某位好心人在知味堂3楼发现的'
    },
    {
      img:5,
      title:'学生证',
      describe:'某位好心人在力行楼1303发现的'
    },
    {
      img:6,
      title:'书包',
      describe:'某位好心人在图书馆1楼D区发现的'
    },
    {
      img:7,
      title:'电脑包',
      describe:'某位好心人在软件学院4楼机房发现的'
    },
    {
      img:8,
      title:'钥匙串',
      describe:'某位好心人在篮球场观众区发现的'
    },
    {
      img:9,
      title:'夹克',
      describe:'某位好心人在足球场发现的'
    },
    {
      img:10,
      title:'围巾',
      describe:'某位好心人在文汇楼1205发现的'
    },
    {
      img:11,
      title:'高数书',
      describe:'某位好心人在格物楼2608发现的'
    },
    {
      img:12,
      title:'U盘',
      describe:'某位好心人在信息学院架空层发现的'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
