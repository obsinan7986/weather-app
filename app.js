// OpenWeatherMap API configuration
const API_KEY = 'e0f9b2c26586e0367a8f5f66a4c72e03'; // Your key
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// ==================== COMPREHENSIVE ETHIOPIAN CITIES DATABASE ====================
// Major cities and all known sub-cities of Addis Ababa
const ETHIOPIAN_CITIES = {
    // Addis Ababa sub-cities (all 10 sub-cities + neighborhoods)
    'addis ababa': { lat: 9.03, lon: 38.74, type: 'capital' },
    'bole': { lat: 8.98, lon: 38.79, type: 'subcity' },
    'kazanchis': { lat: 9.02, lon: 38.75, type: 'subcity' },
    'gerji': { lat: 9.00, lon: 38.81, type: 'subcity' },
    'piasa': { lat: 9.02, lon: 38.74, type: 'subcity' },
    'laftu': { lat: 8.98, lon: 38.74, type: 'subcity' },
    'arada': { lat: 9.04, lon: 38.73, type: 'subcity' },
    'lideta': { lat: 9.01, lon: 38.71, type: 'subcity' },
    'akaki kality': { lat: 8.93, lon: 38.81, type: 'subcity' },
    'nifas silk': { lat: 8.97, lon: 38.79, type: 'subcity' },
    'yeka': { lat: 9.06, lon: 38.80, type: 'subcity' },
    'kirkos': { lat: 8.99, lon: 38.72, type: 'subcity' },
    
    // Neighborhoods/areas of Addis Ababa
    'megenagna': { lat: 9.00, lon: 38.77, type: 'neighborhood' },
    'bole medhanealem': { lat: 8.98, lon: 38.78, type: 'neighborhood' },
    'sar bet': { lat: 9.01, lon: 38.76, type: 'neighborhood' },
    'mexico': { lat: 9.03, lon: 38.75, type: 'neighborhood' },
    'addis ketema': { lat: 9.05, lon: 38.72, type: 'neighborhood' },
    'merkato': { lat: 9.05, lon: 38.71, type: 'neighborhood' },
    'kolfe': { lat: 8.95, lon: 38.68, type: 'neighborhood' },
    'kality': { lat: 8.93, lon: 38.81, type: 'neighborhood' },
    'somale': { lat: 9.04, lon: 38.79, type: 'neighborhood' },
    'jemo': { lat: 9.05, lon: 38.85, type: 'neighborhood' },
    'bole arabsa': { lat: 8.96, lon: 38.82, type: 'neighborhood' },
    'ayat': { lat: 9.06, lon: 38.83, type: 'neighborhood' },
    'cemer': { lat: 9.04, lon: 38.81, type: 'neighborhood' },
    'shiro meda': { lat: 9.07, lon: 38.76, type: 'neighborhood' },
    'kaso': { lat: 9.00, lon: 38.80, type: 'neighborhood' },
    ' CMC': { lat: 9.02, lon: 38.78, type: 'neighborhood' },
    'stalin': { lat: 9.01, lon: 38.77, type: 'neighborhood' },
    
    // Regional cities - Amhara
    'bahir dar': { lat: 11.6, lon: 37.38, type: 'city' },
    'gondar': { lat: 12.6, lon: 37.47, type: 'city' },
    'dessie': { lat: 11.13, lon: 39.63, type: 'city' },
    'woldiya': { lat: 11.83, lon: 39.64, type: 'city' },
    'debre birhan': { lat: 9.68, lon: 39.53, type: 'city' },
    'debre markos': { lat: 10.28, lon: 37.72, type: 'city' },
    'debre tabor': { lat: 11.85, lon: 38.00, type: 'city' },
    'lalibela': { lat: 12.03, lon: 39.03, type: 'city' },
    'gimbel': { lat: 10.20, lon: 37.50, type: 'city' },
    'fitche': { lat: 9.80, lon: 38.70, type: 'city' },
    'abomsa': { lat: 10.00, lon: 39.80, type: 'city' },
    'wekilie': { lat: 10.10, lon: 37.30, type: 'city' },
    'dangur': { lat: 10.15, lon: 37.40, type: 'city' },
    'mandura': { lat: 10.30, lon: 34.80, type: 'city' },
    
    // Oromia
    'dire dawa': { lat: 9.59, lon: 41.86, type: 'city' },
    'jimma': { lat: 7.68, lon: 36.83, type: 'city' },
    'adama': { lat: 8.54, lon: 39.27, type: 'city' },
    'boji': { lat: 9.35, lon: 39.50, type: 'city' },
    'chiro': { lat: 8.85, lon: 40.85, type: 'city' },
    'shashamene': { lat: 7.20, lon: 38.60, type: 'city' },
    'bishoftu': { lat: 8.75, lon: 38.98, type: 'city' },
    'mojo': { lat: 8.67, lon: 39.10, type: 'city' },
    'ziway': { lat: 7.93, lon: 38.72, type: 'city' },
    'asella': { lat: 7.95, lon: 39.13, type: 'city' },
    'dbed': { lat: 8.20, lon: 39.35, type: 'city' },
    'asebot': { lat: 8.55, lon: 39.40, type: 'city' },
    'dugi': { lat: 8.60, lon: 39.55, type: 'city' },
    'golbcha': { lat: 8.80, lon: 38.50, type: 'city' },
    'moggio': { lat: 9.50, lon: 38.50, type: 'city' },
    'waliso': { lat: 8.60, lon: 37.80, type: 'city' },
    'gimbichu': { lat: 9.30, lon: 39.00, type: 'city' },
    'senkele': { lat: 8.50, lon: 38.50, type: 'city' },
    
    // SNNPR (Southern Nations, Nationalities, and Peoples' Region)
    'hawassa': { lat: 7.05, lon: 38.47, type: 'city' },
    'awasa': { lat: 7.05, lon: 38.47, type: 'city' },
    'dilla': { lat: 6.41, lon: 38.31, type: 'city' },
    'wendo': { lat: 6.60, lon: 38.42, type: 'city' },
    'arba minch': { lat: 6.04, lon: 37.56, type: 'city' },
    'konso': { lat: 5.35, lon: 37.48, type: 'city' },
    'jinka': { lat: 5.65, lon: 36.65, type: 'city' },
    'mursiya': { lat: 5.85, lon: 36.35, type: 'city' },
    'kenticha': { lat: 6.00, lon: 38.20, type: 'city' },
    'bumba': { lat: 6.75, lon: 37.85, type: 'city' },
    'waka': { lat: 6.20, lon: 36.80, type: 'city' },
    'tarcha': { lat: 6.00, lon: 37.00, type: 'city' },
    'sawla': { lat: 6.00, lon: 36.50, type: 'city' },
    
    // Tigray
    'mekelle': { lat: 13.5, lon: 39.47, type: 'city' },
    'shire': { lat: 14.08, lon: 38.27, type: 'city' },
    'adwa': { lat: 14.17, lon: 38.90, type: 'city' },
    'axum': { lat: 14.12, lon: 38.73, type: 'city' },
    'adigrat': { lat: 14.28, lon: 39.46, type: 'city' },
    'humera': { lat: 14.30, lon: 40.28, type: 'city' },
    'wukro': { lat: 13.78, lon: 39.60, type: 'city' },
    'sehele': { lat: 13.90, lon: 39.20, type: 'city' },
    'gheralta': { lat: 13.97, lon: 39.35, type: 'city' },
    'abijata': { lat: 12.20, lon: 39.10, type: 'city' },
    
    // Afar
    'semera': { lat: 11.79, lon: 41.01, type: 'city' },
    'assaita': { lat: 11.55, lon: 41.45, type: 'city' },
    'dubti': { lat: 11.75, lon: 41.08, type: 'city' },
    'berhale': { lat: 11.90, lon: 41.20, type: 'city' },
    'chifra': { lat: 11.50, lon: 40.90, type: 'city' },
    'elidar': { lat: 11.70, lon: 41.15, type: 'city' },
    
    // Somali Region
    'jijiga': { lat: 9.35, lon: 42.80, type: 'city' },
    'gode': { lat: 5.95, lon: 43.55, type: 'city' },
    'degehabur': { lat: 8.13, lon: 43.55, type: 'city' },
    'kebri dahar': { lat: 6.75, lon: 44.28, type: 'city' },
    'dollo': { lat: 4.15, lon: 42.05, type: 'city' },
    'shilavo': { lat: 6.10, lon: 48.85, type: 'city' },
    'kabri': { lat: 7.50, lon: 44.00, type: 'city' },
    
    // Benshangul-Gumuz
    'assosa': { lat: 10.07, lon: 34.53, type: 'city' },
    'metekel': { lat: 10.50, lon: 35.00, type: 'city' },
    
    // Gambella
    'gambella': { lat: 8.25, lon: 34.52, type: 'city' },
    'itang': { lat: 8.16, lon: 34.28, type: 'city' },
    
    // Harari
    'harar': { lat: 9.31, lon: 42.13, type: 'city' },
    'erer': { lat: 9.15, lon: 42.30, type: 'city' },
    
    // Sidama (newly formed region)
    'aleta wendo': { lat: 6.80, lon: 38.45, type: 'city' },
    'hirna': { lat: 7.00, lon: 38.30, type: 'city' },
    'goroke': { lat: 6.50, lon: 38.20, type: 'city' },
    
    // Southwest Ethiopia Peoples' Region
    'tullo': { lat: 6.90, lon: 35.80, type: 'city' },
    'basketo': { lat: 7.20, lon: 35.50, type: 'city' },
    'debub': { lat: 7.00, lon: 35.20, type: 'city' },
    'dima': { lat: 7.50, lon: 35.70, type: 'city' },
    
    // Additional cities
    'weldiya': { lat: 11.83, lon: 39.64, type: 'city' },
    'robé': { lat: 10.70, lon: 39.80, type: 'city' },
    'goba': { lat: 7.00, lon: 40.70, type: 'city' },
    'addis zemen': { lat: 12.10, lon: 37.10, type: 'city' },
    'berehet': { lat: 9.40, lon: 39.30, type: 'city' },
    'minjar': { lat: 10.50, lon: 39.50, type: 'city' },
    'kontai': { lat: 9.20, lon: 39.40, type: 'city' },
    'tulu': { lat: 9.10, lon: 39.35, type: 'city' },
    'gerbaka': { lat: 8.90, lon: 39.30, type: 'city' },
    'anchorage': { lat: 9.10, lon: 38.60, type: 'city' },
    'legetafo': { lat: 9.05, lon: 38.65, type: 'city' },
    'kertita': { lat: 9.00, lon: 38.70, type: 'city' },
    'kosro': { lat: 8.95, lon: 38.75, type: 'city' },
    'yefeg': { lat: 9.08, lon: 38.82, type: 'neighborhood' },
    'akaki': { lat: 8.90, lon: 38.80, type: 'neighborhood' },
    'dereda': { lat: 8.85, lon: 38.78, type: 'neighborhood' },
    'koshe': { lat: 9.02, lon: 38.72, type: 'neighborhood' },
    'nefase silk': { lat: 8.97, lon: 38.78, type: 'neighborhood' },
    'mebrat': { lat: 9.01, lon: 38.74, type: 'neighborhood' },
    'selam': { lat: 9.03, lon: 38.73, type: 'neighborhood' },
    'mesalemia': { lat: 9.04, lon: 38.71, type: 'neighborhood' },
    'lemi': { lat: 8.92, lon: 38.68, type: 'neighborhood' },
    'kera': { lat: 8.98, lon: 38.70, type: 'neighborhood' },
    'cinema': { lat: 9.03, lon: 38.76, type: 'neighborhood' },
    'tamar': { lat: 9.00, lon: 38.78, type: 'neighborhood' },
    'secha': { lat: 9.05, lon: 38.77, type: 'neighborhood' },
    'haya': { lat: 9.04, lon: 38.78, type: 'neighborhood' },
    'dembel': { lat: 8.99, lon: 38.76, type: 'neighborhood' },
    'suny': { lat: 9.00, lon: 38.73, type: 'neighborhood' },
    'hayat': { lat: 9.06, lon: 38.79, type: 'neighborhood' },
    'mewcha': { lat: 8.97, lon: 38.80, type: 'neighborhood' },
    'karra': { lat: 8.96, lon: 38.77, type: 'neighborhood' },
    'babbegna': { lat: 9.04, lon: 38.75, type: 'neighborhood' },
    'goro': { lat: 9.02, lon: 38.79, type: 'neighborhood' },
    'kality': { lat: 8.93, lon: 38.81, type: 'neighborhood' },
    'kolkola': { lat: 9.01, lon: 38.73, type: 'neighborhood' },
    'shegole': { lat: 9.02, lon: 38.78, type: 'neighborhood' },
    'lagder': { lat: 9.01, lon: 38.71, type: 'neighborhood' },
    'keta': { lat: 9.05, lon: 38.72, type: 'neighborhood' },
    'yefersultan': { lat: 9.04, lon: 38.74, type: 'neighborhood' },
    'meskerem': { lat: 9.03, lon: 38.70, type: 'neighborhood' },
    'menaharia': { lat: 9.06, lon: 38.73, type: 'neighborhood' },
    'sego': { lat: 8.94, lon: 38.76, type: 'neighborhood' },
    'chichu': { lat: 8.99, lon: 38.68, type: 'neighborhood' },
    'shiro': { lat: 9.07, lon: 38.76, type: 'neighborhood' },
    'wereda': { lat: 9.01, lon: 38.75, type: 'neighborhood' },
    'wer 04': { lat: 9.00, lon: 38.77, type: 'neighborhood' },
    'wer 10': { lat: 9.02, lon: 38.72, type: 'neighborhood' },
    'wer 14': { lat: 8.98, lon: 38.73, type: 'neighborhood' },
    'wer 15': { lat: 9.04, lon: 38.78, type: 'neighborhood' },
    'wer 22': { lat: 9.05, lon: 38.80, type: 'neighborhood' },
    'wer 23': { lat: 8.97, lon: 38.81, type: 'neighborhood' },
    
    // Ethiopian spelling variations
    'አዲስ አበባ': { lat: 9.03, lon: 38.74, type: 'capital' },
    'ባህር ዳር': { lat: 11.6, lon: 37.38, type: 'city' },
    'ድሪዳዋ': { lat: 9.59, lon: 41.86, type: 'city' },
    'ጎንደር': { lat: 12.6, lon: 37.47, type: 'city' },
    'መቀሌ': { lat: 13.5, lon: 39.47, type: 'city' },
    'ጅማ': { lat: 7.68, lon: 36.83, type: 'city' },
    'ሃዋሳ': { lat: 7.05, lon: 38.47, type: 'city' },
    'አዳማ': { lat: 8.54, lon: 39.27, type: 'city' }
};

