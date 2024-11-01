document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
const textsss = document.querySelector('.editText');
const textOriginalText = document.getElementById('originaltext');
const textOriginal = document.getElementById('textOriginal');
const textOriginalHides = document.getElementById('textOriginalHides');
const hintLabel = document.querySelector('.hint-label');
const textLabelOriginal = document.getElementById('textseeTwo');
const textLabelCorrected = document.querySelector('.texthide');
const bgnavbar = document.querySelector('.bg-navbar');
const footer =document.querySelector('.footer');
function adjustFontSize() {
  const width = window.innerWidth;
if (width <= 768) {
  
  bgnavbar.style.paddingTop = '0px';
  bgnavbar.style.paddingBottom = '0px';
  bgnavbar.style.backgroundColor='#00000000';
  textsss.style.fontSize = '14px'; // Smaller font size for very large screens
} else { 
 footer.style.backgroundColor = '#214C9E'
  textLabelCorrected.style.fontSize = '15px';
  textLabelOriginal.style.fontSize = '15px';
  hintLabel.style.fontSize = '20px';
  textOriginal.style.fontSize = '20px';
  textOriginalHides.style.fontSize = '20px';
  textOriginalText.style.fontSize = '20px';
  textsss.style.fontSize = '20px'; // Default font size for small screens
  console.log('resizes');
}
}

// Adjust the font size on initial load
adjustFontSize();

// Adjust the font size on window resize
window.addEventListener('resize', adjustFontSize);


const navbarbg = document.querySelector('.navbar');

const homelist = document.getElementById('homelist');
const aboutlist = document.getElementById('aboutlist');
const contactlist = document.getElementById('contactlist');

const homesection = document.getElementById('home');
const aboutsection = document.getElementById('about');
const contactussection = document.getElementById('contact-us');

homelist.addEventListener('click', function() { 
  scrollToHomeSection();
});

aboutlist.addEventListener('click', function() { 
  scrollToAboutSection();
});

contactlist.addEventListener('click', function() { 
  scrollToContactSection();
});

function scrollToHomeSection() {


    homesection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    homesection.focus();
  
}

function scrollToAboutSection() {


    aboutlist.scrollIntoView({ behavior: 'smooth', block: 'start' });
    homesection.focus();
  
}

function scrollToContactSection() {


    contactlist.scrollIntoView({ behavior: 'smooth', block: 'start' });
    homesection.focus();
  
}

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active');
  navbarbg.classList.toggle('expanded');

  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');

  if (navbarbg.classList.contains('expanded')) {
    navbarbg.style.transition = 'background-color 0.5s ease-in-out';
    navbarbg.style.backgroundColor = '#191970'; // Midnight blue color
    
  } else {
    
    navbarbg.style.transition = 'background-color 0.5s ease-in-out';
    navbarbg.style.backgroundColor = '#214C9E'; // Cornflower blue color
    
  }
});
    // Function to close menu on window resize if window width > 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        }
    });

document.querySelector('.editTextContainer').addEventListener('click', function() {
    document.querySelector('.editText').focus();
});

document.querySelector('.editText').addEventListener('input', function() {
  
  if (textarea.value.length > 0) {
    hintLabel.style.display = 'none';
  } else {
    hintLabel.style.display = 'block';
  }
});
    // Optionally, you can also close the menu when a menu item is clicked
    const menuItems = menu.querySelectorAll('.menu-link');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    const maxwidth2 = document.querySelector('.max-width2'); 
    
    const container4 = document.querySelector('.container4'); 
    const textresult = document.getElementById('result'); 
    const textresultcontainer = document.getElementById('resultContainer');
    const textresultlayouts = document.querySelector('.resultdes'); 

    textresultcontainer.style.display = 'none';
    
    const textareabox = document.querySelector('.editTextContainer');
const textarea = document.querySelector('.editText');
 const textarearesultbox = document.querySelector('.editTextContainerCorrect');
const overlay = document.querySelector('.overlay');
const overlay_two = document.getElementById('ovarlayid_two');

textarea.addEventListener('input', adjustHeight);
textresult.addEventListener('input', adjustHeight);

function adjustHeight() {
  // Remove any existing fixed height to allow it to shrink if needed
  textarea.style.height = 'auto';
  textareabox.style.height = 'auto';
  textarearesultbox.style.height = 'auto';

  // Calculate the new height of the textarea based on its scroll height
  let newHeight = Math.max(textarea.scrollHeight, 300);

  // Set the new height for the textarea and containers
  textarea.style.height = `${newHeight}px`;
  textareabox.style.height = `${newHeight}px`;
  textarearesultbox.style.height = `${newHeight}px`;
  
  // Sync the overlay scroll positions
  overlay.scrollTop = textarea.scrollTop;
  overlay_two.scrollTop = textarea.scrollTop;
}

// Trigger the height adjustment when content is loaded
window.addEventListener('load', adjustHeight);

    const overlaycorrected = document.getElementById('ovarlaycorrectedid');
    const overlaycorrectedTwo = document.getElementById('ovarlaycorrectedtwoid');
    textresult.style.display = 'none';
    textresultlayouts.style.display = 'none';

const checkContainer = document.querySelector('.checkContainer');

let clear = false;
const loading = document.querySelector('.loader');
const correctButton = document.querySelector('.correctButton');
const refreshButton = document.querySelector('.refreshButton');
const functioncontainer3 = document.querySelector('.dropdown');

const texthide = document.getElementById('texthide');
const correctedbox = document.getElementById('correctedContainer');
const textinsideCorrectedBox = document.getElementById('textOriginal');
const textOverlayInsideCorrectedBoxTwo = document.getElementById('ovarlaycorrectedid');

const textsee = document.getElementById('textsee');

const TEXTAREA = document.querySelector('.editText');

const editText2 = document.querySelector('.editText2');

textOriginalHides.style.display = 'none';
const correctedtextmobile = document.getElementById('correctedtextmobile');
const textoriginal2 = document.getElementById('originaltext');
textsee.style.display = 'none';
textOriginal.style.display = 'none';
correctedtextmobile.style.display = 'none';
textoriginal2.style.display = 'none';
let emptyText = null;
let originalText = null;

let seeOriginal = false;

let suggestionsFromAPI = null;
let correctedHighlightedText = null;
let correctedHighlightedTwoText = null;

textOriginalText.style.display = 'none';
const displaywebsite = document.querySelector('.websitedisplay');
const correctorcontainer = document.querySelector('.correctorcontainer');

const logoimg = document.querySelector('.imagelogo');
const navtexts = document.querySelector('.menu');

const editText = document.querySelector('.editText');

if (window.innerWidth <= 768) {
  correctedbox.style.display = 'none';
  correctorcontainer.style.width = '90%';
  console.log('non');
  
} else {
  logoimg.style.marginLeft ='-150px';
 
  navtexts.style.marginRight = '-150px';
  correctedbox.style.display = 'block';
  displaywebsite.style.display = 'flex';
  correctedbox.style.marginLeft = '10px';
      displaywebsite.style.paddingBottom = '10px';
correctorcontainer.style.width = '70%';
  console.log('visible');
}




loading.style.display = 'none';
loading.style.visibility = 'hidden';
const textseeTwo = document.getElementById('textseeTwo');

textseeTwo.style.display = 'none';
const RefreshButton = document.querySelector('.refreshButton');

RefreshButton.style.display = 'none';
let changes = false;
let questionDetected = false;
    document.querySelector('.refreshButton').addEventListener('click', function() {
      changes = false;
      questionDetected = false;
      if (window.innerWidth <= 768) {
  correctedtextmobile.style.display = 'none';
         overlaycorrectedTwo.style.display = 'none';
         overlaycorrectedTwo.innerHTML = ''; 
         correctedtextmobile.value = '';
         textarea.value = '';
         textarea.removeAttribute('readonly');
overlay.style.display = 'block';
overlay_two.style.display = 'block';
textarea.style.display = 'block';
correctedbox.style.display = 'none';
correctorcontainer.style.width = '90%';
overlaycorrected.textContent = '';
console.log('non');

checkContainer.style.display = 'none';
textsee.style.display = 'none';

if (getComputedStyle(overlay).paddingTop === '28px') {
  overlay.style.paddingTop = '8px';
}

}else {
  textseeTwo.style.display = 'none';
  correctedtextmobile.style.display = 'none';
overlaycorrectedTwo.style.display = 'none';
overlaycorrectedTwo.innerHTML = ''; 
overlaycorrected.innerHTML = '';
overlaycorrected.textContent = '';
correctedtextmobile.value = '';
textarea.value = '';
textarea.removeAttribute('readonly');
overlay.style.display = 'block';
overlay_two.style.display = 'block';
textarea.style.display = 'block';

checkContainer.style.display = 'none';
textsee.style.display = 'none';

correctedbox.style.display = 'block';
displaywebsite.style.display = 'flex';
correctedbox.style.marginLeft = '10px';
displaywebsite.style.paddingBottom = '10px';
correctorcontainer.style.width = '70%';
console.log('visible');
}
  

    
        correctButton.style.visibility = 'visible';
refreshButton.style.visibility = 'visible';
TEXTAREA.style.display = 'block';
hintLabel.style.display = 'block';
textinsideCorrectedBox.value=' ';
textOverlayInsideCorrectedBoxTwo.value = '';
RefreshButton.style.display = 'none';
        
        textOriginalText.value = '';
        correctedtextmobile.value = '';
        textOriginalText.style.display = 'none';
        checkContainer.style.display = 'none';
        clear = true;
        overlay.innerHTML = '';
        overlay_two.innerHTML = '';
        textresult.value = '';
        maxwidth2.style.display = 'inline';
        textresultcontainer.style.display = 'none'; // Hide the container on refresh
  if (textarea.value.length > 0) {
    hintLabel.style.display = 'none';
  } else {
    hintLabel.style.display = 'block';
  }


        
    });
let textdetector = document.getElementById('text');
let detected = false;

  const newContainer = document.querySelector('.newContainer');
    const dropdownButton  = document.getElementById('dropdownButton');
const errorText  = document.querySelector('.errorText');
const dropdownContainer= document.getElementById('dropdownContainer');
const paragraph = document.querySelector('.suggestions');



const definitions = document.querySelector('.definitions');
definitions.style.display = 'none';
checkContainer.style.display = 'none';
const downDropdown = document.getElementById('dropdownRotation');
dropdownContainer.style.display = 'none';

let highlightedWords = ''; // Initialize highlightedWords



checkContainer.addEventListener('mouseenter', () => {
  // Enable scrolling by adding the necessary event listeners
  document.addEventListener('wheel', handleScroll);
});

// Add a mouseleave event to disable scrolling when the mouse leaves the area
checkContainer.addEventListener('mouseleave', () => {
  // Disable scrolling by removing the event listener
  document.removeEventListener('wheel', handleScroll);
});

function handleScroll(event) {
  // Check if the mouse is over the checkContainer and handle scrolling
  if (event.deltaY !== 0) {
    checkContainer.scrollTop += event.deltaY; // Scroll vertically
  }
}


function showDefinition(event) {
  const word = event.target.innerText;
  definitions.style.display = 'block';
  // Fetch and display the definition
  fetchDefinition(word)
    .then(definition => {
      definitions.innerHTML = `<h3>${word}</h3><p>${definition}</p>`;
    })
    .catch(error => {
      definitions.innerHTML = `<h3>${word}</h3><p>Definition not found.</p>`;
    });
  // Position the definitions element near the word
  const rect = event.target.getBoundingClientRect();
  definitions.style.top = `${rect.bottom + window.scrollY}px`;
  definitions.style.left = `${rect.left + window.scrollX}px`;
}

function hideDefinition() {
  definitions.style.display = 'none';
  definitions.innerHTML = ''; // Clear the content of the definitions element
}

async function fetchDefinition(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!response.ok) {
      throw new Error('Word not found');
    }
    const data = await response.json();
    // Extract the first definition
    const definition = data[0].meanings[0].definitions[0].definition;
    return definition;
  } catch (error) {
    console.error('Error fetching definition:', error);
    return 'Definition not found';
  }
}



let signalcut;

const endpoint = 'https://lt-ruletagalog.vercel.app/api/v2/check';

let corrections = {};

const getSuggestionsFromAPI = async (text, language = 'tl-PH') => {
  console.log('getSuggestionsFromAPI called with text:', text);
  console.log('Language:', language);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      language: language
    })
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data from API:', data);

    // Process the API response
    return data.matches.map(match => {
      const context = match.context.text;
      const offset = match.context.offset;
      const length = match.context.length;
      const errorText = context.substr(offset, length);
      console.log('TEXTERROR TEST: ', + errorText);
      const ruleDescription = match.rule.description;
      const suggestions = match.replacements; // Use match.replacements directly
      return { errorText, suggestions, ruleDescription };
    });
  } catch (error) {
    checkContainer.style.display = 'none';
    loading.style.display = 'none';
    correctButton.style.visibility = 'hidden';
    refreshButton.style.visibility = 'visible';

    console.error('Error in getSuggestionsFromAPI:', error);
    return [];
  }
};

