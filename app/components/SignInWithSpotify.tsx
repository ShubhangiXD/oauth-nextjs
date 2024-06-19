"use client";

import {FaSpotify} from "react-icons/fa";
import {Button} from "../../components/ui/button";
import {signIn} from "next-auth/react"
import React from "react";

export default function SignInWithSpotify(){
    return(
        <Button onClick={()=>signIn('spotify',{
            callbackUrl:`${window.location.origin}`,
            })} variant="outline">
            <FaSpotify className="mr-2 h-4 w-4"/>Login with Spotify
        </Button>
    )
}