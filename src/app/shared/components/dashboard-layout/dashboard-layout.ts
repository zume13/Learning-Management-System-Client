import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideBell, LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideLogOut, LucideMoon, LucideSettings, LucideSun, LucideUser } from '@lucide/angular';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterLink,
            RouterOutlet,
            RouterLinkActive,
            LucideBell,
            LucideChevronDown,
            LucideUser,
            LucideSettings,
            LucideLogOut,
            LucideChevronLeft,
            LucideChevronRight,
            LucideSun,
            LucideMoon],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  
  private themeService = inject(Theme);

  showDropdown = false;

  sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

  get isDarkMode() {
    return this.themeService.isDarkMode();
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;

    localStorage.setItem(
      'sidebarCollapsed',
      String(this.sidebarCollapsed)
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
