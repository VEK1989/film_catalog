const SET_COVER = 'SET_COVER'
const SET_PROPERTIES = 'SET_PROPERTIES'

let initialState = {
	cover: true,
	properties: {
		release_date: 2020,
		runtime: 95,
		vote_average: 2.2,
		genres: [
			{
				id: 16,
				name: "Animation"
			},
			{
				id: 35,
				name: "Comedy"
			},
			{
				id: 10751,
				name: "Family"
			},
			{
				id: 14,
				name: "Fantasy"
			}
		]
	}
}

const filmReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_COVER:
			return {
				...state, cover: action.cover
			}

		case SET_PROPERTIES:
			return {
				...state,
				properties: action.properties,
				genres: action.genres
			}

		default:
			return state
	}
}

export const setCover = (cover) => ({ type: SET_COVER, cover })
export const setProperties = (properties) => ({ type: SET_PROPERTIES, properties })

export default filmReduser;