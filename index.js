const cardData = [
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2010' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2011' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2012' },
    { imageUrl: 'images/ronaldo.jpg', name: 'Cristiano Ronaldo', nationality: 'Portugal', year: '2013' },
    { imageUrl: 'images/ronaldo.jpg', name: 'Cristiano Ronaldo', nationality: 'Portugal', year: '2014' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2015' },
    { imageUrl: 'images/ronaldo.jpg', name: 'Cristiano Ronaldo', nationality: 'Portugal', year: '2016' },
    { imageUrl: 'images/ronaldo.jpg', name: 'Cristiano Ronaldo', nationality: 'Portugal', year: '2017' },
    { imageUrl: 'images/modric.webp', name: 'Luka Modric', nationality: 'Croatia', year: '2018' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2019' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2021' },
    { imageUrl: 'images/benzema.webp', name: 'Karim Benzema ', nationality: 'France', year: '2022' },
    { imageUrl: 'images/messi.webp', name: 'Lionel Messi', nationality: 'Argentina', year: '2023' },
  ];

  // Function to dynamically generate cards
  function generateCards() {
    const cardContainer = document.getElementById('card-container');

    cardData.forEach(data => {
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${data.imageUrl}" class="card-img-top" alt="${data.title}"style="height: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <span class="card-text">${data.nationality}</span>
            <span>${data.year}</span>
          </div>
        </div>
      `;

      cardContainer.appendChild(card);
    });
  }

  // Call the function to generate cards
  generateCards();

  const cardFifa =[
    {image: 'images/ronaldof.jpg', player: 'Cristiano Ronaldo', country: 'Portugal', winningYear: '2016'},
    {image: 'images/ronaldof.jpg', player: 'Cristiano Ronaldo', country: 'Portugal', winningYear: '2017'},
    {image: 'images/modricf.webp', player: 'Luka Modrić', country: 'Croatia', winningYear: '2018'},
    {image: 'images/messif.jpg', player: 'Messi', country: 'Argentina', winningYear: '2019'},
    {image: 'images/lewef.jpg', player: 'Robert Lewandowski', country: 'Poland', winningYear: '2020'},
    {image: 'images/lewef.jpg', player: 'Robert Lewandowski', country: 'Poland', winningYear: '2021'},
    {image: 'images/messif.jpg', player: 'Messi', country: 'Argentina', winningYear: '2022'},
    {image: 'images/messif.jpg', player: 'Messi', country: 'Argentina', winningYear: '2023'},

  ];

  function generateFifaCard () {
    const cardFifaContainer = document.getElementById('card-fifacontainer')

    cardFifa.forEach(data =>{
        const fifa = document.createElement('div')
        fifa.className = 'col';
        fifa.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${data.image}" class="card-img-top" alt="${data.title}"style="height: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.player}</h5>
            <span class="card-text">${data.country}</span>
            <span>${data.winningYear}</span>
          </div>
        </div>
        `;

        cardFifaContainer.appendChild(fifa);
    })
  }

  generateFifaCard();