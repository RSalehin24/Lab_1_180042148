const fs = require("fs");

const aboutPage = fs.readFileSync("./contents/HTML/about.html", "utf-8");
const blogPage = fs.readFileSync("./contents/HTML/blog.html", "utf-8");
const contactPage = fs.readFileSync("./contents/HTML/contact.html", "utf-8");
const indexPage = fs.readFileSync("./contents/HTML/index.html", "utf-8");
const pricingPage = fs.readFileSync("./contents/HTML/pricing.html", "utf-8");
const servicesPage = fs.readFileSync("./contents/HTML/services.html", "utf-8");
const workPage = fs.readFileSync("./contents/HTML/work.html", "utf-8");

module.exports = {aboutPage, blogPage, contactPage, indexPage, pricingPage, servicesPage, workPage};