
import config from '../config'
const {LocalStorageTtl,LocalStorageKey} = config

export  function GetFromStorage() { 
	const itemStr = localStorage.getItem(LocalStorageKey)
	if (!itemStr) {
		return null
    }
    const item = JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(LocalStorageKey)
		return null
	}
	return item.value
}

export function setStorage(value) {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + LocalStorageTtl,
	}
    localStorage.setItem(LocalStorageKey, JSON.stringify(item))
    return true
}