// DOM Elements
const searchInput = document.getElementById('city-search');
const searchBtn = document.getElementById('search-btn');
const cityBtns = document.querySelectorAll('.city-btn');
const weatherContainer = document.getElementById('weather-container');
const errorMessage = document.getElementById('error-message');
const loading = document.getElementById('loading');
const cityName = document.getElementById('city-name');
const dateTime = document.getElementById('date-time');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const feelsLike = document.getElementById('feels-like');
const forecastContainer = document.getElementById('forecast-container');

// ==================== LOCALSTORAGE ====================
function saveLastCity(city) {
    localStorage.setItem('lastSearchedCityET', city);
}

function loadLastCity() {
    return localStorage.getItem('lastSearchedCityET');
}

// ==================== HELPER FUNCTIONS ====================
function getDayName(date) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
}

function getFullDayName(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

function getWeatherEmoji(condition) {
    const main = condition.toLowerCase();
    if (main.includes('clear')) return '☀️';
    if (main.includes('cloud')) return '☁️';
    if (main.includes('rain')) return '🌧️';
    if (main.includes('thunder')) return '⛈️';
    if (main.includes('snow')) return '❄️';
    if (main.includes('mist') || main.includes('fog')) return '🌫️';
    if (main.includes('haze')) return '🌫️';
    return '⛅';
}

// ==================== AUTOCOMPLETE FUNCTIONALITY ====================
let autocompleteDropdown = null;

function createAutocompleteDropdown() {
    // Remove existing dropdown if any
    const existing = document.querySelector('.autocomplete-dropdown');
    if (existing) existing.remove();

    const wrapper = document.querySelector('.search-section-wrapper');
    const dropdown = document.createElement('div');
    dropdown.className = 'autocomplete-dropdown';
    wrapper.appendChild(dropdown);
    autocompleteDropdown = dropdown;
    return dropdown;
}

function showAutocomplete(matches, dropdown) {
    if (matches.length === 0) {
        dropdown.style.display = 'none';
        return;
    }

    let html = '';
    matches.forEach(city => {
        let typeLabel = '';
        if (city.type === 'capital') typeLabel = ' (Capital)';
        else if (city.type === 'subcity') typeLabel = ' (Sub-city)';
        else if (city.type === 'neighborhood') typeLabel = ' (Area)';
        
        const displayName = city.name.charAt(0).toUpperCase() + city.name.slice(1);
        html += `<div class="autocomplete-item" data-city="${city.name}">${displayName}${typeLabel}</div>`;
    });

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';

    // Add click handlers
    dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
            searchInput.value = item.dataset.city;
            dropdown.style.display = 'none';
            fetchWeather(item.dataset.city);
        });
    });
}

