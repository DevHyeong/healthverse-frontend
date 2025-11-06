export function setCookie(name: string, value: string, days?: number) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

export function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        if (cookie.startsWith(nameEQ)) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

export function deleteCookie(name: string) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
}