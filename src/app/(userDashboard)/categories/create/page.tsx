import Create from "@/components/category/cerate-category"
import PageHeading from "@/components/common/page-heading"




const Page = () =>{
    return(
        <main className="w-full">
            <PageHeading title="Create new Category" buttonText="Back to List" link="/categories/"/>
            <div>
                <Create/>
            </div>
        </main>
    )
}

export default Page