import { OnInit } from '@angular/core';
import { Locale } from 'angular2localization/angular2localization';
import { LocaleService } from 'angular2localization/angular2localization';
import { LocalizationService } from 'angular2localization/angular2localization';
import { CredentialsService } from './service/credentials.service';
import { AuthenticationService } from './service/authentication.service';
import { EbayAuthenticationComponent } from "../ebay-authentication.component";
export declare class AuthenticationComponent extends Locale implements OnInit {
    private credentialService;
    private authenticationService;
    private ebayAuthenticationComponent;
    private isLoading;
    private environment;
    private environmentValues;
    private credentialList;
    constructor(credentialService: CredentialsService, authenticationService: AuthenticationService, ebayAuthenticationComponent: EbayAuthenticationComponent, locale: LocaleService, localization: LocalizationService);
    ngOnInit(): void;
    private initCredentialTable();
    private openAuthenticationPopup();
    private refreshToken(item);
    private deleteCredential(item);
    private setLoading(isLoading);
    private reload();
}
