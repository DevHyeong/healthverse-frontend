'use client';

import {useState} from "react";
import {useSearchParams} from "next/navigation";
import {setCookie} from "@/lib/cookieUtils";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function OAuthCallbackKakaoPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const ACCESS_TOKEN = 'access_token';
    const REFRESH_TOKEN = 'refresh_token';

    useEffect(() => {
        try {
            const accessToken = searchParams.get('accessToken');
            const refreshToken = searchParams.get('refreshToken');

            if (!accessToken || !refreshToken) {
                throw new Error('Authentication failed: Missing tokens');
            }

            setCookie(ACCESS_TOKEN, accessToken, 1);
            setCookie(REFRESH_TOKEN, refreshToken, 5);

            router.push('/');
        } catch (error) {
            console.error('OAuth callback error:', error);
            router.push('/login?error=authentication_failed');
        } finally {
            setIsLoading(false);
        }
    }, [searchParams]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <></>;
}