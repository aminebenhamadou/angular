import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
{
  path:'members',
  pathMatch:'full',
  component:MemberComponent
},
{

  path:'create',
  pathMatch:'full',
  component:MemberFormComponent

},


{
  path:':id/edit',
  pathMatch:'full',
  component: MemberFormComponent
},



{
  path:'dashboard',
  pathMatch:'full',
  component: DashboardComponent
},
{
  path:'tools',
  pathMatch:'full',
  component: ToolsCompone
  
},

{
  path:'article',
  pathMatch:'full',
  component: ArticleComponent
},

{
  path:'events',
  pathMatch:'full',
  component: EventsComponent
},
{

  path:'',
  pathMatch:'full',
  redirectTo:'login'

},

{

  path:'login',
  pathMatch:'full',
  component:LoginComponent

},





];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
