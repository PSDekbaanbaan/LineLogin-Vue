export const newUser = () => {
  return {
    UserId: "",
    DisplayName: "",
    DisplayImage: "",
  };
};
const state = () => ({
  user: newUser(),
});

export default state;
