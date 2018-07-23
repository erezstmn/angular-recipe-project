import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const authRouts: Routes =[    
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(authRouts)
    ],
    exports:[
        RouterModule
    ]
})
export class AuthRoutingModule{}