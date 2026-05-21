/* ── Sample Events Data ──────────────────────────── */
const SAMPLE_EVENTS = [
  {
    id: 1, name: 'Navratri Garba Night 2026', category: 'festival',
    date: '2026-10-11', time: '07:00 PM', city: 'Ahmedabad', state: 'Gujarat',
    venue: 'GMDC Ground', price: 0, capacity: 8000,
    desc: 'Celebrate 9 nights of Garba with live music, traditional attire, and cultural performances. Bigger and grander in 2026!',
    gradient: 'linear-gradient(135deg,#b5451b,#f5a623)', emoji: '🪔', rsvped: false
  },
  {
    id: 2, name: 'Sunburn Arena 2026', category: 'music',
    date: '2026-12-19', time: '05:00 PM', city: 'Mumbai', state: 'Maharashtra',
    venue: 'MMRDA Grounds, BKC', price: 2499, capacity: 20000,
    desc: "India's biggest electronic music festival returns with world-class DJs and a brand-new stage setup.",
    gradient: 'linear-gradient(135deg,#1a0050,#7b2ff7)', emoji: '🎵', rsvped: false
  },
  {
    id: 3, name: 'Royal Wedding Expo 2026', category: 'wedding',
    date: '2026-11-22', time: '10:00 AM', city: 'Udaipur', state: 'Rajasthan',
    venue: 'City Palace Grounds', price: 700, capacity: 500,
    desc: 'Discover the finest wedding vendors, decorators, and planners for your dream 2026 wedding.',
    gradient: 'linear-gradient(135deg,#4a0030,#c0396b)', emoji: '💍', rsvped: false
  },
  {
    id: 4, name: 'India Tech Summit 2026', category: 'corporate',
    date: '2026-09-17', time: '09:00 AM', city: 'Bengaluru', state: 'Karnataka',
    venue: 'BIEC, Tumkur Road', price: 3500, capacity: 3000,
    desc: "India's premier tech conference featuring AI Agents, Quantum Computing, and next-gen startup ecosystem talks.",
    gradient: 'linear-gradient(135deg,#003366,#0077b6)', emoji: '💼', rsvped: false
  },
  {
    id: 5, name: 'Diwali Mela & Fireworks 2026', category: 'festival',
    date: '2026-10-29', time: '06:00 PM', city: 'New Delhi', state: 'Delhi',
    venue: 'Pragati Maidan', price: 0, capacity: 15000,
    desc: 'Grand Diwali 2026 celebration with food stalls, cultural shows, drone light display, and a spectacular fireworks finale.',
    gradient: 'linear-gradient(135deg,#7b3f00,#f5a623)', emoji: '🎆', rsvped: false
  },
  {
    id: 6, name: 'Bharatanatyam Utsav 2026', category: 'cultural',
    date: '2026-08-16', time: '06:30 PM', city: 'Chennai', state: 'Tamil Nadu',
    venue: 'Music Academy, T. Nagar', price: 400, capacity: 1000,
    desc: 'A grand classical dance festival showcasing top Bharatanatyam artists from across India, now in its 10th edition.',
    gradient: 'linear-gradient(135deg,#1a0a2e,#6a0572)', emoji: '🎭', rsvped: false
  },
  {
    id: 7, name: 'IPL Fan Fest 2026 — Kolkata', category: 'sports',
    date: '2026-04-12', time: '03:00 PM', city: 'Kolkata', state: 'West Bengal',
    venue: 'Eden Gardens', price: 999, capacity: 66000,
    desc: 'Watch the live IPL 2026 match with fan activities, AR experiences, merchandise, and food courts.',
    gradient: 'linear-gradient(135deg,#002147,#7b0000)', emoji: '🏏', rsvped: false
  },
  {
    id: 8, name: 'Holi Hai 2026 — Color Festival', category: 'festival',
    date: '2026-03-03', time: '10:00 AM', city: 'Mathura', state: 'Uttar Pradesh',
    venue: 'Vrindavan Dham', price: 0, capacity: 25000,
    desc: 'Experience the most vibrant Holi 2026 celebration in the land of Lord Krishna with organic colors and live folk music.',
    gradient: 'linear-gradient(135deg,#1a0050,#e040fb)', emoji: '🌈', rsvped: false
  },
  {
    id: 9, name: 'Startup Pitch Night 2026', category: 'corporate',
    date: '2026-10-08', time: '06:00 PM', city: 'Hyderabad', state: 'Telangana',
    venue: 'T-Hub, IIIT Campus', price: 0, capacity: 600,
    desc: 'Watch 30 startups pitch to top VCs and angel investors. AI & DeepTech focus. Networking dinner included.',
    gradient: 'linear-gradient(135deg,#003333,#00897b)', emoji: '🚀', rsvped: false
  },
  {
    id: 10, name: 'Hornbill Festival 2026', category: 'cultural',
    date: '2026-12-01', time: '09:00 AM', city: 'Kohima', state: 'Nagaland',
    venue: 'Kisama Heritage Village', price: 200, capacity: 5000,
    desc: "The 'Festival of Festivals' — a vibrant showcase of Nagaland's 16 tribes with traditional music, dance, and crafts.",
    gradient: 'linear-gradient(135deg,#1b4332,#52b788)', emoji: '🦅', rsvped: false
  },
  {
    id: 11, name: 'Goa Carnival 2026', category: 'festival',
    date: '2026-02-14', time: '04:00 PM', city: 'Panaji', state: 'Goa',
    venue: 'Panaji City Streets', price: 0, capacity: 30000,
    desc: "Goa's legendary 4-day carnival with colourful floats, samba dancers, live bands, and street food extravaganza.",
    gradient: 'linear-gradient(135deg,#004d40,#00bfa5)', emoji: '🎪', rsvped: false
  },
  {
    id: 12, name: 'Ziro Music Festival 2026', category: 'music',
    date: '2026-09-24', time: '03:00 PM', city: 'Ziro', state: 'Arunachal Pradesh',
    venue: 'Ziro Valley Grounds', price: 1800, capacity: 4000,
    desc: 'Indie music under the open sky in the UNESCO-listed Ziro Valley. 40+ artists across 4 days.',
    gradient: 'linear-gradient(135deg,#0d3b2e,#1b7a5a)', emoji: '🎸', rsvped: false
  },
  {
    id: 13, name: 'Pushkar Camel Fair 2026', category: 'cultural',
    date: '2026-11-05', time: '08:00 AM', city: 'Pushkar', state: 'Rajasthan',
    venue: 'Pushkar Fairgrounds', price: 300, capacity: 50000,
    desc: "One of the world's largest camel fairs with folk performances, turban-tying contests, and desert cuisine.",
    gradient: 'linear-gradient(135deg,#7b3f00,#d4a017)', emoji: '🐪', rsvped: false
  },
  {
    id: 14, name: 'Onam Grand Sadya 2026', category: 'festival',
    date: '2026-08-27', time: '11:00 AM', city: 'Thiruvananthapuram', state: 'Kerala',
    venue: 'Napier Museum Grounds', price: 0, capacity: 10000,
    desc: 'Celebrate Onam with a 26-course traditional Sadya, Pookalam competition, Vallam Kali boat race, and Kathakali.',
    gradient: 'linear-gradient(135deg,#004d00,#f9a825)', emoji: '🌸', rsvped: false
  },
  {
    id: 15, name: 'Rongali Bihu Utsav 2026', category: 'cultural',
    date: '2026-04-14', time: '05:00 PM', city: 'Guwahati', state: 'Assam',
    venue: 'Sarusajai Stadium', price: 0, capacity: 20000,
    desc: "Assam's biggest harvest festival with Bihu dance, Husori performances, traditional games, and Assamese cuisine.",
    gradient: 'linear-gradient(135deg,#1a3a00,#76b900)', emoji: '🌾', rsvped: false
  },
  {
    id: 16, name: 'Leh Ladakh Adventure Fest 2026', category: 'sports',
    date: '2026-07-10', time: '07:00 AM', city: 'Leh', state: 'Ladakh',
    venue: 'Leh Palace Grounds', price: 1500, capacity: 2000,
    desc: 'High-altitude adventure sports — mountain biking, river rafting, archery, and polo at 11,500 ft.',
    gradient: 'linear-gradient(135deg,#001f3f,#0074d9)', emoji: '🏔️', rsvped: false
  },
  {
    id: 17, name: 'Kolkata Literary Meet 2026', category: 'cultural',
    date: '2026-01-29', time: '10:00 AM', city: 'Kolkata', state: 'West Bengal',
    venue: 'Milan Mela Grounds', price: 0, capacity: 8000,
    desc: 'India\'s largest literary festival with 300+ authors, panel discussions, book launches, and poetry slams.',
    gradient: 'linear-gradient(135deg,#2c003e,#9c27b0)', emoji: '📚', rsvped: false
  },
  {
    id: 18, name: 'Pune International Film Fest 2026', category: 'cultural',
    date: '2026-01-10', time: '10:00 AM', city: 'Pune', state: 'Maharashtra',
    venue: 'National Film Archive of India', price: 500, capacity: 3000,
    desc: '9-day international film festival screening 200+ films from 50 countries with masterclasses and Q&A sessions.',
    gradient: 'linear-gradient(135deg,#1a0a00,#8b0000)', emoji: '🎬', rsvped: false
  },
  {
    id: 19, name: 'Rann Utsav 2026', category: 'festival',
    date: '2026-11-01', time: '06:00 PM', city: 'Bhuj', state: 'Gujarat',
    venue: 'White Rann of Kutch', price: 2000, capacity: 5000,
    desc: 'Experience the magical white desert under a full moon with folk music, handicraft bazaars, and camel safaris.',
    gradient: 'linear-gradient(135deg,#3d1c02,#f5a623)', emoji: '🌕', rsvped: false
  },
  {
    id: 20, name: 'Chandigarh Design Week 2026', category: 'corporate',
    date: '2026-03-20', time: '10:00 AM', city: 'Chandigarh', state: 'Punjab',
    venue: 'Capitol Complex', price: 1200, capacity: 1500,
    desc: 'India\'s premier design conference with workshops on architecture, UX, fashion, and sustainable design.',
    gradient: 'linear-gradient(135deg,#003049,#fcbf49)', emoji: '🎨', rsvped: false
  },
  {
    id: 21, name: 'Hampi Music & Heritage Fest 2026', category: 'music',
    date: '2026-11-07', time: '05:00 PM', city: 'Hampi', state: 'Karnataka',
    venue: 'Virupaksha Temple Grounds', price: 800, capacity: 3000,
    desc: 'Classical and fusion music performances against the backdrop of UNESCO World Heritage ruins at sunset.',
    gradient: 'linear-gradient(135deg,#3e1f00,#c0392b)', emoji: '🏛️', rsvped: false
  },
  {
    id: 22, name: 'Pro Kabaddi Finals 2026', category: 'sports',
    date: '2026-03-15', time: '07:00 PM', city: 'Jaipur', state: 'Rajasthan',
    venue: 'Sawai Mansingh Indoor Stadium', price: 599, capacity: 5000,
    desc: 'The grand finale of Pro Kabaddi League 2026 — witness India\'s most electrifying contact sport live.',
    gradient: 'linear-gradient(135deg,#7b0000,#ff6b00)', emoji: '🤼', rsvped: false
  },
  {
    id: 23, name: 'Shillong Jazz & Blues Fest 2026', category: 'music',
    date: '2026-10-17', time: '04:00 PM', city: 'Shillong', state: 'Meghalaya',
    venue: 'Police Bazaar Grounds', price: 600, capacity: 6000,
    desc: "The 'Rock Capital of India' hosts its annual jazz and blues extravaganza with 50+ bands from across Asia.",
    gradient: 'linear-gradient(135deg,#0a0a2e,#1565c0)', emoji: '🎷', rsvped: false
  },
  {
    id: 24, name: 'Vizag Beach Marathon 2026', category: 'sports',
    date: '2026-02-08', time: '05:30 AM', city: 'Visakhapatnam', state: 'Andhra Pradesh',
    venue: 'RK Beach', price: 350, capacity: 10000,
    desc: 'Run along the scenic Bay of Bengal coastline — full marathon, half marathon, and 10K categories.',
    gradient: 'linear-gradient(135deg,#003366,#00b4d8)', emoji: '🏃', rsvped: false
  },
  {
    id: 25, name: 'Jaipur Literature Festival 2026', category: 'cultural',
    date: '2026-01-22', time: '09:00 AM', city: 'Jaipur', state: 'Rajasthan',
    venue: 'Diggi Palace', price: 0, capacity: 40000,
    desc: "The world's largest free literary festival — 5 days, 250+ speakers, and conversations that actually matter.",
    gradient: 'linear-gradient(135deg,#4a1942,#c0396b)', emoji: '📖', rsvped: false
  },
  {
    id: 26, name: 'Bhopal Tansen Music Fest 2026', category: 'music',
    date: '2026-12-26', time: '06:00 PM', city: 'Bhopal', state: 'Madhya Pradesh',
    venue: 'Gwalior Fort Grounds', price: 0, capacity: 12000,
    desc: 'A tribute to the legendary Tansen — four nights of Hindustani classical music under the stars at a UNESCO site.',
    gradient: 'linear-gradient(135deg,#1a0a2e,#4527a0)', emoji: '🎶', rsvped: false
  },
  {
    id: 27, name: 'Sikkim Flower Festival 2026', category: 'festival',
    date: '2026-05-18', time: '10:00 AM', city: 'Gangtok', state: 'Sikkim',
    venue: 'White Hall Complex', price: 100, capacity: 8000,
    desc: 'Over 600 varieties of orchids and rhododendrons on display. Includes folk dance, local cuisine, and handicraft stalls.',
    gradient: 'linear-gradient(135deg,#1b4332,#d4edda)', emoji: '🌺', rsvped: false
  },
  {
    id: 28, name: 'Lucknow Mahotsav 2026', category: 'cultural',
    date: '2026-11-25', time: '05:00 PM', city: 'Lucknow', state: 'Uttar Pradesh',
    venue: 'Qaiserbagh Palace Grounds', price: 150, capacity: 20000,
    desc: 'Nawabi culture at its finest — kathak, ghazals, chikankari exhibition, and the best kebabs you will ever eat.',
    gradient: 'linear-gradient(135deg,#3e1f00,#b8860b)', emoji: '🕌', rsvped: false
  },
  {
    id: 29, name: 'Kochi Biennale 2026', category: 'cultural',
    date: '2026-12-12', time: '10:00 AM', city: 'Kochi', state: 'Kerala',
    venue: 'Fort Kochi Heritage Zone', price: 250, capacity: 15000,
    desc: "Asia's biggest contemporary art festival spread across Fort Kochi's historic warehouses and open spaces.",
    gradient: 'linear-gradient(135deg,#004d40,#1de9b6)', emoji: '🎨', rsvped: false
  },
  {
    id: 30, name: 'Amritsar Baisakhi Mela 2026', category: 'festival',
    date: '2026-04-13', time: '08:00 AM', city: 'Amritsar', state: 'Punjab',
    venue: 'Golden Temple Complex', price: 0, capacity: 100000,
    desc: 'Celebrate the harvest festival and Khalsa Panth anniversary with nagar kirtan, bhangra, and langar for all.',
    gradient: 'linear-gradient(135deg,#7b3f00,#ffd700)', emoji: '🌾', rsvped: false
  },
  {
    id: 31, name: 'Hyderabad Biryani & Food Fest 2026', category: 'festival',
    date: '2026-09-05', time: '12:00 PM', city: 'Hyderabad', state: 'Telangana',
    venue: 'Necklace Road Grounds', price: 200, capacity: 25000,
    desc: '60+ food stalls, live cooking battles, biryani eating contest, and a Guinness attempt for the largest dum pot.',
    gradient: 'linear-gradient(135deg,#7b2d00,#ff8c00)', emoji: '🍛', rsvped: false
  },
  {
    id: 32, name: 'Manipur Sangai Festival 2026', category: 'cultural',
    date: '2026-11-21', time: '09:00 AM', city: 'Imphal', state: 'Manipur',
    venue: 'Hapta Kangjeibung', price: 0, capacity: 10000,
    desc: "Manipur's biggest tourism festival — Manipuri dance, indigenous sports, handloom expo, and the rare Sangai deer.",
    gradient: 'linear-gradient(135deg,#1b4332,#40916c)', emoji: '🦌', rsvped: false
  },
  {
    id: 33, name: 'Ahmedabad Kite Festival 2026', category: 'festival',
    date: '2026-01-14', time: '07:00 AM', city: 'Ahmedabad', state: 'Gujarat',
    venue: 'Sabarmati Riverfront', price: 0, capacity: 50000,
    desc: 'Uttarayan like you have never seen it — 10,000 kites in the sky, international kite flyers, and rooftop parties.',
    gradient: 'linear-gradient(135deg,#003366,#87ceeb)', emoji: '🪁', rsvped: false
  },
  {
    id: 34, name: 'Coorg Coffee & Culture Fest 2026', category: 'festival',
    date: '2026-11-14', time: '09:00 AM', city: 'Madikeri', state: 'Karnataka',
    venue: 'Raja Seat Grounds', price: 300, capacity: 5000,
    desc: 'Estate tours, single-origin coffee tastings, Kodava folk dance, and a farmers market in the misty hills.',
    gradient: 'linear-gradient(135deg,#3b1a00,#6f4e37)', emoji: '☕', rsvped: false
  },
  {
    id: 35, name: 'Patna Chhath Ghat Utsav 2026', category: 'festival',
    date: '2026-10-28', time: '05:00 AM', city: 'Patna', state: 'Bihar',
    venue: 'Gandhi Ghat, Ganga', price: 0, capacity: 200000,
    desc: 'The most sacred sun worship festival on the banks of the Ganga — a spiritual experience unlike any other.',
    gradient: 'linear-gradient(135deg,#7b3f00,#ff6b00)', emoji: '🌅', rsvped: false
  },
  {
    id: 36, name: 'Dehradun Yoga & Wellness Retreat 2026', category: 'corporate',
    date: '2026-06-21', time: '06:00 AM', city: 'Dehradun', state: 'Uttarakhand',
    venue: 'Forest Research Institute', price: 1800, capacity: 800,
    desc: 'International Yoga Day retreat with Himalayan masters, sound healing, Ayurvedic workshops, and forest bathing.',
    gradient: 'linear-gradient(135deg,#1b4332,#95d5b2)', emoji: '🧘', rsvped: false
  },
  {
    id: 37, name: 'Bhubaneswar Rath Yatra 2026', category: 'festival',
    date: '2026-07-04', time: '07:00 AM', city: 'Puri', state: 'Odisha',
    venue: 'Grand Road, Puri', price: 0, capacity: 500000,
    desc: "Lord Jagannath's annual chariot procession — one of the oldest and largest religious gatherings on earth.",
    gradient: 'linear-gradient(135deg,#7b0000,#ffd700)', emoji: '🛕', rsvped: false
  },
  {
    id: 38, name: 'Srinagar Tulip Garden Fest 2026', category: 'festival',
    date: '2026-04-05', time: '09:00 AM', city: 'Srinagar', state: 'Jammu & Kashmir',
    venue: 'Indira Gandhi Tulip Garden', price: 50, capacity: 20000,
    desc: "Asia's largest tulip garden in full bloom — 1.5 million flowers, shikara rides, and Kashmiri wazwan food stalls.",
    gradient: 'linear-gradient(135deg,#1a0050,#e91e8c)', emoji: '🌷', rsvped: false
  },
  {
    id: 39, name: 'Nagpur Orange Festival 2026', category: 'festival',
    date: '2026-12-20', time: '10:00 AM', city: 'Nagpur', state: 'Maharashtra',
    venue: 'Kasturchand Park', price: 0, capacity: 30000,
    desc: 'Celebrating the orange capital of India — farm tours, juice competitions, street food, and live folk performances.',
    gradient: 'linear-gradient(135deg,#7b2d00,#ff8c00)', emoji: '🍊', rsvped: false
  },
  {
    id: 40, name: 'Varanasi Ganga Aarti Mahotsav 2026', category: 'cultural',
    date: '2026-11-15', time: '06:00 PM', city: 'Varanasi', state: 'Uttar Pradesh',
    venue: 'Dashashwamedh Ghat', price: 0, capacity: 30000,
    desc: 'A grand Kartik Purnima Aarti with 1,000 priests, floating diyas, and classical music on the ghats of Kashi.',
    gradient: 'linear-gradient(135deg,#7b3f00,#ff6b00)', emoji: '🪔', rsvped: false
  },
  {
    id: 41, name: 'Aizawl Chapchar Kut 2026', category: 'cultural',
    date: '2026-03-07', time: '10:00 AM', city: 'Aizawl', state: 'Mizoram',
    venue: 'Assam Rifles Ground', price: 0, capacity: 15000,
    desc: "Mizoram's biggest spring festival — Cheraw bamboo dance, traditional costumes, and community feasting.",
    gradient: 'linear-gradient(135deg,#1b4332,#52b788)', emoji: '🎋', rsvped: false
  },
  {
    id: 42, name: 'Raipur National Tribal Dance Fest 2026', category: 'cultural',
    date: '2026-10-28', time: '05:00 PM', city: 'Raipur', state: 'Chhattisgarh',
    venue: 'Science College Ground', price: 0, capacity: 20000,
    desc: 'Tribal dance troupes from 28 states and 6 countries perform at this unique national festival of folk arts.',
    gradient: 'linear-gradient(135deg,#3e1f00,#a0522d)', emoji: '🥁', rsvped: false
  },
  {
    id: 43, name: 'Mysuru Dasara 2026', category: 'festival',
    date: '2026-10-02', time: '04:00 PM', city: 'Mysuru', state: 'Karnataka',
    venue: 'Mysore Palace', price: 0, capacity: 100000,
    desc: 'The royal Dasara procession with a caparisoned elephant carrying the golden howdah — a 400-year-old tradition.',
    gradient: 'linear-gradient(135deg,#4a1942,#ffd700)', emoji: '🐘', rsvped: false
  },
  {
    id: 44, name: 'Agartala Durga Puja Carnival 2026', category: 'festival',
    date: '2026-10-01', time: '06:00 PM', city: 'Agartala', state: 'Tripura',
    venue: 'Ujjayanta Palace Grounds', price: 0, capacity: 40000,
    desc: 'Tripura-style Durga Puja with artistic pandals, dhak beats, sindoor khela, and a grand immersion procession.',
    gradient: 'linear-gradient(135deg,#7b0000,#c0396b)', emoji: '🪘', rsvped: false
  },
  {
    id: 45, name: 'Ranchi Sarhul Tribal Fest 2026', category: 'cultural',
    date: '2026-04-03', time: '08:00 AM', city: 'Ranchi', state: 'Jharkhand',
    venue: 'Morabadi Ground', price: 0, capacity: 25000,
    desc: 'The Adivasi spring festival welcoming the Sal flower — tribal dances, nature worship, and community bonding.',
    gradient: 'linear-gradient(135deg,#1b4332,#76b900)', emoji: '🌼', rsvped: false
  },
  {
    id: 46, name: 'Panaji Serendipity Arts Fest 2026', category: 'cultural',
    date: '2026-12-15', time: '11:00 AM', city: 'Panaji', state: 'Goa',
    venue: 'Old Goa Waterfront', price: 0, capacity: 10000,
    desc: 'A multidisciplinary arts festival spanning music, theatre, visual arts, and culinary arts across Goa.',
    gradient: 'linear-gradient(135deg,#004d40,#00bfa5)', emoji: '🎭', rsvped: false
  },
  {
    id: 47, name: 'Indore Startup Conclave 2026', category: 'corporate',
    date: '2026-08-22', time: '09:00 AM', city: 'Indore', state: 'Madhya Pradesh',
    venue: 'Brilliant Convention Centre', price: 999, capacity: 2000,
    desc: "India's cleanest city hosts its biggest startup event — 100 startups, 50 investors, and 2 days of pure hustle.",
    gradient: 'linear-gradient(135deg,#003366,#0077b6)', emoji: '💡', rsvped: false
  },
  {
    id: 48, name: 'Pondicherry Heritage Walk & Fest 2026', category: 'cultural',
    date: '2026-08-15', time: '07:00 AM', city: 'Puducherry', state: 'Puducherry',
    venue: 'French Quarter, White Town', price: 0, capacity: 5000,
    desc: 'Independence Day heritage walk through colonial French Quarter, followed by Tamil classical music and street art.',
    gradient: 'linear-gradient(135deg,#003366,#e8d5b7)', emoji: '🏛️', rsvped: false
  },
  {
    id: 49, name: 'Shimla Winter Carnival 2026', category: 'festival',
    date: '2026-01-05', time: '11:00 AM', city: 'Shimla', state: 'Himachal Pradesh',
    venue: 'The Ridge, Shimla', price: 0, capacity: 15000,
    desc: 'Snow, music, and mountains — ice skating, folk dances, snow sculpture contest, and the famous Miss Shimla pageant.',
    gradient: 'linear-gradient(135deg,#001f3f,#87ceeb)', emoji: '❄️', rsvped: false
  },
  {
    id: 50, name: 'Daman Seafood & Sunset Fest 2026', category: 'festival',
    date: '2026-10-24', time: '04:00 PM', city: 'Daman', state: 'Daman & Diu',
    venue: 'Devka Beach', price: 200, capacity: 8000,
    desc: 'Fresh catch, cold drinks, live Portuguese-Goan music, and the most underrated sunset on the west coast.',
    gradient: 'linear-gradient(135deg,#003366,#00b4d8)', emoji: '🦞', rsvped: false
  }
];