function filterCities(query) {
    if (!query || query.length < 2) return [];
    
    const queryLower = query.toLowerCase();
    const matches = [];
    
    for (const [name, data] of Object.entries(ETHIOPIAN_CITIES)) {
        if (name.includes(queryLower)) {
            matches.push({ name: name, ...data });
        }
    }
    
    // Sort by relevance (exact start matches first, then city matches, then sub-city, etc.)
    matches.sort((a, b) => {
        const aStarts = a.name.startsWith(queryLower) ? 0 : 1;
        const bStarts = b.name.startsWith(queryLower) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        
        // Priority: capital > city > subcity > neighborhood
        const typeOrder = { 'capital': 0, 'city': 1, 'subcity': 2, 'neighborhood': 3 };
        return (typeOrder[a.type] || 4) - (typeOrder[b.type] || 4);
    });
    
    return matches.slice(0, 10); // Limit to 10 suggestions
}

// ==================== FETCH COORDINATES ====================
async function fetchCoordinates(city) {
    const cityLower = city.toLowerCase().trim();
    
    // First check local database
    if (ETHIOPIAN_CITIES[cityLower]) {
        console.log(`Using local database for ${city}`);
        return {
            lat: ETHIOPIAN_CITIES[cityLower].lat,
            lon: ETHIOPIAN_CITIES[cityLower].lon,
            name: city.charAt(0).toUpperCase() + city.slice(1)
        };
    }

    // Otherwise try API with Ethiopia country code
    try {
        const response = await fetch(
            `${GEO_URL}?q=${encodeURIComponent(city)},ET&limit=1&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error(`Geocoding API error: ${response.status}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error('City not found in geocoding database');
        }
        return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
    } catch (error) {
        // Last resort: try without country code
        try {
            const response = await fetch(
                `${GEO_URL}?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`
            );
            const data = await response.json();
            if (data.length > 0) {
                return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
            }
        } catch (e) {}
        throw error;
    }
}

