import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideBell, LucideChevronDown, LucideLogOut, LucideSettings, LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterLink,
            RouterOutlet,
            RouterLinkActive,
            LucideBell,
            LucideChevronDown,
            LucideUser,
            LucideSettings,
            LucideLogOut],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  showDropdown = false;
  sidebarCollapsed = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
