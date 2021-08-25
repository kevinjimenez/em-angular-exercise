import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NoticeComponent } from './notice/notice.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { CoreModule } from '../../../core';

@NgModule({
  declarations: [NoticeComponent, CodePreviewComponent],
  imports: [
    CommonModule,
    CoreModule,
    // ngbootstrap
    NgbNavModule,
    NgbTooltipModule,
  ],
  exports: [NoticeComponent, CodePreviewComponent],
})
export class GeneralModule {}
