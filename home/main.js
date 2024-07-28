document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
const textsss = document.querySelector('.editText');

function adjustFontSize() {
  const width = window.innerWidth;
if (width >= 1440) {
  textsss.style.fontSize = '14px'; // Smaller font size for very large screens
} else if (width >= 1024) {
  textsss.style.fontSize = '14px'; // 12px smaller than default for large screens
} else if (width >= 768) {
  textsss.style.fontSize = '14px'; // Slightly smaller for medium screens
} else {
  textsss.style.fontSize = '14px'; // Default font size for small screens
}
}

// Adjust the font size on initial load
adjustFontSize();

// Adjust the font size on window resize
window.addEventListener('resize', adjustFontSize);

const logo = document.querySelector('.logo');
const logoSpan = logo.querySelector('span');
const navbarbg = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active');
  navbarbg.classList.toggle('expanded');

  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');

  if (navbarbg.classList.contains('expanded')) {
    navbarbg.style.transition = 'background-color 0.5s ease-in-out';
    navbarbg.style.backgroundColor = '#191970'; // Midnight blue color
    logoSpan.style.transition = 'color 0.5s ease-in-out';
    logoSpan.style.color = '#6495ED'; // Cornflower blue color
  } else {
    navbarbg.style.transition = 'background-color 0.5s ease-in-out';
    navbarbg.style.backgroundColor = '#6495ED'; // Cornflower blue color
    logoSpan.style.transition = 'color 0.5s ease-in-out';
    logoSpan.style.color = '#133058'; // Original color
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
    maxwidth2.style.display = 'inline';

    const container4 = document.querySelector('.container4'); 
    const textresult = document.getElementById('result'); 
    const textresultlayouts = document.querySelector('.resultdes'); 
    const textresultcontainer = document.getElementById('resultContainer');
    textresultcontainer.style.display = 'none';
    const textarea = document.querySelector('.editText');
    const overlay = document.querySelector('.overlay');
    textarea.placeholder = 'Type or paste the language you want to correct...';

    textresult.style.display = 'none';
    textresultlayouts.style.display = 'none';

const checkContainer = document.querySelector('.checkContainer');

let clear = false;
    document.querySelector('.refreshButton').addEventListener('click', function() {
        document.querySelector('.editText').value = '';
        overlay.style.opacity = '0';
        overlay.classList.remove('fade-in');
        checkContainer.style.display = 'none';
        clear = true;
        overlay.value = ' ';
        textresult.value = ' ';
        maxwidth2.style.display = 'inline';
        textresultcontainer.style.display = 'none'; // Hide the container on refresh

        if (window.innerWidth <= 768) {
            textresult.style.display = 'none';
            textresultlayouts.style.display = 'none';
        }
    });
let textdetector = document.getElementById('text');
let detected = false;


  const corrections = {
  // Phrase corrections
  'kung araw ng Sabado': 'kapag araw ng Sabado',
  'kung nagmamaneho ka': 'kapag nagmamaneho ka',
  'walang imik kung matulog': 'walang kakibu-kibo kung matulog',
  'huwag ninyong imikin': 'huwag ninyong kibuin',
  'dahil sa sumakit ang ulo': 'dahil sumakit ang ulo',
  'samantalang nabubuhay': 'habang nabubuhay',
  'habang wala pa akong trabaho': 'samantalang wala pa akong trabaho',
  'ibayad mo ako sa sine': 'ipagbabayad mo ako sa sine',
  'ibinayad ko siya sa bus': 'ipinagbayad ko siya sa bus',
  'mayroon anay sa dingding': 'may anay sa dingding',
  'may kaming binabalak': 'mayroon kaming binabalak',
  'may iyang malaking suliranin': 'mayroon iyang malaking suliranin',
  'pahirin mo ng sukang iloko': 'pahiran mo ng sukang iloko',
  'pahiran mo ang pawis': 'pahirin mo ang pawis',
  'familia': 'pamilya',
  'berdeberde': 'berdeng-berde',
  'anoano': 'ano-ano',
  'kortehan': 'kortihan',
  'babai': 'babae',
  'makaDiyos': 'maka-Diyos',
  'makaIngles': 'maka-Ingles',
  'paDavao': 'pa-Davao',
  'magfoFord': 'magfo-Ford',
  'magviVios': 'magvi-Vios',
  'magjoJohnson': 'magjo-Johnson',
  'magjujuice': 'magju-juice',
  'magjijeep': 'magji-jeep',
  'magjuduty': 'magju-duty',
  'magpophotocopy': 'magpo-photocopy',
  'peprendahin': 'pe-pren-da-hin',
  'kaklaruhin': 'ka-kla-ru-hin',
  'dadramaahan': 'da-dra-ma-han',
  'paplanohin': 'pa-pla-nu-hin',


  'magboblowout': 'magbo-blow-out',
  'magdodrawing': 'magdo-drawing',
  'maggargle': 'magga-gar-gle',


  'painting': 'mga painting',
  'opisyal': 'mga opisyal',
  'computer': 'mga computer',


  'mga paintings': 'paintings',
  'mga opisyales': 'opisyales',
  'mga computers': 'computer',


  'mga kalalakihan': 'kalalakihan',
  'limang kalalakihan': 'kalalakihan',
  'mga kababaihan': 'kababaihan',
  'anim na kababaihan': 'kababaihan',
  'mga kaguruan': 'kaguruan',
  'tatlong kaguruan': 'kaguruan',
  'mga kabataan': 'kabataan',
  'sampung kabataan': 'kabataan',


  'pang-akademiko': 'pang-akademya',
  'pangkultural': 'pangkultura',
  'panlingguwistik': 'panlingguwistika',
  'kumusta na ka': 'kamusta ka na',
  'baait': 'bait',
  'pusa ng gala': 'pusang gala',
  'maraming salamat': 'maraming salamat po',
  'paalam': 'paalam na po',
    // Common Phrases Sa Tagalog
  'kumusta na ka': 'kamusta ka na',
  'baait': 'bait',
  'pusa ng gala': 'pusang gala',
  'maraming salamat': 'maraming salamat po',
  'paalam': 'paalam na po',
  'sa wakas': 'sa bandang huli',
  'mabuti nman': 'mabuti naman',
  'sige na': 'sige na nga',
  'ano ba yan': 'ano ba iyan',
  'walang anuman': 'walang ano man',

  // Nouns (Pangngalan)
  'peso': 'piso',
  'pisa': 'pusa',
  'aso': 'aso-asuhan',
  'bahay': 'tahanan',
  'trabaho': 'gawain',
  'bata': 'paslit',
  'araw': 'araw-araw',
  'gabi': 'gabing-gabi',
  'umaga': 'umagang-umaga',
  'ina': 'inaas',
  'ama': 'amaas',
  'anak': 'anak-anakan',
  'loloan': 'lolo',
  'tata': 'tatay',
  'kaibigan': 'katoto',
  'katotohanan': 'katuwiran',
  'kasinungalingan': 'di-katotohanan',
  'pangarap': 'pangarapin',
  'pag-ibig': 'pagmamahal',
  'pagkain': 'pagkainin',
  'sakit': 'karamdaman',
  'kaliwa': 'kaliwaan',
  'kanan': 'kananin',
  'ulol': 'ulo',
  'paat': 'paahan',
  'kamay': 'kamayin',
  'dila': 'dilaan',
  'ngiti': 'ngitian',
  'iyak': 'iyak-iyakan',
  'kanta': 'awitin',
  'dinig': 'dinigan',
  'tanong': 'tanongin',
  'sagot': 'sagutin',
  'ligaya': 'kaligayahan',
  'lungkot': 'kalungkutan',
  'bilis': 'kabilis',
  'bagal': 'kabagalan',
  'tubig': 'tubigan',
  'lupa': 'lupain',
  'hangin': 'hanging',
  'apoy': 'apuyan',
  'bundok': 'kabundukan',
  'dagat': 'karagatan',
  'ilog': 'ilugan',
  'puno': 'punuan',
  'bulaklak': 'bulaklakan',
  'bayan': 'sambayanan',

  // Pronouns (Panghalip)
  'sya': 'siya',
  'ako': "ako'y",
  'tayo': "tayo'y",
  'kayo': "kayo'y",
  'kami': "kami'y",
  'ikaw': "ikaw'y",
  'nila': 'kanila',
  'namin': 'amin',
  'atin': 'sa atin',
  'akin': 'sa akin',
  'inyo': 'sa inyo',
  'kanya': 'sa kanya',

  // Verbs (Pandiwa)
  'kumakain': 'kumakaing',
  'natutulog': 'natutulog ng',
  'sasakay': 'sasakyan',
  'pupunta': 'paroroon',
  'bumili': 'binili',
  'magkita': 'magkita-kita',
  'magusap': 'mag-usap-usap',
  'magluto': 'magluluto',
  'maglinis': 'maglilinisan',
  'magsulat': 'magsusulat',
  'magbasa': 'magbabasa',
  'maglakad': 'maglalakad',
  'tumakbo': 'tatakbo',
  'umiyak': 'iiyak',
  'tumawa': 'tatawa',

  // Adverbs (Pang-abay)
  'dun': 'doon',
  'san': 'saan',
  'dito': 'rito',
  'dyan': 'diyaan',
  'kaninang': 'kani-kanina',
  'maraming': 'marami',
  'mabilis': 'mabilis-bilis',
  'madalas': 'madalas-dalas',
  'minsan': 'paminsan-minsan',
  'agad': 'kaagad',

  // Adjectives (Pang-uri)
  'maganda': 'marikit',
  'pangit': 'di-kagandahan',
  'tama': 'husto',
  'mali': 'sala',
  'mabuti': 'mahusay',
  'mabilis': 'mabilis-bilis',
  'mabagal': 'mabagal-bagal',
  'malaki': 'malakas',
  'maliit': 'munti',
  'mataba': 'matatabain',
  'payat': 'payatin',
  'matangkad': 'mataas',
  'maikli': 'maliit',

  // Prepositions (Pang-ukol)
  'galing sa': 'buhat sa',
  'mula sa': 'galing sa',
  'para sa': 'ukol sa',
  'tungkol sa': 'hinggil sa',
  'ayon sa': 'batay sa',

  // Conjunctions (Pangatnig)
  'at': 'at saka',
  'ngunit': 'datapwat',
  'o': 'o kaya',
  'kasi': 'dahil',
  'pero': 'ngunit',
  'kung': 'kapag',
  'kahit': 'kahit na',
  'bago': 'bago pa',
  'sapagkat': "sapagka't",
  'dahilan': 'dahil sa',
  'kaya': "'kaya't",
  'upang': 'upang sa',
  'bagamat': "bagama't",
  'gayunman': 'gayunpaman',
  'samantala': 'samantalang',
  'yamang': 'yayamang',
  'palibhasa': "palibhasa'y",
  'subalit': "subali't",
  'gayon': 'gayundin',
  'maliban': 'maliban sa',
  'tulad': 'tulad ng',
  'gaya': 'gaya ng',
  'para': 'para sa',
  'dahil': 'dahilan sa',
  'tuwing': 'sa tuwing',

  // Ligatures (Pang-angkop)
  'na': 'ng',
  'ng': 'na',
  '-g': '-ng',
  '-ng': '-g',
  'nang': 'na ang',
  'kung': 'kapag',
  'kaysa': 'kaysa sa',
  'pagka': "pagka't",
  'hangga': "hangga't",
  'lalo': 'lalo na',
  'mula': 'mula sa',
  'hangang': 'hanggang',
  'bagamat': "bagama't",
  'sapagkat': "sapagka't",
  'tuloy': 'kaya tuloy',

  // Particles
  'nga': 'na',
  'ba': "ba'y",
  'daw': 'raw',
  'din': 'rin',
  'naman': 'man',
  'lang': 'lamang',
  'po': 'ho',
  'na': 'pa',
  'pala': 'sana',
  'kaya': 'kasi',
  'diba': 'hindi ba',
  'eh': 'ay',
  'kasi': 'dahil',
  'talaga': 'tunay',
  'yata': "yata'y",
  'muna': "muna'y",
  'sana': "sana'y",
  'wala': 'wala ng',
  'teka': 'sandali',
  'uy': 'hoy',
  'ano': 'ano ba',
  'ganun': 'ganoon',
  'siguro': 'marahil',
  'halos': 'halos na',
  'kahit': 'kahit na',
  'pa': 'pa rin',
  'naman': 'naman kasi',
  'kasi': 'kasi naman',
  'nga': 'nga naman',
  'ata': "ata'y",
  'kuwan': 'ano',
  'di': 'hindi',
};

// Extract words from phrases and individual words
function extractWordCorrections(corrections) {
  const wordCorrections = {};
  for (const [incorrect, correct] of Object.entries(corrections)) {
    const incorrectWords = incorrect.split(/\s+/);
    const correctWords = correct.split(/\s+/);
    
    for (let i = 0; i < incorrectWords.length; i++) {
      if (incorrectWords[i] !== correctWords[i]) {
        if (!wordCorrections[incorrectWords[i]]) {
          wordCorrections[incorrectWords[i]] = [];
        }
        if (!wordCorrections[incorrectWords[i]].includes(correctWords[i])) {
          wordCorrections[incorrectWords[i]].push(correctWords[i]);
        }
      }
    }
    

    for (let i = 0; i < incorrectWords.length; i++) {
      if (!wordCorrections[incorrectWords[i]]) {
        wordCorrections[incorrectWords[i]] = [];
      }
      if (!wordCorrections[incorrectWords[i]].includes(incorrectWords[i])) {
        wordCorrections[incorrectWords[i]].push(incorrectWords[i]);
      }
    }
    for (let i = 0; i < correctWords.length; i++) {
      if (!wordCorrections[correctWords[i]]) {
        wordCorrections[correctWords[i]] = [];
      }
      if (!wordCorrections[correctWords[i]].includes(correctWords[i])) {
        wordCorrections[correctWords[i]].push(correctWords[i]);
      }
    }
  }
  return wordCorrections;
}

const wordCorrections = extractWordCorrections(corrections);

// Levenshtein Distance function
function levenshteinDistance(a, b) {
  const matrix = [];
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Arguments must be strings');
  }
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // Deletion
        matrix[i][j - 1] + 1, // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
      );
    }
  }
  return matrix[b.length][a.length];
}

