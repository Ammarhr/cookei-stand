'use strict';
var hours = ['6am', '7am', '8pm', '9pm', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cities = [];
//the constructor:
function LocationStore(name, minCus, maxCus, avgCookieSale) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.numOfCookies = [];
    this.numOfCust = [];
    this.avgCookieSale = avgCookieSale;
    this.total = [];
    cities.push(this);
}

//constructor method for caculate the number of cookies:
LocationStore.prototype.randomCus = function() {
    for (var i = 0; i < hours.length; i++) {
        // this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
        this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
    }
}

var mainContiner = document.getElementById('sales');
var tableAll = document.createElement('table');
mainContiner.appendChild(tableAll);
var headEl = document.createElement('thead');
tableAll.appendChild(headEl);
var bodyEl = document.createElement('tbody');
tableAll.appendChild(bodyEl);
var footEl = document.createElement('tfoot');
tableAll.appendChild(footEl);


//function to creat and render the head of table to html:

var seattle = new LocationStore('Seattle', 23, 65, 6.3);
var tokyo = new LocationStore('Tokyo', 3, 24, 1.2);
var dubai = new LocationStore('Dubai', 11, 38, 3.7);
var paris = new LocationStore('Paris', 20, 38, 2.3);
var lima = new LocationStore('Lima', 2, 16, 4.7);

tHead();

// objects.push(newCity);
function tHead() {
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
    this.total = sum;
}

//calling the function dynamicly:
for (var i = 0; i < cities.length; i++) {
    cities[i].randomCus();
    cities[i].render();
}

//function to render foot of table
function tFoot() {

    var trE3 = document.createElement('tr');
    footEl.appendChild(trE3);
    trE3.setAttribute('id', 'tableFoot')
    trE3.textContent = 'Totals';
    for (var d = 0; d < hours.length; d++) {
        var result = 0;
        for (var c = 0; c < cities.length; c++) {
            result += cities[c].numOfCookies[d]
        }
        var tdE3 = document.createElement('td');
        trE3.appendChild(tdE3);
        tdE3.textContent = result;

        //logic:
        // tdE3.textContent += seattle.numOfCookies[d] + tokyo.numOfCookies[d] + dubai.numOfCookies[d] + paris.numOfCookies[d] + lima.numOfCookies[d];
    }
    var resultTotal = 0;
    for (var c = 0; c < cities.length; c++) {
        resultTotal += cities[c].total;
        // console.log(objects[c])
    }
    var tdE4 = document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent += resultTotal;
    // tdE4.textContent += seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
}

function removFoot() {
    var footRemove = document.getElementById("tableFoot");
    footRemove.parentNode.removeChild(footRemove);
}

var locationForm = document.getElementById('newShop');
locationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = event.target.locationName.value;
    var maxCus = parseInt(event.target.maxCustumer.value);
    var minCus = parseInt(event.target.miniCustumer.value);
    var avgCookieSale = parseInt(event.target.avgCookies.value);

    if (!name || !maxCus || !minCus || !avgCookieSale) {
        alert(`please complet the form  refresh the page`);
    } else if (maxCus <= 0 || minCus <= 0) {
        alert(`please enter a vaild value for min/max customer!! refresh the page`)
    } else if (minCus > maxCus) {
        alert(`please enter a value for maximum custumer bigger than ${minCus}!!  refresh the page`)
    } else {
        var newCity = new LocationStore(name, minCus, maxCus, avgCookieSale);
        removFoot();
        newCity.randomCus();
        newCity.render();
        tFoot();
        locationForm.reset();
    }
    // for (var i = 0; 1 < objects.length; i++) {
    //     if (name === objects[i])
    //         maxCus = objects[i].maxCus;
    //     minCus = objects[i].minCus;
    //     avgCookieSale = objects[i].avgCookieSale;
    // }

})
tFoot();