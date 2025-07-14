import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview/bottom-sheet-overview.component';

@Component({
  selector: 'app-bottom-sheet',
  imports: [
    MatButtonModule, MatBottomSheetModule
  ],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewComponent);
  }
 }
