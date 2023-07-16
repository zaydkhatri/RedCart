export const userState = {
    users: null,
    addUserModal: false,
    editUserModal: {
      modal: false,
      uId: "",
      name: "",
      email: "",
      password: "",
      userRole: "",
      phoneNumber: "",
      userImage: "",
      verified: "",
      secretKey: "",
      history: [],
    },
  };
  
  export const userReducer = (state, action) => {
    switch (action.type) {
      /* Get all users */
      case "fetchUsersAndChangeState":
        return {
          ...state,
          users: action.payload,
        };
      /* Create a user */
      case "addUserModal":
        return {
          ...state,
          addUserModal: action.payload,
        };
      /* Edit a user */
      case "editUserModalOpen":
        return {
          ...state,
          editUserModal: {
            modal: true,
            uId: action.user.uId,
            name: action.user.name,
            email: action.user.email,
            password: action.user.password,
            userRole: action.user.userRole,
            phoneNumber: action.user.phoneNumber,
            userImage: action.user.userImage,
            verified: action.user.verified,
            secretKey: action.user.secretKey,
            history: action.user.history,
          },
        };
      case "editUserModalClose":
        return {
          ...state,
          editUserModal: {
            modal: false,
            uId: "",
            name: "",
            email: "",
            password: "",
            userRole: "",
            phoneNumber: "",
            userImage: "",
            verified: "",
            secretKey: "",
            history: [],
          },
        };
      default:
        return state;
    }
  };
  