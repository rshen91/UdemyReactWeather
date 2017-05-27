var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <h4>It's {temp} in {location}</h4>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;

  return (
    <div>
      <h4>It's {temp} in {location}</h4>
    </div>
  );
};

module.exports = WeatherMessage;
