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

    return data.matches.map(match => {
      const context = match.context.text;
      const offset = match.context.offset;
      const length = match.context.length;
      const errorText = context.substr(offset, length);
      const ruleDescription = match.rule.description;
      const suggestions = match.replacements;
      return { errorText, suggestions, ruleDescription };
    });
  } catch (error) {
    console.error('Error in getSuggestionsFromAPI:', error);
    return [];
  }
};

document.querySelector('.correctButton').addEventListener('click', async function() {
  const words = textarea.value.split(/(\s+)/);
  checkContainer.innerHTML = 'Checking...'; // Loading indicator
  maxwidth2.style.display = 'flex';

  try {
    const suggestionsFromAPI = await getSuggestionsFromAPI(textarea.value);
    corrections = {};
    suggestionsFromAPI.forEach(suggestion => {
      corrections[suggestion.errorText.toLowerCase()] = suggestion;
    });
    console.log('Corrections:', corrections);

    // Highlight words with corrections
    const highlightedWords = words.map(word => {
      const correctionData = corrections[word.toLowerCase()];
      if (correctionData) {
        const clonedNewContainer = document.createElement('div');
        clonedNewContainer.classList.add('clonedContainer');

        const suggestions = Array.isArray(correctionData.suggestions) ? correctionData.suggestions.map(token => `<span class="textBackground">${token}</span>`).join(' ') : '';
        const ruleDescription = correctionData.ruleDescription || '';

        clonedNewContainer.innerHTML = `
          <div class="errorText">${word.replace(/\n/g, '<br>')}</div>
          <div class="suggestions">${suggestions}</div>
          <div class="ruleDescription">${ruleDescription}</div>
        `;
        clonedNewContainer.style.width = '80%';

        checkContainer.appendChild(clonedNewContainer);
        return `<span class="highlight">${word}</span>`;
      } else {
        return word;
      }
    }).join(' ');

    overlay.innerHTML = highlightedWords.replace(/\n/g, '<br>');

    const hasHighlights = highlightedWords.includes('<span class="highlight">');
    checkContainer.style.display = hasHighlights ? 'block' : 'none';
    maxwidth2.style.display = hasHighlights ? 'flex' : 'inline';

    if (!hasHighlights) {
      checkContainer.innerHTML = 'No corrections needed.';
    }
  } catch (error) {
    console.error('Error processing corrections:', error);
    checkContainer.innerHTML = 'An error occurred while checking the text.';
  }
});


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
        textresult.setAttribute('readonly', true); // Makes the textarea non-editable
        textresult.addEventListener('focus', () => {
            textresult.select(); // Select the text on focus for copying
        });
    }

    // Call the method to make it non-editable
});


