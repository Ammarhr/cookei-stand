'use strict';
var hours = ['6am: ', '7am: ', '8pm: ', '9pm: ', '10am: ', '11am: ', '12pm: ', '1pm:', '2pm: ', '3pm:', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var smthng;
var seattle = {
    name: 'Seattle',
    minCus: 23,
    maxCus: 65,
    avgCookieSale: 6.3,
    numOfCookies: [],
    numOfCust: [],
    randomCus: function() {
        for (var i = 0; i < hours.length; i++) {
            this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
            this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
            // console.log('value1', this.numOfCust[i]);
            // console.log('value2', this.numOfCookies[i]);
        }
    },
    render: function() {
        var mainContiner = document.getElementById('sales');

        var header1 = document.createElement('article');
        mainContiner.appendChild(header1);
        var h1E1 = document.createElement('h4');
        header1.appendChild(h1E1);
        h1E1.textContent = this.name;
        var pargraph1 = document.createElement('p');
        h1E1.appendChild(pargraph1);
        var uList = document.createElement('ul')
        pargraph1.appendChild(uList);

        for (var x = 0; x < hours.length; x++) {
            var lItems = document.createElement('li');
            uList.appendChild(lItems);
            lItems.textContent = hours[x] + this.numOfCookies[x] + ' cokies';
        }
        for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
        // console.log(sum);
        var result = document.createElement('li');
        lItems.appendChild(result);
        result.textContent = 'Total: ' + sum + ' cokies';
        // console.log(mainContiner);
    }
};
seattle.randomCus();
seattle.render();
// console.log(seateel);


var tokyo = {
    name: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCookieSale: 1.2,
    numOfCookies: [],
    numOfCust: [],
    randomCus: function() {
        for (var i = 0; i < hours.length; i++) {
            this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
            this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
        }
    },
    render: function() {
        var mainContiner = document.getElementById('sales');

        var header1 = document.createElement('article');
        mainContiner.appendChild(header1);
        var h1E1 = document.createElement('h4');
        header1.appendChild(h1E1);
        h1E1.textContent = this.name;
        var pargraph1 = document.createElement('p');
        h1E1.appendChild(pargraph1);
        var uList = document.createElement('ul')
        pargraph1.appendChild(uList);

        for (var x = 0; x < hours.length; x++) {
            var lItems = document.createElement('li');
            uList.appendChild(lItems);
            lItems.textContent = hours[x] + this.numOfCookies[x] + ' cokies';
        }
        for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
        var result = document.createElement('li');
        lItems.appendChild(result);
        result.textContent = 'Total: ' + sum + ' cokies';
    }
};
tokyo.randomCus();
tokyo.render();

var dubai = {
    name: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookieSale: 3.7,
    numOfCookies: [],
    numOfCust: [],
    randomCus: function() {
        for (var i = 0; i < hours.length; i++) {
            this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
            this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
        }
    },
    render: function() {
        var mainContiner = document.getElementById('sales');

        var header1 = document.createElement('article');
        mainContiner.appendChild(header1);
        var h1E1 = document.createElement('h4');
        header1.appendChild(h1E1);
        h1E1.textContent = this.name;
        var pargraph1 = document.createElement('p');
        h1E1.appendChild(pargraph1);
        var uList = document.createElement('ul')
        pargraph1.appendChild(uList);

        for (var x = 0; x < hours.length; x++) {
            var lItems = document.createElement('li');
            uList.appendChild(lItems);
            lItems.textContent = hours[x] + this.numOfCookies[x] + ' cokies';
        }
        for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
        console.log(sum);
        var result = document.createElement('li');
        lItems.appendChild(result);
        result.textContent = 'Total: ' + sum + ' cokies';
    }
};
dubai.randomCus();
dubai.render();

var paris = {
    name: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookieSale: 2.3,
    numOfCookies: [],
    numOfCust: [],
    randomCus: function() {
        for (var i = 0; i < hours.length; i++) {
            this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus);
            this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
        }
    },
    render: function() {
        var mainContiner = document.getElementById('sales');

        var header1 = document.createElement('article');
        mainContiner.appendChild(header1);
        var h1E1 = document.createElement('h4');
        header1.appendChild(h1E1);
        h1E1.textContent = this.name;
        var pargraph1 = document.createElement('p');
        h1E1.appendChild(pargraph1);
        var uList = document.createElement('ul')
        pargraph1.appendChild(uList);

        for (var x = 0; x < hours.length; x++) {
            var lItems = document.createElement('li');
            uList.appendChild(lItems);
            lItems.textContent = hours[x] + this.numOfCookies[x] + ' cokies';
        }
        for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
        console.log(sum);
        var result = document.createElement('li');
        lItems.appendChild(result);
        result.textContent = 'Total: ' + sum + ' cokies';
    }
};
paris.randomCus();
paris.render();

var lima = {
    name: 'Lima',
    minCus: 2,
    maxCus: 16,
    avgCookieSale: 4.6,
    numOfCookies: [],
    numOfCust: [],
    randomCus: function() {
        for (var i = 0; i < hours.length; i++) {
            this.numOfCust[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
            this.numOfCookies[i] = Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus * this.avgCookieSale);
        }
    },
    render: function() {
        var mainContiner = document.getElementById('sales');

        var header1 = document.createElement('article');
        mainContiner.appendChild(header1);
        var h1E1 = document.createElement('h4');
        header1.appendChild(h1E1);
        h1E1.textContent = this.name;
        var pargraph1 = document.createElement('p');
        h1E1.appendChild(pargraph1);
        var uList = document.createElement('ul')
        pargraph1.appendChild(uList);

        for (var x = 0; x < hours.length; x++) {
            var lItems = document.createElement('li');
            uList.appendChild(lItems);
            lItems.textContent = hours[x] + this.numOfCookies[x] + ' cokies';
        }
        for (var b = 0, sum = 0; b < this.numOfCookies.length; sum += this.numOfCookies[b++]);
        console.log(sum);
        var result = document.createElement('li');
        lItems.appendChild(result);
        result.textContent = 'Total: ' + sum + ' cokies';
    }
};
lima.randomCus();
lima.render();