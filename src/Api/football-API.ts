import axios from "axios";

const footballApi = axios.create({
    baseURL: "https://data.football-api.com/v3"
})

export const getAllCompetitions = async () => {

    try {
        const response = await footballApi.get("/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b");
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}
export const getStandingById = async (id: string) => {

    try {
        const response = await footballApi.get(`/standings/${id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}

export const getTeamById = async (id: string) => {

    try {
        const response = await footballApi.get(`teams/${id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}
export const getPlayerById = async (id: string) => {

    try {
        const response = await footballApi.get(`/players/${id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}
//AIzaSyBuiSKaH-pu_u5agz2dZktRNzlW5Y74nWI