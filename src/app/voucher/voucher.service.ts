import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Voucher} from './voucher.domain';
import { SearchVoucher } from './voucher.domain';
import { SearchVoucherResult } from './voucher.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class VoucherService {
  constructor(private http: HttpClient) {
  } 

  save(voucher: Voucher): Observable<Voucher> {
    var url = Urls.getDomain().concat(APIURLS.savevoucher);
    return this.http.post<Voucher>(url, voucher, { headers: httpOptions.headers });
  }

  searchVoucher(searchVoucher: SearchVoucher, pageNo: number = 0): Observable<SearchVoucherResult> {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("/search")
      .concat("?pageNumber=")
      .concat(pageNo.toString())
    console.log("Searching : " + url);
    return this.http.post<SearchVoucherResult>(url, searchVoucher, { headers: httpOptions.headers });
  }
  
}