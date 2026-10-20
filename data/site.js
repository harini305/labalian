// Content for the La Balian rebuild.
// Source: docs/source-audit/03-content-inventory.md and content.json (captured 2026-10-19).
// Copy is the original site's wording. Minor typo fixes are noted inline; testimonials are verbatim.
// Facts that conflict on the original site (breakfast, cot/high chair) are worded neutrally
// until the owner confirms them — see docs/HANDOFF.md.

export const business = {
  name: "La Balian Villa and Retreat",
  shortName: "La Balian",
  email: "Bookings@labalian.com",
  phone: "+61 410 867 503",
  phoneHref: "+61410867503",
  facebook: "https://www.facebook.com/Labalianvillaandretreat/",
  instagram: "https://www.instagram.com/labalian",
  instagramHandle: "@labalian",
  locality: "Lalanglinggah, near Balian Beach · Tabanan, west Bali",
};

export const nav = [
  { href: "/the-villa", label: "The Villa" },
  { href: "/activities", label: "Activities" },
  { href: "/retreats-and-weddings", label: "Retreats & Weddings" },
  { href: "/gallery", label: "Gallery" },
  { href: "/rates-and-reservations", label: "Rates" },
  { href: "/cookbook", label: "Cookbook" },
  { href: "/contact", label: "Contact" },
];

export const keyFacts = [
  { value: "8", label: "ensuite bedrooms" },
  { value: "20", label: "guests, up to" },
  { value: "Exclusive", label: "use of the whole villa" },
  { value: "$800 AUD", label: "per night · 2-night minimum" },
];

export const home = {
  welcome:
    "Named after the local village of Lalanglinggah, our villa is just 5 minutes drive from Balian Beach on the west coast of Bali. Our villa is located in the heart of a working rice field, surrounded by coconut groves and the sounds of waves and tropical birds. If you're looking for a truly authentic Bali experience, look no further than La Balian Villa and Retreat.",
  area: [
    "This is Bali as it used to be, rich in culture and natural beauty whilst still offering a variety of local activities to keep you busy if desired.",
    "Located on the west coast of Bali, we are situated just inland from the world renowned surf beach at Balian. Balian Beach village is minutes away and has a great old Bali vibe to it with laid back bars and restaurants that cater for the surf and yoga community. The area features spectacular coastal cliffs and green, lush, unspoiled countryside. The drive from the airport to the villa takes around 2 hours and the journey winds through Tabanan, Soka and the local area of Lalanglinggah before arriving in Balian, where La Balian Villa and Retreat is located.",
  ],
  villa:
    "Our clean and comfortable boutique hotel style accommodation is perfect for group accommodation. Whether it's a big family group celebrating a special occasion, a small wedding, a yoga retreat or group holiday, we can accommodate up to 20 people and ensure you all relax and unwind – away from the hustle and bustle of the tourist life in some parts of Bali. We offer 8 bedrooms, each with ensuites and when you book with us, you have full and exclusive use of the villa – no sharing with others which allows for complete privacy. The views of the rice fields are spectacular and ever-changing and can be enjoyed from anywhere within the villa including from the stunning large infinity edge swimming pool, large yoga shala or peaceful massage hut.",
  // Typo fix: "guests favourite" -> "guests' favourite"
  cookbook:
    "Our Villa Manager and in-house chef is famous for her delicious cooking. She recently released her own cookbook featuring all of our guests' favourite recipes. If you're interested in trying some Balinese cooking at home, this is a great book, easy to follow and rich in flavour. All profits from the sale of this book go to the La Balian Villa and Retreat team.",
};

