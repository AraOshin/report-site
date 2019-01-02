import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Ardenwald', label: 'Ardenwald' },
  { value: 'Argay', label: 'Argay' },
  { value: 'Brentwood', label: 'Brentwood' },
  { value: 'Cully', label: 'Cully' },
  { value: 'East_Columbia', label: 'East Columbia' },
  { value: 'Eastmoreland', label: 'Eastmoreland' },
  { value: 'eastsidewithborder', label: 'Central Eastside' },
  { value: 'Foster_Powell', label: 'Foster Powell' },
  { value: 'Hazelwood', label: 'Hazelwood' },
  { value: 'Hollywood', label: 'Hollywood' },
  { value: 'Humboldt', label: 'Humboldt' },
  { value: 'Kenton', label: 'Kenton' },
  { value: 'Lents', label: 'Lents' },
  { value: 'Madison_South', label: 'Madison South' },
  { value: 'Montavilla', label: 'Montavilla' },
  { value: 'Mount-Scott', label: 'Mount Scott' },
  { value: 'Overlook', label: 'Overlook' },
  { value: 'ParkRose', label: 'Park Rose' },
];

class SweepsMapImage extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log('Option selected:', selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>


        <Select
          className="dropdown-selector"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder="Select neighborhood..."
        />

        {selectedOption
          ? (

            <img
              className="responsive-map-img"
              src={`./static/maps/${selectedOption.value}.jpg`}
            />


          )
          : (
            <img
              className="responsive-map-img"
              src="./static/maps/Portland.jpg"
            />
          )
        }
      </div>


    );
  }
}

export default SweepsMapImage;
