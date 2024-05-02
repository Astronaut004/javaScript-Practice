const form = document.querySelector('form')

//if we select height or weight here it will give us empty

form.addEventListener('submit', (e) => {
  //as we press submit it sends data to server so we wants it to prevent it so we have used preventDefault()
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if(height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid height ${weight}`;
  }
  else {
    const bmi = ((weight / ((height*height)/10000)).toFixed(2));
    if(bmi < 18.6) {
      result.innerHTML = ` you are under weight with bmi of <span>${bmi}</span>`;
    }
    else if(bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = ` you are in normal range with bmi <span>${bmi}</span>`;
    }
    else {
      result.innerHTML = ` you are overweight with bmi of <span>${bmi}</span>`;
    }
    // result.innerHTML = `<span>${bmi}</span>`;
  }
});