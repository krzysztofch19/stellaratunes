import React from 'react';
import PropTypes from 'prop-types';
import Song from './songComponent';

function Songs(props) {
  const songsList = props.songs.map(song => (
    <Song key={song} song={song} addToFavourites={props.addToFavourites}/>
  ));

  return (
    <div className="container">
      Lista piosenek:
      {songsList}
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string),
  addToFavourites: PropTypes.func
};

export default Songs;

/* map */
/* Homework: Change div to Song component(create one) */
/* In song component add a Button. */
/* On Button click the song should be added to favourites */
/* state of Page component, and shown in Favourites. */
