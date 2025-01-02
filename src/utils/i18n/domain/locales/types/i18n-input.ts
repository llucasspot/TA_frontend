export type I18nInputI<TI18NInputValidation extends I18NInputValidationI> = {
  label: string;
  placeholder: string;
  validation: TI18NInputValidation;
};

export type I18NInputValidationI = {
  IsEmail?: string;
  IsNotEmpty?: string;
  IsString?: string;
  Length?: string;
};

export class I18nInput {
  label: string;
  placeholder: string;
  validation: I18NInputValidation;

  constructor(readonly i18nKeyPath: string) {
    this.label = `${i18nKeyPath}.label`;
    this.placeholder = `${i18nKeyPath}.placeholder`;
    this.validation = new I18NInputValidation(i18nKeyPath);
  }
}

export class I18NInputValidation {
  IsEmail: string;
  IsNotEmpty: string;
  IsString: string;
  Length: string;

  constructor(readonly i18nKeyPath: string) {
    this.IsEmail = `${i18nKeyPath}.validation.IsEmail`;
    this.IsNotEmpty = `${i18nKeyPath}.validation.IsNotEmpty`;
    this.IsString = `${i18nKeyPath}.validation.IsString`;
    this.Length = `${i18nKeyPath}.validation.Length`;
  }
}
