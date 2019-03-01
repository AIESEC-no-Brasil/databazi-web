//https://stackoverflow.com/questions/41889384/angular2-validation-for-input-type-file-wont-trigger-when-changing-the-fi/41938495#41938495
//https://github.com/angular/angular/issues/7341

import { Directive } from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

@Directive({
    selector: "input[type=file]",
    host : {
        "(change)" : "onChange($event.target.files)",
        "(blur)": "onTouched()"
    },
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessorDirective, multi: true }
    ]
})
export class FileValueAccessorDirective implements ControlValueAccessor {
    value: any;
    onChange = (_) => {};
    onTouched = () => {};

    writeValue(value) {}
    registerOnChange(fn: any) { this.onChange = fn; }
    registerOnTouched(fn: any) { this.onTouched = fn; }
}
