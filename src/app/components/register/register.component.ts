import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  name:string;
  mobile:string;
  password:string;
  rpassword:string;
  checked:boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  register():void{

    if(this.username == null || this.username == ''){
      alert('用户名不能为空');
      return;
    }
    else if(this.name == null || this.name == ''){
      alert('姓名不能为空');
      return;
    }
    else if(this.mobile == null || this.mobile == ''){
      alert('手机号不能为空');
      return;
    }
    else if(this.password == null || this.password == ''){
      alert('密码不能为空');
      return;
    }
    else if(this.rpassword == null || this.rpassword == ''){
      alert('请确认密码');
      return;
    }
    else if(this.password != this.rpassword){
      alert('两次输入的密码不一致');
      return;
    }
    else if(this.checked == false){
      alert('请阅读并同意相关服务条款和隐私政策！');
      return;
    }
    else{
      this.router.navigate(['/login']);
    }

  }

}
