import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit
 {
  allowServer:boolean=false;
  serverCreationStatus="No Server created";
  serverName:string='';
  serverCreated:boolean=false;
  servers=['test server1','test server 2'];
  constructor()
   {
    setTimeout(()=>{
      this.allowServer=true;
      console.log('test'+this.allowServer)
    },2000);
   }
  ngOnInit(): void
   {
   }
  onServerCreation()
   {
     this.serverCreated=true;
     this.servers.push(this.serverName);
     this.serverCreationStatus="server created";
   } 
   onUpdateServr(event:any)
   {
    this.serverName= (<HTMLInputElement> event.target).value;
   }
}
