import { Sales } from './Sales';
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { Review } from "./Review";


@Injectable({
  providedIn: "root",
})
export class ReviewServiceService {
  constructor(private http: HttpClient) {}

  private _url: string = "http://127.0.0.1:5000/sentimentForReview";

  private _url_sales: string = "http://127.0.0.1:5000/nextWeekSalesPrediction";

  getReviewStatus(reviewText: string) {
    return this.http
      .post<Review>(this._url, { review: reviewText })
      .pipe(catchError(this.handleErros));
  }

  getnextWeekSalesPrediction() {
    return this.http.get<Sales>(this._url_sales).pipe(catchError(this.handleErros));
  }

  private handleErros(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent)
      //frontend error
      console.error("An error occurred:", error.error.message);
    return throwError("Something bad happened; please try again later.");
  }
}
