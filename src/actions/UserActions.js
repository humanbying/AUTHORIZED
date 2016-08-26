import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  edit: API.edit
};

export default UserActions;
