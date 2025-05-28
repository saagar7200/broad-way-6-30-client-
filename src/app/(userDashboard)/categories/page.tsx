import PageHeading from "@/components/common/page-heading";

export default function Category() {
    return (
      <div className="w-full px-6">
            <PageHeading title="Expense Categories" buttonText="Add New" link="/categories/create"/>

        <h1>Category Page</h1>
      </div>
    );
  }
  