let originalArrayTextOutside;


async function getBestSuggestionFromGemini(ruleDesc, errorsTextarea, suggestionText) {
  try {
    const response = await fetch('https://lt-ruletagalog.vercel.app/api/v2/geminiapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ruleDesc, errorsTextarea, suggestionText })
    });

    const data = await response.json();
    if (response.ok) {
      return data.bestSuggestion;
    } else {
      console.error('Error from API:', data.error);
      return null;
    }
  } catch (error) {
    console.error("Error calling the API:", error);
    return null;
  }
}
let errorsText = [];
let onceupdate = true;
let suggestionMap = [];
let arrayErrorText = [];

let captured = true;

let firstletter = [];
let correctedLastFirstQuestion = [];
let errorArray = [];
let questionErrorArray = [];
let highlightsErrors;
document.querySelector('.correctButton').addEventListener('click', async function () {
  if (textarea.value.trim() === "") {
    alert("Pakiusap, maglagay ng teksto para masuri.");
  } else {
    try {
      if (window.innerWidth <= 768) {
        textarea.setAttribute('readonly', true); // Makes the textarea non-editable
      }
      
      const fullText = textarea.value;
originalText = fullText;
textOriginalHides.value = fullText;
textoriginal2.textContent = fullText;
emptyText = textarea.value;
editText2.textContent = emptyText;
overlaycorrected.textContent = fullText;
textOriginalText.value = fullText;

      loading.style.display = 'block';
      loading.style.visibility = 'visible';
      correctButton.style.visibility = 'hidden';

      checkContainer.innerHTML = 'Munkahing Pagtatama';
      
      const timeExists = true;
      
function combineWords(text) {
  let words = text.split(' ');
  const combinedWords = [];
  let i = 0;

  // Existing patterns for names and salutations
  const namePattern = /^[A-Z][a-z]+(?:\s?[A-Z][a-z]+)+$/;
  
  const salutationPattern = /^(Dr.|Bb.|G\..|Gng.|Mr.|Mrs.|Ms.|Engr.|Atty.)\.$/;
const newsNamePattern = /^(Manila Times|Philippine Daily Inquirer|The Star|Rappler|ABS-CBN News|GMA News|Philippine Star|SunStar|BusinessMirror|Daily Tribune|Inquirer\.net|Philippine News Agency|The Manila Bulletin|Tempo|News5|Bulatlat|Mindanao Times|Philippine Information Agency|Hataw|Pinoy Times)$/;

const moreNamesPattern = /^(Computer Programming|Software Development|Web Development|Data Science|Artificial Intelligence|Machine Learning|Programming Languages|Software Engineering|Database Management|Network Security|Information Systems|Cybersecurity|Cloud Computing|Mobile App Development|Game Development|DevOps|Systems Analysis|IT Project Management|User Experience Design|Big Data Analytics|Embedded Systems)$/;;

const salutationWords = ["Dr", "Bb", "G.", "Gng", "Mr", "Mrs", "Ms", "Engr", "Atty"];

const newsName = [
  "Manila Times",
  "Philippine Daily Inquirer",
  "The Star",
  "Rappler",
  "ABS-CBN News",
  "GMA News",
  "Philippine Star",
  "SunStar",
  "BusinessMirror",
  "Daily Tribune",
  "Inquirer.net",
  "Philippine News Agency",
  "The Manila Bulletin",
  "Tempo",
  "News5",
  "Bulatlat",
  "Mindanao Times",
  "Philippine Information Agency",
  "Hataw",
  "Pinoy Times"
];
const surpriseWords = [
    "Uy",
    "Aray",
    "Wow",
    "Hala",
    "Ay",
    "uyy",
    "Uyy",
    "HALA",
    "ARAYY",
    "ARAY",
    "WOW",
    "AY",
    "AYY"
];

const moreNames = [
  "Computer Programming",
  "Software Development",
  "Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "Programming Languages",
  "Software Engineering",
  "Database Management",
  "Network Security",
  "Information Systems",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile App Development",
  "Game Development",
  "DevOps",
  "Systems Analysis",
  "IT Project Management",
  "User Experience Design",
  "Big Data Analytics",
  "Embedded Systems"
];


  const famousPersons = [
  // Previously added names
  "Jose Rizal", "Andres Bonifacio", "Manuel Quezon", "Emilio Aguinaldo", "Lapu Lapu",
  "Antonio Luna", "Melchora Aquino", "Gabriela Silang", "Apolinario Mabini", "Juan Luna",
  "Pedro Paterno", "Felipe Agoncillo", "Julian Felipe", "Carlos Romulo", "Diosdado Macapagal",
  "Ferdinand Marcos", "Corazon Aquino", "Ramon Magsaysay", "Elpidio Quirino", "Sergio Osmeña",
  "Jose Laurel", "Manuel Roxas", "Benigno Aquino", "Leandro Locsin", "Juan Nakpil",
  "Francisco Balagtas", "Fernando Amorsolo", "Lucio San Pedro", "Francisco Santiago",
  "Lorenzo Ruiz", "Claro Recto", "Teodoro Agoncillo", "Ninoy Aquino", "Manny Pacquiao",
  "Risa Hontiveros", "Grace Poe", "Bam Aquino", "Lito Atienza", "Isko Moreno",
  "Sara Duterte", "Ping Lacson", "Leni Robredo", "Chiz Escudero", "Erap Estrada",
  "Mar Roxas", "Jejomar Binay", "Gloria Macapagal", "Alan Cayetano", "Vicente Sotto",
  "Imee Marcos", "Ramon Mitra", "Koko Pimentel", "Cesar Virata", "Jojo Binay",
  "Nene Pimentel", "Sonny Angara", "Ralph Recto", "Jun Evasco", "Tony Tan",
  "Alfredo Lim", "Tommy Osmeña", "Cory Aquino", "Pepe Diokno", "Lito Lapid",
  "Roilo Golez", "Jun Abaya", "Jess Dureza", "Nikki Coseteng", "Rodolfo Biazon",
  "Joey Lina", "Jinggoy Estrada", "Kris Aquino", "Fidel Ramos", "Marcial Lichauco",
  "Raul Roco", "Butch Abad", "Manuel Villar", "Rene Saguisag", "Jesse Robredo",
  "Miro Quimbo", "Erwin Tulfo", "Sonny Belmonte", "Gary Alejano", "Mark Villar",
  "Dick Gordon", "Ping Lacson", "Lito Banayo", "Mike Defensor", "Vicente Sotto",
  "Enrile Reyes", "Ramon Ang", "Luis Singson", "Erin Tañada", "Frank Drilon",
  "Diosdado Cabangon", "Joey Salceda", "Rodante Marcoleta", "Miriam Defensor",
  "Aimee Marcos", "Paolo Duterte", "Harry Roque", "Nancy Binay", "Bong Go",
  "Grace Padaca", "Rene Cayetano", "Feliciano Belmonte", "Orly Mercado",
  "Dante Fascinillo", "Gina Lopez", "Benhur Abalos", "Loren Legarda",
  "Teddy Baguilat", "Alan Peter", "Francis Tolentino", "Mark Cojuangco",
  "Manny Villar",

  // Additional two-word political dynasty names
  "Imee Marcos", "Imelda Marcos", "Ferdinand Marcos", "Bongbong Marcos",
  "Gloria Arroyo", "Juan Ponce", "Bam Aquino", "Noynoy Aquino", "Bong Revilla",
  "Lani Mercado", "JV Ejercito", "Jinggoy Estrada", "Joseph Estrada",
  "Sarah Duterte", "Rodrigo Duterte", "Gwen Garcia", "Pablo Garcia", "Jack Enrile",
  "Juan Enrile", "Cynthia Villar", "Mark Villar", "Nancy Binay", "Abby Binay",
  "Toby Tiangco", "Ruffy Biazon", "Teofisto Guingona", "Migz Zubiri",
  "Imee Marcos", "Ferdinand Marcos", "Gibo Teodoro", "Neptali Gonzales", "Lino Cayetano",
  "Pia Cayetano", "Mar Roxas", "Jinggoy Estrada", "Toby Tiangco", "Chavit Singson",
  "Danilo Suarez", "Prospero Nograles", "Pantaleon Alvarez", "Martin Romualdez",
  "Imelda Marcos", "Jolo Revilla", "Ramon Revilla", "Rico Puno", "Gilbert Teodoro",
  "Alfred Romualdez", "Bebot Alvarez", "Butz Aquino", "Pepeng Cojuangco",
  "Bongbong Marcos", "Jose Ma. Zubiri", "Teofisto Guingona", "Carlos Padilla",
  "Ronnie Zamora", "Del De Guzman", "Chiz Escudero", "Peping Cojuangco",
  "Gilbert Remulla", "Emmanuel Pacquiao", "Isidro Ungab", "Daisy Avance"
];

  // New patterns for time and Bible verses
  const timePattern = /^\d{1,4}$/; // Detects numbers like "362", "1202" for time format
  const yearPattern = /^\d{4}$/; // Detects 4-digit year numbers like "1992"

  // List of all Bible book names (supporting any case: uppercase or lowercase)
  const bibleBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
    "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke",
    "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
    "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
    "Jude", "Revelation"
  ].map(book => book.toLowerCase()); // Convert all book names to lowercase for case-insensitive comparison

const firstWords = [
    'abalang',
    'abang',
    'abong',
    'abusadong',
    'abusong',
    'akong',
    'alagang',
    'among',
    'asang',
    'asawang',
    'awang',
    'babaeng',
    'babang',
    'bagang',
    'bagong',
    'bagyong',
    'bahang',
    'baklang',
    'banyong',
    'baryang',
    'basang',
    'batang',
    'batong',
    'bawing',
    'bayaning',
    'bayong',
    'berdeng',
    'besong',
    'bibong',
    'bidang',
    'bikining',
    'biling',
    'binging',
    'biyaheng',
    'bokang',
    'bolang',
    'botong',
    'bugsong',
    'bukang',
    'bukong',
    'bulang',
    'bungong',
    'buryong',
    'dalang',
    'daling',
    'damang',
    'dating',
    'diyosang',
    'duming',
    'dusang',
    'gabing',
    'galang',
    'ganang',
    'gandang',
    'ganoong',
    'gawang',
    'gintong',
    'guhong',
    'gulong',
    'gustong',
    'guwapong',
    'halinang',
    'halong',
    'hangang',
    'hangong',
    'hapong',
    'haring',
    'hasang',
    'hating',
    'hiblang',
    'hilang',
    'hilong',
    'hinang',
    'hinding',
    'hingang',
    'hipong',
    'hiwagang',
    'hiyang',
    'hubong',
    'hulang',
    'hupang',
    'hustong',
    'ibang',
    'isang',
    'jowang',
    'kalabasang',
    'kaliwang',
    'kamukhang',
    'kaniyang',
    'kantong',
    'kanyang',
    'kapeng',
    'karneng',
    'kasang',
    'kastang',
    'kating',
    'kawawang',
    'kayang',
    'kayumangging',
    'kesong',
    'kilalang',
    'kitang',
    'konting',
    'kuhang',
    'kulong',
    'labang',
    'lagang',
    'lagong',
    'lahing',
    'laking',
    'lalaking',
    'lalong',
    'langong',
    'larong',
    'latang',
    'lawang',
    'layong',
    'ligong',
    'likong',
    'liksing',
    'lilang',
    'lingong',
    'litong',
    'lobong',
    'lokong',
    'luging',
    'luksong',
    'lumang',
    'lumpong',
    'lupang',
    'lutong',
    'maamong',
    'mababang',
    'mabangong',
    'mabisang',
    'mabulang',
    'mabuting',
    'machong',
    'madaling',
    'magaang',
    'magandang',
    'magang',
    'magarang',
    'mahalagang',
    'mahinahong',
    'mahinang',
    'mahiwagang',
    'maiging',
    'maikling',
    'makabagong',
    'malabong',
    'malaking',
    'malalang',
    'malansang',
    'malasang',
    'malayang',
    'malayong',
    'maligayang',
    'maliksing',
    'maling',
    'manang',
    'mapayapang',
    'mapulang',
    'maputing',
    'maruming',
    'masaganang',
    'masaheng',
    'masamang',
    'masayang',
    'masidhing',
    'masiglang',
    'matabang',
    'matalinong',
    'matandang',
    'matipunong',
    'mayang',
    'mayuming',
    'milyong',
    'misang',
    'mukhang',
    'nanang',
    'ngilong',
    'pabangong',
    'pahingang',
    'palong',
    'pamanang',
    'panalong',
    'panang',
    'pasang',
    'paskong',
    'patang',
    'payapang',
    'pekeng',
    'pigang',
    'piling',
    'pilyang',
    'pilyong',
    'pinong',
    'pintang',
    'pisang',
    'posteng',
    'pulang',
    'pulong',
    'punong',
    'puring',
    'purong',
    'puting',
    'retirong',
    'reynang',
    'rondang',
    'sakang',
    'sakong',
    'saksing',
    'saktong',
    'salitang',
    'salong',
    'samang',
    'santong',
    'sapong',
    'sarang',
    'sariwang',
    'sawang',
    'sigang',
    'siglang',
    'sineng',
    'sintang',
    'sirang',
    'sising',
    'sobrang',
    'subong',
    'sukang',
    'sukong',
    'sulong',
    'sumpang',
    'sundong',
    'suring',
    'susong',
    'suwerteng',
    'taeng',
    'tagang',
    'tagong',
    'tahing',
    'takang',
    'takbong',
    'talong',
    'tamang',
    'tampong',
    'tandang',
    'tangang',
    'tangong',
    'taong',
    'tasang',
    'tawang',
    'tayang',
    'tayong',
    'tiling',
    'tingalang',
    'tipong',
    'tubong',
    'tugmang',
    'tuksong',
    'tulang',
    'tulong',
    'tuping',
    'turong',
    'tuwang',
    'tuyong',
    'ubong',
    'ulong',
    'umagang',
    'upong',
    'usong',
    'utong',
    'uwing',
    'waging',
    'walang',
    'wastong',
    'wikang',
    'yakang',
    'yaring',
    'yayang',
    'yelong',
    'yosing'
];


// Second words array (base words)
const secondWords = [
    'abala',
    'aba',
    'abo',
    'abusado',
    'abuso',
    'ako',
    'alaga',
    'amo',
    'asa',
    'asawa',
    'awa',
    'babae',
    'baba',
    'baga',
    'bago',
    'bagyo',
    'baha',
    'bakla',
    'banyo',
    'barya',
    'basa',
    'bata',
    'bato',
    'bawi',
    'bayani',
    'bayo',
    'berde',
    'beso',
    'bibo',
    'bida',
    'bikini',
    'bili',
    'bingi',
    'biyahe',
    'boka',
    'bola',
    'boto',
    'bugso',
    'buka',
    'buko',
    'bula',
    'bungo',
    'buryo',
    'dala',
    'dali',
    'dama',
    'dati',
    'diyosa',
    'dumi',
    'dusa',
    'gabi',
    'gala',
    'gana',
    'ganda',
    'ganoon',
    'gawa',
    'ginto',
    'guho',
    'gulo',
    'gusto',
    'guwapo',
    'halina',
    'halo',
    'hanga',
    'hango',
    'hapo',
    'hari',
    'hasa',
    'hati',
    'hibla',
    'hila',
    'hilo',
    'hina',
    'hindi',
    'hinga',
    'hipo',
    'hiwaga',
    'hiya',
    'hubo',
    'hula',
    'hupa',
    'husto',
    'iba',
    'isa',
    'jowa',
    'kalabasa',
    'kaliwa',
    'kamukha',
    'kaniya',
    'kanto',
    'kanya',
    'kape',
    'karne',
    'kasa',
    'kasta',
    'kati',
    'kawawa',
    'kaya',
    'kayumanggi',
    'keso',
    'kilala',
    'kita',
    'konti',
    'kuha',
    'kulo',
    'laba',
    'laga',
    'lago',
    'lahi',
    'laki',
    'lalaki',
    'lalo',
    'lango',
    'laro',
    'lata',
    'lawa',
    'layo',
    'ligo',
    'liko',
    'liksi',
    'lila',
    'lingo',
    'lito',
    'lobo',
    'loko',
    'lugi',
    'lukso',
    'luma',
    'lumpo',
    'lupa',
    'luto',
    'maamo',
    'mababa',
    'mabango',
    'mabisa',
    'mabula',
    'mabuti',
    'macho',
    'madali',
    'magaan',
    'maganda',
    'maga',
    'magara',
    'mahalaga',
    'mahinahon',
    'mahina',
    'mahiwaga',
    'maigi',
    'maikli',
    'makabago',
    'malabo',
    'malaki',
    'malala',
    'malansa',
    'malasa',
    'malaya',
    'malayo',
    'maligaya',
    'maliksi',
    'mali',
    'mana',
    'mapayapa',
    'mapula',
    'maputi',
    'marumi',
    'masagana',
    'masahe',
    'masama',
    'masaya',
    'masidhi',
    'masigla',
    'mataba',
    'matalino',
    'matanda',
    'matipuno',
    'maya',
    'mayumi',
    'milyon',
    'misa',
    'mukha',
    'nana',
    'ngilo',
    'pabango',
    'pahinga',
    'palo',
    'pamana',
    'panalo',
    'pana',
    'pasa',
    'pasko',
    'pata',
    'payapa',
    'peke',
    'piga',
    'pili',
    'pilya',
    'pilyo',
    'pino',
    'pinta',
    'pisa',
    'poste',
    'pula',
    'pulo',
    'puno',
    'puri',
    'puro',
    'puti',
    'retiro',
    'reyna',
    'ronda',
    'saka',
    'sako',
    'saksi',
    'sakto',
    'salita',
    'salo',
    'sama',
    'santo',
    'sapo',
    'sara',
    'sariwa',
    'sawa',
    'siga',
    'sigla',
    'sine',
    'sinta',
    'sira',
    'sisi',
    'sobra',
    'subo',
    'suka',
    'suko',
    'sulo',
    'sumpa',
    'sundo',
    'suri',
    'suso',
    'suwerte',
    'tae',
    'taga',
    'tago',
    'tahi',
    'taka',
    'takbo',
    'talo',
    'tama',
    'tampo',
    'tanda',
    'tanga',
    'tango',
    'tao',
    'tasa',
    'tawa',
    'taya',
    'tayo',
    'tili',
    'tingala',
    'tipo',
    'tubo',
    'tugma',
    'tukso',
    'tula',
    'tulo',
    'tupi',
    'turo',
    'tuwa',
    'tuyo',
    'ubo',
    'ulo',
    'umaga',
    'upo',
    'uso',
    'uto',
    'uwi',
    'wagi',
    'wala',
    'wasto',
    'wika',
    'yaka',
    'yari',
    'yaya',
    'yelo',
    'yosi'
];

  while (i < words.length) {
    let j = i;
    let combinedEntry = words[j];
    


// The combinedWords array now contains the processed words

    // Check if the first word is a question word and the next word starts with a lowercase letter
    if (j === 0 && /^(Ano|Sino|Sino-sino|Kani-kanino|Kanino|Kailan|Saan|Saan-saan|Bakit|Paano|Ilan|Alin|Magkano|Gaano|Ano-ano|Papaano)/.test(words[j])) {
      
       console.log('QUESTION WORD DETECTED')
        
changes = true;
questionDetected = true;
    }
    else if (j === 0 && /^[a-z]/.test(words[j]) &&/^(ano|sino|sino-sino|kani-kanino|kanino|kailan|saan|saan-saan|bakit|paano|ilan|alin|magkano|gaano|ano-ano|papaano)/.test(words[j])) {
      errorArray = [];
firstletter = [];
questionDetected = true;
      errorArray.push(words[j]);
words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
firstletter.push(words[j]); // Add to the array after changing

changes = true;

console.log(firstletter);
    }else if (j === 0 && /^[a-z]/.test(words[j])) {
      errorArray = [];
firstletter = [];
      errorArray.push(words[j]);
words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
firstletter.push(words[j]); // Add to the array after changing

changes = true;

console.log(firstletter);
    }
    
    // Check if the previous word ends with a period and the current word starts with a lowercase letter
    else if (j > 0 && words[j - 1].endsWith('.') && /^[a-z]/.test(words[j])) {
        errorArray.push(words[j]); // Add to error array before changing
        words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        
        changes = true;
        
        firstletter.push(words[j]); // Add to the array after changing
        
        console.log('changes')
    }
    
if(questionDetected){
      // If we're at the end of the array, add a "?" to the last word if it doesn't end with punctuation
    if (j === words.length - 1 && !/[.?!]$/.test(words[j])) {
      questionErrorArray = [];
      correctedLastFirstQuestion = [];

      questionErrorArray.push(words[j]);
      console.log('QUESTIONED MARK ADDED')
      changes = true;
      correctedLastFirstQuestion.push(words[j] + '?'); // 
      words[j] += '?'; // Add question mark to the last word
    }
}

 


const firstWordsUppercase = firstWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));

let found = false;

for (let j = 0; j < firstWords.length; j++) {
  // Check for lowercase first and second words
  if (i < words.length - 1 &&
    words[i] === firstWords[j] &&
    words[i + 1] === secondWords[j]) {

    words[i] = `${firstWords[j]} ${secondWords[j]}`;
    words.splice(i + 1, 1); // Remove the second word 

    found = true;
    console.log('foundhere');
    break; // Exit the inner loop to re-check the current index
    // Check for uppercase first and second words
  } else if (i < words.length - 1 &&
    words[i] === firstWordsUppercase[j] &&
    words[i + 1] === secondWords[j]) {

    words[i] = `${firstWordsUppercase[j]} ${secondWords[j]}`;
    words.splice(i + 1, 1); // Remove the second word 

    found = true;
    console.log('foundheretwo');
    break; // Exit the inner loop to re-check the current index
  }
}

const firstWord = words[j].toLowerCase();
const secondWord = words[j + 1]?.toLowerCase(); // Ensure we don't access undefined

// Detect if the first word starts with "mag", "nag", or "pa" and compare with second word
const prefixPattern = /^(mag|nag|pa)/;
const baseFirstWord = firstWord.replace(prefixPattern, ''); // Remove prefix if it exists

if (secondWord && baseFirstWord === secondWord) {
  console.log('Detected repeated words with prefix, combining');
  combinedWords.push(`${words[i]} ${words[i + 1]}`); // Combine the words with a space
  i += 2; // Move index forward to skip the second word
}else if (i < words.length - 1 && 
         /[bcdfghjklmnpqrstvxzi]$/.test(words[i]) && 
         ["rin","raw", "roon", "rito"].includes(words[i + 1])) {
  console.log('combined');
  combinedWords.push(`${words[i]} ${words[i + 1]}`);
  i += 2;
}



    // Check for salutation patterns followed by one or two words
    if (salutationPattern.test(words[j]) && j < words.length - 1) {
      let nextWord = words[j + 1];
      let nextNextWord = words[j + 2];

      // Check if the next two words form a famous person's name
      if (nextNextWord && famousPersons.includes(nextWord + ' ' + nextNextWord)) {
        
        combinedEntry += ' ' + nextWord + ' ' + nextNextWord;
        combinedWords.push(combinedEntry);
        i = j + 3;
        continue;
      }

      // Check if the next word is capitalized (one word after salutation)
      if (/^[A-Z][a-z]+$/.test(nextWord)) {
        
        combinedEntry += ' ' + nextWord;
        combinedWords.push(combinedEntry);
        i = j + 2;
        continue;
      }
    }
    
    


    // **Updated Logic**: Handle time patterns
   
let timePattern = /\b(1[0-2]|0?[1-9])[0-5][0-9]\b/; // Matches valid time patterns in hhmm format

// Assuming words is your input array
for (let i = 0; i < words.length; i++) {
    let hasAmPm = (i < words.length - 1 && (words[i + 1] === 'am' || words[i + 1] === 'pm'));
    let isTimePattern = timePattern.test(words[i]);

    if (hasAmPm && isTimePattern) {
        // If the number is less than 4 digits and ends with pm, add a leading zero
        if (words[i + 1] === 'pm' && words[i].length === 3) {
            words[i] = '0' + words[i]; // Add leading zero
        }
        // Combine the time with "am" or "pm"
        words[i] = words[i] + ' ' + words[i + 1];

        // Remove the next element ("am" or "pm") to avoid duplication
        words.splice(i + 1, 1);
    }
}



 

    // **New Logic**: Detect year ranges like "1992 - 2007"
    if (j < words.length - 2 && yearPattern.test(words[j]) && words[j + 1] === '-' && yearPattern.test(words[j + 2])) {
      combinedEntry = words[j] + ' ' + words[j + 1] + ' ' + words[j + 2];
      combinedWords.push(combinedEntry);
      i = j + 3; // Move past the combined year range
      continue;
    }

    // **Updated Logic**: Handle Bible verse patterns or number patterns
    let isNumberPattern = /^\d+([-–]?\d+)?$/.test(words[j]);
    let isWord = /^[A-Za-z]+$/.test(words[j]);
    let isNextWordNumber = (j < words.length - 1 && /^\d+([-–]?\d+)?$/.test(words[j + 1]));

    // Check for Bible book names
    if (bibleBooks.includes(words[j].toLowerCase()) && isNextWordNumber) {
      combinedEntry = words[j] + ' ' + words[j + 1];
      combinedWords.push(combinedEntry);
      i = j + 2;
      continue;
    } else if (isNumberPattern && j < words.length - 1 && (words[j + 1].includes('-') || /^\d+([-–]?\d+)?$/.test(words[j + 1]))) {
      combinedEntry += ' ' + words[j + 1];
      combinedWords.push(combinedEntry);
      i = j + 2;
      continue;
    }
    
    if (words[i + 1] && 
    (words[i + 1].toLowerCase() === "pag" || words[i + 1].toLowerCase() === "pa") && 
    /^[aeiouAEIOU]/.test(words[i + 2])) {
  // Combine the words with "pa" or "pag" prefix followed by a word starting with a vowel
  combinedWords.push(words[i + 1] + " " + words[i + 2]);
  i += 3; // Skip the next two words (the "pa/pag" and the word starting with a vowel)
}

        
        

    // New Logic: Combine "Na ang", "Na na", but not "Na ng"
    if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'ang') {
      combinedWords.push('na ang');
      i += 2;
    } else if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'na') {
      combinedWords.push('na na');
      i += 2;
    }
    // Exception: Keep "na ng" as is
    else if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'ng') {
      combinedWords.push('na ng');
      i += 2;
    }
   
    // Combine specific word patterns like "lakad at pawis"
    else if (i < words.length - 2) {
      const phrase = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
      const specificWordPattern = /\b(lakad|pamatay|kaliwa|humigit|tahanan|dalaga|bahay)\s(ng|sa|at|na|ay)\s(takbo|insekto|kanan|kumulang|maligaya|bukid|aliwan)\b/;

      if (specificWordPattern.test(phrase)) {
        combinedWords.push(phrase); // Combine the three words that match the pattern
        i += 3; // Skip the next two words
      } else {
        combinedWords.push(words[i]);
        i++;
      }
    }
    // Combine repeated words into one
    else if (i < words.length - 1 && words[i].toLowerCase() ===  words[i + 1].toLowerCase()) {
      console.log('combined');
  combinedWords.push(`${words[i]} ${words[i + 1]}`); 
  i += 2;
}
else if (i < words.length - 1 && 
         /[bcdfghjklmnpqrstvxzi]$/.test(words[i]) && 
         ["raw", "roon", "rito"].includes(words[i + 1])) {
  console.log('combined');
  combinedWords.push(`${words[i]} ${words[i + 1]}`);
  i += 2;
}

