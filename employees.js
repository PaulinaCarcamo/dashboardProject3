const url = './apiData.json';

const getEmployees = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}

export { getEmployees }
