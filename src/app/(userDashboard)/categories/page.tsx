import PageHeading from "@/components/common/page-heading";
import CategoryList from '@/components/category/list'
export default function Category() {
    return (
      <div className="w-full px-6">
            <PageHeading title="Expense Categories" buttonText="Add New" link="/categories/create"/>

        <h1>Category Page</h1>
        <CategoryList/>
      </div>
    );
  }
  