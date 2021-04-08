// const express = require("express");
// const cors = require("cors");
// const bodyParser = require('body-parser');
// const products = require("./Products");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid'; //For the creation of RFC4122 UUIDs

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.locals.products = [
    {
        id: 1,
        name: "ROSENKVARTS RÅ JUMBO",
        price: "80",
        description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
        imageUrl: "https://images.pexels.com/photos/4040586/pexels-photo-4040586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "fullmoon",
        moon: "snowmoon",
        zodiac: "♉"
      },
      {
        id: 2,
        name: "kalcit",
        price: "120",
        description: "Vår Dream Big Crystal! Den Gröna Kalciten påminner oss om att inga drömmar är för stora och att inget är omöjligt! Det här är kristallen vi alltid har med oss när vi vill manifestera in saker i vårat liv. Den sägs också kunna snappa upp bilderna vi målar upp i vårt huvud när vi dagdrömmer och skickar dem vidare till universum. Grön Kalcit är kort och gott en direktlänk med universum, eeh, ja tack! ",
        imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "FullMoon",
        moon: "harvestmoon",
        zodiac: "♉"
      },
      {
        id: 3,
        name: "BLÅ KALCIT RÅ",
        price: "170",
        description: "Blå Kalcit är en av våra (och era) absoluta favoriter! Det finns ingen bättre godnatt kristall än denna. Vi får varje vecka historier som berättar hur ni blivit hjälpt med sömnen av denna magiska kristall!",
        imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "blackmoon",
        moon: "strawberrymoon",
        zodiac: "taurus"
      },
      {
        id: 4,
        name: "NY JADEPLATTA",
        price: "290",
        description: "Känner du att du behöver hitta balans i vardagen, i en relation eller inom dig själv? I så fall har du dragits till helt rätt kristall! Ny Jade står för just balans och sägs hjälpa oss att se, förstå och förändra det som behövs för att vi ska hitta balans i livet. Balance is the key!",
        imageUrl: "https://images.pexels.com/photos/2942849/pexels-photo-2942849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "FullMoon",
        moon: "strawberrymoon",
        zodiac: "capricorn"
      },
      {
        id: 5,
        name: "ICE KALCIT",
        price: "80",
        description: "Behöver du lite kick-ass motivation? Ice Kalciten hjälper dig hitta motivationen som du behöver för att gå från idé till action! Den här kristallen sägs kunna connecta dina känslor med ditt mind vilket gör det till en ostoppbar powerkristall när det kommer till att förverkliga dina drömmar! ",
        imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "LastQuarter",
        moon: "wormmoon",
        zodiac: "♉"
      },
      {
        id: 6,
        name: "AMAZONIT",
        price: "105",
        description: "Amazoniten är en glädjekristall som sägs kunna boosta vårt inner child. Det här är en lekfull kristall som påminner oss om att det är okej att släppa kontrollen och bara ha kul ibland. Den här kristallen kan också hjälpa till att öppna upp vårt halschakra och göra att vi vågar talar vår sanning på ett härligt och glädjefyllt sätt.",
        imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "lastquarter",
        moon: "harvestmoon",
        zodiac: "♉"
      },
      {
        id: 7,
        name: "AMETIST",
        price: "130",
        description: "Ametisten står för “peace and harmony” och är ett måste i allas kristallsamling! Den här kristallen sägs kunna hjälpa oss slappna av och komma ner i varv. Det här är den ultimata kristallen att meditera med eller ha hemma för att sprida lite chill vibes.",
        imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "fullmoon",
        moon: "snowmoon",
        zodiac: "♉"
      },
      {
        id: 8,
        name: "ANGELIT",
        price: "90",
        description: "Här har vi kristallvärldens egna lilla skyddsängel. Den här gulliga kristallen sägs kunna skydda oss och är perfekt när vi vill heala något i vår kropp och fungerar som en påminnelse om att tiden läker alla sår. Den här kristallen är väldigt spirituell och kan göra så att ditt mind blir mer öppet för signs från universum.",
        imageUrl: "https://images.pexels.com/photos/2942849/pexels-photo-2942849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        color: "rosa",
        moonphase: "blackmoon",
        moon: "snowmoon",
        zodiac: "taurus"
      },
      {
      id: 9,
      name: "GOLDEN HEALER",
      price: "80",
      description: "Wow, den här kristallen är en av våra absoluta favoriter! Den kallas för Golden Healer men går också under namnet Kristallhematoid och den sägs kunna heala ALLA våra chakran. Den balanserar och healar alla våra chakran samtidigt som den lugnar vårt mind. Om du känner dig stressad eller uppe i varv är det här kristallen du ska ta fram och meditera tillsammans med. Everything you need is within you.",
      imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      color: "rosa",
      moonphase: "BlackMoon",
      moon: "snowmoon",
      zodiac: "♉"
    },
    {
      id: 10,
      name: "HOWLIT",
      price: "140",
      description: "Det här är kristallen som sägs kunna connecta oss med Månen och som påminner oss om att ta vara på Månens energier och leva tillsammans med Månens olika faser. Howliten sägs också kunna boosta vårt tålamod och påminner oss om att vissa saker ibland kan ta längre tid att manifestera. Be patient and trust the universe!",
      imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      color: "rosa",
      moonphase: "FirstQuarter",
      moon: "snowmoon",
      zodiac: "♉"
    }
];

