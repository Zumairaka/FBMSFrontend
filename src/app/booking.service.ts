import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  name: string;
  constructor(private http: HttpClient, private router: Router) { }

  signUpData(user) {
    return this.http.post('https://fbms-backend.herokuapp.com/signup', user);
  }

  editAccountData(user) {
    return this.http.post('https://fbms-backend.herokuapp.com/signup/edit', user);
  }

  loginVerify(user) {
    return this.http.post('https://fbms-backend.herokuapp.com/login', user);
  }

  checkAvailable(bookingData) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/check', bookingData);
  }

  saveMyGame(bookingData) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/save', bookingData);
  }

  getBookingDataToday(today) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/dataToday', {date: today});
  }

  getBookingData() {
    return this.http.get('https://fbms-backend.herokuapp.com/booking');
  }

  getMyBookingData(name) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/myData', {uname: name});
  }

  getUserData(uname) {
    return this.http.post('https://fbms-backend.herokuapp.com/signup/getUser', {name: uname});
  }

  getUsersData() {
    return this.http.get('https://fbms-backend.herokuapp.com/signup/getUsers');
  }

  deleteBooking(name, day, tym) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/delete', {uname: name, date: day, time: tym});
  }

  deleteAllBooking(uname) {
    return this.http.post('https://fbms-backend.herokuapp.com/booking/deleteAll', {name: uname});
  }

  deleteUser(uname) {
    return this.http.post('https://fbms-backend.herokuapp.com/signup/delete', {name: uname});
  }

  saveEvent(eventData) {
    return this.http.post('https://fbms-backend.herokuapp.com/event', eventData);
  }

  getEventData() {
    return this.http.get('https://fbms-backend.herokuapp.com/event/getEvents');
  }

  getEvent(name, day, tym) {
    return this.http.post('https://fbms-backend.herokuapp.com/event/getEvent', {ename: name, date: day, time: tym});
  }

  deleteEvent(name, day, tym) {
    return this.http.post('https://fbms-backend.herokuapp.com/event/delete', {ename: name, date: day, time: tym});
  }


}
