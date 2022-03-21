import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push('/')
        }, 4500)
    }, [])
    return (
        <div className="not-found">
            <h1>Sorry vistor!</h1>
            <h2>This page cannot be found.</h2>
            <p>You are now being redirected back to the homepage..</p>
            <p>If you aren't redirected, please click the following link <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;