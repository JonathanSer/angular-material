import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterAutocompleteComponent } from "./components/Filter autocomplete/Filter autocomplete.component";
import { CardComponent } from "./components/card/card.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { BottomSheetComponent } from "./components/bottom-sheet/bottom-sheet.component";
import { ButtonComponent } from "./components/button/button.component";
import { ButtonToggleComponent } from "./components/button-toggle/button-toggle.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DividerComponent } from "./components/divider/divider.component";
import { FormFieldComponent } from "./components/form-field/form-field.component";
import { IconComponent } from "./components/icon/icon.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilterAutocompleteComponent, CardComponent, BadgeComponent, BottomSheetComponent, ButtonComponent, ButtonToggleComponent, CheckboxComponent, ChipsComponent, DatepickerComponent, DialogComponent, DividerComponent, FormFieldComponent, IconComponent, MenuComponent, MatCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-proyecto';
}
