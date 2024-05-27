import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

// THIS IS THE CODE TO CALCULATE THE COMPOUND INTERSEST FOR OUR CURRENT BALANCE.
actor Dapps {
  // THIS IS CURRENT BALANCE OF USER
  stable var currentBalance: Float = 200;
  // currentBalance := 300;
  stable var startTime = Time.now();
  startTime := Time.now();

  // THIS FUNCTION WILL ADD THE AMOUNT TO OUR CURRENT BALANCE.
  public func topUp(amount: Float) {
    currentBalance += amount;
    Debug.print(debug_show(currentBalance));
  };
  // THIS FUNCTION WILL WITHDRAW THE AMOUNT FROM OUR CURRENT BALANCE.
  public func withdrawAmount(amount: Float) {
    if (amount > currentBalance) {
      Debug.print("Sorry, insufficient balance");
    } else {
      currentBalance -= amount;
      Debug.print(debug_show(currentBalance));
    }
  };
  // THIS FUNCTION WILL CHECK OUR CURRENT BALANCE
  public func checkBalance(): async Float {
    return currentBalance;
};
  // THIS FUNCTION WILL CALCULATE THE AMOUNT BY APPLYING INTEREST WITH TIME.
  public func compound() {
    let currentTime = Time.now();
    let timeElapsedS = (currentTime - startTime) / 1_000_000_000;  // Convert nanoseconds to seconds
    currentBalance *= (1.01 ** Float.fromInt(timeElapsedS));  // Compound the balance
    startTime := currentTime;
    Debug.print(debug_show(currentBalance));
  };
}