else {
      combinedWords.push(words[i]);
      i++;
    }
  }


 


  // Additional logic to combine specific phrases like "tulad ng"
  
const combinedPhrases = [];

// Check for specific patterns and handle them
for (let k = 0; k < combinedWords.length; k++) {
  let currentWord = combinedWords[k];
  const nextWord = combinedWords[k + 1];
  const nextNextWord = combinedWords[k + 2];
  
const regex = /\b(Pag|pag|Pa|pa|Tag|tag|Mag|mag|Nag|nag)\b/;

// Add the word directly to combinedPhrases
if (/^[a-zA-Z]+$/.test(currentWord)) {
  // Your existing logic can go here
}

console.log(currentWord.toLowerCase());
  
  // Check for "tulad ng" pattern
  if (currentWord === "tulad" && nextWord === "ng") {
    combinedPhrases.push(`${currentWord} ${nextWord}`);
    k++; // Skip "ng"
  }
  
  // Check for repeated words with "nang" in between
  else if (k < combinedWords.length - 2 &&
         currentWord.toLowerCase() !== nextNextWord.toLowerCase() &&
         nextWord === "nang") {
    console.log('confirmed nang between non-repeated words');
    combinedPhrases.push(`${currentWord} nang ${nextNextWord}`);
    k += 2; // Skip "nang" and the next word
  }

 /* else if (regex.test(currentWord) && /^[AEIOUaeiou]/.test(nextWord)) {
  console.log('Matched prefix with vowel-starting word');
  // Combine the two words with a space
  combinedPhrases.push(`${currentWord} ${nextWord}`);
  k++; // Skip the next word since it's already combined
} */
  
  // Check for repeated words with "ng" in between
  else if (k < combinedWords.length - 2 &&
           currentWord.toLowerCase() === nextNextWord.toLowerCase() &&
           nextWord === "ng") {
    console.log('confirmed one');
    combinedPhrases.push(`${currentWord} ng ${nextNextWord}`);
    k += 2; // Skip "ng" and the repeated word
  } 

  // Check for repeated words with "t" at the end and a space in between
  else if (k < combinedWords.length - 1 &&
         currentWord.endsWith("t") &&
!/^(mag|nag|pa)/.test(currentWord) &&
         currentWord.slice(0, -1).toLowerCase() === nextWord.toLowerCase()) { // Avoid words starting with "mag", "nag", or "pa"
    console.log('confirmed repeated word with "t" and space');
    combinedPhrases.push(`${currentWord} ${nextWord}`);
    k++; // Skip the repeated word
}

  // Check for repeated words with "t" at the end and a hyphen in between
  else if (k < combinedWords.length - 1 &&
           currentWord.endsWith("t") &&
!/^(mag|nag|pa)/.test(currentWord) &&
           nextWord.startsWith(currentWord.slice(0, -1).toLowerCase() + "-")) {
    console.log('confirmed repeated word with "t" and hyphen');
    combinedPhrases.push(`${currentWord}-${nextWord.split('-')[1]}`);
    k++; // Skip the repeated word after hyphen
  } 
  


  // Default case: just add the current word
  else {
    combinedPhrases.push(currentWord);
  }
}


