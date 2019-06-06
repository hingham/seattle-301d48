function startApp(){
    loadData();
    addListeners();
}

function loadData(){
    $.get('./data/page-1.json', 'json')
    .then(animals =>{
        addOptions(animals);
        displayPage(animals); 
    })
    .catch(error => console.error(error));
}

function addOptions(animals){
    let keywords = [];
    animals.forEach(animal=>{
        if(!keywords.includes(animal.keyword)){
            keywords.push(animal.keyword);
        }
    });
    keywords.forEach(keyword=>{
        $('#filter').append(`<option value=${keyword}>${keyword}</option>`)
    });
}

function addListeners(){
    $('#filter').on('change', event =>{
        const $keyword = $(event.target);
        const type = $keyword.val();

        let cards = $('.animal-card');

        $('div').hide();
        $(`div[data-type="${type}"]`).show();
        $('div').attr()
    })
}

function displayPage(animals){
    console.log('animals', animals)
    animals.forEach(animal=>{
        const $newAnimal = $('.card').clone();
        $newAnimal.find('h2').text(animal.title);
        $newAnimal.find('img').attr('src', animal.image_url);
        $newAnimal.removeClass('card');
        $newAnimal.attr('class', 'animal-card' );
        $newAnimal.attr('data-type', animal.keyword);
        $('.animals').append($newAnimal);
    });
}

$(startApp);

