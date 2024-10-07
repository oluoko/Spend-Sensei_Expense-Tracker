import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="inc-exp-container rounded-lg h-[55%] text-2xl md:text-3xl">
      <div>
        <h4>Income</h4>
        <p className="money plus text-2xl md:text-3xl py-4">
          Ksh {addCommas(Number(income?.toFixed(2)))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus text-2xl md:text-3xl py-4">
          Ksh {addCommas(Number(expense?.toFixed(2)))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
