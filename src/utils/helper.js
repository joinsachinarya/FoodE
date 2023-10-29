export const fetchDataByUrl = async (url) => {
    const readableStream = await fetch(url);
    const jsonData = await readableStream.json();
    return jsonData;
}