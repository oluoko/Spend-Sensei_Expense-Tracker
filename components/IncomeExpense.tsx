import exp from "constants";

const InomeExpense = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">Ksh 700</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minux">Ksh 200</p>
      </div>
    </div>
  );
};

export default InomeExpense;
