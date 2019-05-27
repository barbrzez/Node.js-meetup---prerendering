var restify = require('restify');

function respond(req, res, next) {
    const response = [
        {
            destination: "London",
            imgSrc: "https://londynek.net/image/jdnews-agency/2191248/60674-201712261641-lg2.jpg",
            currentTemperature: "2",
            temperatureInTwoWeeks: "12",
            description: "Whether you are visiting London for the first time or coming back for a special occasion, you’ll discover a city full of unforgettable landmarks and exciting things to do.",
            priceTicket: "83"
        },
        {
            destination: "Rome",
            imgSrc: "https://www.telegraph.co.uk/content/dam/Partner%20Offers/BA%20European%20cities.jpg?imwidth=320",
            currentTemperature: "24",
            temperatureInTwoWeeks: "28",
            description: "Rome, a city bursting with attractions, events and activities for the whole family",
            priceTicket: "140"
        },
        {
            destination: "Tbilisi",
            imgSrc: "https://onewaytour.ge/wp-content/uploads/2016/02/923-tbilisi-6-2.png",
            currentTemperature: "12",
            temperatureInTwoWeeks: "16",
            description: "The capital and the largest city of Georgia, lying on the banks of the Kura River with a population of approximately 1.5 million people.",
            priceTicket: "240"
        },
        {
            destination: "Sharm el Sheikh",
            imgSrc: "http://www.tnetnoc.com//hotelphotos/515/147515/2241284-Concorde-El-Salam-Sharm-El-Sheikh-Front-Hotel-Hotel-Exterior-1-DEF.jpg",
            currentTemperature: "29",
            temperatureInTwoWeeks: "33",
            description: "Sharm El Sheikh is an Egyptian city on the southern tip of the Sinai Peninsula, in South Sinai Governorate, on the coastal strip along the Red Sea",
            priceTicket: "172"
        }
    ];

    res.send(response);
    next();
}

var server = restify.createServer();
server.get('/trips/', respond);
server.head('/trips/', respond);

server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});