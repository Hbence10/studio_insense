import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { LanguageService } from "./services/language.service";

export const languageResolver: ResolveFn<void> = async () => {
  await inject(LanguageService).getLanguage()
}
