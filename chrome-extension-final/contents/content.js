const extractInputs = () => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input');

    console.log('Extracted Inputs:');
    inputs.forEach((input) => {
      console.log(`Input Name: ${input.name}, Value: ${input.value}`);
    });
  };
  
  // Run on page load
  extractInputs();