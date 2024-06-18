import PropTypes from 'prop-types';
// material-ui
import Badge from '@mui/material/Badge';

// project imports
import AvatarStatus from './AvatarStatus';
import Avatar from 'components/@extended/Avatar';

export default function UserAvatar({ user }) {
  return (
    <Badge
      overlap="circular"
      badgeContent={<AvatarStatus status={user.online_status} />}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{
        '& .MuiBox-root': { width: 6, height: 6 },
        padding: 0,
        minWidth: 12,
        '& svg': { bgcolor: 'common.white', borderRadius: '50%' }
      }}
    >
      <Avatar alt={user.name} src={user.avatar && `/assets/images/users/${user.avatar}`} />
    </Badge>
  );
}

UserAvatar.propTypes = { user: PropTypes.any };