console.log(combinedPhrases);


  const finalWords = [];
for (let l = 0; l < combinedPhrases.length; l++) {
  // Check if both current and next element exist
  if (l < combinedPhrases.length - 1 && 
      combinedPhrases[l] !== undefined && combinedPhrases[l + 1] !== undefined) {
      
    const currentWord = combinedPhrases[l];
    const nextWord = combinedPhrases[l + 1];

    // Check for exact case-insensitive match
    if (currentWord.toLowerCase() === nextWord.toLowerCase()) {
      finalWords.push(`${currentWord} ${nextWord}`);
      l++; // Skip the next word as it's part of the current combination

    // Check if they differ only by last letter (current ends with 'u' and next ends with 'o')
    } else if (
      currentWord.length === nextWord.length && // Ensure they are the same length
      currentWord.slice(0, -1).toLowerCase() === nextWord.slice(0, -1).toLowerCase() && // Check all but the last character
      currentWord.endsWith('u') && // Check if current word ends with 'u'
      nextWord.endsWith('o') // Check if next word ends with 'o'
    ) {
      finalWords.push(`${currentWord} ${nextWord}`); // Combine with a space
      l++; // Skip the next word as it's part of the current combination

    // Check if the current word ends with 'u' and is followed by a hyphen and next word ends with 'o'
    }
    else {
      // Push the current word if there's no match or it's the last word
      finalWords.push(currentWord);
    }
  } else {
    // Push the last word if there's no next word
    finalWords.push(combinedPhrases[l]);
  }
}



return finalWords;

}


// This creates the combined array from the input
 originalArrayTextOutside = combineWords(textarea.value); // Assuming textarea is an HTML element with some text

      let newTextValue = originalArrayTextOutside.join(' ');
      console.log('Parenthisis test: ', originalArrayTextOutside);
      
    
      
       suggestionsFromAPI = await getSuggestionsFromAPI(newTextValue);
       
      console.log('Suggestions from API:', suggestionsFromAPI);

