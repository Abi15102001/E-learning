import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SlideConfig } from 'src/app/Modal-classes/slideConfig.modal';
import { Client } from 'src/app/Modal-classes/clients.modal';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  
  constructor(private http:HttpClient){}
clients:Client[] = []
  slideConfig = new SlideConfig();

  ngOnInit(){
    this.slideConfig.breakPoints ={sm:1,md:2,lg:3,xl:4};
    this.slideConfig.showDots =false;
    this.slideConfig.showLRarrow =true;
    this.slideConfig.autoPlay =true;
    this.getAllClients()
  }

  getAllClients(){
    this.http.get('assets/data/clients.json').subscribe({
         next:(client)=>{
        this.clients = client as Client[] ;   
        console.log(this.clients);
             
      },
      error:(errors: any)=>{
        console.log(errors);
        
      }
      
    })}
}
