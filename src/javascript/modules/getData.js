const getBeaches = async () => {
  let response = await fetch("res/data/beaches.json");
  let data = await response.json();

  return data;
};

const getFestivals = async () => {
  let response = await fetch("res/data/festivals.json");
  let data = await response.json();

  return data;
};

const getFeedback = async () => {
  let response = await fetch("res/data/feedback.json");
  let data = await response.json();

  return data;
};

export { getBeaches, getFestivals, getFeedback };
