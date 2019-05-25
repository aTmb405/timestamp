/* 

A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure 
{"unix": null, "utc" : "Invalid Date" }. It is what you get from the date manipulation functions used above.


new Date(time).getTime() - milliseconds
new Date(time).toUTCString() - UTC format
*/



let timestamp = (date) => {
  if (Date(date)) {
    let time = {
      "unix": new Date(date).getTime(),
      "utc": new Date(date).toUTCString()
    }
    return time;
  } else {
    if (date == "") {
      return new Date();
    } else {
      let notTime = {
        "unix": null,
        "utc": "Invalid date"
      }
      return notTime;
    }
  }
}

module.exports = timestamp;