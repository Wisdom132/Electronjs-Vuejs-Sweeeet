var startDate = new Date("2015-08-04");
var endDate = new Date("2015-08-12");

let resultFromDB = dataFromDB = (data => {

    // get date from db as string and convert it to date 
    let date = new Date(data.date);

    return date >= startDate && date <= endDate;
})