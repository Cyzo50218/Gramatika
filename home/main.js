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

function adjustFontSize() {
  const width = window.innerWidth;
if (width <= 768) {
  textsss.style.fontSize = '14px'; // Smaller font size for very large screens
} else {
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
    const textresultlayouts = document.querySelector('.resultdes'); 
    const textresultcontainer = document.getElementById('resultContainer');
    textresultcontainer.style.display = 'none';
    const textarea = document.querySelector('.editText');
    const overlay = document.querySelector('.overlay');
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
  logoimg.style.marginLeft ='-80px';
 
  navtexts.style.marginRight = '-80px';
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

    document.querySelector('.refreshButton').addEventListener('click', function() {
      if (window.innerWidth <= 768) {
  correctedtextmobile.style.display = 'none';
         overlaycorrectedTwo.style.display = 'none';
         overlaycorrectedTwo.innerHTML = ''; 
         correctedtextmobile.value = '';
         textarea.value = '';
         textarea.removeAttribute('readonly');
overlay.style.display = 'block';
textarea.style.display = 'block';
correctedbox.style.display = 'none';
correctorcontainer.style.width = '90%';
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

correctedtextmobile.value = '';
textarea.value = '';
textarea.removeAttribute('readonly');
overlay.style.display = 'block';
textarea.style.display = 'block';

checkContainer.style.display = 'none';
textsee.style.display = 'none';

if (getComputedStyle(overlay).paddingTop === '30px') {
  overlay.style.paddingTop = '11px';
}
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



async function getBestSuggestionFromGemini(ruleDesc, errorsTextarea, suggestionText) {
  try {
    const response = await fetch('https://call-gemini-api-tau.vercel.app/api/v2/geminiapi', {
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
      
       suggestionsFromAPI = await getSuggestionsFromAPI(textarea.value);
      console.log('Suggestions from API:', suggestionsFromAPI);

      if (!suggestionsFromAPI || suggestionsFromAPI.length === 0) {
        throw new Error("No suggestions received from the API.");
      }

      // Clear old highlights and cloned containers
      checkContainer.innerHTML = '';

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
  
        console.log('Error text:', errorsText);
        console.log('Rule description:', ruleDesc);
        console.log('Suggestions:', suggestionText);
        
        const regex = new RegExp(errorsTextarea, 'gi');
        
        if (window.innerWidth <= 1024) {
          
  originalText = originalText.replace(regex, match => {
    return `<span class="highlight">${errorsTextarea}</span>`;
  });

  overlay.innerHTML = originalText.replace(/\n/g, '<br>');

}


if (window.innerWidth <= 768) {
  scrollToTarget();
  const originalTextCopied = textOriginalHides.value;
  
correctedtextmobile.value = originalTextCopied;



console.log('Replaced', )
overlay.style.fontSize = '14px';
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

}else {
  const originalTextCopied = textOriginalText.value;
  
textOriginal.value = originalTextCopied;

  overlay.style.fontSize = '20px';
textarea.style.display = 'none';
textOriginalText.style.display = 'block';
textOriginal.style.display = 'none';
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
    const regex = new RegExp(errorsTextarea, 'gi');
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

// Function to detect and combine double repeated words
function combineRepeatedWords(text) {
    const words = text.split(' ');
    const combinedWords = [];

    for (let i = 0; i < words.length; i++) {
        // If the current word is the same as the next word (case-insensitive)
        if (i < words.length - 1 && words[i].toLowerCase() === words[i + 1].toLowerCase()) {
            // Combine the repeated words into one
            combinedWords.push(`${words[i]} ${words[i + 1]}`);
            i++; // Skip the next word since it's already combined
        } else {
            combinedWords.push(words[i]);
        }
    }

    return combinedWords;
}

// Apply the function to both texts
let originalArray = combineRepeatedWords(originalText);
let correctedArray = combineRepeatedWords(correctedText);

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
correctedtextmobile.value = correctedArray.join(' ');



      
console.log('Suggestions and errors: ', [suggestionMap]);
      correctedHighlightedTwoText = correctedHighlightedTwoText.replace(regex, match => {
        return `<span class="highlightCorrected">${errorsTextarea}</span>`;
      });

      overlaycorrectedTwo.innerHTML = correctedHighlightedTwoText.replace(/\n/g, '<br>');
      correctedtextmobile.style.display = 'block';
      overlaycorrectedTwo.style.display = 'block';
      overlay.style.display = 'none';
      textarea.style.display = 'none';

overlaycorrectedTwo.style.fontSize = '14px';
      overlay.style.fontSize = '14px';
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
      textsee.innerHTML = 'Mga naitamang teksto.';

    } else {
      // Desktop
      displaywebsite.style.display = 'flex';
      correctedbox.style.marginLeft = '10px';
      displaywebsite.style.paddingBottom = '10px';

      textseeTwo.style.display = 'block';
      
      
      const originalText = textOriginalHides.value.trim();
let correctedText = textOriginal.value.trim();

// Function to detect and combine double repeated words
function combineRepeatedWords(text) {
    const words = text.split(' ');
    const combinedWords = [];

    for (let i = 0; i < words.length; i++) {
        // If the current word is the same as the next word (case-insensitive)
        if (i < words.length - 1 && words[i].toLowerCase() === words[i + 1].toLowerCase()) {
            // Combine the repeated words into one
            combinedWords.push(`${words[i]} ${words[i + 1]}`);
            i++; // Skip the next word since it's already combined
        } else {
            combinedWords.push(words[i]);
        }
    }

    return combinedWords;
}

// Apply the function to both texts
let originalArray = combineRepeatedWords(originalText);
let correctedArray = combineRepeatedWords(correctedText);

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



      textarea.style.display = 'none';
      textoriginal2.style.display = 'block';

      correctedHighlightedText = correctedHighlightedText.replace(regex, match => {
        return `<span class="highlightCorrected">${errorsTextarea}</span>`;
      });
      textOriginal.style.display = 'block';

      overlaycorrected.innerHTML = correctedHighlightedText.replace(/\n/g, '<br>');
      overlaycorrected.style.fontSize = '20px';
      overlay.style.fontSize = '20px';
      textsee.style.display = 'none';

      correctedbox.style.display = 'block';
      overlay.style.display = 'block';

      if (getComputedStyle(overlaycorrected).paddingTop === '11px') {
        overlaycorrected.style.paddingTop = '30px';
      }
      if (getComputedStyle(overlay).paddingTop === '11px') {
        overlay.style.paddingTop = '30px';
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

const originalBox = document.querySelector('.editTextContainer');
function scrollToTargetBackUp() {
   
    
        originalBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        originalBox.focus();
    
}

// Check if the device is mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.addEventListener('load', scrollToTarget);
}


// Make sure the updateHighlights function exists and is correctly implemented
function updateHighlights() {
  const fullText = textarea.value;
  
  correctedHighlightedText = emptyText;
 correctedHighlightedTwoText = emptyText;
 
  suggestionsFromAPI.forEach(correction => {
    const errorText = correction.errorText;
    const suggestionText = correction.suggestions[0]; // Assuming we apply the first suggestion for the corrected text
    const regex = new RegExp(errorText, 'gi');
    
    if(seeOriginal){
      highlightedText = originalText;
     
    }else{
      
      highlightedText = fullText;
    }
    console.log('one');
    // Highlight the original errors
    if (window.innerWidth <= 768) {
      originalText = originalText.replace(regex, match => {
      return `<span class="highlight">${errorText}</span>`;
    });

overlay.innerHTML = originalText.replace(/\n/g, '<br>');

  } else {
    originalText = originalText.replace(regex, match => {
      return `<span class="highlight">${errorText}</span>`;
    });

overlay.innerHTML = originalText.replace(/\n/g, '<br>');

  }
    // Apply the first suggestion to the corrected text
    
  });

  // Reflect the highlights in the overlays
  
}

setupTextSeeListener();

let nowHidden = false;

function setupTextSeeListener() {
  textsee.addEventListener('click', toggleTextSee);
  
  function toggleTextSee() {
    if (textsee.innerHTML === 'Mga naitamang teksto.') {     
      
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

textsee.innerHTML = 'Mga naitamang teksto.';
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

