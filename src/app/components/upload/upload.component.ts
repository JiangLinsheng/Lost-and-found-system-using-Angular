import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  name:string;
  type:string;
  time:any;//暂时还不能在表单验证
  place:string;
  mobile:string;
  picture:any;
  types:string[] = ['电子产品','证件卡片','包','钥匙','衣物','书籍','其他'];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  upload():void{
    if(this.name == null || this.name == ''){
      alert('名称不能为空');
      return;
    }
    else if(this.type == null || this.type == ''){
      alert('类型不能为空');
      return;
    }
    else if(this.place == null || this.place == ''){
      alert('发现地点不能为空');
      return;
    }
    else if(this.mobile == null || this.mobile == ''){
      alert('手机号不能为空');
      return;
    }
    else if(this.picture == null || this.picture == ''){
      alert('未选择失物图片');
      return;
    }
    else{
      this.router.navigate(['/adm_home']);
    }
  }

}
