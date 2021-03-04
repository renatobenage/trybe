import React from 'react';
import PropTypes from 'prop-types';

class VideoGame extends React.Component {
  render() {
    const { title, developer, sales } = this.props.game
    return <p><strong>{title}</strong>, feito pela <em>{developer}</em>, {sales} cópias vendidas </p>
  }
}

VideoGame.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number
  })
}

VideoGame.defaultProps = {
  game: {},
}

export default VideoGame;