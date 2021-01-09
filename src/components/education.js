import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h3 style={{ marginTop: '0px' }}>{this.props.schoolName}</h3>
          <h4 style={{ marginTop: '0px' }}>{this.props.degree}</h4>
          <a
            style={{ marginTop: '0px', color: '#64ffda' }}
            href={this.props.link}
          >
            Link to course website
          </a>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
