import PageHeading from "@/components/common/page-heading";
import ExpenseList from '@/components/expense/list'
export default function Category() {
    return (
      <div className="w-full px-6">
            <PageHeading title="All Expenses" buttonText="Add New" link="/expenses/create"/>

        <ExpenseList/>
      </div>
    );
  }
  