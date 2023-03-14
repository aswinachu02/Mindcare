const actions = {
  setLoading:
    (loading) =>
    ({ setState }) => {
      setState({ loading });
    },
};

export default actions;