RefreshButton.style.visibility = 'visible';
RefreshButton.style.display = 'block';

      
           // Clear old highlights and cloned containers
      checkContainer.innerHTML = '';

      
    if (changes) {

checkContainer.innerHTML = '';

const regexQuestionStartAndEnd = new RegExp(`\\b${correctedLastFirstQuestion.join('|')}\\b`, 'g'); // Regex to match any word from firstLetterArray
      
      const regexS = new RegExp(`\\b${firstletter.join('|')}\\b`, 'g'); // Regex to match any word from firstLetterArray
      const regexErrors = new RegExp(`\\b${errorArray.join('|')}\\b`, 'g'); // Regex to match any word from errorArray

      const clonedNewContainerTwo = document.createElement('div');
      clonedNewContainerTwo.classList.add('clonedContainer');

      const errorUppercases = [...new Set(errorArray)];
      const uppercaseSuggestions = [...new Set(firstletter)];
      const errorEndingQuestions = [...new Set(questionErrorArray)];
      const endingSuggestionQuestions = [...new Set(correctedLastFirstQuestion)];
      
      const suggestionsHTMLTWO = uppercaseSuggestions.map(token => `<span class="suggestion">${token}</span>`).join(' ');


      // Display each word in its own container 
      // Clear the previous contents in checkContainer
      

      // Ensure both arrays have the same length, or handle accordingly
      const maxLength = Math.max(errorUppercases.length, uppercaseSuggestions.length);
      
const maxLengthTwo = Math.max( errorEndingQuestions.length, endingSuggestionQuestions.length );
      // Iterate over both arrays together
      for (let i = 0; i < maxLength; i++) {
        // Get the current error and suggestion (handle undefined if arrays are not of equal length)
        
        const error = errorUppercases[i] || ''; // Empty string if there's no error for this index
        highlightsErrors = error;


        console.log('TOKEN PART: ', error)

        const suggestion = `<span class="suggestion" ">${uppercaseSuggestions[i]}</span>`;
        

        // Create a container for the current error and suggestion
        const container = document.createElement('div');
        container.classList.add('clonedContainer'); // Add the necessary class for styling

        // Add the error and suggestion to the container, with their own descriptions
        container.innerHTML = `
    <div class="errorText">
      ${error ? error : 'No Error'} <!-- Display 'No Error' if empty -->
    </div>
    <div class="suggestions">
      ${suggestion} <!-- Display 'No Suggestion' if empty -->
    </div>
    <div class="ruleDescription">
      ${'Sinusuri na nagsisimula ang pangungusap sa malaking letra'}
    </div>
  `;
  
         

        container.style.width = '80%';
        
        checkContainer.style.display = 'block';
        // Append the container to checkContainer
        checkContainer.appendChild(container);
        
      }
      
      for (let i = 0; i < maxLengthTwo; i++) {
        
        // Get the current error and suggestion (handle undefined if arrays are not of equal length)
        const errorQuestion = errorEndingQuestions[i] || '';
        

        console.log('TOKEN PART: ', errorQuestion)

        
        const suggestionsQuestion = `<span class="suggestion" ">${endingSuggestionQuestions[i]}</span>`;
  
          const containerTwo = document.createElement('div');
        containerTwo.classList.add('clonedContainer'); // Add the necessary class for styling
        
  containerTwo.innerHTML = `
    <div class="errorText">
      ${errorQuestion ? errorQuestion : 'No Error'} <!-- Display 'No Error' if empty -->
    </div>
    <div class="suggestions">
      ${suggestionsQuestion} <!-- Display 'No Suggestion' if empty -->
    </div>
    <div class="ruleDescription">
      ${'Ginagamit ang tandang pananong "?" para sa mga pangungusap o pahayag na nagtatanong na karaniwang nagsisimula sa mga salitang pananong na saan, kailan, sino, ano, bakit, paano'}
    </div>
  `;

        
        containerTwo.style.width = '80%';
        checkContainer.style.display = 'block';
  
        checkContainer.appendChild(containerTwo);
        console.log('appeared BOX')
      
      }

    }
  

  
  if (window.innerWidth <= 768) {
    if (changes) {
      const originalTextCopied = textOriginalHides.value;
  
const fullText = textarea.value;

  correctedHighlightedText = emptyText;
  correctedHighlightedTwoText = emptyText;

  let highlightedText = seeOriginal ? originalText : fullText; // Initialize with the full or original text


correctedHighlightedTwoTextNotify = newTextValue;
textOriginalHides.value = newTextValue;
correctedtextmobile.value= newTextValue;
// Create a regex to match the capitalized first word for highlighting
const regex = new RegExp(`\\b${firstletter}\\b`, 'g'); // Word boundary regex to match the exact word
const regextwos = new RegExp(`\\b${errorArray}\\b`, 'g');

// Debug: Check values before replacement
console.log('correctedHighlightedTwoText before replace:', correctedHighlightedTwoText);
console.log('Corrected uppercase:', regex);
console.log('Error Uppercase:', regextwos);


// Replace the matching text with highlighted text
correctedHighlightedTwoTextNotify = correctedHighlightedTwoTextNotify.replace(regex, match => {
  return `<span class="highlightCorrected">${match}</span>`;
});

highlightedText = highlightedText.replace(regextwos, match => {
  return `<span class="highlight">${match}</span>`;
});

// Update the overlay with the highlighted text
overlaycorrectedTwo.innerHTML = correctedHighlightedTwoTextNotify.replace(/\n/g, '<br>');

overlay_two.innerHTML = highlightedText.replace(/\n/g, '<br>');

correctedtextmobile.style.display = 'block';
overlaycorrectedTwo.style.display = 'block';
overlay.style.display = 'none';
overlay_two.style.display = 'none';
textarea.style.display = 'none';

overlaycorrectedTwo.style.fontSize = '14px';

textsee.style.display = 'block';

if (getComputedStyle(overlay).paddingTop === '8px') {
  overlay.style.paddingTop = '28px';
}
if (getComputedStyle(overlaycorrected).paddingTop === '8px') {
  overlaycorrected.style.paddingTop = '28px';
}
if (getComputedStyle(overlaycorrectedTwo).paddingTop === '8px') {
  overlaycorrectedTwo.style.paddingTop = '28px';
}
textsee.innerHTML = 'Mga naitama.';


    }
  }else{
    
      if (changes) {
        
        const fullText = textarea.value;

  correctedHighlightedText = emptyText;
  correctedHighlightedTwoText = emptyText;

  let highlightedText = seeOriginal ? originalText : fullText; // Initialize with the full or original text


    textOriginal.value = newTextValue;
    
   displaywebsite.style.display = 'flex';
correctedbox.style.marginLeft = '10px';
displaywebsite.style.paddingBottom = '10px';

textseeTwo.style.display = 'block';

    
    overlay_two.fontSize = '20px';
textarea.style.display = 'none';
textOriginalText.style.display = 'block';

    textarea.style.display = 'none';
    textoriginal2.style.display = 'block';
    
    const regextwos = new RegExp(`\\b${errorArray}\\b`, 'g');

    const regex = new RegExp(`\\b${firstletter}\\b`, 'g');
    
   
    correctedHighlightedText = newTextValue;

    correctedHighlightedText = correctedHighlightedText.replace(regex, match => {
      return `<span class="highlightCorrected">${match}</span>`;
    });
    textOriginal.style.display = 'block';

    highlightedText = highlightedText.replace(regextwos, match => {
  return `<span class="highlight">${match}</span>`;
});


overlaycorrected.innerHTML = correctedHighlightedText.replace(/\n/g, '<br>');

overlay_two.innerHTML = highlightedText.replace(/\n/g, '<br>');

    overlaycorrected.style.fontSize = '20px';
    
    overlay_two.style.fontSize = '20px';
    textsee.style.display = 'none';

    correctedbox.style.display = 'block';
    overlay.style.display = 'block';
    overlay_two.style.display = 'block';

    if (getComputedStyle(overlaycorrected).paddingTop === '11px') {
      overlaycorrected.style.paddingTop = '30px';
    }
    if (getComputedStyle(overlay).paddingTop === '11px') {
      overlay.style.paddingTop = '30px';
    }

  }
  
  }



      // Iterate over each correction suggestion
      suggestionsFromAPI.forEach(correction => {
       
        const errorsTextarea = correction.errorText;
        const suggestionTextRandom = correction.suggestions[0];
        const ruleDesc = correction.ruleDescription;
        const suggestionText = [...new Set(correction.suggestions)];

       RefreshButton.style.display = 'block';
       
        let existingEntryOnErrorTexts = suggestionMap.find(entry => entry.errorTextAreas && entry.errorTextAreas.includes(errorsTextarea));

if (existingEntryOnErrorTexts) {
  existingEntryOnErrorTexts.errorTextAreas.push(errorsTextarea);
}else{
suggestionMap.push({
  errorTextAreas: [errorsTextarea],
});
}
  
        console.log('Error text:', errorsTextarea);
        console.log('Rule description:', ruleDesc);
        console.log('Suggestions:', suggestionText);
        
const escapedErrorText = errorsTextarea.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

        const regex = new RegExp(escapedErrorText, 'gi'); // Include flags if needed
        
        


if (window.innerWidth <= 768) {
  scrollToTarget();
  const originalTextCopied = textOriginalHides.value;
  


if(changes){
  
}else{
  correctedtextmobile.value = originalTextCopied;
  
  overlay_two.style.fontSize = '14px';
textsee.style.display = 'block';

if (getComputedStyle(overlay).paddingTop === '8px') {
  overlay.style.paddingTop = '28px';
}
if (getComputedStyle(overlaycorrected).paddingTop === '8px') {
  overlaycorrected.style.paddingTop = '28px';
}
if (getComputedStyle(overlaycorrectedTwo).paddingTop === '8px') {
  overlaycorrectedTwo.style.paddingTop = '28px';
}

textsee.innerHTML = 'Orihinal na mga teksto.';
}

console.log('Replaced', )


}else {
  
  if(changes){

textarea.style.display = 'none';
textOriginalText.style.display = 'block';
textOriginal.style.display = 'block';

  }else{
    const originalTextCopied = textOriginalText.value;

textOriginal.value = originalTextCopied;


textarea.style.display = 'none';
textOriginalText.style.display = 'block';
textOriginal.style.display = 'none';

displaywebsite.style.display = 'flex';
correctedbox.style.marginLeft = '10px';
displaywebsite.style.paddingBottom = '10px';

textseeTwo.style.display = 'block';

  }
  
  
}


updateHighlights();
        // Create a new container for the correction
        const clonedNewContainer = document.createElement('div');
        clonedNewContainer.classList.add('clonedContainer');



        checkContainer.style.display = 'block';

        const suggestionsHTML = suggestionText.map(token => `<span class="suggestion">${token}</span>`).join(' ');

        clonedNewContainer.innerHTML = `
          <div class="errorText">${errorsTextarea.replace(/\n/g, '<br>')}</div>
          <div class="suggestions">${suggestionsHTML}</div>
          <div class="ruleDescription">${ruleDesc}</div>
        `;
        

     
        clonedNewContainer.style.width = '80%';

        // Append the container to the checkContainer
        checkContainer.appendChild(clonedNewContainer);
        

const bestSuggestion = getBestSuggestionFromGemini(ruleDesc, errorsTextarea, suggestionText);
if(!bestSuggestion){
        // Automatically replace the error text with the best suggestion
        correctedtextmobile.value = textarea.value.replace(errorsTextarea, bestSuggestion);
}

        // Add click event listeners for each suggestion
        // Create the suggestionMap array to store each update

// Loop through each suggestion element and add an event listener
clonedNewContainer.querySelectorAll('.suggestion').forEach(suggestionElem => {
  suggestionElem.addEventListener('click', function () {
    const selectedSuggestion = this.textContent;
    const regex = new RegExp('\\b' + errorsTextarea + '\\b(\\s*)', 'gi'); 
    
  
const regexTwo = new RegExp(`\\b${errorsTextarea}\\b`, 'i'); // Use word boundaries to match whole words
  let existingEntry = suggestionMap.find(entry => entry.selectedSuggestions && entry.selectedSuggestions.includes(selectedSuggestion));

if (existingEntry) {
  // If the entry exists, push the new suggestion and error into their respective arrays
  existingEntry.selectedSuggestions.push(selectedSuggestion);
  
  console.log('Nope');
  
} else {
  // If the entry doesn't exist, create a new entry with arrays for both
  suggestionMap.push({
    selectedSuggestions: [selectedSuggestion]
  });
  
  console.log('Yep');
}
   

    if (window.innerWidth <= 768) {
            scrollToTargetBackUp();
            
const originalText = textOriginalHides.value.trim();
let correctedText = correctedtextmobile.value.trim();

function combineWordsMobile(text) {
  const words = text.split(' ');
  const combinedWords = [];
  let i = 0;

  // Existing patterns for names and salutations
  const namePattern = /[bcdfghjklmnpqrstvxzi]$/i;
  
  const salutationPattern = /^(Dr.|Bb.|G\..|Gng.|Mr.|Mrs.|Ms.|Engr.|Atty.)\.$/;
const newsNamePattern = /^(Manila Times|Philippine Daily Inquirer|The Star|Rappler|ABS-CBN News|GMA News|Philippine Star|SunStar|BusinessMirror|Daily Tribune|Inquirer\.net|Philippine News Agency|The Manila Bulletin|Tempo|News5|Bulatlat|Mindanao Times|Philippine Information Agency|Hataw|Pinoy Times)$/;

const moreNamesPattern = /^(Computer Programming|Software Development|Web Development|Data Science|Artificial Intelligence|Machine Learning|Programming Languages|Software Engineering|Database Management|Network Security|Information Systems|Cybersecurity|Cloud Computing|Mobile App Development|Game Development|DevOps|Systems Analysis|IT Project Management|User Experience Design|Big Data Analytics|Embedded Systems)$/;;

const salutationWords = ["Dr", "Bb", "G.", "Gng", "Mr", "Mrs", "Ms", "Engr", "Atty"];

const newsName = [
  "Manila Times",
  "Philippine Daily Inquirer",
  "The Star",
  "Rappler",
  "ABS-CBN News",
  "GMA News",
  "Philippine Star",
  "SunStar",
  "BusinessMirror",
  "Daily Tribune",
  "Inquirer.net",
  "Philippine News Agency",
  "The Manila Bulletin",
  "Tempo",
  "News5",
  "Bulatlat",
  "Mindanao Times",
  "Philippine Information Agency",
  "Hataw",
  "Pinoy Times"
];
const surpriseWords = [
    "Uy",
    "Aray",
    "Wow",
    "Hala",
    "Ay",
    "uyy",
    "Uyy",
    "HALA",
    "ARAYY",
    "ARAY",
    "WOW",
    "AY",
    "AYY"
];

const moreNames = [
  "Computer Programming",
  "Software Development",
  "Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "Programming Languages",
  "Software Engineering",
  "Database Management",
  "Network Security",
  "Information Systems",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile App Development",
  "Game Development",
  "DevOps",
  "Systems Analysis",
  "IT Project Management",
  "User Experience Design",
  "Big Data Analytics",
  "Embedded Systems"
];


  const famousPersons = [
  // Previously added names
  "Jose Rizal", "Andres Bonifacio", "Manuel Quezon", "Emilio Aguinaldo", "Lapu Lapu",
  "Antonio Luna", "Melchora Aquino", "Gabriela Silang", "Apolinario Mabini", "Juan Luna",
  "Pedro Paterno", "Felipe Agoncillo", "Julian Felipe", "Carlos Romulo", "Diosdado Macapagal",
  "Ferdinand Marcos", "Corazon Aquino", "Ramon Magsaysay", "Elpidio Quirino", "Sergio Osmeña",
  "Jose Laurel", "Manuel Roxas", "Benigno Aquino", "Leandro Locsin", "Juan Nakpil",
  "Francisco Balagtas", "Fernando Amorsolo", "Lucio San Pedro", "Francisco Santiago",
  "Lorenzo Ruiz", "Claro Recto", "Teodoro Agoncillo", "Ninoy Aquino", "Manny Pacquiao",
  "Risa Hontiveros", "Grace Poe", "Bam Aquino", "Lito Atienza", "Isko Moreno",
  "Sara Duterte", "Ping Lacson", "Leni Robredo", "Chiz Escudero", "Erap Estrada",
  "Mar Roxas", "Jejomar Binay", "Gloria Macapagal", "Alan Cayetano", "Vicente Sotto",
  "Imee Marcos", "Ramon Mitra", "Koko Pimentel", "Cesar Virata", "Jojo Binay",
  "Nene Pimentel", "Sonny Angara", "Ralph Recto", "Jun Evasco", "Tony Tan",
  "Alfredo Lim", "Tommy Osmeña", "Cory Aquino", "Pepe Diokno", "Lito Lapid",
  "Roilo Golez", "Jun Abaya", "Jess Dureza", "Nikki Coseteng", "Rodolfo Biazon",
  "Joey Lina", "Jinggoy Estrada", "Kris Aquino", "Fidel Ramos", "Marcial Lichauco",
  "Raul Roco", "Butch Abad", "Manuel Villar", "Rene Saguisag", "Jesse Robredo",
  "Miro Quimbo", "Erwin Tulfo", "Sonny Belmonte", "Gary Alejano", "Mark Villar",
  "Dick Gordon", "Ping Lacson", "Lito Banayo", "Mike Defensor", "Vicente Sotto",
  "Enrile Reyes", "Ramon Ang", "Luis Singson", "Erin Tañada", "Frank Drilon",
  "Diosdado Cabangon", "Joey Salceda", "Rodante Marcoleta", "Miriam Defensor",
  "Aimee Marcos", "Paolo Duterte", "Harry Roque", "Nancy Binay", "Bong Go",
  "Grace Padaca", "Rene Cayetano", "Feliciano Belmonte", "Orly Mercado",
  "Dante Fascinillo", "Gina Lopez", "Benhur Abalos", "Loren Legarda",
  "Teddy Baguilat", "Alan Peter", "Francis Tolentino", "Mark Cojuangco",
  "Manny Villar",

  // Additional two-word political dynasty names
  "Imee Marcos", "Imelda Marcos", "Ferdinand Marcos", "Bongbong Marcos",
  "Gloria Arroyo", "Juan Ponce", "Bam Aquino", "Noynoy Aquino", "Bong Revilla",
  "Lani Mercado", "JV Ejercito", "Jinggoy Estrada", "Joseph Estrada",
  "Sarah Duterte", "Rodrigo Duterte", "Gwen Garcia", "Pablo Garcia", "Jack Enrile",
  "Juan Enrile", "Cynthia Villar", "Mark Villar", "Nancy Binay", "Abby Binay",
  "Toby Tiangco", "Ruffy Biazon", "Teofisto Guingona", "Migz Zubiri",
  "Imee Marcos", "Ferdinand Marcos", "Gibo Teodoro", "Neptali Gonzales", "Lino Cayetano",
  "Pia Cayetano", "Mar Roxas", "Jinggoy Estrada", "Toby Tiangco", "Chavit Singson",
  "Danilo Suarez", "Prospero Nograles", "Pantaleon Alvarez", "Martin Romualdez",
  "Imelda Marcos", "Jolo Revilla", "Ramon Revilla", "Rico Puno", "Gilbert Teodoro",
  "Alfred Romualdez", "Bebot Alvarez", "Butz Aquino", "Pepeng Cojuangco",
  "Bongbong Marcos", "Jose Ma. Zubiri", "Teofisto Guingona", "Carlos Padilla",
  "Ronnie Zamora", "Del De Guzman", "Chiz Escudero", "Peping Cojuangco",
  "Gilbert Remulla", "Emmanuel Pacquiao", "Isidro Ungab", "Daisy Avance"
];

  // New patterns for time and Bible verses
  const timePattern = /^\d{1,4}$/; // Detects numbers like "362", "1202" for time format
  const yearPattern = /^\d{4}$/; // Detects 4-digit year numbers like "1992"

  // List of all Bible book names (supporting any case: uppercase or lowercase)
  const bibleBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
    "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke",
    "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
    "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
    "Jude", "Revelation"
  ].map(book => book.toLowerCase()); // Convert all book names to lowercase for case-insensitive comparison

  const firstWords = [
    'abalang',
    'abang',
    'abong',
    'abusadong',
    'abusong',
    'akong',
    'alagang',
    'among',
    'asang',
    'asawang',
    'awang',
    'babaeng',
    'babang',
    'bagang',
    'bagong',
    'bagyong',
    'bahang',
    'baklang',
    'banyong',
    'baryang',
    'basang',
    'batang',
    'batong',
    'bawing',
    'bayaning',
    'bayong',
    'berdeng',
    'besong',
    'bibong',
    'bidang',
    'bikining',
    'biling',
    'binging',
    'biyaheng',
    'bokang',
    'bolang',
    'botong',
    'bugsong',
    'bukang',
    'bukong',
    'bulang',
    'bungong',
    'buryong',
    'dalang',
    'daling',
    'damang',
    'dating',
    'diyosang',
    'duming',
    'dusang',
    'gabing',
    'galang',
    'ganang',
    'gandang',
    'ganoong',
    'gawang',
    'gintong',
    'guhong',
    'gulong',
    'gustong',
    'guwapong',
    'halinang',
    'halong',
    'hangang',
    'hangong',
    'hapong',
    'haring',
    'hasang',
    'hating',
    'hiblang',
    'hilang',
    'hilong',
    'hinang',
    'hinding',
    'hingang',
    'hipong',
    'hiwagang',
    'hiyang',
    'hubong',
    'hulang',
    'hupang',
    'hustong',
    'ibang',
    'isang',
    'jowang',
    'kalabasang',
    'kaliwang',
    'kamukhang',
    'kaniyang',
    'kantong',
    'kanyang',
    'kapeng',
    'karneng',
    'kasang',
    'kastang',
    'kating',
    'kawawang',
    'kayang',
    'kayumangging',
    'kesong',
    'kilalang',
    'kitang',
    'konting',
    'kuhang',
    'kulong',
    'labang',
    'lagang',
    'lagong',
    'lahing',
    'laking',
    'lalaking',
    'lalong',
    'langong',
    'larong',
    'latang',
    'lawang',
    'layong',
    'ligong',
    'likong',
    'liksing',
    'lilang',
    'lingong',
    'litong',
    'lobong',
    'lokong',
    'luging',
    'luksong',
    'lumang',
    'lumpong',
    'lupang',
    'lutong',
    'maamong',
    'mababang',
    'mabangong',
    'mabisang',
    'mabulang',
    'mabuting',
    'machong',
    'madaling',
    'magaang',
    'magandang',
    'magang',
    'magarang',
    'mahalagang',
    'mahinahong',
    'mahinang',
    'mahiwagang',
    'maiging',
    'maikling',
    'makabagong',
    'malabong',
    'malaking',
    'malalang',
    'malansang',
    'malasang',
    'malayang',
    'malayong',
    'maligayang',
    'maliksing',
    'maling',
    'manang',
    'mapayapang',
    'mapulang',
    'maputing',
    'maruming',
    'masaganang',
    'masaheng',
    'masamang',
    'masayang',
    'masidhing',
    'masiglang',
    'matabang',
    'matalinong',
    'matandang',
    'matipunong',
    'mayang',
    'mayuming',
    'milyong',
    'misang',
    'mukhang',
    'nanang',
    'ngilong',
    'pabangong',
    'pahingang',
    'palong',
    'pamanang',
    'panalong',
    'panang',
    'pasang',
    'paskong',
    'patang',
    'payapang',
    'pekeng',
    'pigang',
    'piling',
    'pilyang',
    'pilyong',
    'pinong',
    'pintang',
    'pisang',
    'posteng',
    'pulang',
    'pulong',
    'punong',
    'puring',
    'purong',
    'puting',
    'retirong',
    'reynang',
    'rondang',
    'sakang',
    'sakong',
    'saksing',
    'saktong',
    'salitang',
    'salong',
    'samang',
    'santong',
    'sapong',
    'sarang',
    'sariwang',
    'sawang',
    'sigang',
    'siglang',
    'sineng',
    'sintang',
    'sirang',
    'sising',
    'sobrang',
    'subong',
    'sukang',
    'sukong',
    'sulong',
    'sumpang',
    'sundong',
    'suring',
    'susong',
    'suwerteng',
    'taeng',
    'tagang',
    'tagong',
    'tahing',
    'takang',
    'takbong',
    'talong',
    'tamang',
    'tampong',
    'tandang',
    'tangang',
    'tangong',
    'taong',
    'tasang',
    'tawang',
    'tayang',
    'tayong',
    'tiling',
    'tingalang',
    'tipong',
    'tubong',
    'tugmang',
    'tuksong',
    'tulang',
    'tulong',
    'tuping',
    'turong',
    'tuwang',
    'tuyong',
    'ubong',
    'ulong',
    'umagang',
    'upong',
    'usong',
    'utong',
    'uwing',
    'waging',
    'walang',
    'wastong',
    'wikang',
    'yakang',
    'yaring',
    'yayang',
    'yelong',
    'yosing'
];


// Second words array (base words)
const secondWords = [
    'abala',
    'aba',
    'abo',
    'abusado',
    'abuso',
    'ako',
    'alaga',
    'amo',
    'asa',
    'asawa',
    'awa',
    'babae',
    'baba',
    'baga',
    'bago',
    'bagyo',
    'baha',
    'bakla',
    'banyo',
    'barya',
    'basa',
    'bata',
    'bato',
    'bawi',
    'bayani',
    'bayo',
    'berde',
    'beso',
    'bibo',
    'bida',
    'bikini',
    'bili',
    'bingi',
    'biyahe',
    'boka',
    'bola',
    'boto',
    'bugso',
    'buka',
    'buko',
    'bula',
    'bungo',
    'buryo',
    'dala',
    'dali',
    'dama',
    'dati',
    'diyosa',
    'dumi',
    'dusa',
    'gabi',
    'gala',
    'gana',
    'ganda',
    'ganoon',
    'gawa',
    'ginto',
    'guho',
    'gulo',
    'gusto',
    'guwapo',
    'halina',
    'halo',
    'hanga',
    'hango',
    'hapo',
    'hari',
    'hasa',
    'hati',
    'hibla',
    'hila',
    'hilo',
    'hina',
    'hindi',
    'hinga',
    'hipo',
    'hiwaga',
    'hiya',
    'hubo',
    'hula',
    'hupa',
    'husto',
    'iba',
    'isa',
    'jowa',
    'kalabasa',
    'kaliwa',
    'kamukha',
    'kaniya',
    'kanto',
    'kanya',
    'kape',
    'karne',
    'kasa',
    'kasta',
    'kati',
    'kawawa',
    'kaya',
    'kayumanggi',
    'keso',
    'kilala',
    'kita',
    'konti',
    'kuha',
    'kulo',
    'laba',
    'laga',
    'lago',
    'lahi',
    'laki',
    'lalaki',
    'lalo',
    'lango',
    'laro',
    'lata',
    'lawa',
    'layo',
    'ligo',
    'liko',
    'liksi',
    'lila',
    'lingo',
    'lito',
    'lobo',
    'loko',
    'lugi',
    'lukso',
    'luma',
    'lumpo',
    'lupa',
    'luto',
    'maamo',
    'mababa',
    'mabango',
    'mabisa',
    'mabula',
    'mabuti',
    'macho',
    'madali',
    'magaan',
    'maganda',
    'maga',
    'magara',
    'mahalaga',
    'mahinahon',
    'mahina',
    'mahiwaga',
    'maigi',
    'maikli',
    'makabago',
    'malabo',
    'malaki',
    'malala',
    'malansa',
    'malasa',
    'malaya',
    'malayo',
    'maligaya',
    'maliksi',
    'mali',
    'mana',
    'mapayapa',
    'mapula',
    'maputi',
    'marumi',
    'masagana',
    'masahe',
    'masama',
    'masaya',
    'masidhi',
    'masigla',
    'mataba',
    'matalino',
    'matanda',
    'matipuno',
    'maya',
    'mayumi',
    'milyon',
    'misa',
    'mukha',
    'nana',
    'ngilo',
    'pabango',
    'pahinga',
    'palo',
    'pamana',
    'panalo',
    'pana',
    'pasa',
    'pasko',
    'pata',
    'payapa',
    'peke',
    'piga',
    'pili',
    'pilya',
    'pilyo',
    'pino',
    'pinta',
    'pisa',
    'poste',
    'pula',
    'pulo',
    'puno',
    'puri',
    'puro',
    'puti',
    'retiro',
    'reyna',
    'ronda',
    'saka',
    'sako',
    'saksi',
    'sakto',
    'salita',
    'salo',
    'sama',
    'santo',
    'sapo',
    'sara',
    'sariwa',
    'sawa',
    'siga',
    'sigla',
    'sine',
    'sinta',
    'sira',
    'sisi',
    'sobra',
    'subo',
    'suka',
    'suko',
    'sulo',
    'sumpa',
    'sundo',
    'suri',
    'suso',
    'suwerte',
    'tae',
    'taga',
    'tago',
    'tahi',
    'taka',
    'takbo',
    'talo',
    'tama',
    'tampo',
    'tanda',
    'tanga',
    'tango',
    'tao',
    'tasa',
    'tawa',
    'taya',
    'tayo',
    'tili',
    'tingala',
    'tipo',
    'tubo',
    'tugma',
    'tukso',
    'tula',
    'tulo',
    'tupi',
    'turo',
    'tuwa',
    'tuyo',
    'ubo',
    'ulo',
    'umaga',
    'upo',
    'uso',
    'uto',
    'uwi',
    'wagi',
    'wala',
    'wasto',
    'wika',
    'yaka',
    'yari',
    'yaya',
    'yelo',
    'yosi'
];

  while (i < words.length) {
    let j = i;
    let combinedEntry = words[j];
    
    

if (j === 0 && /^[a-z]/.test(words[j])) {
  
 
  words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
  
}

// Check if the previous word ends with a period and the current word starts with a lowercase letter
if (j > 0 && words[j - 1].endsWith('.') && /^[a-z]/.test(words[j])) {
  
  words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
  firstletter.push(words[j]); // Add to the array after changing
}

const firstWordsUppercase = firstWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));

let found = false;

for (let j = 0; j < firstWords.length; j++) {
  // Check for lowercase first and second words
  if (i < words.length - 1 &&
    words[i] === firstWords[j] &&
    words[i + 1] === secondWords[j]) {

    words[i] = `${firstWords[j]} ${secondWords[j]}`;
    words.splice(i + 1, 1); // Remove the second word 

    found = true;
    console.log('foundhere');
    break; // Exit the inner loop to re-check the current index
    // Check for uppercase first and second words
  } else if (i < words.length - 1 &&
    words[i] === firstWordsUppercase[j] &&
    words[i + 1] === secondWords[j]) {

    words[i] = `${firstWordsUppercase[j]} ${secondWords[j]}`;
    words.splice(i + 1, 1); // Remove the second word 

    found = true;
    console.log('foundheretwo');
    break; // Exit the inner loop to re-check the current index
  }
}

const firstWord = words[j].toLowerCase();
const secondWord = words[j + 1]?.toLowerCase(); // Ensure we don't access undefined

// Detect if the first word starts with "mag", "nag", or "pa" and compare with second word
const prefixPattern = /^(mag|nag|pa)/;
const baseFirstWord = firstWord.replace(prefixPattern, ''); // Remove prefix if it exists

if (secondWord && baseFirstWord === secondWord) {
  console.log('Detected repeated words with prefix, combining');
  combinedWords.push(`${words[i]} ${words[i + 1]}`); // Combine the words with a space
  i += 2; // Move index forward to skip the second word
}else if (i < words.length - 1 && 
         /[bcdfghjklmnpqrstvxzi]$/.test(words[i]) && 
         ["rin","raw", "roon", "rito"].includes(words[i + 1])) {
  console.log('combined');
  combinedWords.push(`${words[i]} ${words[i + 1]}`);
  i += 2;
}
    // Check for salutation patterns followed by one or two words
    if (salutationPattern.test(words[j]) && j < words.length - 1) {
      let nextWord = words[j + 1];
      let nextNextWord = words[j + 2];

      // Check if the next two words form a famous person's name
      if (nextNextWord && famousPersons.includes(nextWord + ' ' + nextNextWord)) {
        
        combinedEntry += ' ' + nextWord + ' ' + nextNextWord;
        combinedWords.push(combinedEntry);
        i = j + 3;
        continue;
      }

      // Check if the next word is capitalized (one word after salutation)
      if (/^[A-Z][a-z]+$/.test(nextWord)) {
        
        combinedEntry += ' ' + nextWord;
        combinedWords.push(combinedEntry);
        i = j + 2;
        continue;
      }
    }



    // **Updated Logic**: Handle time patterns
   
let timePattern = /\b(1[0-2]|0?[1-9])[0-5][0-9]\b/; // Matches valid time patterns in hhmm format

// Assuming words is your input array
for (let i = 0; i < words.length; i++) {
    let hasAmPm = (i < words.length - 1 && (words[i + 1] === 'am' || words[i + 1] === 'pm'));
    let isTimePattern = timePattern.test(words[i]);

    if (hasAmPm && isTimePattern) {
        // If the number is less than 4 digits and ends with pm, add a leading zero
        if (words[i + 1] === 'pm' && words[i].length === 3) {
            words[i] = '0' + words[i]; // Add leading zero
        }
        // Combine the time with "am" or "pm"
        words[i] = words[i] + ' ' + words[i + 1];

        // Remove the next element ("am" or "pm") to avoid duplication
        words.splice(i + 1, 1);
    }
}



 

    // **New Logic**: Detect year ranges like "1992 - 2007"
    if (j < words.length - 2 && yearPattern.test(words[j]) && words[j + 1] === '-' && yearPattern.test(words[j + 2])) {
      combinedEntry = words[j] + ' ' + words[j + 1] + ' ' + words[j + 2];
      combinedWords.push(combinedEntry);
      i = j + 3; // Move past the combined year range
      continue;
    }

    // **Updated Logic**: Handle Bible verse patterns or number patterns
    let isNumberPattern = /^\d+([-–]?\d+)?$/.test(words[j]);
    let isWord = /^[A-Za-z]+$/.test(words[j]);
    let isNextWordNumber = (j < words.length - 1 && /^\d+([-–]?\d+)?$/.test(words[j + 1]));

    // Check for Bible book names
    if (bibleBooks.includes(words[j].toLowerCase()) && isNextWordNumber) {
      combinedEntry = words[j] + ' ' + words[j + 1];
      combinedWords.push(combinedEntry);
      i = j + 2;
      continue;
    } else if (isNumberPattern && j < words.length - 1 && (words[j + 1].includes('-') || /^\d+([-–]?\d+)?$/.test(words[j + 1]))) {
      combinedEntry += ' ' + words[j + 1];
      combinedWords.push(combinedEntry);
      i = j + 2;
      continue;
    }
    
    if (words[i + 1] && 
    (words[i + 1].toLowerCase() === "pag" || words[i + 1].toLowerCase() === "pa") && 
    /^[aeiouAEIOU]/.test(words[i + 2])) {
  // Combine the words with "pa" or "pag" prefix followed by a word starting with a vowel
  combinedWords.push(words[i + 1] + " " + words[i + 2]);
  i += 3; // Skip the next two words (the "pa/pag" and the word starting with a vowel)
}


    // New Logic: Combine "Na ang", "Na na", but not "Na ng"
    if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'ang') {
      combinedWords.push('na ang');
      i += 2;
    } else if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'na') {
      combinedWords.push('na na');
      i += 2;
    }
    // Exception: Keep "na ng" as is
    else if (i < words.length - 1 && words[i].toLowerCase() === 'na' && words[i + 1].toLowerCase() === 'ng') {
      combinedWords.push('na ng');
      i += 2;
    }
   
    // Combine specific word patterns like "lakad at pawis"
    else if (i < words.length - 2) {
      const phrase = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
      const specificWordPattern = /\b(lakad|pamatay|kaliwa|humigit|tahanan|dalaga|bahay)\s(ng|sa|at|na|ay)\s(takbo|insekto|kanan|kumulang|maligaya|bukid|aliwan)\b/;

      if (specificWordPattern.test(phrase)) {
        combinedWords.push(phrase); // Combine the three words that match the pattern
        i += 3; // Skip the next two words
      } else {
        combinedWords.push(words[i]);
        i++;
      }
    }

    // Combine repeated words into one
    else if (i < words.length - 1 && words[i].toLowerCase() ===  words[i + 1].toLowerCase()) {
  combinedWords.push(`${words[i]} ${words[i + 1]}`); 
  i += 2;
}else {
      combinedWords.push(words[i]);
      i++;
    }
  }



  // Additional logic to combine specific phrases like "tulad ng"
  
const combinedPhrases = [];

// Check for specific patterns and handle them
for (let k = 0; k < combinedWords.length; k++) {
  const currentWord = combinedWords[k];
  const nextWord = combinedWords[k + 1];
  const nextNextWord = combinedWords[k + 2];
  
  const regex = /\b(Pag|pag|Pa|pa|Tag|tag|Mag|mag|Nag|nag)\b/;
  
  // Add the word directly to combinedPhrases
  if (/^[a-zA-Z]+$/.test(currentWord)) {
    // Your existing logic can go here
  }
  
  // Check for "tulad ng" pattern
  if (currentWord === "tulad" && nextWord === "ng") {
    combinedPhrases.push(`${currentWord} ${nextWord}`);
    k++; // Skip "ng"
  }
  
  // Check for repeated words with "nang" in between
  else if (k < combinedWords.length - 2 &&
           currentWord.toLowerCase() !== nextNextWord.toLowerCase() &&
           nextWord === "nang") {
    console.log('confirmed nang between non-repeated words');
    combinedPhrases.push(`${currentWord} nang ${nextNextWord}`);
    k += 2; // Skip "nang" and the next word
  }
  
// Check if the currentWord matches the pattern and if nextWord starts with a vowel
else if (regex.test(currentWord) && /^[AEIOUaeiou]/.test(nextWord)) {
  console.log('Matched prefix with vowel-starting word');
  // Combine the two words with a space
  combinedPhrases.push(`${currentWord} ${nextWord}`);
  k++; // Skip the next word since it's already combined
}
  
  // Check for repeated words with "ng" in between
  else if (k < combinedWords.length - 2 &&
           currentWord.toLowerCase() === nextNextWord.toLowerCase() &&
           nextWord === "ng") {
    console.log('confirmed one');
    combinedPhrases.push(`${currentWord} ng ${nextNextWord}`);
    k += 2; // Skip "ng" and the repeated word
  } 

  // Check for repeated words with "t" at the end and a space in between
  else if (k < combinedWords.length - 1 &&
  currentWord.endsWith("t") &&
  !/^(mag|nag|pa)/.test(currentWord) &&
  currentWord.slice(0, -1).toLowerCase() === nextWord.toLowerCase()) { // Avoid words starting with "mag", "nag", or "pa"
  console.log('confirmed repeated word with "t" and space');
  combinedPhrases.push(`${currentWord} ${nextWord}`);
  k++; // Skip the repeated word
}

// Check for repeated words with "t" at the end and a hyphen in between
else if (k < combinedWords.length - 1 &&
  currentWord.endsWith("t") &&
  !/^(mag|nag|pa)/.test(currentWord) &&
  nextWord.startsWith(currentWord.slice(0, -1).toLowerCase() + "-")) {
  console.log('confirmed repeated word with "t" and hyphen');
  combinedPhrases.push(`${currentWord}-${nextWord.split('-')[1]}`);
  k++; // Skip the repeated word after hyphen
}



  // Default case: just add the current word
  else {
    combinedPhrases.push(currentWord);
  }
}







console.log(combinedPhrases);


  const finalWords = [];
for (let l = 0; l < combinedPhrases.length; l++) {
  // Check if both current and next element exist
  if (l < combinedPhrases.length - 1 && 
      combinedPhrases[l] !== undefined && combinedPhrases[l + 1] !== undefined) {
      
    const currentWord = combinedPhrases[l];
    const nextWord = combinedPhrases[l + 1];

    // Check for exact case-insensitive match
    if (currentWord.toLowerCase() === nextWord.toLowerCase()) {
      finalWords.push(`${currentWord} ${nextWord}`);
      l++; // Skip the next word as it's part of the current combination

    // Check if they differ only by last letter (current ends with 'u' and next ends with 'o')
    } else if (
      currentWord.length === nextWord.length && // Ensure they are the same length
      currentWord.slice(0, -1).toLowerCase() === nextWord.slice(0, -1).toLowerCase() && // Check all but the last character
      currentWord.endsWith('u') && // Check if current word ends with 'u'
      nextWord.endsWith('o') // Check if next word ends with 'o'
    ) {
      finalWords.push(`${currentWord} ${nextWord}`); // Combine with a space
      l++; // Skip the next word as it's part of the current combination

    // Check if the current word ends with 'u' and is followed by a hyphen and next word ends with 'o'
    }
    else {
      // Push the current word if there's no match or it's the last word
      finalWords.push(currentWord);
    }
  } else {
    // Push the last word if there's no next word
    finalWords.push(combinedPhrases[l]);
  }
}

return finalWords;

}
let originalOldArray = combineWordsMobile(originalText);

function combineWordsMobileOriginal(array) {
  const combinedWords = [];
  let updateOnce = false;  // Boolean flag to track if the update has been made

  for (let i = 0; i < array.length; i++) {
    const currentEntry = array[i];

    // Check if the entry is valid (not undefined or null)
    if (typeof currentEntry === 'string') {
      // Use regex to detect 'ng' with a word before and after, excluding repeated words
      const regex = /(\b\w+\b)\s+(ng)\s+(\b\w+\b)/i;

      if (regex.test(currentEntry)) {
        const match = currentEntry.match(regex);

        const beforeWord = match[1];
        const afterWord = match[3];

        // Add the words before and after "ng", and replace "ng" with "nang" if words are not repeated
        if (beforeWord !== afterWord) {
          combinedWords.push(beforeWord, 'ng', afterWord);
  if (!updateOnce) {
    updateOnce = true;
  }
        } 

        console.log('Processed with ng!');

      
      } else {
        // If 'ng' or 'nang' is not found, push the current entry as-is
        combinedWords.push(currentEntry);
      }
    }
  }

  // Only update `originalArrayTextOutside` and `textOriginalHides` if the updateOnce flag is still false
  if (updateOnce) {
    // Update originalArrayTextOutside by replacing the processed part
    
      originalArrayTextOutside = combinedWords;
    

    // Join the words back into a string for textOriginalHides
    textOriginalHides.value = combinedWords.join(' ');

    console.log('Updated textOriginalHides:', textOriginalHides.value);
    console.log('Updated originalArrayTextOutside:', originalArrayTextOutside);
  } else {
    console.log('Update not performed as boolean is set to true already.');
  }

  return combinedWords;
}



// Apply the function to both texts
let originalArray= originalOldArray;
let correctedArray = originalArrayTextOutside;

// Handle repeated words in originalArray
let combinedArray = [];
let i = 0;

while (i < originalArray.length) {
    let word = originalArray[i];

    if (i + 1 < originalArray.length && originalArray[i + 1] === word) {
        combinedArray.push(word + ' ' + word);
        i += 2; 
    } else {
        combinedArray.push(word);
        i++;
    }
}

// Find the index of the word to be replaced in the combined array
let targetIndex = combinedArray.indexOf(errorsTextarea);

// Check if the targetIndex is valid and within bounds
if (targetIndex !== -1 && targetIndex < correctedArray.length) {
    // Set an invisible placeholder (zero-width space) at the corresponding index in correctedArray
    correctedArray[targetIndex] = correctedArray[targetIndex] + "\u200B";

    // Replace the placeholder with the selected suggestion
    correctedArray[targetIndex] = selectedSuggestion;
    console.log('with nang: ', correctedArray[targetIndex]);
}

// Join the corrected array back into a string
correctedtextmobile.value = correctedArray.join(' ');

console.log(originalArray);
console.log(correctedArray);

let correctedArrayNew;

 correctedArrayNew = combineWordsMobileOriginal(correctedArray);


console.log('New value: ', correctedArrayNew);
      
console.log('Suggestions and errors: ', [suggestionMap]);
      correctedHighlightedTwoText = correctedHighlightedTwoText.replace(regex, match => {
        return `<span class="highlightCorrected">${errorsTextarea}</span>`;
      });

      overlaycorrectedTwo.innerHTML = correctedHighlightedTwoText.replace(/\n/g, '<br>');
      correctedtextmobile.style.display = 'block';
      overlaycorrectedTwo.style.display = 'block';
      overlay.style.display = 'none';
      overlay_two.style.display = 'none';
      textarea.style.display = 'none';

overlaycorrectedTwo.style.fontSize = '14px';
      
      textsee.style.display = 'block';

      if (getComputedStyle(overlay).paddingTop === '8px') {
        overlay.style.paddingTop = '28px';
      }
      if (getComputedStyle(overlaycorrected).paddingTop === '8px') {
        overlaycorrected.style.paddingTop = '28px';
      }
      if (getComputedStyle(overlaycorrectedTwo).paddingTop === '8px') {
        overlaycorrectedTwo.style.paddingTop = '28px';
      }
      textsee.innerHTML = 'Mga naitama.';

    } else {
      
      
      
      // Desktop
      displaywebsite.style.display = 'flex';
      correctedbox.style.marginLeft = '10px';
      displaywebsite.style.paddingBottom = '10px';

      textseeTwo.style.display = 'block';
      
      
      const originalText = textOriginalHides.value.trim();
let correctedText = textOriginal.value.trim();

// Apply the function to both texts
let originalArray = combineWords(originalText);
let correctedArray = originalArrayTextOutside;

console.log(originalArray); // ["Kaway kaway", "na", "tayu", "dyan"]
console.log(correctedArray); // (Depending on the input)


console.log(originalArray)
// Handle repeated words in originalArray
let combinedArray = [];
let i = 0;

while (i < originalArray.length) {
    let word = originalArray[i];
    if (i + 1 < originalArray.length && originalArray[i + 1] === word) {
        // Combine repeated words
        combinedArray.push(word + ' ' + word);
        i += 2; // Skip the next word since it's a repeat
    } else {
        combinedArray.push(word);
        i++;
    }
}

// Find the index of the word to be replaced in the combined array
let targetIndex = combinedArray.indexOf(errorsTextarea);

// Check if the targetIndex is valid and within bounds
if (targetIndex !== -1 && targetIndex < correctedArray.length) {
    // Set an invisible placeholder (zero-width space) at the corresponding index in correctedArray
    correctedArray[targetIndex] = correctedArray[targetIndex] + "\u200B";

    // Replace the placeholder with the selected suggestion
    correctedArray[targetIndex] = selectedSuggestion;
}

// Join the corrected array back into a string
textOriginal.value = correctedArray.join(' ');

function combineWordsDesktopOriginal(array) {
  const combinedWords = [];
  let updateOnce = false; // Boolean flag to track if the update has been made

  for (let i = 0; i < array.length; i++) {
    const currentEntry = array[i];

    // Check if the entry is valid (not undefined or null)
    if (typeof currentEntry === 'string') {
      // Use regex to detect 'ng' with a word before and after, excluding repeated words
      const regex = /(\b\w+\b)\s+(ng)\s+(\b\w+\b)/i;

      if (regex.test(currentEntry)) {
        const match = currentEntry.match(regex);

        const beforeWord = match[1];
        const afterWord = match[3];

        // Add the words before and after "ng", and replace "ng" with "nang" if words are not repeated
        if (beforeWord !== afterWord) {
          combinedWords.push(beforeWord, 'ng', afterWord);
          if (!updateOnce) {
            updateOnce = true;
          }
        }

        console.log('Processed with ng!');


      } else {
        // If 'ng' or 'nang' is not found, push the current entry as-is
        combinedWords.push(currentEntry);
      }
    }
  }

  // Only update `originalArrayTextOutside` and `textOriginalHides` if the updateOnce flag is still false
  if (updateOnce) {
    // Update originalArrayTextOutside by replacing the processed part

    originalArrayTextOutside = combinedWords;


    // Join the words back into a string for textOriginalHides
    textOriginalHides.value = combinedWords.join(' ');

    console.log('Updated textOriginalHides:', textOriginalHides.value);
    console.log('Updated originalArrayTextOutside:', originalArrayTextOutside);
  } else {
    console.log('Update not performed as boolean is set to true already.');
  }

  return combinedWords;
}

let correctedArrayNew;

 correctedArrayNew = combineWordsDesktopOriginal(correctedArray);


console.log('New value: ', correctedArrayNew);


      textarea.style.display = 'none';
      textoriginal2.style.display = 'block';

      correctedHighlightedText = correctedHighlightedText.replace(regex, match => {
        return `<span class="highlightCorrected">${errorsTextarea}</span>`;
      });
      textOriginal.style.display = 'block';

      overlaycorrected.innerHTML = correctedHighlightedText.replace(/\n/g, '<br>');
      overlaycorrected.style.fontSize = '20px';
      
      textsee.style.display = 'none';

      correctedbox.style.display = 'block';
      overlay.style.display = 'block';
      overlay_two.style.display = 'block';

      if (getComputedStyle(overlaycorrected).paddingTop === '11px') {
        overlaycorrected.style.paddingTop = '80px';
      }
      if (getComputedStyle(overlay).paddingTop === '11px') {
        overlay.style.paddingTop = '80px';
      }

    } 

    updateHighlights();

    // Check if any cloned containers are left after a suggestion is selected
    checkForClonedContainers();
  });
});
      });

      updateHighlights();

      loading.style.display = 'none';
      correctButton.style.visibility = 'hidden';
      RefreshButton.style.visibility = 'visible';
    } catch (error) {
      handleError(error);
    }
  }
});

