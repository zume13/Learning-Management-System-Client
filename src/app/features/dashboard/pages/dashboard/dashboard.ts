import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideBell, LucideChevronDown,LucideUser, LucideSettings, LucideLogOut } from '@lucide/angular';


@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule, LucideBell, LucideChevronDown, LucideUser, LucideSettings, LucideLogOut],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