// Verbatim, including original spelling. Source/platform of the reviews is not stated on the original site.
export const testimonials = [
  {
    name: "Gillian",
    text: "La Balian is idyllic. We barely left the villa all week. The perfect place to go if you want to actually relax, catch up with friends, enjoy good food and not do too much! We had 8 adults and 8 kids aged 1-7 and everyone was happy.",
  },
  {
    name: "Monica",
    text: "Everything was so perfact for me !! They prepared everything that I need ,even free pick up from airport !! It was so good to be stay with big family or group of friends. I will be there again and recommend to friends. Thank you Dean !!",
  },
  {
    name: "Stephen",
    text: "Great villa if you want to get away from the more tourist places of Bali. The villa was well maintained and the pictures don't do it justice. Infinity pool is perfect and safe for the kids. The staff prepared top quality food and very affordable prices. We were a group of 13 and had a great time. Balian beach is a great little spot with a couple of bars and restaurants. Toms garden cafe was great food and recommended. We had massages every day at the villa very cheap and excellent. Would highly recommend this place.",
  },
  {
    name: "Cj",
    text: "We all had a lovely time at La Balian and didn't want to leave! Communication with Dean prior to arriving was easy and he promptly answered all my questions. On arrival and during our stay; Vicki, Iluh, Gede and the team were so helpful and accommodating. We couldn't have felt more welcomed 🙂 Organising everything was easy and we especially enjoyed the cooking class. A big thumbs up for all the meals we had at the villa as well – even our pickiest eater was happy! The Villa itself has such a relaxing vibe about it and the view from the pool with the sun setting is beautiful. Despite the remote location; which for me was a major plus, you aren't completely disconnected from the world. There is good wifi if you want to use it and it is a 10 minute taxi ride down to the beach where there are a few cafes/restaurants. Then to get our shopping fix we just organised a day trip. Oh and the surfer in our group hired a scooter from the Villa and was up and surfing before the majority of us were even awake. All in all, it was a great stay and I would definitely recommend La Balian Villa 🙂",
  },
  {
    name: "Steve",
    text: "La Balian is the perfect getaway. It's hard to explain the idyllic location of La Balian: set in the middle of rice fields but only walking distance to the beach this truly is the perfect holiday destination. First of all, the communication with both Polly and Dean was prompt, efficient and accurate. Upon arrival the Villa Manager, Vicky, took wonderful care of our group of 15. Nothing was too much trouble. La Balian is not the place if you are after wild nightlife and fancy restaurants. (We did this in Seminyak and then followed up with five days in La Balian and it was the perfect mix.) La Balian is the place to relax: to do yoga in the morning, have massages overlooking the rice paddies and and swimming in the infinity pool. Besides breakfast, which is delicious, we had two major dinners at the Villa. A BBQ with suckling pig and a seafood BBQ: both were outstanding. The little surfing village of Balian Beach is only a 30 min walk away or transport can be arranged through the Villa. The Villa is well appointed and all the rooms are basically the same. Vicky and her staff were outstanding and made us all feel very welcome. I would strongly recommend La Balian to any group looking for some peace and quiet, some time to enjoy each other's company and to see the real Bali. I have no hesitation in recommending La Balian or planning another visit.",
  },
];

// From the broken /the-villa/ page (About the villa) — restored as rendered content.
export const villa = {
  about: [
    "La Balian Villa and Retreat is a unique residence which offers up to 8 ensuite bedrooms ideal for individuals, couples or to suit your group's needs. It is ideal for large families, groups of friends, yoga groups, weddings or that special function or occasion.",
    "Each of the 8 ensuite bedrooms are large and styled in a clean modern look with all new facilities including luxury beds, linen, air conditioning, flat screen TV, DVD, safety deposit box, towels and bathroom products.",
    "The villa is in an L shape configuration, which wraps around a beautiful infinity edge swimming pool overlooking the spectacular rice terraces that will take your breath away. From the large day beds around the pool to the spacious entertaining areas, you will appreciate the attention to detail that has gone into our residence. Landscaped gardens and secluded seating areas as well as a large separate lounge, informal and formal dining areas and kitchen make La Balian Villa and Retreat perfect for any occasion.",
    "La Balian Villa and Retreat has a full team of attentive staff as well as a talented chef ensuring that you are provided with the perfect holiday experience.",
  ],
  // "Features" + "Facilities" (The Villa) + "Villa Features" (Our Services), merged and de-duplicated.
  amenities: [
    {
      title: "In the bedrooms",
      items: [
        "8 fully serviced bedrooms, all with separate ensuites",
        "Luxury King Size beds with quality linens and towels",
        "Air conditioned",
        "Flat Screen TV and DVD",
        "Safety Deposit Box in each room",
        "Hairdryers and Toiletries",
        "Bottled Water",
      ],
    },
    {
      title: "Living, dining and pool",
      items: [
        "Large infinity-edge swimming pool overlooking the rice fields, with surrounding lush gardens",
        "Spacious comfortable lounge area and dining areas",
        "Fully equipped kitchen, for preparation of own meals if required",
        "Outdoor BBQ",
        "Daybeds and Sun lounges",
        "Peshtemal Turkish Pool Towels",
        "Free Wi-Fi throughout the property, plus cable channels",
        "iPod compatible music system",
        "Portable Bluetooth speaker available in common areas",
      ],
    },
    {
      title: "Families and larger groups",
      items: [
        "1 Family room with King and 2 Single beds — comfortably sleeps 4",
        "1 Triple room with King and 1 Single bed",
        "Extra beds available — if single beds are used, extra bed charges apply",
        "Pool fence available on request for additional cost",
        // Conflict C2 on the original site ("on request" vs "at no charge"): worded neutrally.
        "Cot and high chair — please ask about availability when you enquire",
      ],
    },
  ],
  staff:
    "Our best-kept-secret is our team at La Balian. When you stay with us, you'll get to know them all and gain an insight into their lives in the surrounding villages. Included in our accommodation price, you will have the service of our Villa Manager, who will help you to arrange all excursions, special activities and entertainment, our In-House Chef, who will prepare any meals you require (additional cost for lunch and dinner) including being able to cater for food preferences and allergies. With over 15 years of cooking experience in retreats, our team can offer Indonesian or Western-style banquets to suit your group's requirements. We also have a team to service the villa and keep the pool and garden areas maintained.",
  // Breakfast sentence removed from this paragraph: conflict C1 (included vs Rp 75K) is unresolved.
  // Typo fix: "can be arrange" -> "can be arranged".
  food:
    "Our chef will prepare food daily – sourced fresh from the local farmlands around us. Lunch and Dinner can be enjoyed for an additional charge. Options include a Seafood BBQ, Indonesian Banquet and even a Suckling Pig can be arranged for a special occasion. Beer, soft drinks and juice are available at the villa whilst wines and spirits will need to be brought with you.",
  mealPrices: [
    { label: "Breakfast", value: "Available daily — price and inclusion to be confirmed by the villa" },
    { label: "Lunch", value: "Rp 150K per person" },
    { label: "Dinner", value: "Rp 175K per person" },
    { label: "Airport transfers", value: "Rp 600K per car (up to 4 passengers with bags)" },
  ],
};

