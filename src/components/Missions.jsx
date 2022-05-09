import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => (
          <div className="missions" key={ mission.name }>
            <MissionCard // Passado uma prop por linha por causa do Lint.
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Missions;
