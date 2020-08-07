import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userid : string;
    password : string;
    actor:string;
    

    navigationExtras: NavigationExtras = {
      queryParams: 
      { 
        'userid': '',
        'username':'',
        'actor':''
      }
    };


  constructor(private router:Router,public storage: StorageService) { }

  ngOnInit() {
  }

  login():void{
    
    if(this.userid == null || this.userid == ''){
      alert('用户名不能为空');
      return;
    }
    else if(this.password == null || this.password == ''){
      alert('密码不能为空');
      return;
    }
    else if(this.userid == '123456' && this.password == '123456'){
      //路由get传值js跳转
      this.navigationExtras.queryParams.userid = this.userid;
      this.navigationExtras.queryParams.username = '张三';
      this.navigationExtras.queryParams.actor = 'student';
      //利用服务持久化用户数据
      this.storage.set('userid',this.userid);
      this.storage.set('username','张三');
      this.storage.set('actor','student');
      this.router.navigate(['/adm_home'],this.navigationExtras)
    }
    else if(this.userid == '12018002165' && this.password == '123456'){
      //路由get传值js跳转
      this.navigationExtras.queryParams.userid = this.userid;
      this.navigationExtras.queryParams.username = '江林升';
      this.navigationExtras.queryParams.actor = 'admin';
      //利用服务持久化用户数据
      this.storage.set('userid',this.userid);
      this.storage.set('username','江林升');
      this.storage.set('actor','admin');
      this.router.navigate(['/adm_home'],this.navigationExtras);
    }
    else{
      alert('不存在该用户');
    }
    

   
  }
  

}
