document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

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
  
    // Previous rules (keeping some examples)
  'familia': 'pamilya',
  'berdeberde': 'berdeng-berde',
  'anoano': 'ano-ano',
  'kortehan': 'kortihan',
  'babai': 'babae',

  // Rule A: Hyphenated proper nouns and loan words with prefixes
  'makaDiyos': 'maka-Diyos',
  'makaIngles': 'maka-Ingles',
  'paDavao': 'pa-Davao',

  // Rule A: Contemplative aspect (future tense)
  'magpaPal': 'magpa-Pal',
  'magfoFord': 'magfo-Ford',
  'magviVios': 'magvi-Vios',
  'magjoJohnson': 'magjo-Johnson',

  // Rule B: Loan words with prefixes and reduplication
  'magjujuice': 'magju-juice',
  'magjijeep': 'magji-jeep',
  'magjuduty': 'magju-duty',
  'magpophotocopy': 'magpo-photocopy',

  // Rule C1: Reduplication of words with clusters
  'peprendahin': 'pe-pren-da-hin',
  'kaklaruhin': 'ka-kla-ru-hin',
  'dadramaahan': 'da-dra-ma-han',
  'paplanohin': 'pa-pla-nu-hin',

  // Rule C2: Reduplication of loan words with clusters
  'magboblowout': 'magbo-blow-out',
  'magdodrawing': 'magdo-drawing',
  'maggargle': 'magga-gar-gle',

  // Rule D1: Use of "mga" for plural forms
  'painting': 'mga painting',
  'opisyal': 'mga opisyal',
  'computer': 'mga computer',

  // Rule D2: Loan words already in plural form
  'mga paintings': 'paintings',
  'mga opisyales': 'opisyales',
  'mga computers': 'computer',

  // Rule D3: Words already in collective form
  'mga kalalakihan': 'kalalakihan',
  'limang kalalakihan': 'kalalakihan',
  'mga kababaihan': 'kababaihan',
  'anim na kababaihan': 'kababaihan',
  'mga kaguruan': 'kaguruan',
  'tatlong kaguruan': 'kaguruan',
  'mga kabataan': 'kabataan',
  'sampung kabataan': 'kabataan',

  // Rule D4: Formation of adjectives
  'pang-akademiko': 'pang-akademya',
  'pangkultural': 'pangkultura',
  'panlingguwistik': 'panlingguwistika',

  // Keeping some original corrections that don't conflict with the new rules
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
    
    // Handle phrase corrections
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
    
    // Handle individual word corrections
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