// Jaro-Winkler Distance function
function jaroWinklerDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  if (m === 0) return n === 0 ? 1 : 0;

  const matchThreshold = Math.max(m, n) / 2 - 1;
  const matchDistance = Math.floor(matchThreshold);
  let matches = 0;
  let transpositions = 0;
  const s1Matches = Array(m).fill(false);
  const s2Matches = Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    const start = Math.max(0, i - matchDistance);
    const end = Math.min(n, i + matchDistance + 1);
    for (let j = start; j < end; j++) {
      if (s2Matches[j]) continue;
      if (s1[i] !== s2[j]) continue;
      s1Matches[i] = true;
      s2Matches[j] = true;
      matches++;
      break;
    }
  }
  if (matches === 0) return 0;

  let k = 0;
  for (let i = 0; i < m; i++) {
    if (!s1Matches[i]) continue;
    while (!s2Matches[k]) k++;
    if (s1[i] !== s2[k]) transpositions++;
    k++;
  }
  const jaro = (matches / m + matches / n + (matches - transpositions / 2) / matches) / 3;
  const prefixLength = Math.min(4, Math.min(s1.length, s2.length));
  const prefixScale = 0.1;
  const jaroWinkler = jaro + prefixLength * prefixScale * (1 - jaro);

  return jaroWinkler;
}

