import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './adm_home.component.html',
  styleUrls: ['./adm_home.component.css']
})
export class AdmhomeComponent implements OnInit {

  state:string[] = ['未招领','招领中','已招领'];
  type:string[] = ['电子产品','证件卡片','包','钥匙','衣物','书籍','其他'];
  time:string[] = ['一周内','一月内','一月前'];

  
  username:string='';
  userid:string='';
  actor:string='';
  


  constructor(private actroute: ActivatedRoute,private router:Router,public storage: StorageService) { 
    
    //路由get传值js跳转
    this.actroute.queryParams.subscribe(queryParams=>{
      //this.userinfo.username = queryParams.username;
      this.userid = queryParams.userid;
      //this.userinfo.actor = queryParams.actor;
    })
    
    
    //利用服务获取持久化数据
    this.userid = this.storage.get('userid');
    this.username = this.storage.get('username');
    this.actor = this.storage.get('actor');
    

  }

  logout(){

    this.storage.remove('userid');
    this.storage.remove('username');
    this.storage.remove('actor');

    this.userid = this.storage.get('userid');
    this.username = this.storage.get('username');
    this.actor = this.storage.get('actor');
    this.router.navigate(['/adm_home']);
  }

  ngOnInit() {
  }

}
