import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'neighborhoodOne', label: 'Neighborhood One', },
  { value: 'neighborhoodTwo', label: 'Neighborhood Two' },
  { value: 'neighborhoodThree', label: 'Neighborhood Three' },
  { value: 'neighborhoodFour', label: 'Neighborhood Four' },
  { value: 'neighborhoodFive', label: 'Neighborhood Five' },
  { value: 'neighborhoodSix', label: 'Neighborhood Six' },
  { value: 'neighborhoodSeven', label: 'Neighborhood Seven' },
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
          ? <img className="responsive-img" src={`./static/${selectedOption.value}.jpeg`} />
          : <img className="responsive-img" src="./static/neighborhoodTwo.jpeg" />
        }
      </div>

    );
  }
}

export default SweepsMapImage;