export const activityGroups = [
  {
    id: "at-the-villa",
    title: "Activities",
    items: [
      {
        title: "Massage and Spa Services",
        image: "massage",
        alt: "A guest receiving a back massage",
        text: "Our stunning massage hut is situated overlooking the rice fields, over a fish pond which provides tranquillity and deep relaxation. We offer in-house massage and spa services by request, including our signature Balinese Massage, Thai Massage, Head and Neck Massage, Back Tension Release and Reflexology. We also offer Manicures, Pedicures and Facial treatments. A great way to unwind properly when on holidays!",
        cost: "Rp 150K for one hour Balinese Massage.",
      },
      {
        title: "Surfing",
        image: "surf-sunset",
        alt: "Sunset over the sea at Balian Beach",
        text: "Renowned for its left hand break with other right hand options, Balian Beach can offer experienced as well as novice surfers an exciting experience. Lessons and equipment hire can be organised through our team at the villa.",
        cost: "Available on request",
      },
      {
        title: "Trekking",
        image: "trekking",
        alt: "A group walking single file along a rice field path",
        text: "Fancy an early morning walk through the rice fields and into the neighbouring villages? The area is an excellent location for coastal, hinterland or rice field trekking. We offer a guide who can take you on a fascinating tour of the local area.",
        cost: "500K for tour guide for your group.",
      },
      {
        title: "Yoga",
        image: "yoga-class",
        alt: "A yoga class lying on mats in the open-sided shala",
        text: "With our amazing yoga shala on the property, you simply must try a yoga class with us while you're staying. We can bring in our favourite local teacher at a time that works for you and your group for an amazing 90-minute class.",
        cost: "125K per person. Minimum 2 people.",
      },
      {
        title: "Bike Riding",
        image: "bike",
        alt: "A mountain bike parked on the black-sand beach",
        text: "We have several mountain bikes for hire at the villa – a great way to tour around the local area and take in the village life. We also offer Scooters for hire – ideal for longer trips.",
        cost: "Rp 250K per person. Minimum 5 people.",
      },
    ],
  },
  {
    id: "local-culture",
    title: "Local cultural activities",
    items: [
      {
        title: "Cooking classes",
        image: "cooking",
        alt: "Guests photographing dishes made during a cooking class",
        text: "Have you always wanted to cook that perfect Nasi Goreng? Or perhaps you prefer a vegetarian option such as Gado Gado? Our in house chef is available to give Indonesian cooking classes. Using fresh ingredients sourced from the local markets, you will prepare and cook the dish before enjoying it as a meal with your group.",
        cost: "Rp 300K per person. Minimum 6 people",
      },
      {
        title: "Canang / Balinese Offering Lesson",
        image: "canang",
        alt: "A Balinese offering of flowers in a woven bowl",
        text: "The perfect activity to learn a little more about the Balinese culture and religious beliefs, making Canang (or the Balinese offerings) provides a rich insight into the meaning of these beautiful little baskets of goodness.",
        cost: "Rp 100K per person. Minimum 2 people.",
      },
      {
        title: "Balinese cultural dancing",
        image: "dance",
        alt: "A brightly painted Balinese ceremonial carving",
        text: "Balinese dance is all part of the cultural experience we offer at La Balian. A great addition to a special occasion evening with your group, our local dance troupe will come in and entertain on request.",
        cost: "Rp 2,000,000",
      },
      {
        title: "Balinese Water Blessing",
        image: "water-blessing",
        alt: "A group of guests dressed in traditional Balinese clothing",
        // Typo fix: "Hindi gods" -> "Hindu gods"
        text: "If you're looking for an amazing insight into Balinese culture, a water blessing is a great way to really immerse yourself. Your whole group will dress up in traditional Balinese outfits (the perfect Instagram opportunity) and head off to be blessed next to the Sacred River in Balian. The short ceremony includes mantra, a water blessing and offering to the Hindu gods. This is a beautiful activity for families as we share some of the local beliefs with our children.",
        cost: "Rp 200K per person. Minimum 6 people.",
      },
      {
        title: "Rindik Bamboo Balinese Music",
        image: "rindik",
        alt: "A Balinese musician wearing a traditional udeng headdress",
        // Typo fix: "is played the Balinese tradition" -> "is played in the Balinese tradition"
        text: "The perfect musical performance for your special occasion evening, Rindik Bamboo music is played in the Balinese tradition. Our local performers will play background music while you eat and then entertain with a performance for you and your guests.",
        cost: "Rp 500K",
      },
    ],
  },
  {
    id: "excursions",
    title: "Excursions",
    items: [
      {
        title: "Shopping Trips",
        image: "shopping",
        alt: "A group of guests sharing a meal at a cafe",
        text: "The beauty of staying at La Balian is the peace and quiet – away from the hustle and bustle of the busy tourist areas. However, we all need to shop so arranging a half day or full day visit to the best shopping locations that Bali has to offer, is always an option. We will provide transport to and from the villa and can recommend the best places to go for specific items if required.",
        detail: "Approximate travelling times, depending on traffic conditions: Seminyak – 90 mins · Ubud – 70 mins",
        cost: "Rp 700K per car (Seats 7 people without luggage) for up to 8 hours",
      },
      {
        title: "Ubud Day Trip",
        image: "ubud",
        alt: "The white pyramid buildings of the Pyramids of Chi in Ubud",
        text: "One of our favourite things to do is take a Day Trip to Ubud for a day of shopping and pampering. We can organise a package for you that could include a trip to Pyramids of Chi, or Yoga Barn in the morning, a delicious lunch in one of our favourite cafes, followed by an afternoon of shopping or spa treatments. We can arrange a package for you on request.",
        cost: "Package arranged on request",
      },
    ],
  },
];

