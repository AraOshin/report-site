import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'EastSide', label: 'Central Eastside' },
  { value: 'Portland', label: 'Portland Wide' },
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
              src={`./static/${selectedOption.value}.png`}
            />
          )
          : (
            <img
              className="responsive-map-img"
              src="./static/Portland.png"
            />
          )
        }
      </div>

    );
  }
}

export default SweepsMapImage;