// Function to get similarity score using both methods
function getSimilarityScore(a, b) {
  const levDistance = levenshteinDistance(a, b);
  const jaroWinkler = jaroWinklerDistance(a, b);
  
  // Combine the scores: Inverse Levenshtein Distance + Jaro-Winkler score
  return 1 / (1 + levDistance) + jaroWinkler;
}

// Improved getSuggestions function with case-insensitivity
// Improved getSuggestions function with case-insensitivity and error handling
function getSuggestions(word, wordCorrections) {
  if (typeof word !== 'string') {
    throw new TypeError('Input word must be a string');
  }

  const lowerCaseWord = word.toLowerCase();
  const firstLetter = lowerCaseWord[0];
  const suggestions = [];

  for (const [incorrect, correctList] of Object.entries(wordCorrections)) {
    if (typeof incorrect !== 'string') {
      continue; // Skip non-string keys
    }

    const lowerCaseIncorrect = incorrect.toLowerCase();
    
    if (lowerCaseIncorrect.startsWith(firstLetter)) {
      const similarityScore = getSimilarityScore(lowerCaseWord, lowerCaseIncorrect);
      
      for (const correct of correctList) {
        if (typeof correct !== 'string') {
          continue; // Skip non-string values in the Set
        }
        
        const lowerCaseCorrect = correct.toLowerCase();
        if (lowerCaseCorrect !== lowerCaseWord) { // Avoid suggesting the same word
          suggestions.push({ word: lowerCaseCorrect, score: similarityScore });
        }
      }
    }
  }

  // Sort suggestions by similarity score (higher is better)
  suggestions.sort((a, b) => b.score - a.score);

  // Return a number of suggestions but don't exceed the number of suggestions available
  const maxSuggestions = Math.min(suggestions.length, 5);
  return suggestions.slice(0, maxSuggestions).map(s => s.word);
}








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


    const endpoint = 'https://api.languagetool.org/v2/check';
