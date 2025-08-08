declare var $localize: LocalizeFn;

interface LocalizeFn {
  (messageParts: TemplateStringsArray, ...expressions: readonly any[]): string;
}