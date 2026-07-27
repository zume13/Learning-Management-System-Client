import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';
import { Card } from '../../../../shared/components/card/card';
import { Input } from '../../../../shared/components/input/input';
import { PasswordInput } from '../../../../shared/components/password-input/password-input';

@Component({
  selector: 'app-login',
  imports: [RouterLink, Button, Card, Input, PasswordInput],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