textarea.addEventListener('input', function() {
  const words = textarea.value.split(/\s+/);
  
  // Clear previous containers
  checkContainer.innerHTML = '';

  highlightedWords = words.map(word => {
    const correctedWord = corrections[word.toLowerCase()];
    if (correctedWord) {
      maxwidth2.style.display = 'flex'; // Show maxwidth2

      // Clone the newContainer for each highlighted word
      const clonedNewContainer = newContainer.cloneNode(true);

      // Update the cloned container with word-specific content
      clonedNewContainer.querySelector('.errorText').innerText = word.replace(/\n/g, '\n');

      // Get suggestions and populate them
      const tokens = getSuggestions(word, wordCorrections);
      const paragraphClone = clonedNewContainer.querySelector('.suggestions');
      paragraphClone.innerHTML = tokens.map(token => `<span class="textBackground">${token}</span>`).join(' ');
      clonedNewContainer.style.width = '80%';

      // Add click event listener to the cloned container
      clonedNewContainer.addEventListener('click', function() {
        const clonedDropdownContainer = this.querySelector('.dropdownContainer');
        const clonedDownDropdown = this.querySelector('.dropdownButton');

        if (!clonedDropdownContainer || !clonedDownDropdown) {
          console.error('Required elements not found');
          maxwidth2.style.display = 'inline';
          checkContainer.style.display = 'none';
          return;
        }

        // Apply transition and rotation
        clonedDownDropdown.style.transition = 'transform 0.3s ease'; // Smooth transition

        if (clonedDropdownContainer.style.display === 'block') {
          // Hide dropdown container and rotate icon back
          clonedDropdownContainer.style.display = 'none';
          clonedDownDropdown.style.transform = 'rotate(0deg)'; // Rotate to 0 degrees
          this.style.height = 'auto';
          this.style.paddingBottom = '0';
          this.style.width = '80%';
        } else {
          // Show dropdown container and rotate icon
          clonedDropdownContainer.style.display = 'block';
          clonedDownDropdown.style.transform = 'rotate(180deg)'; // Rotate to 180 degrees
          this.style.width = '80%';
          this.style.height = 'auto';
          this.style.paddingBottom = '20px';
          this.style.paddingRight = '10px';
        }
      });

      // Add event listeners to suggestion tokens
      paragraphClone.querySelectorAll('.textBackground').forEach(tokenElement => {
        tokenElement.addEventListener('click', (event) => {
          event.stopPropagation();
          const selectedToken = event.target.innerText;
          const originalWord = clonedNewContainer.querySelector('.errorText').innerText;

          const updatedText = textarea.value.replace(new RegExp(`\\b${originalWord}\\b`, 'g'), selectedToken);
          textarea.value = updatedText;

          clonedNewContainer.remove();
          hideDefinition();

          const clearHighlights = textarea.value.replace(new RegExp(`<span class="highlight">${originalWord}</span>`, 'g'), selectedToken);
          overlay.innerHTML = clearHighlights.replace(/\n/g, '<br>');
        });

        tokenElement.addEventListener('mouseenter', showDefinition);
        tokenElement.addEventListener('focus', showDefinition);
        tokenElement.addEventListener('mouseleave', hideDefinition);
        tokenElement.addEventListener('blur', hideDefinition);
      });

      checkContainer.appendChild(clonedNewContainer);
      checkContainer.style.display = 'block'; // Show checkContainer

      return `<span class="highlight">${word}</span>`;
    } else {
      return word;
    }
  }).join(' ');
  // Update overlay with highlighted words
  overlay.innerHTML = highlightedWords.replace(/\n/g, '<br>');
  
    // Directly check for the presence of highlights
  const hasHighlights = highlightedWords.includes('<span class="highlight">');

  if (hasHighlights) {
    checkContainer.style.display = 'block'; // Show checkContainer if there are highlights
    maxwidth2.style.display = 'flex'; // Show maxwidth2 if there are highlights
  } else {
    checkContainer.style.display = 'none'; // Hide checkContainer if no highlights
    maxwidth2.style.display = 'inline'; // Show maxwidth2 inline if no highlights
  }
  
});





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




  

    document.querySelector('.correctButton').addEventListener('click', function() {
        maxwidth2.style.display = 'flex';
     textresultcontainer.style.display = 'block';
     let text = document.getElementById('text').value;
        const language = document.getElementById('languageSelector').value;
        
        if(text.trim() === ''){
  
}else{
  highlightText(text)
  overlay.style.opacity = '1';
    overlay.classList.add('fade-in');
       
  if (detected) {
    console.log('Changes detected');
    
    maxwidth2.style.display = 'flex';
    checkContainer.style.visibility = 'block';
    textresultcontainer.style.display = 'none';
  }
}

            makeNonEditable();
            
    });

    // Synchronize the textarea scrolling with the overlay
    textarea.addEventListener('scroll', function() {
        overlay.scrollTop = textarea.scrollTop;
        overlay.scrollLeft = textarea.scrollLeft;
    });

    // Adjust the overlay text when the user types
    
    const textresulttext = document.getElementById('textresult');

    // Method to make textarea non-editable but copyable
    function makeNonEditable() {
        textresult.setAttribute('readonly', true); // Makes the textarea non-editable
        textresult.addEventListener('focus', () => {
            textresult.select(); // Select the text on focus for copying
        });
    }

    // Call the method to make it non-editable
});


