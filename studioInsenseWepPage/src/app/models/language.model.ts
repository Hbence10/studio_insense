export interface Language {
  language: "hun" | "eng",
  menu1: string,
  menu2: string,
  menu3: string,
  menu4: string,
  aboutUsParagraph1: string,
  aboutUsParagraph2: string,
  notFound: string,
  unauthorized: string,
  services: {
    title: string,
    text: string
  }[],
  errorText: string,
  deleteConfirmation: string
}
