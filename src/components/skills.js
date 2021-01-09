import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={1}>
          <div style={{ display: 'flex' }}>{this.props.skill}</div>
        </Cell>
        <Cell col={11}>
          <ProgressBar
            style={{ margin: 'auto', width: '75%', color: '#64ffda' }}
            progress={this.props.progress}
          />
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
