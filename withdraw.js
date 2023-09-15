function withdraw(num, balance) {
    if (balance >= num) {
        console.log("Withdraw successful!");
        console.log("Remaining balance is ", balance - num);
    }
    else {
        console.log("Failed to withdraw");
        console.log("Insufficient balance");
    }
}
export { withdraw };
