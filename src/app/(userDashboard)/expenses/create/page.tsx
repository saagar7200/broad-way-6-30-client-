import Create from "@/components/expense/create-expense"
import PageHeading from "@/components/common/page-heading"




const Page = () =>{
    return(
        <main className="w-full">
            <PageHeading title="Add New Expense" buttonText="Back to List" link="/expenses/"/>
            <div>
                <Create/>
            </div>
        </main>
    )
}

export default Page