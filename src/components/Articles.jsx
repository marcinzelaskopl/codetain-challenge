import React, { Component } from 'react';
import '../App.scss';

class Articles extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-4 article'}>
                        <p>This is Chewbacca. He's first-mate on a ship that might suit our needs. I don't like the look of this. Han Solo. I'm captain of the Millennium Falcon. Chewie here tells me you're looking for passage to the Alderaan system. Yes, indeed. If it's a fast ship. Fast ship? You've never heard of the Millennium Falcon? Should I have? It's the ship that made the Kessel run in less than twelve parsecs! I've outrun Imperial starships, not the local bulk-cruisers, mind you.</p>
                    </div>
                    <div className={'col-4 article'}>
                        <p>Echo Three to Echo Seven. Han, old buddy, do you read me? Loud and clear, kid. What's up? Well, I finished my circle. I don't pick up any life readings. There isn't enough life on this ice cube to fill a space cruiser. The sensors are placed. I'm going back. Right. I'll see you shortly. There's a meteorite that hit the ground near here. I want to check it out. It won't take long. Hey, steady girl. What's the matter? You smell something?</p>
                    </div>
                    <div className={'col-4 article'}>
                        <p>I saw them! I saw them! Saw what? Star Destroyers, two of them, coming right at us. Sir, sir! Might I suggest... hut him up or shut him down! Check the deflector shield! Oh, great. Well, we can still outmaneuver them. Prepare to make the jump to light-speed. But, sir! They're getting closer! Oh yeah? Watch this. Watch what? I think we're in trouble. If I may say so, sir, I noticed earlier the hyperdrive motivator has been damaged. It's impossible to go to light-speed! We're in trouble!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles