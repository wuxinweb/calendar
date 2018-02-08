"use strict";

function calendar(year, month, day, week) {
	this.year = year;
	this.month = month;
	this.day = day;
	this.week = week;

	this.dayAs = 30; //前一个月的天数
	this.dayBs = 30; //当前一个月的天数

	this.days = 35; //一页日历的总天数
	this.setDayAs = function() { //设置天数and判断年份
		console.log(this.month);
		var _this = this;
		this.dayAs = setday(this.month - 1, _this);
	}
	this.setDayBs = function() { //设置天数and判断年份
		console.log(this.month);
		var _this = this;
		this.dayBs = setday(this.month, _this);

		console.log(this.dayAs);
	}

	this.setCalen = function(vid) {

		this.setDayAs();
		this.setDayBs();
		var _this = this;
		if (this.week === 0) {
			this.week = 7
		}
		setfigure(_this, this.dayAs - this.week + 2, this.dayAs, vid, "lis"); //前一月留下的天数
		setfigure(_this, 1, this.dayBs, vid, ""); //当前的天数
		setfigure(_this, 1, this.days, vid, "lis"); //后面的天数

	}

	function setfigure(_this, sday, eday, vid, color) {
		console.log(sday, eday, vid)
		for (var i = sday; i <= eday; i++) {
			var lic = document.createElement("li");
			lic.innerText = i;
			lic.className = color;
			if (color !== "lis" && _this.day === i) {
				lic.className = "lia";
			}
			vid.appendChild(lic);
			_this.days--;
		}

	}

	function setday(m, _this) {
		var ds = 0;
		if (m < 1) {
			m = 12;
		}
		if (m > 12) {
			m = 1;
		}
		switch (m) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				ds = 31;
				break;
			default:
				ds = 30;
				break;
		}
		if (m === 2) {
			if (_this.year % 4 === 0 && _this.year % 100 !== 0 || _this.year % 400 === 0) {
				ds = 29;
			} else {
				ds = 28;
			}
		}

		console.log(m + "---");
		console.log(ds + "---");

		return ds;

	}
}
var calen = document.getElementById('day');
var l = document.getElementById('l');
var r = document.getElementById('r');
var h2 = document.getElementById('h2');
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var week = d.getDay();
var s = year + "-" + month + "-1";

var date = new Date(s);
console.log(date);
year = date.getFullYear();
month = date.getMonth() + 1;
week = date.getDay();

h2.innerText = year + " - " + month;

new calendar(year, month, day, week).setCalen(calen);

l.onclick = function() {
	click(0);
	h2.innerText = year + " - " + month;
	new calendar(year, month, day, week).setCalen(calen);
};
r.onclick = function() {
	click(1);
	h2.innerText = year + " - " + month;
	new calendar(year, month, day, week).setCalen(calen);
};

function click(o) {
	calen.innerHTML = "";
	if (o === 0) {

		month--;
		if (month < 1) {
			year--;
			month = 12;
		}
		console.log(year, "====")
		var s = year + "-" + month + "-1";
		date = new Date(s);
		year = date.getFullYear();
		month = date.getMonth() + 1;
		day = date.getDate();
		week = date.getDay();
	} else if (o === 1) {
		month++;

		if (month > 12) {
			year++;
			month = 1;

		}
		var s = year + "-" + month + "-1";
		date = new Date(s);
		year = date.getFullYear();
		month = date.getMonth() + 1;
		day = date.getDate();
		week = date.getDay();
	}
}