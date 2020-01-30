import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;

  constructor(private apollo: Apollo) {}
  
  ngOnInit() {
    this.apollo.mutate({
      mutation: gql`mutation {
        input(UserInput:{
          name: "juan", lastName: "Arias", email: "juan@gmail.com",
          password: "123", cellphone: "311322456", phone: 2774292  
        }) 
      }`
    }).subscribe(data => {
      console.log(data);
      
    });
  }

  
}
type  Token  =  {

          input(UserInput:{
          id: number,
          rol_id: number,
          name: string,
          lastName: string,
          email: string,
          password: string,
          cellphone: number,
          phone: number,
          created_at: string,
          update_at: string
          }
         )
}

type  register   = {
    input(UserInput:{
    name: string,
    lastName: string,
    email: string,
    password: string,
    cellphone: number,
    phone: number
  }):Token
}
