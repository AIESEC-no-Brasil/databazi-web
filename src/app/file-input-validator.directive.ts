//https://stackoverflow.com/questions/41889384/angular2-validation-for-input-type-file-wont-trigger-when-changing-the-fi/41938495#41938495
//https://github.com/angular/angular/issues/7341

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
    selector: "[requiredFile]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: FileValidatorDirective, multi: true },
    ]
})
export class FileValidatorDirective implements Validator {
    static validate(c: FormControl): {[key: string]: any} {
        return c.value == null || c.value.length == 0 ? { "required" : true} : null;
    }

    validate(c: FormControl): {[key: string]: any} {
        return FileValidatorDirective.validate(c);
    }
}
