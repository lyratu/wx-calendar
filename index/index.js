const app = getApp();

Page({
  data: {
    year: 0,
    month: 0,
    day: 0,
    firstDay: 0,
    lastDay: 0,
    days: [],
    toDay: "",
  },
  getDate() {
    //获取当月日期
    var mydate = new Date();
    var year = mydate.getFullYear();
    var month = mydate.getMonth();
    var months = month + 1;

    var fist = new Date(year, month, 1);
    var last = new Date(year, months, 0);
    this.setData({
      year,
      month: months,
      toDay: year + "-" + months,
      day: mydate.getDate(),
      firstDay: fist.getDay(),
      lastDay: last.getDate(),
    });
  },
  setDays() {
    let days = [];
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      days.push(i);
    }
    let arr = new Array(this.data.firstDay);
    days.unshift(...arr);
    this.setData({
      days,
    });
  },

  prevMonth() {
    //上一月
    var months;
    var years;
    if (this.data.month == 1) {
      years = this.data.year - 1;
      this.data.month = 12;
      months = this.data.month;
    } else {
      years = this.data.year;
      months = this.data.month - 1;
    }

    var first = new Date(years, months - 1, 1);
    this.data.firstDay = first.getDay();
    var last = new Date(years, months, 0);
    this.data.lastDay = last.getDate();

    var days = [];
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      days.push(i);
    }
    let arr = new Array(this.data.firstDay);
    days.unshift(...arr);
    this.setData({
      days,
      month: months,
      year: years,
      firstDay: this.data.firstDay,
      lastDay: this.data.lastDay,
    });
  },
  nextMonth() {
    //下一月
    var months;
    var years;
    if (this.data.month == 12) {
      this.data.month = 0;
      months = this.data.month;
      years = this.data.year + 1;
    } else {
      months = this.data.month + 1;
      years = this.data.year;
    }
    var months = this.data.month + 1;
    var first = new Date(years, months - 1, 1);
    this.data.firstDay = first.getDay();
    var last = new Date(years, months, 0);
    this.data.lastDay = last.getDate();

    let days = [];
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      days.push(i);
    }
    let arr = new Array(this.data.firstDay);
    days.unshift(...arr);
    this.setData({
      days,
      month: months,
      year: years,
      firstDay: this.data.firstDay,
      lastDay: this.data.lastDay,
    });
  },
  onLoad() {
    this.getDate();
    this.setDays();
  },
});