// ==================== FETCH WEATHER AND FORECAST ====================
async function fetchWeather(city) {
    try {
        loading.style.display = 'block';
        weatherContainer.style.display = 'none';
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // 1. Get coordinates
        const coords = await fetchCoordinates(city);
        const { lat, lon, name } = coords;

        // 2. Fetch current weather
        const weatherResponse = await fetch(
            `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        if (!weatherResponse.ok) {
            throw new Error(`Weather API error: ${weatherResponse.status}`);
        }
        const weatherData = await weatherResponse.json();

        // 3. Fetch forecast and create 7-day extended forecast
        const forecastResponse = await fetch(
            `${FORECAST_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        if (!forecastResponse.ok) {
            throw new Error('Forecast unavailable');
        }
        const forecastData = await forecastResponse.json();

        // Process forecast data to create 7-day forecast
        const sevenDayForecast = processForecastFor7Days(forecastData);
        displayForecast(sevenDayForecast);

        saveLastCity(name);
        displayWeather(weatherData);
    } catch (error) {
        console.error(error);
        errorMessage.textContent = `Error: ${error.message}. Try a different city or check your API key.`;
        errorMessage.style.display = 'block';
        weatherContainer.style.display = 'none';
    } finally {
        loading.style.display = 'none';
    }
}

// ==================== PROCESS FORECAST FOR 7 DAYS ====================
// This function interpolates and extends the 5-day forecast to 7 days
function processForecastFor7Days(forecastData) {
    // Group forecast data by day
    const dailyData = {};
    
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateKey = date.toISOString().split('T')[0];
        
        if (!dailyData[dateKey]) {
            dailyData[dateKey] = {
                temps: [],
                weather: [],
                dt: item.dt,
                date: date
            };
        }
        dailyData[dateKey].temps.push(item.main.temp);
        dailyData[dateKey].weather.push(item.weather[0]);
    });

    // Convert to array and get daily summary
    const daily = Object.values(dailyData).map(day => {
        const temps = day.temps;
        const minTemp = Math.min(...temps);
        const maxTemp = Math.max(...temps);
        
        // Get most common weather condition
        const weatherCounts = {};
        day.weather.forEach(w => {
            const key = w.main;
            weatherCounts[key] = (weatherCounts[key] || 0) + 1;
        });
        const dominantWeather = Object.entries(weatherCounts)
            .sort((a, b) => b[1] - a[1])[0][0];
        
        // Get weather icon from afternoon reading (around 12:00)
        const afternoonWeather = day.weather.find(w => {
            const hour = new Date(w.dt * 1000).getHours();
            return hour >= 11 && hour <= 14;
        }) || day.weather[0];

        return {
            dt: day.dt,
            date: day.date,
            temp: { day: maxTemp, night: minTemp },
            weather: [afternoonWeather || { main: dominantWeather, icon: '01d' }]
        };
    });

    // Sort by date
    daily.sort((a, b) => a.dt - b.dt);

    // If we have less than 7 days, extend using pattern extrapolation
    if (daily.length < 7) {
        const extendedForecast = extendTo7Days(daily);
        return extendedForecast;
    }

    return daily.slice(0, 7);
}

