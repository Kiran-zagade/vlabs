function calculateSimpleInterest() {
    const principal = parseFloat(prompt("Enter the principal amount: "));
    const rate = parseFloat(prompt("Enter the interest rate (in %): "));
    const time = parseFloat(prompt("Enter the time (in years): "));
  
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }
  
    const simpleInterest = (principal * rate * time) / 100;
    const totalAmount = principal + simpleInterest;
  
    console.log(`Simple Interest: ₹${simpleInterest.toFixed(2)}`);
    console.log(`Total Amount: ₹${totalAmount.toFixed(2)}`);
  }
  
  calculateSimpleInterest();