document.addEventListener('DOMContentLoaded', () => {
    const originalDorks = Array.from(document.querySelectorAll('.result-item')).map(item => item.textContent);
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    setToggleButtonText();

    toggleDarkModeButton.addEventListener('click', () => {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
        setToggleButtonText(); // Update the button text based on the current theme
    });

    document.getElementById('generateButton').addEventListener('click', function() {
        var userInput = document.getElementById('urlInput').value.trim();
        if(userInput) {
            updateDorks(userInput, originalDorks);
        } else {
            alert('Please enter a URL');
        }
    });

    function updateDorks(userUrl, dorks) {
        const resultItems = document.querySelectorAll('.result-item');
        resultItems.forEach((item, index) => {
            item.textContent = dorks[index].replace('{url}', userUrl);
            item.classList.remove('clicked');
            item.removeAttribute('data-clicked');
        });
    }

    document.getElementById('results').addEventListener('click', function(e) {
        if (e.target && e.target.matches('.result-item')) {
            const query = encodeURIComponent(e.target.textContent);
            const googleSearchURL = `https://www.google.com/search?q=${query}`;
            window.open(googleSearchURL, '_blank');
            e.target.classList.add('clicked');
            e.target.setAttribute('data-clicked', 'Clicked!');
        }
    });

    // Function to set the toggle button text based on the current theme
    function setToggleButtonText() {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
        if (isDarkMode) {
            toggleDarkModeButton.textContent = 'Toggle Light Mode';
            toggleDarkModeButton.className = 'light-theme-button'; // Assuming you have styles for this
        } else {
            toggleDarkModeButton.textContent = 'Toggle Dark Mode';
            toggleDarkModeButton.className = 'dark-theme-button'; // Assuming you have styles for this
        }
    }
});