app.locals.heros = [{
  id: uuidv4(),
  heading: "Full Moon - time to let go",
  info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
  moonphase: "Full Moon",
  imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  linkUrl: "/"
},
{
  id: uuidv4(),
  heading: "First Quarter - the cycle starts over",
  info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
  moonphase: "First Quarter",
  imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  linkUrl: "/"
},
{
  id: uuidv4(),
  heading: "New Moon - set your intentions",
  info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
  moonphase: "Black Moon",
  imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  linkUrl: "/"
},
{
  id: uuidv4(),
  heading: "Last Quarter - finish up your projects and prepare to move on",
  info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
  moonphase: "Last Quarter",
  imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  linkUrl: "/"
},
]

//Get all products
app.get("/api/products", (req, resp) => {

    const products = req.app.locals.products;
    
    resp.json(products);
});

//search products from user query
app.get("/api/products/:query", (req,resp) => {

  const products = req.app.locals.products;
  const searchTerm = req.params.query.toLocaleLowerCase().replace(/\s+/, ""); 
  console.log(searchTerm);

  const product = products.filter((product) => {
    return (
      product.name.toLocaleLowerCase().includes(searchTerm)
    || product.price.toLocaleLowerCase().includes(searchTerm)    
    || product.color.toLocaleLowerCase().includes(searchTerm)
    || product.moonphase.toLocaleLowerCase().includes(searchTerm)
    || product.moon.toLocaleLowerCase().includes(searchTerm)
    || product.zodiac.toLocaleLowerCase().includes(searchTerm)

    );
  }
    
  );
    
      resp.json(product);
});


//POST product to products
app.post("/api/products", (req, resp) => {

    const {name,price,description,imageUrl,color,moonphase,moon,zodiac} = req.body;

    const product =   {
      id:uuidv4(),
      name,
      price,
      description,
      imageUrl,
      color,
      moonphase,
      moon,
      zodiac
    };

    const products = req.app.locals.products;

    products.push(product);

    resp.status(201).end();
});

//DELETE product from products
app.delete("/api/products/:id", (req, resp) => {

  const productId = req.params.id;

  const products = req.app.locals.products;
  
  const productIndex = products.findIndex(product => product.id == productId);

  if (productIndex > -1) { 
      products.splice(productIndex, 1);
  }

  resp.status(204).end(); // 204 No Content
});

// //PATCH edited products
// app.patch("/api/products/:id", (req,resp)) => {

// });

//GET all heros
app.get("/api/heros", (req, resp) => {

  const heros = req.app.locals.heros;
  
  resp.json(heros);
});

//GET filtered hero
app.get("/api/heros/:phase", (req,resp) => {

  const heros = req.app.locals.heros;
  const searchTerm = req.params.phase.toLocaleLowerCase();

  const hero = heros.filter((hero) => {
    return (
      hero.moonphase.toLocaleLowerCase().includes(searchTerm)
  
    );
  }
    
  );
    
      resp.json(hero);
});




const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
