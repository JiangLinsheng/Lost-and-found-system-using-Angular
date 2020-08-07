import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:String;
  thing:any = {
    title:'',
    type:'',
    time:'',
    place:'',
    phone:''
  };
  actor:string;
  types:string[] = ['电子产品','证件卡片','包','钥匙','衣物','书籍','其他'];
  isdisabled:boolean=true;

  constructor(private route: ActivatedRoute,public storage: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe(data=>this.id=data.id);
    console.log(this.id);

    switch (this.id) {
      case '1':{
        this.thing = {title:'猫咪',type:'其他',time:'2019-6-9',place:'楸苑2幢',phone:'15675623698'};
        break;
      }
      case '2':{
        this.thing = {title:'耳机',type:'电子产品',time:'2019-6-9',place:'图书馆3楼E区',phone:'15675623698'};
        break;
      }
      case '3':{
        this.thing = {title:'充电宝',type:'电子产品',time:'2019-6-9',place:'格物楼2503',phone:'15675623698'};
        break;
      }
      case '4':{
        this.thing = {title:'学生卡',type:'证件卡片',time:'2019-6-9',place:'知味堂3楼',phone:'15675623698'};
        break;
      }
      case '5':{
        this.thing = {title:'学生证',type:'证件卡片',time:'2019-6-9',place:'力行楼1303',phone:'15675623698'};
        break;
      }
      case '6':{
        this.thing = {title:'书包',type:'包',time:'2019-6-9',place:'图书馆1楼D区',phone:'15675623698'};
        break;
      }
      case '7':{
        this.thing = {title:'电脑包',type:'包',time:'2019-6-9',place:'软件学院4楼机房',phone:'15675623698'};
        break;
      }
      case '8':{
        this.thing = {title:'钥匙串',type:'钥匙',time:'2019-6-9',place:'篮球场',phone:'15675623698'};
        break;
      }
      case '9':{
        this.thing = {title:'夹克',type:'衣物',time:'2019-6-9',place:'足球场',phone:'15675623698'};
        break;
      }
      case '10':{
        this.thing = {title:'围巾',type:'衣物',time:'2019-6-9',place:'文汇楼1205',phone:'15675623698'};
        break;
      }
      case '11':{
        this.thing = {title:'高数书',type:'书籍',time:'2019-6-9',place:'格物楼2608',phone:'15675623698'};
        break;
      }
      case '12':{
        this.thing = {title:'U盘',type:'电子产品',time:'2019-6-9',place:'信息学院架空层',phone:'15675623698'};
        break;
      }
      default:{
        break;
  
      }
    }

    this.actor = this.storage.get('actor');
    if(this.actor == 'admin'){
      this.isdisabled = false;
    }

    //window.location.reload();
  }
}