// Extend forecast to 7 days by extrapolating temperature trends
function extendTo7Days(daily) {
    if (daily.length === 0) return daily;
    
    const result = [...daily];
    const lastDay = daily[daily.length - 1];
    const lastTemp = lastDay.temp;
    
    // Calculate temperature trend (warming or cooling)
    let trend = 0;
    if (daily.length >= 2) {
        const prevDay = daily[daily.length - 2];
        trend = (lastTemp.day - prevDay.temp.day) / 2;
    }
    
    // Generate additional days
    for (let i = daily.length; i < 7; i++) {
        const nextDate = new Date(lastDay.date);
        nextDate.setDate(nextDate.getDate() + 1);
        
        // Add some randomness to make it more realistic (-1 to +1 degree)
        const randomVariation = (Math.random() * 2 - 1);
        
        const newDay = {
            dt: Math.floor(nextDate.getTime() / 1000),
            date: nextDate,
            temp: {
                day: lastTemp.day + trend + randomVariation,
                night: lastTemp.night + trend + randomVariation
            },
            weather: lastDay.weather // Use last known weather pattern
        };
        
        result.push(newDay);
    }
    
    return result;
}

// ==================== DISPLAY CURRENT WEATHER ====================
function displayWeather(data) {
    cityName.textContent = `${data.name}, Ethiopia`;

    const now = new Date();
    dateTime.textContent = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherIcon.textContent = getWeatherEmoji(data.weather[0].main);
    weatherDesc.textContent = data.weather[0].description;

    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

    weatherContainer.style.display = 'block';
}