function checkForClonedContainers() {
  const clonedContainers = document.querySelectorAll('.clonedContainer');

  if (clonedContainers.length === 0) {
    console.log('No cloned containers left!');
    // Perform actions when no cloned containers are left
    textoriginal2.style.display = 'block';
    correctedbox.style.display = 'block';
    checkContainer.style.display = 'block';
    
    overlay.style.display = 'block';
    correctButton.style.visibility = 'visible';
    RefreshButton.style.visibility = 'visible';
  } else {
    console.log(`${clonedContainers.length} cloned containers remaining.`);
  }
}

function handleError(error) {
  if (error instanceof ReferenceError) {
    console.error('ReferenceError:', error.message, error.stack);
  } else if (error instanceof TypeError) {
    console.error('TypeError:', error.message, error.stack);
  } else if (error instanceof SyntaxError) {
    console.error('SyntaxError:', error.message, error.stack);
  } else {
    console.error('General Error:', error.message, error.stack);
  }

  checkContainer.innerHTML = 'An error occurred while checking the text.';
  checkContainer.style.display = 'none';
  loading.style.display = 'none';
  RefreshButton.style.visibility = 'visible';
}

let highlightedText = null;

function scrollToTarget() {
   
    if (checkContainer) {
        checkContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        checkContainer.focus();
    }
}




