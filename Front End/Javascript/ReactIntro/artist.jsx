class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousState: {},
            artist: {},
            nextState: {}
        }
    }

    async getArtist(artistName) {
        var fetchData = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+
        artistName + 
         "&api_key=d3e7cbd8223a021b7efdce3f7c547977&format=json");
        var result = await fetchData.json();
        result.artist.image = result.artist.image[2]["#text"];
        result.artist.similar = result.artist.similar.artist;
        this.setState(state => ({
            previousState: state,
            artist: result.artist
        }));
        console.log("fetch", this.state); 
    }

    componentDidMount() {
        this.getArtist("Ceca");
    }

    changeArtist(artistName) {
        this.getArtist(artistName);
    }

    previous() {
        this.setState((oldState) => ({
            previousState: oldState.previousState.previousState,
            artist: oldState.previousState.artist,
            nextState: oldState
        }));
    }

    next() {
        this.setState((oldState) => ({
            previousState: oldState,
            artist: oldState.nextState.artist,
            nextState: oldState.nextState.nextState ? oldState.nextState.nextState : oldState.nextState
        }));
    }

    render() {
        if (this.state.artist.bio) {
            const similarArtists = this.state.artist.similar.map((artist) => {
                return <li><button onClick={(e) => this.changeArtist(artist.name)}>{artist.name}</button></li>;
            });
            return(
                <div> 
                    <h2>{this.state.artist.name}</h2>
                    <img src={this.state.artist.image} />
                    <ul>{similarArtists}</ul>
                    <p className="bio-content">{this.state.artist.bio.content}</p>
                    <button onClick={(e) => this.previous()}>PREVIOUS</button>
                    <button onClick={(e) => this.next()}>NEXT</button>
                </div>
            )
        } else {
            return(
                <div>
                    <div>Hello, React worksssss!</div>
                </div>)
        }
    }
}

ReactDOM.render(
    <Artist />,
    document.getElementById("main-container")
);
