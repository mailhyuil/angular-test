import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { Page1Module } from '../pages/page1/page1.module';
import { Page2Module } from '../pages/page2/page2.module';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule, Page1Module, Page2Module],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
