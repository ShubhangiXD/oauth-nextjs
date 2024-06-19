import {CardDescription, CardHeader, CardTitle, Card, CardContent} from "../../components/ui/card";
import React from "react";
import { Mail } from "lucide-react"
import {Label} from "../../components/ui/label";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import SignInWithSpotify from "../components/SignInWithSpotify"
import {getServerSession} from "next-auth";
import {authOptions} from "../utils/auth";
import {redirect} from "next/navigation";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions);
    if (session){
        return redirect('/');
    }
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Please Sign In</CardTitle>
                    <CardDescription>Log in to access the page and start listening</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-2">
                            <Label>Email</Label>
                            <Input name="email" type="email" placeholder="name@example.com" />
                        </div>
                        <Button className="mt-3">
                            <Mail className="mr-2 h-4 w-4" /> Login with Email
                        </Button>

                        <div className="flex flex-col items-center justify-center my-4"><h1>or</h1></div>

                        <SignInWithSpotify/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};