import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
interface UpdatedFields {
  businessUnit?: string;
  interviewedPosition?: string;
  band?: string;
  interviewStatus?: string;
  noOfRounds?: number;
}

@Component({
  selector: 'app-referred-candidate-admin',
  templateUrl: './referred-candidate-admin.component.html',
  styleUrl: './referred-candidate-admin.component.scss',
})
export class ReferredCandidateAdminComponent {}
