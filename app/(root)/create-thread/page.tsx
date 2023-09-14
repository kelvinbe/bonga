import PostThread from "@/components/forms/PostThreads";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";


async function Page() {
    const user  = await currentUser()

    if(!user) return null;

    const userInfo = await fetchUser(user.id)

    if(!userInfo.onboarded)  redirect('/onboarding')

    
    const bbb = JSON.parse(JSON.stringify(userInfo._id))

    return (
    <>
    <h1 className="head-text">Bonga Page</h1>

    <PostThread userId={bbb} />
    </>
    )

}

export default Page;