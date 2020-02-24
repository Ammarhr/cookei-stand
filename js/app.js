'use strict';
var hours = ['6am', '7am', '8pm', '9pm', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var objects = [seattle, tokyo, dubai, paris, lima];
//the constructor:
function LocationStore(name, minCus, maxCus, avgCookieSale) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.numOfCookies = [];
    this.numOfCust = [];
    this.avgCookieSale = avgCookieSale;
    this.total = [];
}

//constructor method for caculate the number of cookies:
LocationStore.prototype.randomCus = function() {
    for (var i = 0; i < hours.length; i++) {
        this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
    }
}

//function to creat and render the head of table to html:
function tHead() {
    var mainContiner = document.getElementById('sales');
    var tableAll = document.createElement('table');
    mainContiner.appendChild(tableAll);
    var headEl = document.createElement('thead');
    tableAll.appendChild(headEl);
    var trE1 = document.createElement('tr');
    headEl.appendChild(trE1);
    trE1.textContent = 'Location';
    for (var i = 0; i < hours.length; i++) {
        var thE1 = document.createElement('th')
        trE1.appendChild(thE1);
        thE1.textContent = hours[i];
    }
    var thTotal = document.createElement('th');
    trE1.appendChild(thTotal);
    thTotal.textContent = 'Daily Location Total'
}

//constructor method for render the body of the table:
LocationStore.prototype.render = function() {
    var mainContiner = document.getElementById('sales');
    var tableAll = document.createElement('table');
    mainContiner.appendChild(tableAll);
    var bodyEl = document.createElement('tbody');
    tableAll.appendChild(bodyEl);
    var trE2 = document.createElement('tr');
    bodyEl.appendChild(trE2);
    trE2.textContent = this.name;
    for (var a = 0; a < hours.length; a++) {
        var tdE1 = document.createElement('td');
        trE2.appendChild(tdE1);
        tdE1.textContent = this.numOfCookies[a];
    }
    for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
    var tdTotal = document.createElement('td');
    trE2.appendChild(tdTotal);
    tdTotal.textContent = sum;
}

//function to render foot of table
function tFoot() {
    var mainContiner = document.getElementById('sales');
    var tableAll = document.createElement('table');
    mainContiner.appendChild(tableAll);
    var footEl = document.createElement('tfoot');
    tableAll.appendChild(footEl);
    var trE3 = document.createElement('tr');
    footEl.appendChild(trE3);
    trE3.textContent = 'Totals';
    var c = 0;
    for (var d = 0; d < hours.length; d++) {
        var tdE3 = document.createElement('td');
        trE3.appendChild(tdE3);
        tdE3.textContent = c;
    }

}

//location object:
var seattle = new LocationStore('Seattle', 23, 65, 6.3);
var tokyo = new LocationStore('Tokyo', 3, 24, 1.2);
var dubai = new LocationStore('Dubai', 11, 38, 3.7);
var paris = new LocationStore('Paris', 20, 38, 2.3);
var lima = new LocationStore('Lima', 2, 16, 4.7);
tHead();

//calling the function dynamicly:
var objects = [seattle, tokyo, dubai, paris, lima];
for (var i = 0; i < objects.length; i++) {
    objects[i].randomCus();
    objects[i].render();
}
tFoot();