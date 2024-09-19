document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('form__input');
  const suggestionsContainer = document.getElementById('form__list');

  input.addEventListener('input', () => {
    const query = input.value.trim();

    if (query.length < 2) {
      suggestionsContainer.innerHTML = '';
      return;
    }

    fetch(`http://localhost:8000?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        suggestionsContainer.innerHTML = '';
        data.forEach(item => {
          const fullName = `${item.first_name} ${item.last_name}`;
          const div = document.createElement('div');
          div.classList.add('form__item');
          div.textContent = fullName;
          div.addEventListener('click', () => {
            input.value = fullName;
            suggestionsContainer.innerHTML = '';
          });
          suggestionsContainer.appendChild(div);
        });
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  });

  document.addEventListener('click', (event) => {
    if (!suggestionsContainer.contains(event.target) && event.target !== input) {
      suggestionsContainer.innerHTML = '';
    }
  });
});


// const api = `http://localhost:8000?query=${encodeURIComponent(query)}`;

// const stations = [];

// fetch(api)
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(line => {
//       stations.push(...line.stations);
//     })
//   });
  
// const searchInput = document.getElementById('form__input');
// const searchOptions = document.getElementById('form__list');

// function getOptions(word, stations) {
//   return stations.filter(s => {
//     // Определить совпадает ли то что мы вбили в input
//     // названиям станций внутри массива

//     const regex = new RegExp(word, 'gi');
//     return s.name.match(regex);
//   })
// }

// function displayOptions() {

//   console.log('this.value >> ', this.value);

//   const options = getOptions(this.value, stations);

//   const html = options
//     .map(station => {
//       const regex = new RegExp(this.value, 'gi');
//       const stationName = station.name.replace(regex,
//           `<span class="hl">${this.value}</span>`
//         )

//       return `<li><span>${stationName}</span></li>`;
//     })
//     .slice(0, 10)ы
//     .join('');

//   searchOptions.innerHTML = this.value ? html : null;
// }



// searchInput.addEventListener('change', displayOptions);
// searchInput.addEventListener('keyup', displayOptions);
