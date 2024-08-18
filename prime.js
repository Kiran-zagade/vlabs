function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function primeNumberCalculator() {
    const num = parseInt(prompt("Enter a number: "));
    if (isNaN(num)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  
  primeNumberCalculator();