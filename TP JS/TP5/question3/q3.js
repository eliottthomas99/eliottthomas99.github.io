/**
 * Welcome to ICAL.js fiddle
 */


 import defaultExport from "ical.js/lib/ical";
 //import defaultExport from "../../../node_modules/ical.js/lib/ical";


var ICAL = require("ical.js");  



var iCalendarData = [
    'BEGIN:VCALENDAR',
    'CALSCALE:GREGORIAN',
    'PRODID:-//Example Inc.//Example Calendar//EN',
    'VERSION:2.0',
    'BEGIN:VEVENT',    
    'DTSTAMP:20080205T191224Z',
    'DTSTART:20081006',
    'SUMMARY:Planning meeting',
    'UID:4088E990AD89CB3DBB484909',
    'END:VEVENT',
    'END:VCALENDAR'
].join("\r\n");


var jcalData = ICAL.parse(iCalendarData);
var vcalendar = new ICAL.Component(jcalData);
var vevent = vcalendar.getFirstSubcomponent('vevent');
var summary = vevent.getFirstPropertyValue('summary');
console.log('Summary: ' + summary);