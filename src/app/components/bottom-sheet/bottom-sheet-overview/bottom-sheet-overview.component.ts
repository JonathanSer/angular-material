import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-overview',
  imports: [MatListModule],
  templateUrl: './bottom-sheet-overview.component.html',
  styleUrl: './bottom-sheet-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetOverviewComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