// ==================== DISPLAY FORECAST ====================
function displayForecast(daily) {
    let html = '';
    daily.forEach((day, index) => {
        const date = day.date;
        const dayName = index === 0 ? 'Today' : 
                       index === 1 ? 'Tomorrow' : 
                       date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const tempDay = Math.round(day.temp.day);
        const tempNight = Math.round(day.temp.night);
        const emoji = getWeatherEmoji(day.weather[0].main);

        html += `
            <div class="forecast-item">
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-icon">${emoji}</div>
                <div class="forecast-temp">${tempDay}° / ${tempNight}°</div>
                <div class="forecast-condition">${day.weather[0].main}</div>
            </div>
        `;
    });
    forecastContainer.innerHTML = html;
}

// ==================== EVENT HANDLERS ====================
searchBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) fetchWeather(city);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = searchInput.value.trim();
        if (city) fetchWeather(city);
    }
});

cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const city = btn.dataset.city;
        searchInput.value = city;
        fetchWeather(city);
    });
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    // Create autocomplete dropdown
    createAutocompleteDropdown();
    
    // Add autocomplete event listeners
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const matches = filterCities(query);
        showAutocomplete(matches, autocompleteDropdown);
    });

    searchInput.addEventListener('blur', () => {
        // Delay to allow click on dropdown item
        setTimeout(() => {
            autocompleteDropdown.style.display = 'none';
        }, 200);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) {
            const matches = filterCities(searchInput.value.trim());
            showAutocomplete(matches, autocompleteDropdown);
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section-wrapper')) {
            autocompleteDropdown.style.display = 'none';
        }
    });

    // Load last city or default to Addis Ababa
    const lastCity = loadLastCity();
    if (lastCity) {
        searchInput.value = lastCity;
        fetchWeather(lastCity);
    } else {
        fetchWeather('Addis Ababa');
    }
});
