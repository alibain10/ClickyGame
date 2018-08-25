import React, { Component } from "react";
import cards from "../../bcards.json";

import Card from "../Card";
import "./Game.css";

class Game extends Component {

    state = {
        players: cards,
        matches: 0,
        guesses: 0,
        matchedCharacter: 3
    }

    getPlayer = (id) => {

        // alert(id);
        if(id === this.state.matchedPlayer) {
            // if baseball card is a match update state by one
            // if  match pick a new random card
            let randomId = Math.floor(Math.random() * this.state.players.length) + 1;
            console.log(randomId);
            this.setState({
                matches: this.state.matches +1,
                matchedPlayer: randomId
            });
        } else {
            // if no match update guesses by one
            this.setState({
                guesses: this.state.guesses +1
            });
        }
        
    }

    render() {
        return (
            <div className="container">
              <Scoreboard
                matches={this.state.matches}
                guesses={this.state.guesses}
              />
                <div className="row">
                    {this.state.players.map(player => (
                        <Card
                            key={player.id}
                            id={cplayer.id}
                            name={player.name}
                            image={player.image}
                            getPlayer={this.getPlayer}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;