import { Http } from '@angular/http';
import { TerraLoadingBarService, TerraBaseService } from '@plentymarkets/terra-components';
import { Observable } from 'rxjs';
import { CredentialsData } from '../data/credentials-data';
export declare class CredentialsService extends TerraBaseService {
    constructor(loadingBarService: TerraLoadingBarService, http: Http);
    search(): Observable<CredentialsData>;
    deleteCredential(id: number): Observable<CredentialsData>;
}
