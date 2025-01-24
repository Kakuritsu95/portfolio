import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function useLocalStorage(
    key: string,
): [string, Dispatch<SetStateAction<string>>] {
    const [storageItem, setStorageITem] = useState<string>(() => {
        const item = window.localStorage.getItem(key)
        if (!item) return ""
        return item
    })
    useEffect(() => {
        if (storageItem) {
            window.localStorage.setItem(key, storageItem)
        }
    }, [storageItem])
    return [storageItem, setStorageITem]
}
