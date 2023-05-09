const validateBreed = (dogData, errors) => {
  if (!dogData.breed || dogData.breed === "") {
    errors.breed = "You must enter a breed name";
  } else {
    if (!/^([^0-9]*)$/g.test(dogData.breed)) {
      errors.breed = "Breed name can't have numbers";
    } else if (!/^.{2,40}$/g.test(dogData.breed)) {
      errors.breed = "Breed name must be 2 - 40 character";
    } else {
      delete errors.breed;
    }
  }
};

const validateImage = (dogData, errors) => {
  if (dogData.image) {
    if (!/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|gif))/i.test(dogData.image)) {
      errors.image = "You must enter a valid image link(jpg, jpeg, png, gif)";
    } else {
      delete errors.image;
    }
  }
};

const validateLS = (dogData, errors) => {
  if (!dogData.life_span) {
    errors.life_span = "You must enter a life span";
  } else {
    const splitedLifeSpan = dogData.life_span.split(" - ");
    if (!/^[1-9]\d{0,2}(?: - [1-9]\d{0,2}){0,1}$/g.test(dogData.life_span)) {
      errors.life_span = `Life span format must look like this "## - ##" or "##"`;
    } else if (+splitedLifeSpan[0] > 20 || +splitedLifeSpan[1] > 20) {
      errors.life_span = `Life span can't be higher than 20`;
    } else if (+splitedLifeSpan[0] >= +splitedLifeSpan[1]) {
      errors.life_span = `Life span must go from lower to higher`;
    } else {
      delete errors.life_span;
    }
  }
};

const validateHWT = (dogData, errors) => {
  if (!dogData.temperament.length) {
    errors.temperament =
      "You must select at least one option from the temperament list";
  } else {
    delete errors.temperament;
  }

  if (dogData.height) {
    const splitedHeight = dogData.height.split(" - ");
    if (
      (splitedHeight[0] && !/^[0-9]*$/g.test(splitedHeight[0])) ||
      (splitedHeight[1] && !/^[0-9]*$/g.test(splitedHeight[1]))
    ) {
      console.log("si");
      errors.height = `Height must be a number`;
    } else if (+splitedHeight[0] < 10 || +splitedHeight[1] < 10) {
      errors.height = `Height can't be less than 10`;
    } else if (+splitedHeight[0] > 75 || +splitedHeight[1] > 75) {
      errors.height = `Height can't be higher than 75`;
    } else if (+splitedHeight[0] >= +splitedHeight[1]) {
      errors.height = `"Min height" should be lower than the "Max height"`;
    } else {
      delete errors.height;
    }
  }

  if (dogData.weight) {
    const splitedWeight = dogData.weight.split(" - ");
    if (
      (splitedWeight[0] && !/^[0-9]*$/g.test(+splitedWeight[0])) ||
      (splitedWeight[1] && !/^[0-9]*$/g.test(+splitedWeight[1]))
    ) {
      errors.weight = `Weight must be a number`;
    } else if (+splitedWeight[0] < 1 || +splitedWeight[1] < 1) {
      errors.weight = `Weight can't be less than 1`;
    } else if (+splitedWeight[0] > 85 || +splitedWeight[1] > 85) {
      errors.weight = `Weight can't be higher than 85`;
    } else if (+splitedWeight[0] >= +splitedWeight[1]) {
      errors.weight = `"Min weight" should be lower than the "Max weight"`;
    } else {
      delete errors.weight;
    }
  }
};

export { validateBreed, validateImage, validateLS, validateHWT };
