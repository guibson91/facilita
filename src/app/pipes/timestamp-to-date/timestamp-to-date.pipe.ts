import { Pipe, PipeTransform } from '@angular/core';
import { firestore } from "firebase"
import "firebase/firestore";

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: firestore.Timestamp): any {
    if (value instanceof firestore.Timestamp) {
      return value.toDate()
    } else return value
  }

}
