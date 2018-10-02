var item = {
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o młodym czarodzieju.',
		image: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5XQS/image?locale=en-nz&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
	}

var Movie = React.createClass({
	
	propTypes: {
    	movie: React.PropTypes.object.isRequired,

  	},

	render: function(){
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.movie.title),
				React.createElement('p', {}, this.props.movie.desc),
				React.createElement('img', {src: this.props.movie.image})
			)
		)
	},
});

var element = React.createElement(Movie, {movie: item});

ReactDOM.render(element, document.getElementById('app'));