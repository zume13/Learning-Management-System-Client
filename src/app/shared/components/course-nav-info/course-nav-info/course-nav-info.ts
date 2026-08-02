import { Component } from '@angular/core';

@Component({
  selector: 'app-course-nav-info',
  imports: [],
  templateUrl: './course-nav-info.html',
  styleUrl: './course-nav-info.css',
})
export class CourseNavInfo {

  courseCode = 'ABC123';

  codeVisible = false;

  toggleCodeVisibility() {
    this.codeVisible = !this.codeVisible;
  }

  inviteLink = `https://localhost:4200/join/${this.courseCode}`;

  linkCopied = false;
  codeCopied = false;

  copyInviteLink() {
    navigator.clipboard.writeText(this.inviteLink);

    this.linkCopied = true;

    setTimeout(() => {
      this.linkCopied = false;
    }, 2000);
  }

  copyCourseCode() {
    navigator.clipboard.writeText(this.courseCode);

    this.codeCopied = true;
    
    setTimeout(() => {
      this.codeCopied = false;
    }, 2000);
  }

}
