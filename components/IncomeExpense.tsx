import exp from "constants";
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas, twoDP } from "@/lib/utils";

const InomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">Ksh {addCommas(twoDP(income))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">Ksh {addCommas(twoDP(expense))}</p>
      </div>
    </div>
  );
};

export default InomeExpense;
