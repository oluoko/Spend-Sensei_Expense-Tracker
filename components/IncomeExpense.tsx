import exp from "constants";
import getIncomeExpense from "@/app/actions/getIncomeExpense";

const InomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">Ksh {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">Ksh {expense}</p>
      </div>
    </div>
  );
};

export default InomeExpense;