/* ── State ───────────────────────────────────────── */
let events = (() => {
  const saved = JSON.parse(localStorage.getItem('utsav_events') || 'null');
  if (!saved || saved.length < 50 || (saved[0] && saved[0].date && saved[0].date.startsWith('2025')) || !saved[0]?.state) {
    localStorage.removeItem('utsav_events');
    return SAMPLE_EVENTS;
  }
  return saved;
})();
let currentCat = 'all';
let searchQuery = '';

function saveEvents() { localStorage.setItem('utsav_events', JSON.stringify(events)); }

/* ── Render Events ───────────────────────────────── */
function renderEvents() {
  const grid = document.getElementById('events-grid');
  const q = searchQuery.toLowerCase();

  const filtered = events.filter(ev => {
    const matchCat = currentCat === 'all' || ev.category === currentCat;
    const matchSearch = !q ||
      ev.name.toLowerCase().includes(q) ||
      ev.city.toLowerCase().includes(q) ||
      (ev.state && ev.state.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-events"><span>🔍</span><p>No events found. Try a different search or category.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(ev => {
    const dateStr = new Date(ev.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const priceStr = ev.price === 0 ? 'Free' : `₹${ev.price.toLocaleString('en-IN')}`;
    const priceBadge = ev.price === 0 ? 'badge-free' : 'badge-paid';
    const bannerStyle = ev.img ? '' : `style="background:${ev.gradient || 'linear-gradient(135deg,#1a0a00,#0D1B2A)'}"`;

    return `
      <div class="event-card" data-id="${ev.id}">
        <div class="event-img" ${bannerStyle}>
          ${ev.img
            ? `<img src="${ev.img}" alt="${ev.name}" onerror="this.parentElement.innerHTML='<span class=\\'ev-emoji\\'>${ev.emoji}</span>'" />`
            : `<span class="ev-emoji">${ev.emoji}</span>`}
          <div class="event-img-overlay"></div>
          <span class="badge badge-cat ev-cat-badge">${ev.category}</span>
        </div>
        <div class="event-body">
          <div class="event-meta">
            <span class="badge ${priceBadge}">${priceStr}</span>
            ${ev.state ? `<span class="badge badge-state">📍 ${ev.state}</span>` : ''}
          </div>
          <h3>${ev.name}</h3>
          <div class="event-details">
            <span>📅 ${dateStr} · ${ev.time}</span>
            <span>🏛️ ${ev.venue}, ${ev.city}</span>
            <span>👥 ${ev.capacity.toLocaleString('en-IN')} capacity</span>
          </div>
          <p class="event-desc">${ev.desc}</p>
          <div class="event-footer">
            <span class="event-price">${priceStr}</span>
            <div class="footer-right">
              <span class="last-booked">⚡ ${Math.floor(Math.random()*45)+2}m ago</span>
              <button class="btn-rsvp ${ev.rsvped ? 'rsvped' : ''}" data-id="${ev.id}">
                ${ev.rsvped ? '✓ Going' : 'RSVP Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ── Category Filter ─────────────────────────────── */
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCat = btn.dataset.cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEvents();
  });
});

/* ── Search ──────────────────────────────────────── */
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderEvents();
});

/* ── RSVP ────────────────────────────────────────── */
document.getElementById('events-grid').addEventListener('click', e => {
  const btn = e.target.closest('.btn-rsvp');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const ev = events.find(e => e.id === id);
  if (!ev) return;
  ev.rsvped = !ev.rsvped;
  saveEvents();
  renderEvents();
  showToast(ev.rsvped ? `🎉 You're going to "${ev.name}"!` : `Removed RSVP for "${ev.name}"`);
});

/* ── Create Event Modal ──────────────────────────── */
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('create-event-form').addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('ev-name').value.trim();
  const cat   = document.getElementById('ev-cat').value;
  const date  = document.getElementById('ev-date').value;
  const time  = document.getElementById('ev-time').value;
  const city  = document.getElementById('ev-city').value.trim();
  const venue = document.getElementById('ev-venue').value.trim();
  const price = Number(document.getElementById('ev-price').value) || 0;
  const cap   = Number(document.getElementById('ev-capacity').value) || 100;
  const desc  = document.getElementById('ev-desc').value.trim();
  const img   = document.getElementById('ev-img').value.trim();

  const catEmojis = { wedding:'💍', festival:'🪔', corporate:'💼', music:'🎵', cultural:'🎭', sports:'🏏' };
  const catGradients = {
    wedding:'linear-gradient(135deg,#4a0030,#c0396b)',
    festival:'linear-gradient(135deg,#7b3f00,#f5a623)',
    corporate:'linear-gradient(135deg,#003366,#0077b6)',
    music:'linear-gradient(135deg,#1a0050,#7b2ff7)',
    cultural:'linear-gradient(135deg,#1a0a2e,#6a0572)',
    sports:'linear-gradient(135deg,#002147,#7b0000)'
  };

  const newEvent = {
    id: Date.now(), name, category: cat, date, time: formatTime(time),
    city, venue, price, capacity: cap, desc,
    gradient: catGradients[cat] || 'linear-gradient(135deg,#1a0a00,#0D1B2A)',
    emoji: catEmojis[cat] || '🎉', img: img || null, rsvped: false
  };

  events.unshift(newEvent);
  saveEvents();

  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('create-event-form').reset();

  currentCat = 'all';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="all"]').classList.add('active');

  renderEvents();
  document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
  showToast(`✅ "${name}" published successfully!`);
});