function scrollToTargetBackUp() {
   
    
        textareabox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        textareabox.focus();
    
}

// Check if the device is mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.addEventListener('load', scrollToTarget);
}


// Make sure the updateHighlights function exists and is correctly implemented
function updateHighlights() {
  const fullText = textarea.value;
  
  highlightsErrors
  errorArray

  correctedHighlightedText = emptyText;
  correctedHighlightedTwoText = emptyText;

  let highlightedText = seeOriginal ? originalText : fullText; // Initialize with the full or original text

  suggestionsFromAPI.forEach(correction => {
    const errorText = correction.errorText;
    const suggestionText = correction.suggestions[0]; // Assuming we apply the first suggestion for the corrected text

    // Escape special characters and allow capturing trailing spaces
    

    try {
      const escapedErrorText = errorText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
// Include spaces after the error text with `\\s*`, and ensure it's not preceded or followed by a word character
const regex = new RegExp('\\b' + escapedErrorText + '\\b(\\s*)', 'gi'); // Match the word with boundaries and followed by any spaces

      // Highlight the error along with the spaces by wrapping everything in the span
      highlightedText = highlightedText.replace(regex, match=> {
        return `<span class="highlight">${errorText}</span>`;
      });

      console.log('ERRORS: ', errorText);
    } catch (e) {
      console.error(`Error creating regex for "${errorText}":`, e);
    }
  });

  // After processing all suggestions, update the overlay content
  overlay.innerHTML = highlightedText.replace(/\n/g, '<br>'); // Preserve line breaks
}