export const retreats = {
  yoga: [
    "If you are a retreat organiser looking for a venue for your next retreat in Bali, look no further. We specialise in Yoga and Wellness Retreats and we can assure you that La Balian Villa and Retreat has everything you need – including tranquil unspoilt surroundings and excellent comfortable modern facilities – plus a yoga shala, mats, bolsters, blocks and straps.",
    "With a backdrop of banana, cocoa and palm trees and a stunning rice terrace outlook, no passing traffic and only a 5 minute drive or 30 minute walk to Balian Beach, we can offer the perfect location for yourself and your group. Here you are surrounded by nature and can experience the traditional Bali now becoming harder to find. Away from the larger crowds of Ubud or Seminyak, our location is private and peaceful and a great opportunity to turn within and really relax and release. We can create an affordable package for your next retreat – offering accommodation, meals, massages and space for yoga for up to 20 people.",
    "We are devoted to promoting the authentic spiritual tradition of yoga in a natural environment whilst providing an intimate personalised experience for your group.",
  ],
  weddings:
    "We offer an intimate location for a small wedding – surrounded by nature, peace and tranquillity. We can offer a simple package which includes the ceremony, banquet and entertainment for you and your guests. The ceremony can be held either poolside or in the undercover yoga space.",
  eventFee: "Additional 'event fee' for weddings. Contact us for details.",
};

