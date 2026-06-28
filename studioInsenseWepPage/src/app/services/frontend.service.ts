import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root',
})
export class FrontendService {
  alert: { showAlert: boolean, alertMsg: string, isError: boolean } = {
    showAlert: false,
    alertMsg: "",
    isError: false
  }

  showProjectCreator: boolean = false

  handleAlert(alertMsg: string, isError: boolean) {
    this.alert = {
      showAlert: true,
      alertMsg: alertMsg,
      isError: isError
    }

    setTimeout(() => {
      this.alert = {
        showAlert: false,
        alertMsg: "",
        isError: false
      }
    }, 5000)
  }


}
