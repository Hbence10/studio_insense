import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrontendService {
  private selectedLanguage: "hun" | "eng" = "hun"

  getSelectedLanguage():  "hun" | "eng" {
    return this.selectedLanguage
  }

  setSelectedLanguage() {
    this.selectedLanguage = this.selectedLanguage === "hun" ? "eng" : "hun"
  }
}