setupTextSeeListener();

let nowHidden = false;

function setupTextSeeListener() {
  textsee.addEventListener('click', toggleTextSee);
  
  function toggleTextSee() {
    if (textsee.innerHTML === 'Mga naitama.') {     
      
      handleTextSeePressedMOBILS();
    } else {
handleTextSeeUnpressedMOBILE();
      
    }
  }
}
function handleTextSeePressedMOBILS() {
  correctedtextmobile.style.display = 'none';
overlaycorrectedTwo.style.display = 'none';
overlay.style.display = 'block';
overlay_two.style.display = 'block';
textOriginal.style.display = 'none';
textoriginal2.style.display = 'block';
textarea.style.display = 'none';
  seeOriginal = false;
  textsee.style.display = 'block';
  textsee.innerHTML = 'Mga Orihinal na teksto.';
  console.log('TWO');
}

function handleTextSeeUnpressedMOBILE() {
  // Actions for when the button is unpressed (show original text)
  correctedtextmobile.style.display = 'block';
         overlaycorrectedTwo.style.display = 'block';
overlay.style.display = 'none';
textOriginal.style.display = 'none';
overlay_two.style.display = 'none';
textsee.innerHTML = 'Mga naitama.';
  textoriginal2.style.display = 'none';
  textarea.style.display = 'none';
  seeOriginal = true;
textsee.style.display = 'block';
  console.log('ONE');
  
}

makeCorrectedTextMobileSelectable();

function hideText() {
  handleTextSeeUnpressed();
}

function textHides() {
  // Actions for when the button is unpressed (show original text)
  overlay.style.display = 'block';
  overlay_two.style.display = 'block';
  textoriginal2.style.display = 'block';
  correctedbox.style.display = 'none';
  overlaycorrected.style.display = 'none';
  textOriginal.style.display = 'none';
  textarea.style.display = 'none';
  textsee.innerHTML = 'See Corrected >';
 textsee.style.visibility ='hidden';
  seeOriginal = true;
  makeNonEditable();
  updateHighlights();
}

function handleTextSeePressed() {
  // Actions for when the button is pressed (show corrected text)
  overlaycorrected.style.display = 'block';
  correctedbox.style.display = 'block';
  overlay.style.display = 'block';
  overlay_two.style.display = 'block';
  textOriginal.style.display = 'block';
  textsee.innerHTML = 'See Corrected >';
  textarea.style.display = 'none';
 textsee.style.visibility ='visible';
  seeOriginal = false;
  console.log('TWO');
}

function handleTextSeeUnpressed() {
  // Actions for when the button is unpressed (show original text)
  overlay.style.display = 'block';
  overlay_two.style.display = 'block';
  textoriginal2.style.display = 'none';
  correctedbox.style.display = 'none';
  overlaycorrected.style.display = 'none';
  textOriginal.style.display = 'none';
  textarea.style.display = 'none';
  textOriginalText.style.display = 'block';
  textsee.innerHTML = 'See Corrected >';
  textsee.style.visibility ='visible';
  seeOriginal = true;
  makeNonEditable();
  console.log('ONE');
  updateHighlights();
}


function makeCorrectedTextMobileSelectable() {
  // Set the textarea to readonly
  correctedtextmobile.readOnly = true;

  // Add a click event listener
  correctedtextmobile.addEventListener('click', () => {
    // Handle the click event
    console.log('Text selected or clicked');
    // Add your logic here if needed
  });
}





// The rest of the code remains the same
    // Synchronize the textarea scrolling with the overlay
    textarea.addEventListener('scroll', function() {
        overlay.scrollTop = textarea.scrollTop;
        overlay.scrollLeft = textarea.scrollLeft;
    });

    // Adjust the overlay text when the user types
    
    const textresulttext = document.getElementById('textresult');

    // Method to make textarea non-editable but copyable
    // Function to handle text selection and copy on long press

});


