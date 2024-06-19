import {getServerSession} from "next-auth";
import {authOptions} from "./utils/auth";
import LogoutButton from "./components/LogOut";
import {Button} from "../components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Hello from public route</h1>
      {session? (
          <div>
              <h1>Logged in</h1>
              <LogoutButton/>
          </div>
      ) : (
          <div>
              <h1>Logged out</h1>
              <Button asChild>
                  <Link href="/auth">Log In</Link>
              </Button>
          </div>
      )}
    </div>
  );
}
