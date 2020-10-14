var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyJvXFNWQIMm9EA2'}).base('appmrMX9i7Il9Ewtq');

base('Neighborhood Tabulation Area (NTA)').select({

    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {

    //     var record =  record.get('Name');
      
    // myElement.innerHTML = record;
    // var record =  record.get('Households without Internet');
    var myElement = document.getElementById('years')
myElement.innerHTML ="Households without internet: " + record.get('Households without Internet')*100+"%";
var myElement1 = document.getElementById('place')
myElement1.innerHTML ="Neighborhood: " + record.get('Name');
var myElement2 = document.getElementById('records')
myElement2.innerHTML ="Airtable Records of Hotspot Locations: " + record.get('ObjectID');

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


   
    // console.log('Retrieved ', record.get('Name'));

    // var $artistInfo = $('<div>');
    // $artistInfo.append($('<h3>').text(record.get('Name')));
    // $artistInfo.append($('<div>').text(record.get('Bio')));

    // $('#artists').append($artistInfo);