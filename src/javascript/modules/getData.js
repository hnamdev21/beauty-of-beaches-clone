const getBeaches = async () => {
  let response = await fetch("res/data/beaches.json");
  let beaches = await response.json();

  return beaches;
};

const getFestivals = async () => {
  let response = await fetch("res/data/festivals.json");
  let festivals = await response.json();

  return festivals;
};

const getFeedback = async () => {
  let response = await fetch("res/data/feedback.json");
  let feedback = await response.json();

  return feedback;
};

export { getBeaches, getFestivals, getFeedback };