export const rates = {
  price: "$800 AUD",
  unit: "per night",
  basis: "8 rooms — the whole villa, for your group only",
  minimumStay: "A minimum of 2 nights required per stay.",
  // Typo fix: "will accepted" -> "will be accepted"
  currencyNote:
    "All rates quoted in AUD, and payment by other currency will be accepted based on the valid exchange rate on the date of payment. All prices include Government Taxes and Service charges.",
  eventFee: "Additional 'event fee' for weddings. Contact us for details.",
  inclusions: [
    "Welcome drink and cold towel upon arrival",
    "Wi-Fi internet connection throughout the villa",
    "Bathroom amenities",
    "Filtered fresh drinking water during your stay",
    "Daily cleaning service",
    "The services of our Villa Manager",
  ],
  // Conflict C1: the original lists breakfast as both included and Rp 75K per person.
  breakfastNote:
    "Breakfast is available each day for all guests. Whether it is included in the rate or charged per person is being confirmed with the villa — please ask when you enquire.",
  checkIn: "From 2:00 PM",
  checkOut: "12:00 noon on the day of departure",
  lateCheckOut:
    "Late check-out is based on villa's availability. An additional charge may be required, please discuss before your arrival.",
  terms: [
    {
      title: "Deposit",
      body: [
        "A 50% deposit must be received within 3 working days of the invoice and payment instructions being issued to the client. The dates will be held for this time period but if a deposit is not received within this time, the dates will be released until such time as the payment is received.",
      ],
    },
    {
      title: "Payment methods",
      list: [
        "We accept online and credit card payments via PayPal",
        "We accept direct transfers to an Indonesian bank account",
        "Balance can also be paid in cash if agreed to by all parties",
      ],
    },
    {
      title: "Final payment",
      body: [
        "A further 25% of the total invoice is due to be paid 60 days prior to arrival. The final and full payment is due 30 days prior to arrival.",
      ],
    },
    {
      title: "Change of booking",
      body: ["Any changes to your booking dates will be based on villa's availability or according to the cancellation policy."],
    },
    {
      title: "Cancellation",
      // Original reads "any change on the may result" (word missing); "booking" restored.
      body: [
        "Notice of cancellation or any change to the booking may result in forfeiture of deposit(s) and payments made based on the following:",
      ],
      list: [
        "Cancellation more than 61 days prior to arrival date will result in a full refund, minus 10% of the total invoice amount for administration fees.",
        "Cancellation made between 30 – 60 days prior to arrival date will result in a 50% refund of the total invoice amount. If it has not been paid, you will still be liable.",
        "Cancellation made less than 30 days prior to arrival date will result in no refund however if we are able to re-book the villa to someone else then we will credit this amount towards another booking date for you in the future.",
      ],
    },
    {
      title: "Check-in and check-out",
      body: [
        "Check-in time from 2:00 PM and Check-out time is 12:00 noon on the day of departure. Late check-out is based on villa's availability. An additional charge may be required, please discuss before your arrival.",
      ],
    },
  ],
};

export const contact = {
  intro:
    "We'd love you to send us an email to let us know what you still need to know or to make a booking.",
  directions:
    "Enter La Balian Villa and Retreat into Google Maps and follow directions or take the road to Gilimanuk (which if you got to the end would take you to the Java ferry terminal). You will pass through Tabanan, following the signs to Gilimanuk along Jalan Raya Denpasar – Gilimanuk. This will take you out into the countryside through small villages and finally you will be able to see ocean on the left. This is called Soka and we are only 7 minutes from there. The turn off to La Balian Villa and Retreat is approximately 500m before Balian village and is located on the right hand side of the road with our sign indicating the turn off. Follow this road through the rice paddies, taking the small bend to the left and approximately 30 metres past is the carpark for the villa and the villa itself where staff will assist you with your luggage.",
};

export const cookbook = {
  title: "Family Cooking – Bali Style",
  // Services page CTA copy (typo "are home" -> "at home")
  lead: "Interested in trying some of our in-house chef's recipes at home? Hard copy or e-book options available.",
  products: [
    {
      id: "e-book",
      name: "E-book – Downloadable",
      price: 20,
      description:
        "This downloadable cookbook features delicious recipes by the Team at La Balian Villa and Retreat in Bali. Featuring our guest's favourite dishes for breakfast, main courses and desserts, you're sure to find something you like. Family Cooking Bali Style includes many ideas for your next family feast. Once you have ordered, a link to download a pdf version of the cookbook will be sent to you.",
    },
    {
      id: "magazine-book",
      name: "Magazine Book",
      price: 35,
      description:
        "This stunning magazine-style cookbook features delicious recipes by the Team at La Balian Villa and Retreat in Bali. Featuring our guest's favourite dishes for breakfast, main courses and desserts, you're sure to find something you like. Family Cooking Bali Style includes many ideas for your next family feast.",
    },
  ],
};

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
