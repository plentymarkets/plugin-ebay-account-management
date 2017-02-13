import { Http } from '@angular/http';
import { TerraLoadingBarService, TerraBaseService } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs';
export declare class AuthenticationService extends TerraBaseService {
    constructor(loadingBarService: TerraLoadingBarService, http: Http);
    getLoginUrl(environment: string): Observable<any>;
    refreshToken(credentialsId: number): Observable<any>;
}
