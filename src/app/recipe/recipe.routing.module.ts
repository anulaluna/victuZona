import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeComponent } from './index';

const recipeRoutes: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
    // children: [
    //   {
    //     path: '', // www.example.pl/courses/
    //     component: CoursesListComponent
    //   },
    //   {
    //     path: ':id', // www.example.pl/courses/1
    //     component: CourseDetailComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
