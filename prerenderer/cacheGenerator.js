const puppeteer = require('puppeteer');

var isCacheReady = false;
var cachedValue = "";

exports.isCacheReady = () => {
    return isCacheReady;
}

exports.getCachedValue = () => {
    if (!exports.isCacheReady()) {
        return "";
    }

    return cachedValue;
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {
            height: 1080,
            width: 1920
        }
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:8080?ispredenderer=1', {"waitUntil" : "networkidle0"});
    await page.setCacheEnabled(false);

    async function generateCache() {
        await page.reload({"waitUntil" : "networkidle0"});
        cachedValue = await page.content();
        isCacheReady = true;
        
        setTimeout(generateCache, 10000);
    }

    setTimeout(generateCache, 0);

})();