function formatTime(t) {
  if (!t) return '';
  const [h, m] = t.split(':');
  const hr = Number(h);
  return `${hr % 12 || 12}:${m} ${hr >= 12 ? 'PM' : 'AM'}`;
}

/* ── Contact Form ────────────────────────────────── */
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast("✅ Message sent! We'll get back to you within 24 hours.");
  e.target.reset();
});

/* ── Toast ───────────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── Hamburger (mobile) ──────────────────────────── */
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const isOpen = links.classList.toggle('mobile-open');
  document.getElementById('hamburger').textContent = isOpen ? '✕' : '☰';
});

/* ── Scroll-reveal animation ─────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.event-card, .feature-card, .step-card, .testi-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ── Init ────────────────────────────────────────── */
renderEvents();
observeCards();

/* ── Live visitor counter ────────────────────────── */
(function() {
  const el = document.getElementById('live-visitors');
  if (!el) return;
  let count = Math.floor(Math.random() * 80) + 140;
  el.textContent = count;
  setInterval(() => {
    count += Math.floor(Math.random() * 5) - 2;
    count = Math.max(120, Math.min(260, count));
    el.textContent = count;
  }, 4000);
})();

/* ── Hero typing effect ──────────────────────────── */
(function() {
  const words = ['Utsav', 'Celebration', 'Festival', 'Wedding', 'Moment'];
  const el = document.querySelector('.hero-content h1 span');
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;
  function tick() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    if (!deleting && ci > word.length) { deleting = true; setTimeout(tick, 1400); return; }
    if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
    setTimeout(tick, deleting ? 60 : 110);
  }
  tick();
})();

