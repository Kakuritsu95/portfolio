import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function useLocalStorage(
    key: string,
): [string, Dispatch<SetStateAction<string>>] {
    const [storageItem, setStorageITem] = useState<string>(() => {
        const theme = window.localStorage.getItem(key)
        if (!theme) return "light"
        return theme
    })
    useEffect(() => {
        if (storageItem) {
            window.localStorage.setItem(key, storageItem)
        }
    }, [storageItem])
    return [storageItem, setStorageITem]
}
