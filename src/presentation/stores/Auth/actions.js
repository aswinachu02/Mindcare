const actions = {
  setIsAuthenticating:
    (isAuthenticating) =>
    ({ setState }) => {
      setState({ isAuthenticating });
    },

  setUsername:
    (username) =>
    ({ setState }) => {
      setState({ username });
    },
};

export default actions;
