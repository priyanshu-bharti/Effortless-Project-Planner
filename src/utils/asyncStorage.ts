import localForage from "localforage";

export async function getItemAsync(key: string, setValue: any) {
    const data: string = (await localForage.getItem(key)) as string;

    setValue(data);
}
