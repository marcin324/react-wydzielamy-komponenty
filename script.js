var movies = [
	
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o młodym czarodzieju.',
		image: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5XQS/image?locale=en-nz&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
	},

	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny.',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51wE754kPiL._SY445_.jpg'
	},

	{
		id: 3,
		title: 'Kapitan Phillips',
		desc: 'Film opowiadający historię porwania statku.',
		image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtBp2U_GivKqB_d3jNV6YaHWk3-takKR_tljlxgVb0P3wBm5Ic'
	},

	{
		id: 4,
		title: 'Iniemamocni',
		desc: 'Film o przygodach rodziny superbohaterów.',
		image: 'https://images-na.ssl-images-amazon.com/images/I/41xmzNbNOqL._SY300_.jpg'
	},

	{
		id: 5,
		title: 'Titanic',
		desc: 'Film o słynnej katastrofie statku pasażerskiego.',
		image: 'https://movieposters2.com/images/728632-b.jpg'
	},

	{
		id: 6,
		title: 'Hotel Transylwania',
		desc: 'Zabawny film o życiu wampirów i innych "potwornych" postaci.',
		image: 'https://1.fwcdn.pl/po/30/42/363042/7490863.6.jpg'
	}
];

/* Główny komponent */
var Main = React.createClass ({

	render: function(){
		return (
			React.createElement('div', {className: 'movieList'},
				React.createElement('h2', {className: 'header'}, 'Lista filmów'),
				React.createElement(MovieList, {items: movies}, {})
			)
		)
	},
});


/* Lista ze wszystkimi filmami (wszystkimi elementami klasy Movie), lista to instancja klasy MovieList */
var MovieList = React.createClass({

	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function(){
		var movies = this.props.items.map(function(movie){ // Metoda .map()
			return React.createElement(Movie, {item: movie, key: movie.id })
		});

		return (
			React.createElement('ul', {}, movies)
		);
	}
});


/* Pojedynczy element klasy Movie (informacje o pojedycznym filmie - tytuł, opis, plakat) */
var Movie = React.createClass({
	
	propTypes: {
    	item: React.PropTypes.object.isRequired,
	},

  	render: function(){
		return React.createElement('li', {},
			React.createElement('h2', {}, this.props.item.title),
			React.createElement('p', {}, this.props.item.desc),
			React.createElement('img', {src: this.props.item.image})
		);
	}
});


/* Przypięcie głównego komponentu 'Main' do elementu o id='app' */
var main = React.createElement(Main);
ReactDOM.render(main, document.getElementById('app'));