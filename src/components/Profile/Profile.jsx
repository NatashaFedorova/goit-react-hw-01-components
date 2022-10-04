import PropTypes from 'prop-types';

import { SectionProfile } from './Profile.styled';
import { Container } from 'components/Container/Container.styled';
import { CardUser } from 'components/CardUser/CardUser';

export const Profile = ({ user }) => {
  return (
    <SectionProfile>
      <Container>
        <CardUser user={user} />
      </Container>
    </SectionProfile>
  );
};

Profile.propType = {
  user: PropTypes.object.isRequired,
};