let customCorrections = {};
let rules = [];

async function fetchData() {
  try {
    const correctionsResponse = await fetch('/api/getCorrections');
    if (!correctionsResponse.ok) throw new Error('Corrections file not found');
    customCorrections = await correctionsResponse.json();

    const rulesResponse = await fetch('/api/getRules');
    if (!rulesResponse.ok) throw new Error('Rules file not found');
    rules = await rulesResponse.json();
  } catch (error) {
    console.warn('Error fetching data:', error);
  }
}

fetchData();

document.querySelector('.correctButton').addEventListener('click', async function() {
  const textarea = document.querySelector('#textarea');
  const checkContainer = document.querySelector('#checkContainer');
  const maxwidth2 = document.querySelector('#maxwidth2');
  const overlay = document.querySelector('#overlay');

  const text = textarea.value;
  const words = text.split(/\s+/);

  checkContainer.innerHTML = '';

  const getSuggestionsFromAPI = async (text) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ text: text, language: 'tl' })
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) throw new Error('API response not OK');

      const data = await response.json();
      return data.matches.map(match => {
        const context = match.context.text;
        const offset = match.context.offset;
        const length = match.context.length;
        const errorText = context.substr(offset, length);
        const ruleDescription = match.rule.description;
        return { errorText, suggestions: match.replacements.map(rep => rep.value), ruleDescription };
      });
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  const corrections = { ...customCorrections };

  // Incorporate rules into corrections
  rules.forEach(rule => {
    const [errorText, ...suggestions] = rule.split('\n');
    if (errorText) {
      corrections[errorText.toLowerCase()] = {
        errorText,
        suggestions,
        ruleDescription: 'Custom rule from rules.json'
      };
    }
  });

  if (Object.keys(corrections).length === 0) {
    const suggestionsFromAPI = await getSuggestionsFromAPI(text);
    suggestionsFromAPI.forEach(suggestion => {
      corrections[suggestion.errorText.toLowerCase()] = suggestion;
    });
  }

  const highlightedWords = words.map(word => {
    const correctionData = corrections[word.toLowerCase()];
    if (correctionData) {
      maxwidth2.style.display = 'flex';
      const clonedNewContainer = document.createElement('div');
      clonedNewContainer.classList.add('clonedContainer');

      clonedNewContainer.innerHTML = `
        <div class="errorText">${word.replace(/\n/g, '<br>')}</div>
        <div class="suggestions">${correctionData.suggestions.map(token => `<span class="textBackground">${token}</span>`).join(' ')}</div>
        <div class="ruleDescription">${correctionData.ruleDescription}</div>
      `;
      clonedNewContainer.style.width = '80%';

      clonedNewContainer.addEventListener('click', function() {
        const clonedDropdownContainer = this.querySelector('.dropdownContainer');
        const clonedDownDrop
