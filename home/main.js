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
  
  const hintLabel = document.querySelector('.hint-label');

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
    const overlaycorrected = document.querySelector('.overlayCorrected');
    
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
const textOriginalText = document.getElementById('originaltext');
const textsee = document.querySelector('.textsee');
const hintLabel = document.querySelector('.hint-label');
const TEXTAREA = document.querySelector('.editText');

const editText2 = document.querySelector('.editText2');
const textOriginal = document.getElementById('textOriginal');
const textoriginal2 = document.getElementById('originaltext');
textsee.style.display = 'none';
textOriginal.style.display = 'none';
textoriginal2.style.display = 'none';
let emptyText = null;
let originalText = null;

let seeOriginal = false;

let suggestionsFromAPI = null;
let correctedHighlightedText = null;
textOriginalText.style.display = 'none';
correctedbox.style.display = 'none';

loading.style.display = 'none';
loading.style.visibility = 'hidden';

const RefreshButton = document.querySelector('.refreshButton');

RefreshButton.style.visibility = 'hidden';
    document.querySelector('.refreshButton').addEventListener('click', function() {
      
        document.querySelector('.editText').value = '';
       textsee.style.display = 'none';
       handleTextSeeUnpressed();
       TEXTAREA.removeAttribute('readonly'); // Makes the textarea editable again
        correctButton.style.visibility = 'visible';
refreshButton.style.visibility = 'visible';
TEXTAREA.style.display = 'block';
overlay.style.display = 'none';
hintLabel.style.display = 'block';
textinsideCorrectedBox.value=' ';
textOverlayInsideCorrectedBoxTwo.value = '';
RefreshButton.style.visibility = 'hidden';
        correctedbox.style.display = 'none';
        textOriginalText.value = '';
        textOriginalText.style.display = 'none';
        checkContainer.style.display = 'none';
        clear = true;
        overlay.value = '';
        textresult.value = '';
        maxwidth2.style.display = 'inline';
        textresultcontainer.style.display = 'none'; // Hide the container on refresh


  const textarea = document.querySelector('.editText');
  
  if (textarea.value.length > 0) {
    hintLabel.style.display = 'none';
  } else {
    hintLabel.style.display = 'block';
  }


        if (window.innerWidth <= 768) {
            textresult.style.display = 'none';
            textresultlayouts.style.display = 'none';
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




document.querySelector('.correctButton').addEventListener('click', async function () {
  if (textarea.value.trim() === "") {
    alert("Pakiusap, maglagay ng teksto para masuri.");
  } else {
    try {
      textarea.setAttribute('readonly', true); // Makes the textarea non-editable
      
      loading.style.display = 'block';
      loading.style.visibility = 'visible';
      correctButton.style.visibility = 'hidden';

      checkContainer.innerHTML = 'Munkahing Pagtatama';
      window.addEventListener('resize', adjustFontSize);

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
        const ruleDesc = correction.ruleDescription;
        const suggestionText = [...new Set(correction.suggestions)];

        const fullText = textarea.value;
        originalText = fullText;
        textoriginal2.textContent = fullText;
        emptyText = textarea.value;
        editText2.textContent = emptyText;
        overlaycorrected.textContent = fullText;
        textOriginalText.value = fullText;
        console.log('Error text:', errorsTextarea);
        console.log('Rule description:', ruleDesc);
        console.log('Suggestions:', suggestionText);

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

        // Add click event listeners for each suggestion
        clonedNewContainer.querySelectorAll('.suggestion').forEach(suggestionElem => {
          suggestionElem.addEventListener('click', function () {
            const selectedSuggestion = this.textContent;

            if (window.innerWidth <= 768) {
              
              overlay.style.fontSize = '14px';
              
              textsee.style.display = 'block';
              if (getComputedStyle(overlay).paddingTop === '8px') {
                overlay.style.paddingTop = '28px';
              }
              if (getComputedStyle(overlaycorrected).paddingTop === '8px') {
                overlaycorrected.style.paddingTop = '28px';
              }
              
            } else if (window.innerWidth <= 1024) {
              
              overlaycorrected.style.fontSize = '14px';
              textsee.style.display = 'block';
              if (getComputedStyle(overlay).paddingTop === '11px') {
                overlay.style.paddingTop = '30px';
              }
              if (getComputedStyle(overlaycorrected).paddingTop === '11px') {
                overlaycorrected.style.paddingTop = '30px';
              }
              
            } else {
              textsee.style.display = 'none';
              overlay.style.paddingTop = '';
              overlaycorrected.style.paddingTop = '';
            }

            const regex = new RegExp(errorsTextarea, 'gi');
            textarea.value = textarea.value.replace(errorsTextarea, selectedSuggestion);
            textOriginal.value = textarea.value.replace(errorsTextarea, selectedSuggestion);

            correctedHighlightedText = correctedHighlightedText.replace(regex, match => {
              return `<span class="highlightCorrected">${errorsTextarea}</span>`;
            });

            overlaycorrected.innerHTML = correctedHighlightedText.replace(/\n/g, '<br>');
clonedNewContainer.remove();
            updateHighlights();
            overlaycorrected.style.display = 'block';
            correctedbox.style.display = 'block';
            textsee.innerHTML = '< See Original';
            textOriginal.style.display = 'block';

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
    checkContainer.style.display = 'none';
    textarea.style.display = 'none';
    overlay.style.display = 'none';
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
  RefreshButton.style.visibility = 'hidden';
}

let highlightedText = null;


// Make sure the updateHighlights function exists and is correctly implemented
function updateHighlights() {
  const fullText = textarea.value;
  
  correctedHighlightedText = emptyText;

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
    highlightedText = highlightedText.replace(regex, match => {
      return `<span class="highlight">${errorText}</span>`;
    });

    // Apply the first suggestion to the corrected text
    
  });

  // Reflect the highlights in the overlays
  overlay.innerHTML = highlightedText.replace(/\n/g, '<br>');
 

}


let nowHidden = false;

function setupTextSeeListener() {
  textsee.addEventListener('click', toggleTextSee);
  texthide.addEventListener('click', hideText);


  function toggleTextSee() {
    if (correctedbox.style.display === 'none' || correctedbox.style.display === '') {     
      handleTextSeePressed();
    } else {
      handleTextSeeUnpressed();
    }
  }
}

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
  textOriginalText.style.display = 'block';
  seeOriginal = true;
  makeNonEditable();
  updateHighlights();
}

function handleTextSeePressed() {
  // Actions for when the button is pressed (show corrected text)
  overlaycorrected.style.display = 'block';
  correctedbox.style.display = 'block';
  overlay.style.display = 'none';
  overlay.style.display = 'none';
  textoriginal2.style.display = 'none';
  textOriginal.style.display = 'block';
  textOriginalText.style.display = 'none';
  textarea.style.display = 'none';
  textsee.innerHTML = '< See Original';
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
  seeOriginal = true;
  makeNonEditable();
  console.log('ONE');
  updateHighlights();
}

setupTextSeeListener();


makeNonEditable();


// The rest of the code remains the same
    // Synchronize the textarea scrolling with the overlay
    textarea.addEventListener('scroll', function() {
        overlay.scrollTop = textarea.scrollTop;
        overlay.scrollLeft = textarea.scrollLeft;
    });

    // Adjust the overlay text when the user types
    
    const textresulttext = document.getElementById('textresult');

    // Method to make textarea non-editable but copyable
    function makeNonEditable() {
        textOriginalText.setAttribute('readonly', true); // Makes the textarea non-editable

textOriginal.setAttribute('readonly', true); // Makes the textarea non-editable

    }

    // Call the method to make it non-editable
});

