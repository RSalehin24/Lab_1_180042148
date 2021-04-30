const fs = require("fs");

const aboutPage = fs.readFileSync("./Content/HTML/about.html", "utf-8");
const blogPage = fs.readFileSync("./Content/HTML/blog.html", "utf-8");
const contactPage = fs.readFileSync("./Content/HTML/contact.html", "utf-8");
const indexPage = fs.readFileSync("./Content/HTML/index.html", "utf-8");
const pricingPage = fs.readFileSync("./Content/HTML/pricing.html", "utf-8");
const servicesPage = fs.readFileSync("./Content/HTML/services.html", "utf-8");
const workPage = fs.readFileSync("./Content/HTML/work.html", "utf-8");

module.exports = {aboutPage, blogPage, contactPage, indexPage, pricingPage, servicesPage, workPage};