/* ── Auth ────────────────────────────────────────── */
let currentUser = JSON.parse(localStorage.getItem('utsav_user') || 'null');

function updateNavAuth() {
  const loginBtn = document.getElementById('btn-login-nav');
  const dashLi = document.getElementById('nav-dashboard-li');
  if (currentUser) {
    loginBtn.textContent = currentUser.name.split(' ')[0];
    loginBtn.onclick = openDashboard;
    dashLi.style.display = 'list-item';
  } else {
    loginBtn.textContent = 'Login';
    loginBtn.onclick = openLoginModal;
    dashLi.style.display = 'none';
  }
}

function openLoginModal() {
  document.getElementById('login-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLoginModal(e) {
  if (e && e.target !== document.getElementById('login-modal-overlay')) return;
  document.getElementById('login-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.getElementById('login-form').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('signup-form').style.display = tab === 'signup' ? '' : 'none';
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  const users = JSON.parse(localStorage.getItem('utsav_users') || '[]');
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) { showToast('❌ Invalid email or password'); return; }
  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('utsav_user', JSON.stringify(currentUser));
  closeLoginModal();
  updateNavAuth();
  showToast(`🎉 Welcome back, ${user.name.split(' ')[0]}!`);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass = document.getElementById('signup-pass').value;
  const users = JSON.parse(localStorage.getItem('utsav_users') || '[]');
  if (users.find(u => u.email === email)) { showToast('❌ Email already registered'); return; }
  users.push({ name, email, pass });
  localStorage.setItem('utsav_users', JSON.stringify(users));
  currentUser = { name, email };
  localStorage.setItem('utsav_user', JSON.stringify(currentUser));
  closeLoginModal();
  updateNavAuth();
  showToast(`✅ Account created! Welcome, ${name.split(' ')[0]}!`);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('utsav_user');
  closeDashboard();
  updateNavAuth();
  showToast('👋 Logged out successfully');
}

/* ── Organizer Dashboard ─────────────────────────── */
function openDashboard() {
  if (!currentUser) { openLoginModal(); return; }
  const myEvents = events.filter(ev => ev.createdBy === currentUser.email);
  const myBookings = JSON.parse(localStorage.getItem('utsav_bookings') || '[]')
    .filter(b => b.userEmail === currentUser.email);

  document.getElementById('dash-user-name').textContent = `${currentUser.name} · ${currentUser.email}`;
  document.getElementById('dash-stats').innerHTML = `
    <div style="background:var(--dark);border-radius:10px;padding:16px;text-align:center">
      <div style="font-size:1.6rem;font-weight:700;color:var(--saffron)">${myEvents.length}</div>
      <div style="font-size:0.8rem;color:var(--muted)">Events Created</div>
    </div>
    <div style="background:var(--dark);border-radius:10px;padding:16px;text-align:center">
      <div style="font-size:1.6rem;font-weight:700;color:#4ade80">${myBookings.length}</div>
      <div style="font-size:0.8rem;color:var(--muted)">Tickets Booked</div>
    </div>
    <div style="background:var(--dark);border-radius:10px;padding:16px;text-align:center">
      <div style="font-size:1.6rem;font-weight:700;color:var(--gold)">₹${myBookings.reduce((s,b)=>s+b.total,0).toLocaleString('en-IN')}</div>
      <div style="font-size:0.8rem;color:var(--muted)">Total Spent</div>
    </div>`;

  const list = document.getElementById('dash-events-list');
  if (myEvents.length === 0 && myBookings.length === 0) {
    list.innerHTML = `<p style="color:var(--muted);font-size:0.88rem">No events yet. <a href="#" onclick="closeDashboard();openModal();return false" style="color:var(--saffron)">Create your first event →</a></p>`;
  } else {
    list.innerHTML = myEvents.map(ev => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--dark);border-radius:10px;margin-bottom:10px;font-size:0.85rem">
        <div><strong>${ev.emoji} ${ev.name}</strong><br/><span style="color:var(--muted)">${ev.city} · ${new Date(ev.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span></div>
        <span style="color:var(--saffron);font-weight:600">${ev.price===0?'Free':'₹'+ev.price.toLocaleString('en-IN')}</span>
      </div>`).join('') +
      (myBookings.length ? `<h3 style="font-size:1rem;margin:16px 0 12px">My Bookings</h3>` +
        myBookings.map(b => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--dark);border-radius:10px;margin-bottom:10px;font-size:0.85rem">
            <div><strong>${b.eventName}</strong><br/><span style="color:var(--muted)">${b.qty} ticket(s) · ${b.date}</span></div>
            <span style="color:#4ade80;font-weight:600">₹${b.total.toLocaleString('en-IN')}</span>
          </div>`).join('') : '');
  }

  document.getElementById('dashboard-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDashboard(e) {
  if (e && e.target !== document.getElementById('dashboard-modal-overlay')) return;
  document.getElementById('dashboard-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Book Tickets ────────────────────────────────── */
let bookingEventId = null;

function openBookModal(id) {
  const ev = events.find(e => e.id === id);
  if (!ev) return;
  bookingEventId = id;

  document.getElementById('book-step-1').style.display = '';
  document.getElementById('book-step-2').style.display = 'none';
  document.getElementById('book-step-3').style.display = 'none';
  document.getElementById('book-event-title').textContent = `${ev.emoji} ${ev.name}`;
  document.getElementById('book-event-meta').textContent = `📅 ${new Date(ev.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})} · 🏛️ ${ev.venue}, ${ev.city}`;
  document.getElementById('book-unit-price').textContent = ev.price === 0 ? 'Free' : `₹${ev.price.toLocaleString('en-IN')}`;
  document.getElementById('book-submit-btn').textContent = ev.price === 0 ? 'Confirm Free RSVP →' : 'Proceed to Pay →';

  const qtyInput = document.getElementById('book-qty');
  qtyInput.oninput = () => {
    const total = ev.price * (parseInt(qtyInput.value) || 1);
    document.getElementById('book-total').textContent = ev.price === 0 ? 'Free' : `₹${total.toLocaleString('en-IN')}`;
  };
  qtyInput.oninput();

  if (currentUser) {
    document.getElementById('book-name').value = currentUser.name;
    document.getElementById('book-email').value = currentUser.email;
  }

  document.getElementById('book-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookModal(e) {
  if (e && e.target !== document.getElementById('book-modal-overlay')) return;
  document.getElementById('book-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleBooking(e) {
  e.preventDefault();
  const ev = events.find(ev => ev.id === bookingEventId);
  const qty = parseInt(document.getElementById('book-qty').value) || 1;
  const total = ev.price * qty;

  if (ev.price === 0) {
    finalizeBooking();
  } else {
    document.getElementById('book-step-1').style.display = 'none';
    document.getElementById('book-step-2').style.display = '';
    document.getElementById('pay-amount').textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

function confirmPayment() {
  finalizeBooking();
}

function finalizeBooking() {
  const ev = events.find(ev => ev.id === bookingEventId);
  const name = document.getElementById('book-name').value.trim();
  const email = document.getElementById('book-email').value.trim();
  const qty = parseInt(document.getElementById('book-qty').value) || 1;
  const total = ev.price * qty;
  const bookingId = 'UTS' + Date.now().toString().slice(-6);
  const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const bookings = JSON.parse(localStorage.getItem('utsav_bookings') || '[]');
  bookings.push({ bookingId, eventId: ev.id, eventName: ev.name, userEmail: email, qty, total, date: dateStr });
  localStorage.setItem('utsav_bookings', JSON.stringify(bookings));

  ev.rsvped = true;
  saveEvents();

  document.getElementById('book-step-1').style.display = 'none';
  document.getElementById('book-step-2').style.display = 'none';
  document.getElementById('book-step-3').style.display = '';
  document.getElementById('ticket-details').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Booking ID</span><strong>${bookingId}</strong></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Event</span><strong>${ev.name}</strong></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Name</span><strong>${name}</strong></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Tickets</span><strong>${qty}</strong></div>
      <div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Total Paid</span><strong style="color:var(--saffron)">${total === 0 ? 'Free' : '₹' + total.toLocaleString('en-IN')}</strong></div>
    </div>`;
  renderEvents();
}

/* ── Share Event ─────────────────────────────────── */
let shareEventId = null;

function openShareModal(id) {
  shareEventId = id;
  const ev = events.find(e => e.id === id);
  document.getElementById('share-event-name').textContent = `${ev.emoji} ${ev.name}`;
  document.getElementById('share-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeShareModal(e) {
  if (e && e.target !== document.getElementById('share-modal-overlay')) return;
  document.getElementById('share-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function getShareText() {
  const ev = events.find(e => e.id === shareEventId);
  return `${ev.emoji} *${ev.name}*\n📅 ${new Date(ev.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})} · ${ev.time}\n🏛️ ${ev.venue}, ${ev.city}\n💰 ${ev.price === 0 ? 'Free Entry' : '₹' + ev.price.toLocaleString('en-IN')}\n\nBook now on Utsav 👉 ${window.location.href}`;
}

function shareWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}`, '_blank');
}

function shareTwitter() {
  const ev = events.find(e => e.id === shareEventId);
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${ev.emoji} ${ev.name} — ${ev.city} | Book on Utsav 🎉`)}`, '_blank');
}

function copyEventLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('🔗 Link copied to clipboard!');
    closeShareModal();
  });
}

/* ── Update renderEvents to add Share + Book buttons ─ */
const _origRender = renderEvents;
renderEvents = function() {
  _origRender();
  // Replace RSVP buttons with Book + Share
  document.querySelectorAll('.event-card').forEach(card => {
    const id = Number(card.dataset.id);
    const ev = events.find(e => e.id === id);
    if (!ev) return;
    const footer = card.querySelector('.event-footer');
    if (!footer) return;
    const priceStr = ev.price === 0 ? 'Free' : `₹${ev.price.toLocaleString('en-IN')}`;
    footer.innerHTML = `
      <span class="event-price">${priceStr}</span>
      <div class="footer-right">
        <button class="btn-share-sm" onclick="openShareModal(${ev.id})">📤 Share</button>
        <button class="btn-rsvp ${ev.rsvped ? 'rsvped' : ''}" onclick="openBookModal(${ev.id})">
          ${ev.rsvped ? '✓ Booked' : ev.price === 0 ? 'RSVP Free' : 'Book Now'}
        </button>
      </div>`;
  });
};

/* ── Tag user-created events ─────────────────────── */
const _origSubmit = document.getElementById('create-event-form').onsubmit;
document.getElementById('create-event-form').addEventListener('submit', () => {
  // Tag the newest event with current user
  setTimeout(() => {
    if (currentUser && events[0]) events[0].createdBy = currentUser.email;
    saveEvents();
  }, 0);
});

/* ── Init auth state ─────────────────────────────── */
updateNavAuth();
renderEvents(); // re-render with new footer buttons
